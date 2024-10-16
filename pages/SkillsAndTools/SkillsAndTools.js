import'./SkillsAndTools.css';
import { cleanPage } from "../../utils/cleanPage";



export const SkillsAndTools = () =>{
    const main = document.querySelector("main")
    cleanPage(main);
    main.innerHTML = `
    <div class="SkillsAndTools">
            <p class="headerSkillsAndTools">Skills & Tools</p>
            <div class="cajaSkill-items">
                <div class="skill-item">
                    <i class="devicon-html5-plain"></i>
                    <p>HTML</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-css3-plain"></i>
                    <p>CSS</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-javascript-plain"></i>
                    <p>JS</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-typescript-plain"></i>
                    <p>TS</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-react-original"></i>
                    <p>REACT JS</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-angular-plain"></i>
                    <p>ANGULAR</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-mysql-original"></i>
                    <p>MySQL</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-mongodb-plain"></i>
                    <p>MONGO</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-vercel-original"></i>
                    <p>VERCEL</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-firebase-plain"></i>
                    <p>FIREBASE</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-netlify-plain"></i>
                    <p>NETLIFY</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-git-plain"></i>
                    <p>GIT</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-github-original"></i>
                    <p>GITHUB</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-powershell-plain"></i>
                    <p>POWER SHELL</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-vscode-plain"></i>
                    <p>VS CODE</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-nodejs-plain"></i>
                    <p>NODE JS</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-nodemon-plain"></i>
                    <p>NODEMON</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-npm-original-wordmark"></i>
                    <p>NPM</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-postman-plain"></i>
                    <p>POSTMAN</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-angularmaterial-plain"></i>
                    <p>ANGULAR MATERIAL</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-bootstrap-plain"></i>
                    <p>BOOTSTRAP</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-azure-plain"></i>
                    <p>AZURE</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-canva-original"></i>
                    <p>CANVA</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-figma-plain"></i>
                    <p>FIGMA</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-express-original"></i>
                    <p>EXPRESS</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-mongoose-original"></i>
                    <p>MONGOOSE</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-notion-plain"></i>
                    <p>NOTION</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-redux-original"></i>
                    <p>REDUX</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-reactrouter-plain"></i>
                    <p>REACT ROUTER</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-vitejs-plain"></i>
                    <p>VITE JS</p>
                </div>
                <div class="skill-item">
                    <i class="devicon-vitest-plain"></i>
                    <p>VITEST</p>
                </div>
            </div>    
    </div>
        `
}
