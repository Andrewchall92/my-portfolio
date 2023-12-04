import { Link } from 'react-router-dom';

function NavTabs() {

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/ProjectsPage">Projects</Link>
      </li>
      <li>
        <Link to="/ContactPage">Contact</Link>
      </li>
    </ul>
  );
}
  export default NavTabs;