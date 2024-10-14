import "./CertificadosCard.css";

export const CertificadosCard = (certificado) => `
<div class="certificado-card">

   <div class="CertificadosHeader">
    <p>${certificado.title}</p>
   </div>

   <div class="boximgCertificados">
     <img src=${certificado.image} alt=${certificado.title}/>
</div>   
`;