import React from "react";
import "./style.css";
function Footer() {
  return (
    <footer class="footer">
      <ul class="nav justify-content-evenly">
        <li>
          <a
            class="social-link"
            href="https://github.com/Andrewchall92"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            class="social-link"
            href="https://www.linkedin.com/in/andrew-hall-b6b580226/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            class="social-link"
            href="https://medium.com/@andrewchall92"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
