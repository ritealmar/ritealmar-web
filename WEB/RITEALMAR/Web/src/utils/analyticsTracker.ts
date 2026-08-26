/**
 * RITEALMAR ANALYTICS & ATRIBUCIÓN COMMERCIAL (v2.0)
 * Captura de intenciones de compra B2B en el Frontend para el motor SMO-R.
 */

export const VALID_SECTORS = ['clinicas', 'inmobiliarias', 'ecommerce', 'constructoras'] as const;
export type SectorType = typeof VALID_SECTORS[number];

export function isValidSector(sector: string): sector is SectorType {
  return VALID_SECTORS.includes(sector as SectorType);
}

interface LeadBehaviorContext {
  sectorConsultado: string;
  horasSeleccionadas: number;
  empleadosSeleccionados: number;
  planClicado: string;
  interacciones: string[];
}

const STORAGE_KEY = 'ritealmar_behavior_v2';

export const AnalyticsTracker = {
  // Inicializa o recupera el contexto del usuario en la sesión
  getContext(): LeadBehaviorContext {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) return JSON.parse(data);
    
    return {
      sectorConsultado: 'Home / General',
      horasSeleccionadas: 2,
      empleadosSeleccionados: 5,
      planClicado: 'Ninguno',
      interacciones: []
    };
  },

  // Guarda el contexto actualizado
  saveContext(context: LeadBehaviorContext) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(context));
  },

  // Trackea cuando un usuario interactúa con los sliders del simulador de ROI
  trackRoiSliders(empleados: number, horas: number) {
    const ctx = this.getContext();
    ctx.empleadosSeleccionados = empleados;
    ctx.horasSeleccionadas = horas;
    if (!ctx.interacciones.includes('Movió Sliders ROI')) {
      ctx.interacciones.push('Movió Sliders ROI');
    }
    this.saveContext(ctx);
  },

  // Trackea qué vertical o sector específico está leyendo el cliente
  trackSectorView(sector: SectorType) {
    const ctx = this.getContext();
    ctx.sectorConsultado = sector;
    if (!ctx.interacciones.includes(`Visitó Landing Vertical: ${sector}`)) {
      ctx.interacciones.push(`Visitó Landing Vertical: ${sector}`);
    }
    this.saveContext(ctx);
  },

  // Trackea el plan por el que ha mostrado interés en la página de precios
  trackPlanSelection(planName: string) {
    const ctx = this.getContext();
    ctx.planClicado = planName;
    ctx.interacciones.push(`Hizo clic en CTA Plan: ${planName}`);
    this.saveContext(ctx);
  },

  // Prepara los datos limpios para inyectarlos en el envío final al Worker (worker.ts)
  getPayloadForWorker() {
    const ctx = this.getContext();
    return {
      comportamiento_frontend: {
        sector_interes_principal: ctx.sectorConsultado,
        plan_tarifa_clicado: ctx.planClicado,
        datos_simulador: {
          empleados: ctx.empleadosSeleccionados,
          horas_perdidas_diarias: ctx.horasSeleccionadas
        },
        historial_navegacion: ctx.interacciones.join(' -> ')
      }
    };
  }
};
