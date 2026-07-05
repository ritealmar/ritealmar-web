import React from 'react';
import SeoLandingLayout from '../components/SeoLandingLayout';
import { 
  disenoWebData, 
  appsEmpresasData, 
  automatizacionesIaData 
} from '../data/seoPagesData1';
import { 
  chatbotsIaData, 
  seoPosicionamientoData, 
  clinicasData 
} from '../data/seoPagesData2';
import { 
  inmobiliariasData, 
  ecommerceData, 
  preciosData 
} from '../data/seoPagesData3';
import {
  disenoWebClinicasDentalesData,
  automatizacionIaClinicasData,
  chatbotIaInmobiliariasData,
  disenoWebInmobiliariasData,
  automatizacionWhatsappData,
  auditoriaIaPymesData
} from '../data/seoPagesData4';

export const DisenoWebPage = () => <SeoLandingLayout data={disenoWebData} />;
export const AppsEmpresasPage = () => <SeoLandingLayout data={appsEmpresasData} />;
export const AutomatizacionesIaPage = () => <SeoLandingLayout data={automatizacionesIaData} />;
export const ChatbotsIaPage = () => <SeoLandingLayout data={chatbotsIaData} />;
export const SeoPosicionamientoPage = () => <SeoLandingLayout data={seoPosicionamientoData} />;
export const ClinicasPage = () => <SeoLandingLayout data={clinicasData} />;
export const InmobiliariasPage = () => <SeoLandingLayout data={inmobiliariasData} />;
export const EcommercePage = () => <SeoLandingLayout data={ecommerceData} />;
export const PreciosPage = () => <SeoLandingLayout data={preciosData} />;

// Nuevos componentes B2B long-tail
export const DisenoWebClinicasDentalesPage = () => <SeoLandingLayout data={disenoWebClinicasDentalesData} />;
export const AutomatizacionIaClinicasPage = () => <SeoLandingLayout data={automatizacionIaClinicasData} />;
export const ChatbotIaInmobiliariasPage = () => <SeoLandingLayout data={chatbotIaInmobiliariasData} />;
export const DisenoWebInmobiliariasPage = () => <SeoLandingLayout data={disenoWebInmobiliariasData} />;
export const AutomatizacionWhatsappPage = () => <SeoLandingLayout data={automatizacionWhatsappData} />;
export const AuditoriaIaPymesPage = () => <SeoLandingLayout data={auditoriaIaPymesData} />;
