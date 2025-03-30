
function loadComponent(id, file) {
  fetch(file)
      .then(response => response.text())
      .then(data => document.getElementById(id).innerHTML = data)
      .catch(error => console.error(`Error loading ${file}:`, error));
}

function loadPage(page) {
  fetch(page)
      .then(response => response.text())
      .then(data => {
          document.getElementById('main-content').innerHTML = data;

          // Change the URL in the browser without reloading
          const pageName = page.split(".")[0]; // Strip ".html" from page name
          history.pushState(null, null, `/${pageName}`);

          // Special case for projects page script
          if (page === "./submission/views/projects.html") {
            const script = document.createElement("script");
            script.src = "submission/project.js";
            script.type = "text/javascript";
            document.body.appendChild(script);
        }
      })
      .catch(error => {
          document.getElementById('main-content').innerHTML = "<h1>Page Not Found</h1><p>The requested page doesn't exist.</p>";
          console.error(`Error loading ${page}:`, error);
      });
}

// Load the home page by default and components 
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "./submission/navbar.html");
  loadComponent("footer", "./submission/footer.html");

  console.log("window.location.pathname: ", window.location.pathname);
  handleRouteChange(window.location.pathname);

  // Default to page
  // loadPage("./submission/views/home.html");
});

// Handle the routing logic based on the current URL
function handleRouteChange(path) {
  if (path === "/home" || path === "/") {
      loadPage("./submission/views/home.html");
  } else if (path === "/hobbies") {
      loadPage("./submission/views/hobbies.html");
  } else if (path === "/projects") {
      loadPage("./submission/views/projects.html");
  } else if (path === "/resume") {
      loadPage("./submission/views/resume.html");
  } else {
      loadPage("./submission/views/home.html");
  }
}

window.onpopstate = () => {
  const path = window.location.pathname;
  handleRouteChange(path);
};


            