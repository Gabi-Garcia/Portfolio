import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    <section class="home">
    <div class="cajaArriba">
                <h1>Gabi Garcia</h1>
                <div class="cajaFoto">
                    <img src="/perfil.jpg"> 
                </div>
            </div>
            <p class="mePresento">Me presento como un programador full stack junior altamente
            motivado y apasionado por la creación de soluciones tecnológicas
            innovadoras. Me gustaría compartir con ustedes mis habilidades y
            experiencias en el campo del desarrollo web y contribuir a su equipo.
            </p>
            <a href="mailto:gabriel.garcia.development@gmail.com">Contrátame</a>
    </section>`;
};
    