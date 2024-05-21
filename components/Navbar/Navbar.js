
import "./Navbar.css";

   export const changeTheme = () => {
   const themeBtn = document.querySelector("#themeBtn");
   themeBtn.addEventListener("click", () => {
   document.body.classList.toggle("light");
   changeText();
   });
   };
   export const changeText = () => {
   const themeBtn = document.querySelector("#themeBtn");
   if (themeBtn.innerText === "☀") {
   themeBtn.innerText = "☾";
   } else {
   themeBtn.innerText = "☀";
   }
  };
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
              mainNav.style = "height:150px";
             }
            })
          )
          ;
          // showNav(console.log('PRUEBA'))
       });
    })
  ;
  return `
  <div class="burguer">
     <button class="navbar-burguer" id="js-navbar-burguer">
       <img src="/BurguerIcon/barra-de-menus.png"</>
     </button>
    <h2>Gabi Garcia</h2>
  </div>
  
  <nav class="nav">
   <ul class="main-nav" id="js-menu">
      <li>
      <a href="#"  class="nav-links" id="homelink">Home</a>
      </li>
      <li>
      <a href="#"  class="nav-links" id="projectslink">Projectos</a>
      </li>
      <li>
      <a href="#"  class="nav-links" id="aboutlink">Sobre mi</a>
      </li>
      <li>
      <a href="#"  class="nav-links" id="certificados">Certificaciones</a>
      </li>
      <li>
      <a href="#"  class="nav-links" id="curriculum">C.V.</a>
      </li>
      <li>
      <a href="#" id="themeBtn"  class="nav-links">☀</a>
      </li>
      </ul>
      </nav>
      `;
    }