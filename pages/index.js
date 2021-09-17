//somedomain.com/
import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "1a",
    title: "First Meetup",
    image:
      "https://m.media-amazon.com/images/M/MV5BODkyODA3MjMwNF5BMl5BanBnXkFtZTgwOTc3NTU0NjM@._CR289,88,1528,859_UX1248_UY702.jpg",
    address: "Somewhere in the MCU",
    description: "Very good movie",
  },
  {
    id: "1b",
    title: "Second Meetup",
    image:
      "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjvchamary%2Ffiles%2F2016%2F03%2Fman_of_steel-1200x800.jpg",
    address: "Somewhere in the DCEU",
    description: "movie Very good ",
  },
];
function MainPage() {
  const [meetups, setMeetups] = useState([])
  useEffect(()=>{
    setMeetups(DUMMY_MEETUPS)
  },[])
  return (
    <>
      <MeetupList meetups={meetups} />
    </>
  );
}
export default MainPage;
