import './CurriculumVitae.css'
import { cleanPage } from '../../utils/cleanPage'

export const CurriculumVitae = ()=>{
    const main = document.querySelector("main")
    cleanPage(main)
    main.innerHTML = `
    <section class="cv">
            <button>
                <a href="/CV/Dev_Gabriel.pdf" target="_blank" download="cv">Descargar</a>
            </button>
            <div class="imgCV">
                <img src="/CV/CVImg.jpeg">
            </div>
    </section> 
    `
}