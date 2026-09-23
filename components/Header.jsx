import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <h1>
        <Link className="brienna_title" to="/">
          Brienna Halterman
        </Link>
      </h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/off-stage">Off the Stage</Link>
        </li>
        <li>
          <Link to="/on-stage">On the Stage</Link>
        </li>
        <li>
          <Link to="/media">Media</Link>
        </li>
        <li>
          <Link to="/contact-me">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
}
