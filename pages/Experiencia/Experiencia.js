import './Experiencia.css';
import { cleanPage } from "../../utils/cleanPage";


export const Experiencia = ()=>{
    const main = document.querySelector("main")
    cleanPage(main);
    main.innerHTML = `
    <div class="Cajaexperiencia">
        <ul class="cajaUl">
                <p>Noviembre 2021 - Actualidad </p>
                <p>Full Stack Developer</p>
                <p>
                    Desarrollo de aplicaciones web en JS, TS, Angular, React.
                    Innovación con ReactJS: Interfaces dinámicas y atractivas.
                    Gestión de Datos: MySQL, MongoDB.
                    Node para Backend Robusto: Potenciando aplicaciones con Node.
                    Integración  de APIs: Conexión eficiente con servicios externos.
                    Diseño Preciso con HTML/CSS: Estilo y estructura semántica.
                    Creatividad en Canva y Figma: Herramientas visuales para diseño.
                    Despliegue Eficiente en Hosting: Firebase, Netlify, Vercel .
                    Gestión con GitHub: Repositorios controlados y eficientes.
                </p>
                        <ul class="ulTech">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>TS</li>
                            <li>Angular</li>
                            <li>React</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Node</li>
                        </ul>
        </ul>
        <ul class="cajaUl">
                <p> Junio 2024 - Actualidad</p>
                <p>Frontend Developer</p>
                <p>Sitio web para cliente final del sector Educación, migración de contenidos de web2 a web3.</p>
                        <ul class="ulTech">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React JS</li>
                            <li>Hiro</li>
                            <li>Node</li>
                        </ul>
        </ul>
        <ul class="cajaUl">
                <p> Mayo 2024 - Agosto 2024</p>
                <p>Full Stack Developer</p>
                <p>Aplicación de juego web para la niñez y la familia, cliente final persona física.</p>
                        <ul class="ulTech">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React JS</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                        </ul>
        </ul>
        <ul class="cajaUl">
                <p> Junio 2023 - Octubre 2023</p>
                <p>Frontend Developer</p>
                <p>Color Flipper (Página web donde se emula la maquetación web, cliente final sector Educación y Tecnología).</p>
                        <ul class="ulTech">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                        </ul>
        </ul>
        <ul class="cajaUl">
                <p>Febrero 2023 - Junio 2023</p>
                <p>Frontend Developer</p>
                <p>Expense Mate (Aplicación para contabilizar gastos, cliente final sector Comercio).</p>
                        <ul class="ulTech">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>TS</li>
                            <li>ANGULAR</li>
                        </ul>
        </ul>
        <ul class="cajaUl">
                <p>Febrero 2023 - Mayo 2023</p>
                <p>Frontend Developer</p>
                <p>Buscador de Películas (Pagina web cuya finalidad es gestionar las búsquedas de títulos de películas).</p>
                        <ul class="ulTech">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>TS</li>
                            <li>ANGULAR</li>
                        </ul>
        </ul>
        <ul class="cajaUl">
                <p>Julio 2022 - Diciembre 2022</p>
                <p>Frontend Developer</p>
                <p>COLABORACIÓN EN PROYECTO, Buscador de Noticias</p>
                        <ul class="ulTech">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>TS</li>
                            <li>ANGULAR</li>
                        </ul>
        </ul>
        <ul class="cajaUl">
                <p>Noviembre 2021 - Mayo 2022</p>
                <p>Frontend Developer</p>
                <p>COLABORACIÓN EN PROYECTO, Tienda de Ropa</p>
                        <ul class="ulTech">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>TS</li>
                            <li>ANGULAR</li>
                        </ul>
        </ul>
    </div>
    `

}