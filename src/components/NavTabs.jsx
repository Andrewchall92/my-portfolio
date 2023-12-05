import { Link } from 'react-router-dom';
import "./style.css";

function NavTabs() {

  return (
    <ul class= "nav nav-pills justify-content-end">
      <li class="nav-item" >
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/ProjectsPage">Projects</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/ContactPage">Contact</Link>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="../../Assets/documents/Resume.pdf" download>Resume</a>
    </li>
    </ul>
  );
}
  export default NavTabs;