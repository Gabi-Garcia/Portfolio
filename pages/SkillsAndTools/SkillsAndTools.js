import'./SkillsAndTools.css';
import { cleanPage } from "../../utils/cleanPage";


export const SkillsAndTools = () =>{
    const main = document.querySelector("main")
    cleanPage(main);
   main.innerHTML = `
   <div class="SkillsAndTools">
        <p> 
        SKILLS AND TOOLS
        </p>
   </div>
    
    
    `

}