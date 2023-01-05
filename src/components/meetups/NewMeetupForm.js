import { useRef } from "react";
import Card from "../ui/Card";
import styles from "./NewMeetupForm.module.css";

export default function NewMeetupForm(props) {
  const titleInput = useRef();
  const imageInput = useRef();
  const addressInput = useRef();
  const descriptionInput = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInput.current.value;
    const enteredImage = imageInput.current.value;
    const enteredAddress = addressInput.current.value;
    const enteredDescription = descriptionInput.current.value;

    const MeetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(MeetupData);
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInput} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInput} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInput} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            required
            id="description"
            ref={descriptionInput}
          />
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
