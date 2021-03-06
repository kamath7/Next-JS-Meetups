//somedomain.com/
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import React from "react";
// const DUMMY_MEETUPS = [
//   {
//     id: "1a",
//     title: "First Meetup",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BODkyODA3MjMwNF5BMl5BanBnXkFtZTgwOTc3NTU0NjM@._CR289,88,1528,859_UX1248_UY702.jpg",
//     address: "Somewhere in the MCU",
//     description: "Very good movie",
//   },
//   {
//     id: "1b",
//     title: "Second Meetup",
//     image:
//       "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjvchamary%2Ffiles%2F2016%2F03%2Fman_of_steel-1200x800.jpg",
//     address: "Somewhere in the DCEU",
//     description: "movie Very good ",
//   },
// ];
function MainPage(props) {
  // // const [meetups, setMeetups] = useState([]);
  // useEffect(() => {
  //   setMeetups(DUMMY_MEETUPS);
  // }, []);

  //Alternative is below
  return (
    <React.Fragment>
      <Head>
        <title>Something cool</title>
        <meta name="description" content="Browse everything cool"/>
      </Head>
      <MeetupList meetups={props.meetups} />
    </React.Fragment>
  );
}

// getStaticProps is a reserved functions
export async function getStaticProps() {
  // this will never end up on the client side. Executed during the build process and not on the client
  // fetching data
  // always return object. props property needs to be sent
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, //for incremental static generation. next js waiting for ex 10 secs before handling the next req. will be generated on the server.ensures data is updated every 10 secs
  };
}

//alternate to the above
// export async function getServerSideProps(context) {
//generates on server side upon deployment. runs for every req to the server
//fetch data
//   const req = context.req;
//   const res = context.res; //similar to (req,res) in Node

//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

//Disadvantage of GSSP - Wait for server for every incoming req.  faster for getStaticProps. Using GSSP only if you need access to req object or if data changes say for every 1 sec

export default MainPage;
