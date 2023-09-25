import "./ProjectCard.css";


export const ProjectCard = (project) => `
<div class="project-card">
<img src=${project.image} alt=${project.title}/>
<div class="header">
<h2>${project.title}</h2>
<div>
<a target="_blank" href=${project.github}>
<img src="/github.png" alt="GitHub Icon"/>
</a>
<a target="_blank" href=${project.link}>
<img src="/hipervinculo.png" alt="Link icon"/>
</a>
</div>
</div>
<div class="detail">
<p class="description">${project.description}</p>
<p class="tech"> ${project.tech.join("<br>")}</p>
</div>
</div>
`;

