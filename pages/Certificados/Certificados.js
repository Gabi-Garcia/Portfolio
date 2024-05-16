import "./Certificados.css";
import { cleanPage } from "../../utils/cleanPage";
import { certificados } from "../../data/certificados";
import { CertificadosCard } from "../../components/CertificadosCard/CertificadosCard";
import { Divider } from "../../components/Divider/Divider";

export const Certificados = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    ${Divider()}
    <section class="certificados">
    <div class="certificados-container"></div>
    </section>`;
    const container = document.querySelector(".certificados-container");
    for (const certificado of certificados) {
    const figure = document.createElement("figure");
    figure.innerHTML = CertificadosCard(certificado);
    container.appendChild(figure);
    }
    }