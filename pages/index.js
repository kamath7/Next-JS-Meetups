//somedomain.com/
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
function MainPage(props) {
  // // const [meetups, setMeetups] = useState([]);
  // useEffect(() => {
  //   setMeetups(DUMMY_MEETUPS);
  // }, []);

  //Alternative is below
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// getStaticProps is a reserved functions
export function getStaticProps() {
  //this will never end up on the client side. Executed during the build process and not on the client
  //fetching data
  //always return object. props property needs to be sent
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, //for incremental static generation. next js waiting for ex 10 secs before handling the next req. will be generated on the server.ensures data is updated every 10 secs
  };
}

export default MainPage;
