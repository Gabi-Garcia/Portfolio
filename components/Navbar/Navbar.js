
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
       const navLinks = document.querySelectorAll(".nav-links");
       const mainNav = document.querySelector(".main-nav");
       const navBarBurguer = document.querySelector("#js-navbar-burguer")
 
       if (!mainNav) {
          console.error("No se encontró la barra de navegación principal.");
          return;
       }
       navBarBurguer.addEventListener("click", () =>{
         if(mainNav){
           mainNav.style.display = "block";
         }
         else{
          mainNav.style.display = "none";
         }
         console.log('click button')
       })
 
       navLinks.forEach(link => {
        if(
          link.addEventListener("click", () => {
             // Ocultar la barra de navegación al hacer clic en un enlace
             mainNav.style.display = "none";
          })
        );
       });
    });
  return `
  <nav>
  <h2>Gabi Garcia</h2>
   <div class="burguer">
   <button class="navbar-burguer" id="js-navbar-burguer"><img src="/BurguerIcon/barra-de-menus.png" </button>
   </div>
   
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
      <button id="themeBtn" type="button" class="nav-links">☀</button>
      </li>

      </ul>
      </nav>
      `;
  //VA EN LA LINEA 44 <input type="checkbox" id="chkToggle"/>
}