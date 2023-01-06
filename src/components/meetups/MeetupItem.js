import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../ui/Card";
import styles from "./MeetupItem.module.css";

export default function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const checkIsFavorite = favoritesCtx.isFavorite(props.id);
  function toggleFavoriteStatus() {
    if (checkIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  }
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props?.image} alt={props?.title} />
        </div>
        <div className={styles.content}>
          <h3>{props?.title}</h3>
          <address>{props?.address}</address>
          <p>{props?.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoriteStatus}>
            {checkIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
