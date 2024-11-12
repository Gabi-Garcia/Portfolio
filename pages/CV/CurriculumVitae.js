import './CurriculumVitae.css'
import { cleanPage } from '../../utils/cleanPage'

export const CurriculumVitae = ()=>{
    const main = document.querySelector("main")
    cleanPage(main)
    main.innerHTML = `
    <section class="cv">
            <button>
                <a href="/CV/CV_Dev.pdf" target="_blank" download="cv">Descargar</a>
            </button>
            <div class="imgCV">
                <img src="/CV/1.png">
                 <img src="/CV/2.png">
            </div>
    </section> 
    `
}