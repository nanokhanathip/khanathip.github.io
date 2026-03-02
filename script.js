fetch("resume.json")
  .then(res => res.json())
  .then(data => {

    // birthdate to ddmmyyyy
    const date = new Date(data.birthdate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    //


    // ===== Basic Info =====
    document.getElementById("name").innerText = data.name;
    document.getElementById("nickname").innerText = data.nickname;
    document.getElementById("age").innerText = data.age;

    document.getElementById("birthdate").innerText = `${day}/${month}/${year}`;
    document.getElementById("title").innerText = data.title;
    document.getElementById("summary").innerText = data.summary;

    // ===== Skills =====
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

    // ===== Experience =====
    if (data.experience && data.experience.length > 0) {
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
    }

    // ===== Projects =====
    const projectDiv = document.getElementById("projects");

    if (data.projects && Array.isArray(data.projects)) {

      data.projects.forEach(project => {
        const div = document.createElement("div");
        div.className = "project-card";

        // สร้าง responsibilities list
        let responsibilitiesHTML = "";
        if (project.responsibilities && project.responsibilities.length > 0) {
          responsibilitiesHTML = `
        <ul class="project-responsibilities">
          ${project.responsibilities.map(r => `<li>${r}</li>`).join("")}
        </ul>
      `;
        }

        // impact (ถ้ามี)
        let impactHTML = "";
        if (project.impact) {
          impactHTML = `<p class="project-impact"><strong>Impact:</strong> ${project.impact}</p>`;
        }

        div.innerHTML = `
      <h3>${project.name}</h3>
      <p class="project-role">${project.role}</p>
      <p>${project.description}</p>
      ${responsibilitiesHTML}
      ${impactHTML}
      <p><strong>Tech:</strong> ${project.tech.join(", ")}</p>
      <a href="${project.github}" target="_blank">View on GitHub</a>
    `;

        projectDiv.appendChild(div);
      });

    }

    // ===== Education =====
    const eduDiv = document.getElementById("education");

    if (data.education && Array.isArray(data.education)) {
      data.education.forEach(edu => {
        const div = document.createElement("div");
        div.innerHTML = `
      <p>${edu.degree}</p>
      <p><em>${edu.period}</em> | GPA: ${edu.gpa}</p>
      <p>${edu.institution}, ${edu.location}</p>
    `;
        eduDiv.appendChild(div);
      });
    }

    // ===== Contact =====
    const contactDiv = document.getElementById("contact");
    contactDiv.innerHTML = `
      <p>Email: ${data.contact.email}</p>
      <p>Phone: ${data.contact.phone}</p>
    
    `;

  })
  .catch(err => console.error("Error loading resume:", err));

