import "./About.css";
import { cleanPage } from "../../utils/cleanPage";


export const About = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    <section class="about">
            <div class="cajaTextos">
                <div class="hola">
                    <div class="holaCabecera">
                        <h2>Hola soy Gabi Garcia / Músico / Docente de Música / Especialista en Investigación Educativa / Intérprete / Creador Musical
                            <p class="convertido">convertido en</p> <p class="programador">Programador Fullstack</p> apasionado por 
                             el aprendizaje contínuo y la creación de soluciones integrales.
                        </h2>
                    </div>
                   
                    <p>
                        Argentino viviendo en España desde Septiembre del 2021 con base en Barcelona. En 2020 comencé mi camino en el mundo de la programación, 
                        primero en forma autodidacta, luego asistiendo a distintos
                        cursos, y ya a finales del 2021 comencé a colaborar en proyectos de otros programadores, contribuyendo / aprendiendo / sumando / 
                        escuchando / cometiendo errores, lo cual me permitió ir diseñando mi camino y mi amor por la construcción 
                        de software. Luego de mis primeros 3 años en programación sigo aprendiendo / estudiando / formando parte de otros proyectos / me sigo equivocando / dando 
                        soluciones / aportando otras miradas / escuchando atentamente a los compañeros de equipo / consultando a profesores y 
                        a la comunidad. Veo muchas similitudes entre música y programación, hay momentos para accionar de manera individual y 
                        otros para trabajar en equípo.
                        Además de programar me gusta pasar tiempo con mis afectos / con mis instrumentos / escalar / jugar al fútbol /
                        mirar películas / escuchar música / meditar / tomar mate.
                        Disfruto llevar una vida sana y disciplinada.
                    </p>
                </div>
                <div class="TextoMusical">
                <div class="cajaUno">
                    <img src="/Perfil/PerfilByN_Musica_Circular_Liviana.jpg"  alt="Imágen perfil Música" title="Imágen perfil Música" />
                </div>
                        <p>
                        Soy Docente de Música, Especialista en Investigación Educativa, Guitarrista, Docente de Lenguaje Musical, por lo tanto cuento con 
                        experiencia en trabajo en equipos de distintas edades y diversas realidades. Desde niños hasta ancianos. El lenguaje Musical tiene
                        muchas reglas y normas las cuales nos ayudan a comunicarnos con los instrumentos y desde allí dar un mensaje a través de la Música.
                        Hice cursos de Educación Especial y de Tiempo Libre y Recreación. 
                        </p>
                        <p>
                        Con una sólida base en el ámbito educativo musical, he cultivado una carrera como docente que fusiona eficiencia y creatividad para
                        ofrecer soluciones personalizadas a cada estudiante. Mi experiencia abarca diversas áreas, destacando mi especialización como
                        docente de guitarra, liderando ensambles, impartiendo lenguaje musical en orquestas y guiando a alumnos particulares.
                        Desde la apreciación musical inicial en guardería hasta acompañar a personas en edad adulta, he abrazado la diversidad de edades y
                        niveles de habilidad con entusiasmo. Mi enfoque equilibrado entre autonomía y trabajo en equipo ha resultado en experiencias
                        excepcionales para mis alumnos. Además, he tenido el privilegio de ser docente en escuelas públicas, abarcando niveles desde Primaria
                        hasta Secundaria y Educación de Adultos en Secundaria.
                        </p>
                        <p>
                        Como músico profesional, mi trayectoria se extiende a la creación de música original para obras de teatro, así como a la interpretación
                        en conciertos en vivo, tanto como solista como en formato de banda. Mi versatilidad se refleja en la exploración de diversos géneros,
                        desde el apasionante tango y la riqueza del folclore hasta la profundidad de la música de cámara. Comprometido con la satisfacción del
                        estudiante y la audiencia, mi labor como docente y músico ha sido una fusión armoniosa entre la pedagogía y la expresión artística,
                        buscando siempre inspirar y enriquecer la vida a través de la música.
                        </p>
                </div>
                <div class="TextoDev"> 
                <div class="cajaDos">
                    <img src="/Perfil/PerfilByN_Dev_Circular_Liviana.jpg"  alt="Imágen perfil Dev" title="Imágen perfil Dev"/>
                </div>
                        <p>
                        Me presento como un programador full stack altamente motivado y apasionado por la creación de 
                        soluciones tecnológicas innovadoras, trabajando de manera freelance en distintos proyectos. Me gustaría compartir con ustedes
                        mis habilidades y experiencia en el campo de desarrollo web y destacar cómo puedo contribuir a su equipo.
                        Encontré mi segunda pasión en la vida a través de la programación (la primera fue la música). Encuentro muchas similitudes entre
                        el lenguaje musical y los lenguajes de programación. 
                        </p>
                        <p>
                        Con conocimientos en JavaScript (JS) y TypeScript (TS), con los frameworks Angular y React, puedo crear interfaces 
                        de usuario dinámicas y atractivas que brinden una excelente experiencia de usuario. Además, mis experiencias en el manejo de bases 
                        de datos relacionales (MySQL) y no relacionales(MongoDB) en el desarrollo de APIs con Node.js y Express me permiten construir
                        aplicaciones robustas y escalables.
                        También tengo experiencia en el uso de Firebase para el desarrollo de aplicaciones web, lo que me permite implementar 
                        características en tiempo real y autenticación segura. Además, estoy familiarizado con el uso de Git para el control de 
                        versiones y la colaboración en equipo, lo que me permite trabajar de manera eficiente y mantener un flujo de trabajo ordenado.
                        </p> 
                        <p>
                        Como programador full stack también tengo conocimientos en la configuración y administración de hosting y despliegue de
                        aplicaciones web tanto en Netlify como en Vercel como en Firebase Hosting. Esto me permite ofrecer soluciones completas,
                        desde el desarrollo hasta la puesta en marcha de proyectos.
                        Siempre estoy dispuesto a unirme a un equipo dinámico donde pueda contribuir con mis habilidades y aprender de 
                        profesionales más experimentados. Soy una persona en constante crecimiento, dispuesto, y en la búsqueda de 
                        enfrentar nuevos desafíos siempre y adquirir nuevas habilidades. Me considero una persona "Solucionador de problemas".
                        </p>
                        
                        </div>
                        <div class="perfilCompetencial">
                                <h2>Perfil competencial</h2>
                                <h3>Dirección y Liderazgo:</h3>
                                <p>
                                Tengo alta tendencia a aspirar cada vez a metas más altas, con perseverancia y convicción.
                                Soy un profesional que genera relaciones y crea buenos climas de trabajo. Me centro en conocer e impulsar
                                el desarrollo del talento individual (el propio y el ajeno) para transformarlo en alta competencia colectiva,
                                de modo que, liderando a cada uno y a 
                                todos en conjunto desde mis fortalezas, logro llevar al equipo a un nivel superior.
                                Soy metódico en mis decisiones y manera de pensar. Las normas y la noción de lo correcto son pilares
                                fundamentales en la manera en la que miro la vida. Me siento más cómodo en funciones donde existen 
                                reglas y parámetros específicos, para saber dónde y cómo moverme. Sé como adaptarme muy rapidamente a los cambios y 
                                gracias a ésto puedo responder en tiempo y forma a requerimientos nuevos.
                                Me guío por mi sentido de la responsabilidad y moral. Soy una persona ordenada y planificada. Siento afinidad
                                con ambientes que estimulan el pensamiento metódico y fomentan el buen trato y clima laboral.
                                </p>
                        </div>         
            </div>    
    </section>`;
};
    