fetch("resume.json")
  .then(res => res.json())
  .then(data => {

    document.getElementById("name").innerText = data.name;
    document.getElementById("title").innerText = data.title;
    document.getElementById("summary").innerText = data.summary;

    // Skills
    const skillsDiv = document.getElementById("skills");
    for (let category in data.skills) {
      const div = document.createElement("div");
      div.className = "skill-card";
      div.innerHTML = `
        <strong>${category.toUpperCase()}</strong>
        <p>${data.skills[category].join(", ")}</p>
      `;
      skillsDiv.appendChild(div);
    }

    // Experience
    const expDiv = document.getElementById("experience");
    data.experience.forEach(exp => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${exp.role} - ${exp.company}</h3>
        <p><em>${exp.period}</em></p>
        <p>${exp.description}</p>
      `;
      expDiv.appendChild(div);
    });

    // Projects
    const projectDiv = document.getElementById("projects");
    data.projects.forEach(project => {
      const div = document.createElement("div");
      div.className = "project-card";
      div.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <p><strong>Tech:</strong> ${project.tech.join(", ")}</p>
        <a href="${project.github}" target="_blank">View on GitHub</a>
      `;
      projectDiv.appendChild(div);
    });

    // Contact
    const contactDiv = document.getElementById("contact");
    contactDiv.innerHTML = `
      <p>Email: ${data.contact.email}</p>
      <p>Phone: ${data.contact.phone}</p>
      <p>GitHub: <a href="${data.contact.github}" target="_blank">${data.contact.github}</a></p>
    `;

  });
