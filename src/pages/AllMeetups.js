import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

export default function AllMeetupsPage() {
  const [loading, setLoading] = useState(true);
  const [meetupData, setMeetupData] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://react-meetup-application-360df-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }
        setLoading(!loading);
        setMeetupData(meetups);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>L O A D I N G . . .</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList items={meetupData} />
    </section>
  );
}
