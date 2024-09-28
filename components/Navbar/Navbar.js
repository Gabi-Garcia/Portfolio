
import "./Navbar.css";

  export const Navbar = () => {
    document.addEventListener("DOMContentLoaded", () => {
       
       // Verificar si el ancho de pantalla es menor a 767px
 
       const navLinks = document.querySelectorAll(".nav-links");
       const mainNav = document.querySelector(".main-nav");
       const navBarBurguer = document.querySelector("#js-navbar-burguer");
       const nav = document.querySelector(".nav")

      //  if (!mainNav) {
      //     console.error("No se encontró la barra de navegación principal.");
      //     return;
      //  }
       navBarBurguer.addEventListener("click", () =>{
         if(mainNav){
           mainNav.style= "display:flex";
         }
         console.log('click button')
        })
        
        navLinks.forEach(link => {
          if(
            link.addEventListener("click", () => {
              if(window.innerWidth < 767){
                mainNav.style = "height:0px";
                console.log('mobile')
              }
             else if(window.innerWidth >= 767){
              mainNav.style = "height:400px";
             }
            })
          )
          ;
          // showNav(console.log('PRUEBA'))
       });
    })
  ;
  return `
  <div class="navbarContainer">
      <div class="burguer">
        <button class="navbar-burguer" id="js-navbar-burguer">
            <img src="/BurguerIcon/barra-de-menus.png"</>
        </button>
      </div>
    <nav class="nav">
      <div class="encabezado">
        <h1>Gabi Garcia</h1>
        <h2>Fullstack Developer</h2>
     
      </div>
            <ul class="main-nav" id="js-menu">
              <li>
                <a href="#"  class="nav-links" id="homelink">
                  <span class="line"></span>
                  <p>Home</p>
                </a>
              </li>
              <li>
                <a href="#"  class="nav-links" id="projectslink">
                  <span class="line"></span>
                  <p>Experiencia</p>
                </a>
              </li>
              <li>
                <a href="#"  class="nav-links" id="projectslink">
                  <span class="line"></span>
                  <p>Proyectos</p>
                </a>
              </li>
              <li>
                <a href="#"  class="nav-links" id="aboutlink">
                  <span class="line"></span>
                  <p>Sobre mi</p>
                </a>
              </li>
              <li>
                <a href="#"  class="nav-links" id="certificados">
                  <span class="line"></span>
                  <p>Certificaciones</p>
                </a>
              </li>
              <li>
                <a href="#"  class="nav-links" id="curriculum">
                  <span class="line"></span>
                  <p>C.V.</p>
                </a>
              </li>
              <li>
                <a href="#"  class="nav-links" id="skills">
                  <span class="line"></span>
                  <p>Skills & Tools</p>
                </a>
              </li>
              <div class="contact">
                <li>
                  <a href="#" clas="nav-links" target="_blank">
                  <i class="fab fa-linkedin"></i>
                </a>
                </li>
                <li>
                  <a href="#" clas="nav-links" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
                </li>
                <li>
                  <a href="#" clas="nav-links" target="_blank">
                 <i class="fas fa-envelope"></i>
                </a>
                </li>
              </div>
            </ul>
    </nav>
  </div>
      `;
    }