 import "./Footer.css";
 import {Button} from "../Button/Button";

 export const Footer = () => `
<h2>Contactame</h2>
<div>
${Button("/github.png", "GitHub", "https://github.com/Gabi-Garcia")}
${Button("/linkedin.png", "Linkedin", "https://www.linkedin.com/in/gabriel-garcia-ab029b210/")}
</div>
`;

// ${Button("/icons/twitter.png", "Twitter")} 
// ${Button("/icons/telegram.png", "Telegram")}