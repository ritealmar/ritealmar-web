/// <reference types="vite/client" />

declare module 'particles.js' {
  export interface ParticlesConfig {
    particles?: {
      number?: { value: number; density?: { enable: boolean; value_area: number } };
      color?: { value: string | string[] };
      shape?: { type: string };
      opacity?: { value: number; random: boolean };
      size?: { value: number; random: boolean };
      move?: { enable: boolean; speed: number; direction: string; random: boolean; straight: boolean; out_mode: string };
    };
    interactivity?: {
      detect_on?: string;
      events?: { onhover?: { enable: boolean; mode: string }; onclick?: { enable: boolean; mode: string } };
      modes?: { repulse?: { distance: number }; push?: { particles_nb: number } };
    };
    retina_detect?: boolean;
  }
  const particlesJS: (tag_id: string, params: ParticlesConfig) => void;
  export default particlesJS;
}


