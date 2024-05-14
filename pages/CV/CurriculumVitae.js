import './CurriculumVitae.css'
import { cleanPage } from '../../utils/cleanPage'
import { Divider } from '../../components/Divider/Divider'

export const CurriculumVitae = ()=>{
    const main = document.querySelector("main")
    cleanPage(main)
    main.innerHTML = `
    ${Divider()}
    <section class="cv">
    <button><a href="./public/CV/Dev_Gabriel.pdf" target="_blank" download="cv">Descargar</a></button>
     <div class="imgCV">
      <img src="/public/CV/CVImg.jpeg">
     </div>
    </section> 
    `
}