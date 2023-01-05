import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetupHandler(MeetupData) {
    fetch(
      "https://react-meetup-application-360df-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(MeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  }

  return (
    <section>
      <h1>Add A New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
