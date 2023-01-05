import MeetupItem from "./MeetupItem";
import styles from "./MeetupList.module.css";

export default function MeetupList(props) {
  return (
    <ul className={styles.list}>
      {props.items.map((obj) => {
        return (
          <MeetupItem
            key={obj.id}
            id={obj.id}
            image={obj.image}
            title={obj.title}
            address={obj.address}
            description={obj.description}
          />
        );
      })}
    </ul>
  );
}
