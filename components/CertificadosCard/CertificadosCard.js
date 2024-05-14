import "./CertificadosCard.css";

export const CertificadosCard = (certificado) => `
<div class="certificado-card">

   <div class="header">
    <h4>${certificado.title}</h4>
   </div>

   <div class="boximgCertificados">
     <img src=${certificado.image} alt=${certificado.title}/>
   </div>  
 
</div>   
`;