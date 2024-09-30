import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
import { Divider } from "../../components/Divider/Divider";
import 'transition-style';

export const Home = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
   
    <section class="home" transition-style="in:circle:hesitate">
    <p class="mePresento">Me presento como un programador full stack junior altamente
    motivado y apasionado por la creación de soluciones tecnológicas
    innovadoras. Me gustaría compartir con ustedes mis habilidades y
    experiencias en el campo del desarrollo web y contribuir a su equipo.
    </p>
     <p class="mePresento">Me presento como un programador full stack junior altamente
    motivado y apasionado por la creación de soluciones tecnológicas
    innovadoras. Me gustaría compartir con ustedes mis habilidades y
    experiencias en el campo del desarrollo web y contribuir a su equipo.
    </p>
     <p class="mePresento">Me presento como un programador full stack junior altamente
    motivado y apasionado por la creación de soluciones tecnológicas
    innovadoras. Me gustaría compartir con ustedes mis habilidades y
    experiencias en el campo del desarrollo web y contribuir a su equipo.
    </p>
     <p class="mePresento">Me presento como un programador full stack junior altamente
    motivado y apasionado por la creación de soluciones tecnológicas
    innovadoras. Me gustaría compartir con ustedes mis habilidades y
    experiencias en el campo del desarrollo web y contribuir a su equipo.
    </p>
    <p>Me presento como un programador full stack junior altamente
    motivado y apasionado por la creación de soluciones tecnológicas
    innovadoras. Me gustaría compartir con ustedes mis habilidades y
    experiencias en el campo del desarrollo web y contribuir a su equipo.
    </p>
      <p>Me presento como un programador full stack junior altamente
    motivado y apasionado por la creación de soluciones tecnológicas
    innovadoras. Me gustaría compartir con ustedes mis habilidades y
    experiencias en el campo del desarrollo web y contribuir a su equipo.
    </p>
    </section>`;
        };
    