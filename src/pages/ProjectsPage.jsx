import React from "react";

function ProjectsPage() {
  return (
    <>
      <h1>Portfolio</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img
              src="../../Assets/current-day.png"
              class="img-fluid"
              alt="picture of work scheduler"
            />
            <a
              href="https://github.com/Andrewchall92/calendar-app"
              target="_blank"
            >
              View the repository
            </a>
            <a
              href="https://andrewchall92.github.io/calendar-app/"
              target="_blank"
            >
              View the application online
            </a>
          </div>
          <div class="col-md-6">
            <img
              src="../../Assets/dashboard.png"
              class="img-fluid"
              alt="picture of readme generator"
            />
            <a
              href="https://github.com/Andrewchall92/weather-app"
              target="_blank"
            >
              View the repository
            </a>
            <a
              href="https://andrewchall92.github.io/weather-app/"
              target="_blank"
            >
              View the application online
            </a>
          </div>
        </div>
         {/* more projects will be added */}
      </div>
      <h4>More coming soon!</h4>
    </>
  );
}

export default ProjectsPage;
