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

export const DisenoWebPage = () => <SeoLandingLayout data={disenoWebData} />;
export const AppsEmpresasPage = () => <SeoLandingLayout data={appsEmpresasData} />;
export const AutomatizacionesIaPage = () => <SeoLandingLayout data={automatizacionesIaData} />;
export const ChatbotsIaPage = () => <SeoLandingLayout data={chatbotsIaData} />;
export const SeoPosicionamientoPage = () => <SeoLandingLayout data={seoPosicionamientoData} />;
export const ClinicasPage = () => <SeoLandingLayout data={clinicasData} />;
export const InmobiliariasPage = () => <SeoLandingLayout data={inmobiliariasData} />;
export const EcommercePage = () => <SeoLandingLayout data={ecommerceData} />;
export const PreciosPage = () => <SeoLandingLayout data={preciosData} />;
