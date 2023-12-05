import { Link } from "react-router-dom";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"
></link>;
import "./style.css";

function NavTabs() {
  return (
    <ul class="nav nav-pills justify-content-end">
      <li class="nav-item">
        <Link class="nav-link" to="/">
          Home
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/ProjectsPage">
          Projects
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/ContactPage">
          Contact
        </Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../../Assets/documents/Resume.pdf" download>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-download"
            viewBox="0 0 16 16"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
          </svg>
          Resume
        </a>
      </li>
    </ul>
  );
}
export default NavTabs;
