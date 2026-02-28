fetch("resume.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("name").innerText = data.name;
    document.getElementById("title").innerText = data.title;
    document.getElementById("about").innerText = data.about;

    document.getElementById("frontend").innerText = data.skills.frontend.join(", ");
    document.getElementById("backend").innerText = data.skills.backend.join(", ");
    document.getElementById("tools").innerText = data.skills.tools.join(", ");

    const projectList = document.getElementById("projects");
    data.projects.forEach(project => {
      const li = document.createElement("li");
      li.innerText = project.name + " - " + project.description;
      projectList.appendChild(li);
    });

    document.getElementById("contact").innerHTML =
      `Email: ${data.contact.email}<br>
       GitHub: <a href="${data.contact.github}" target="_blank">${data.contact.github}</a>`;
  });