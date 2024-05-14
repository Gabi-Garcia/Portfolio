import "./Button.css";

export const Button = (icon, text, link) =>`

<button class="my-btn">
<img src=${icon} alt='${text} icon'/>
<a target="_blank" href=${link}><h4>${text}</h4></a>

</button>
`
/*Arreglar el botón: Colocar todo dentro de la etiqueta <a></a>*/