import "./ProjectCard.css";

export const ProjectCard = (project) => {
    // 1. Convertir el array de 'tech' en un array de objetos
  const techObjects = project.tech.map(techName => ({ name: techName }));

  // 2. Crear la lista <ul> con <li> para cada tecnología
  const techList = techObjects.map(techObj => `<li>${techObj.name}</li>`).join('');

  // 3. Retornar la estructura HTML incluyendo la lista <ul
  

    return `
<div class="project-card">
            <div class="cabecera">
                    <p>${project.anio}</p>
                    <p>${project.title}</p>
                    <a target="_blank" href=${project.link}>
                    <div class="flecha"><i class="fas fa-arrow-right"></i></div>
                    </a>
                    <a target="_blank" href=${project.github}>
                    <i class="fab fa-github"></i>
                    </a>
                    </div>
                    <div class="detail"> 
                    <p class="description">${project.description}</p>
                    <ul class="tech-list">${techList}</ul> <!-- la lista aquí -->
                    </div>
                    </div>
                    `;
}
