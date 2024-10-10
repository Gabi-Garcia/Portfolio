
import "./Navbar.css";

  export const Navbar = () => {
    document.addEventListener("DOMContentLoaded", () => {
       
 
       const navLinks = document.querySelectorAll(".nav-links");
       const mainNav = document.querySelector(".main-nav");
       const navBarBurguer = document.querySelector("#js-navbar-burguer");
       const burgerIcon = document.querySelector("#js-navbar-burguer img");
       const nav = document.querySelector(".nav")

        
       // Variable para controlar si el menú está abierto o cerrado
      let isMenuOpen = false;

      navBarBurguer.addEventListener("click", () =>{
        if (isMenuOpen) {
        // Si el menú está abierto, lo cerramos
        mainNav.style.display = "none";
        burgerIcon.src = "/BurguerIcon/abrir.png"; // Cambia de nuevo al ícono de hamburguesa
        isMenuOpen = false;
      } else {
        // Si el menú está cerrado, lo abrimos
        mainNav.style.display = "flex"; // Mostrar el menú
        burgerIcon.src = "/BurguerIcon/cerrar.png"; // Cambia al ícono de cerrar
        isMenuOpen = true;
      }
        
      console.log('click button')
        })
        
        navLinks.forEach(link => {
          if(
            link.addEventListener("click", () => {
              if(window.innerWidth < 767){
                mainNav.style = "display= none";
                burgerIcon.src = "/BurguerIcon/abrir.png"; // Cambia de nuevo al ícono de hamburguesa
                isMenuOpen = false;
              }
             else if(window.innerWidth >= 767){
              mainNav.style = "display= none";
              burgerIcon.src = "/BurguerIcon/abrir.png"; // Cambia de nuevo al ícono de hamburguesa
              isMenuOpen = false;
             }
            })
          )
          ;
       });
    })
  ;
  return `
  <div class="navbarContainer">
      <div class="burguer">
        <button class="navbar-burguer" id="js-navbar-burguer">
            <img src="/BurguerIcon/abrir.png" alt="Abrir menu" />
        </button>
      </div>
    <nav class="nav">
      <div class="encabezado">
        <h1>Gabi Garcia</h1>
        <h2>Fullstack Developer</h2>
      </div>
            <ul class="main-nav" id="js-menu" style="display: none;">
            <li>
                <a href="#"  class="nav-links" id="about">
                  <span class="line"></span>
                  <p>Sobre mi</p>
                </a>
              </li>
              <li>
                <a href="#"  class="nav-links" id="experiencia">
                  <span class="line"></span>
                  <p>Experiencia</p>
                </a>
              </li>
              <li>
                <a href="#"  class="nav-links" id="projects">
                  <span class="line"></span>
                  <p>Proyectos</p>
                </a>
              </li>
               <li>
                <a href="#"  class="nav-links" id="skills_tools">
                  <span class="line"></span>
                  <p>Skills & Tools</p>
                </a>
              </li>
                <li>
                <a href="#"  class="nav-links" id="curriculum">
                  <span class="line"></span>
                  <p>C.V.</p>
                </a>
              </li>
              <li>
                <a href="#"  class="nav-links" id="certificados">
                  <span class="line"></span>
                  <p>Certificaciones</p>
                </a>
              </li>
              <ul class="contact">
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
              </ul>
            </ul>
    </nav>
  </div>
      `;
    }