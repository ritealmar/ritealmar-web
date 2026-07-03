import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const p = path.join(__dirname, 'dist_clean', 'assets', 'index-YVDsNPvx.js');
let js = fs.readFileSync(p, 'utf8');

const idx = js.indexOf('wh=[');
if (idx !== -1) {
  let endIdx = idx + 3; 
  let bracketCount = 1;
  endIdx++;
  
  while (endIdx < js.length && bracketCount > 0) {
    if (js[endIdx] === '[') bracketCount++;
    else if (js[endIdx] === ']') bracketCount--;
    endIdx++;
  }
  
  const originalArray = js.substring(idx, endIdx);
  
  const replacement = `wh=[
    {
      emoji:"📦",
      sector:"Aplicación Empresarial",
      title:c.jsxs("div",{children:[
        c.jsx("img",{src:"/assets/almar.jpg",style:{width:"100%",height:180,objectFit:"cover",borderRadius:8,marginBottom:15,border:"1px solid rgba(255,255,255,0.1)"}}),
        c.jsx("a",{href:"https://almar-fsm.llargo34.workers.dev",target:"_blank",style:{textDecoration:"none",borderBottom:"2px solid #3B82F6",paddingBottom:2},children:"ALMAR FSM (Abrir App ↗)"})
      ]}),
      before:["Gestión manual y desordenada","Falta de control de stock","Desorden de técnicos"],
      after:["Control logístico 360º","Gestión de inventario en tiempo real","Asignación dinámica"],
      m1:"Optimizado",
      m2:"Cloud",
      color:"#3B82F6"
    },
    
    {
      emoji:"📞",
      sector:"Callcenter IA",
      title:c.jsxs("div",{children:[
        c.jsx("img",{src:"/assets/aurenta.jpg",style:{width:"100%",height:180,objectFit:"cover",borderRadius:8,marginBottom:15,border:"1px solid rgba(255,255,255,0.1)"}}),
        c.jsx("a",{href:"https://aurenta-app.pages.dev/",target:"_blank",style:{textDecoration:"none",borderBottom:"2px solid #8B5CF6",paddingBottom:2},children:"Aurenta App (Abrir App ↗)"})
      ]}),
      before:["Llamadas sin control ni registro","Respuestas lentas a clientes","Falta de datos de atención"],
      after:["Centralita IA con transcripción","Respuestas sugeridas en vivo","Métricas detalladas"],
      m1:"Vocal",
      m2:"IA",
      color:"#8B5CF6"
    },
    
    {
      emoji:"🤖",
      sector:"Chatbox IA",
      title:c.jsxs("div",{children:[
        c.jsx("img",{src:"/assets/ritecore.jpg",style:{width:"100%",height:180,objectFit:"cover",borderRadius:8,marginBottom:15,border:"1px solid rgba(255,255,255,0.1)"}}),
        c.jsx("a",{href:"https://altri-pro.pages.dev/",target:"_blank",style:{textDecoration:"none",borderBottom:"2px solid #10B981",paddingBottom:2},children:"RITECORE (Abrir App ↗)"})
      ]}),
      before:["Soporte lento o fuera de hora","Pérdida de Leads comerciales","Usuarios sin guiar en web"],
      after:["Soporte técnico 24/7","Cualificación autónoma de Leads","Ventas guiadas 100% IA"],
      m1:"NLP",
      m2:"Autónomo",
      color:"#10B981"
    },
    
    {
      emoji:"📊",
      sector:"Dashboard",
      title:c.jsxs("div",{children:[
        c.jsx("div",{style:{width:"100%",height:180,background:"linear-gradient(to bottom right, #111827, #F59E0B20)",borderRadius:8,marginBottom:15,border:"1px solid rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",color:"#F59E0B",fontWeight:"bold",fontSize:20},children:"DASHBOARD 360"}),
        c.jsx("a",{href:"https://53b7d556.web-altri.pages.dev/",target:"_blank",style:{textDecoration:"none",borderBottom:"2px solid #F59E0B",paddingBottom:2},children:"Panel Central (Abrir App ↗)"})
      ]}),
      before:["Datos dispersos en excels","Gestión compleja de agentes","Visibilidad operativa nula"],
      after:["Control centralizado total","Métricas globales en vivo","Integración de toda la suite"],
      m1:"Core",
      m2:"Analítica",
      color:"#F59E0B"
    },
    
    {
      emoji:"✂️",
      sector:"Plataforma SaaS",
      title:c.jsxs("div",{children:[
        c.jsx("img",{src:"/assets/stylio.png",style:{width:"100%",height:180,objectFit:"cover",borderRadius:8,marginBottom:15,border:"1px solid rgba(255,255,255,0.1)"}}),
        c.jsx("a",{href:"https://stylio.space-z.ai",target:"_blank",style:{textDecoration:"none",borderBottom:"2px solid #EAB308",paddingBottom:2},children:"STYLIO (Abrir App ↗)"})
      ]}),
      before:["Agenda en papel o WhatsApp","Citas solapadas u olvidadas","Gestión manual de pagos"],
      after:["Reservas 100% automatizadas","Recordatorios y pagos online","Inventario y marketing IA"],
      m1:"SaaS",
      m2:"All-in-one",
      color:"#EAB308"
    }
  ]`;
  
  // Force replacement
  js = js.substring(0, idx) + replacement + js.substring(endIdx);
  fs.writeFileSync(p, js);
  console.log("¡CÓDIGO INYECTADO CON IMÁGENES INCLUIDAS!");
} else {
  console.log("NO SE ENCONTRÓ wh=[");
}
