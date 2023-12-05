import { Link } from 'react-router-dom';
import "./style.css";

function NavTabs() {

  return (
    <ul class= "nav justify-content-end">
      <li class="nav-item" >
        <Link to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link to="/ProjectsPage">Projects</Link>
      </li>
      <li class="nav-item">
        <Link to="/ContactPage">Contact</Link>
      </li>
      <li class="nav-item">
      <a href="../../Assets/documents/Resume.pdf" download>Resume</a>
    </li>
    </ul>
  );
}
  export default NavTabs;