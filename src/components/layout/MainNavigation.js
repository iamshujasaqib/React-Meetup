import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import styles from "./MainNavigation.module.css";

export default function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
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
            <span className={styles.badge}>{favoritesCtx.totalFavorites}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
