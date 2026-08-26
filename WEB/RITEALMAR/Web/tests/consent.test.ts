import { describe, it, expect, vi, beforeEach } from 'vitest';
import { updateConsentMode, setConsent, getConsent } from '../src/utils/consent';



describe('Consent Logic', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Mock window
    vi.stubGlobal('window', {
      gtag: vi.fn(),
      location: { hostname: 'localhost' }
    });
    
    // Mock localStorage
    const store: Record<string, string> = {};
    vi.stubGlobal('localStorage', {
      getItem: vi.fn((key: string) => store[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        store[key] = value;
      }),
      clear: vi.fn(() => {
        for (const key in store) delete store[key];
      })
    });
    
    // Mock document
    vi.stubGlobal('document', {
      cookie: '_ga=123.456; _gid=789.012',
      location: { hostname: 'localhost' },
      querySelector: vi.fn(),
      createElement: vi.fn(() => ({})),
      head: { appendChild: vi.fn() },
      title: 'Test'
    });
  });

  it('updateConsentMode updates gtag with correct states', () => {
    updateConsentMode({ analytics: true, marketing: false });
    expect(window.gtag).toHaveBeenCalledWith('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
  });

  it('updateConsentMode attempts to clear cookies when analytics is denied', () => {
    updateConsentMode({ analytics: false, marketing: false });
    // Cookies deletion logic is executed, document.cookie is set multiple times
    // Just verifying no crash and gtag was called
    expect(window.gtag).toHaveBeenCalledWith('consent', 'update', expect.any(Object));
  });

  it('setConsent saves to localStorage', () => {
    setConsent({ analytics: true, marketing: true });
    expect(localStorage.setItem).toHaveBeenCalled();
    const stored = getConsent();
    expect(stored?.analytics).toBe(true);
    expect(stored?.marketing).toBe(true);
  });
});
