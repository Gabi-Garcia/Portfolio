import "./ProjectCard.css";

export const ProjectCard = (project) => `
<div class="project-card">
<div class="header">
<h4>${project.title}</h4>
<div>
<a target="_blank" href=${project.link}>
<img src="/public/projects/hipervinculo.png" alt="Link icon"/>
</a>
<a target="_blank" href=${project.github}>
<img src="/public/Contact/github.png" alt="GitHub Icon"/>
</a>
</div>
</div>
<div class="boximg">
<img src=${project.image} alt=${project.title}/>
</div>   
    <div class="detail"> 
        <p class="description">${project.description}</p>
        <p class="tech"> ${project.tech.join("<br>")}</p>
    </div>
</div>
`;

