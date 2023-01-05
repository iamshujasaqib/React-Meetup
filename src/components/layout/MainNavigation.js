import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}