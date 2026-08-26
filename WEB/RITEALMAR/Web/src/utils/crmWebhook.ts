type CRMLeadPayload = {
  nombre?: string;
  empresa?: string;
  email?: string;
  telefono?: string;
  sector?: string;
  servicio?: string;
  urgencia?: string;
  mensaje?: string;
  web?: string;
  ciudad?: string;
  origen?: string;
};
const SAVE_TO_SHEETS_ENDPOINT = '/api/save-to-sheets';

export async function sendLeadToCRM(payload: CRMLeadPayload): Promise<boolean> {
  try {
    const response = await fetch(SAVE_TO_SHEETS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        nombre: payload.nombre || '',
        empresa: payload.empresa || '',
        email: payload.email || '',
        telefono: payload.telefono || '',
        sector: payload.sector || '',
        servicio: payload.servicio || 'Auditoría IA gratuita',
        urgencia: payload.urgencia || 'Media',
        mensaje: payload.mensaje || '',
        web:
          payload.web ||
          (typeof window !== 'undefined' ? window.location.href : ''),
        ciudad: payload.ciudad || '',
        origen: payload.origen || 'Web auditoría IA gratuita'
      })
    });

    if (!response.ok) {
      console.warn('[RITEALMAR CRM] Error HTTP:', response.status);
      return false;
    }

    const result = await response.json();

    if (!result || (typeof result === 'object' && !(result as any).ok && !(result as any).success)) {
      console.warn('[RITEALMAR CRM] Respuesta no exitosa:', result);
      return false;
    }

    return true;
  } catch (error) {
    console.warn('[RITEALMAR CRM] No se pudo enviar el lead al CRM:', error);
    return false;
  }
}