const projects = [
    {
      title: "Notification App",
      description: "A notification app that sends reminders to user-testers, sending forms and links.",
      skills: ["React Native", "Expo", "Node.js"],
      image: "path/to/image1.jpg",
      process: "Process details...",
      iterations: "Future iterations..."
    },
    {
      title: "Chat Room App",
      description: "A discord inspired chat room app utilizing Google Firebase and Encrypt.js for user authentification and login. Features real time updates in chatrooms.",
      skills: ["React", "Firebase", "Javascript"],
      image: "../resources/chat-room-app.png",
      process: "Process details...",
      iterations: "Future iterations..."
    },
    {
      title: "Ski Resort Weather App",
      description: "Displays weather conditions at ski resorts. Apple Maps Integration for directions to selected resort.",
      skills: ["Swift", "Xcode", "MapKit"],
      image: "../resources/",
      process: "Process details...",
      iterations: "Future iterations..."
    },
    {
      title: "Trip Cost Calculator",
      description: "A responsive mobile application for user inputting road trip information and visually seeing the estimated costs, as well as a bill splitter.",
      skills: ["Swift", "Xcode"],
      image: "../resources/trip-app.png",
      process: "Process details...",
      iterations: "Future iterations..."
    },
    {
        title: "To-Do List App",
        description: "A To-Do app created with Draggable.js and Typescript styling. Elements are able to be dragged to desired order on the list, and checked for completion",
        skills: ["Javascript", "Typescript", "Draggable.js"],
        image: "../resources/todo-app.png",
        process: "Process details...",
        iterations: "Future iterations..."
    },
    {
        title: "Menu App",
        description: "A simple online menu app for a restaurant, with a user-friendly interface for customers to view and order from.",
        skills: ["React", "Typescript", "Vite"],
        image: "../resources/menu-app.png",
        process: "Process details...",
        iterations: "Future iterations..."
    }
  ];

  function createProjectCards() {
    // want to create a card for each project in projects array
    const projectContainer = document.getElementById("projects-container");
    projects.forEach((project, index) => {
        const card = document.createElement("div");
        card.classList.add("col");
        
        let modalId = `project-modal-${index}`;

        card.innerHTML = `
        <div class="card h-100">
            <img src="${project.image}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <ul class="skills">
                    ${project.skills.map(skill => `<li>${skill}</li>`).join("")}
                    </ul>
                    <button type="button" class="learn-more btn mt-2" data-bs-toggle="modal" data-bs-target="#${modalId}">Learn More</button>
            </div>
        </div> 
        
        <!-- Bootstrap Modal -->
        <div class="modal" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="${modalId}Label" style="margin-bottom: 15px;">${project.title}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src="${project.image}" class="card-img-top" alt="${project.title}">
                        <p>${project.description}</p>
                        <p>${project.process}</p>
                        <p>${project.iterations}</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        `;
        projectContainer.appendChild(card);
    });
}

createProjectCards();
