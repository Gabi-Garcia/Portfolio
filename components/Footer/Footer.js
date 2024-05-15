 import "./Footer.css";
 import {Button} from "../Button/Button";

 export const Footer = () => `
<h2>Contáctame</h2>
<div>
${Button("/Contact/github.png", "GitHub", "https://github.com/Gabi-Garcia")}
${Button("/Contact/linkedin.png", "Linkedin", "https://www.linkedin.com/in/gabriel-garcia-ab029b210/")}
</div>
`;