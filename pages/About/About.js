import "./About.css";
import { cleanPage } from "../../utils/cleanPage";
import { Divider } from "../../components/Divider/Divider";

export const About = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    ${Divider()}
    <section class="about">
            <p class="mePresento">Me presento como un programador full stack junior altamente motivado y apasionado por la creación de soluciones tecnológicas innovadoras, trabajando de manera freelance en distintos proyectos. Me gustaría compartir con ustedes mis habilidades y experiencia en el campo de desarrollo web y destacar cómo puedo contribuir a su equipo.
            Soy Docente de Música, Especialista en Investigación Educativa, Guitarrista, Docente de Lenguaje Musical, por lo tanto cuento con experiencia en trabajo en equipos de distintas edades y diversas realidades. Desde niños hasta ancianos. El lenguaje Musical tiene muchas reglas y normas las cuales nos ayudan a comunicarnos con los instrumentos y desde allí dar un mensaje a través de la Música. 
            Encontré mi segunda pasión en la vida a través de la programación, ya que encuentro muchas similitudes con la manera de abordar los lenguajes y para qué sirven y cómo aplicarlos.
            Con sólidos conocimientos en JavaScript (JS) y TypeScript (TS), junto con los frameworks Angular y React, puedo crear interfaces de usuario dinámicas y atractivas que brinden una excelente experiencia de usuario. Además, mis experiencias en el manejo de bases de datos relacionales(MySQL) y no relacionales(MongoDB) en el desarrollo de APIs con Node.js y Express me permiten construir aplicaciones robustas y escalables.
            También tengo experiencia en el uso de Firebase para el desarrollo de aplicaciones web, lo que me permite implementar características en tiempo real y autenticación segura. Además, estoy familiarizado con el uso de Git para el control de versiones y la colaboración en equipo, lo que me permite trabajar de manera eficiente y mantener un flujo de trabajo ordenado.           
            Como programador full stack junior, también tengo conocimientos en la configuración y administración de hosting y despliegue de aplicaciones web tanto en Netlify como en Vercel como en Firebase Hosting. Esto me permite ofrecer soluciones completas, desde el desarrollo hasta la puesta en marcha de proyectos.
            Estoy emocionado de unirme a un equipo dinámico donde pueda contribuir con mis habilidades y aprender de 
            profesionales experimentados. Me considero una persona en constante crecimiento, siempre dispuesto a 
            enfrentar nuevos desafíos y adquirir nuevas habilidades. Me considero una persona "Solucionador de problemas".

            Mi perfil competencial es:
            Dirección y Liderazgo
            De manera general, suelo tener alta tendencia a aspirar cada vez a metas más altas, con perseverancia y convicción. Se puede decir que soy un profesional con alta tendencia a generar relaciones y a crear un buen clima de trabajo. Me centro en conocer e impulsar el desarrollo del talento individual para transformarlo en alta competencia colectiva, de modo que, liderando a cada uno y a todos en conjunto desde mis fortalezas, logro llevar al equipo a un nivel superior.
            De manera general, suelo ser metódico en mis decisiones y manera de pensar. Las normas y la noción de lo correcto son pilares fundamentales en la manera en la que miro la vida. Normalmente, soy una persona que se siente cómoda en funciones donde existen reglas y parámetros específicos, para saber dónde y cómo moverte.
            Normalmente, me guío por mi sentido de la responsabilidad y moral. Tiendo a ser una persona ordenada y planificada. Siento afinidad con ambientes que estimulan el pensamiento metódico.

            Gracias por leer, saludos.
            </p>

    </section>`;
};
    