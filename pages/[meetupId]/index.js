//somedomain.com/meetupId
import { useRouter } from "next/router";
import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetUpIdPage() {
  const router = useRouter();
  return (
    <MeetupDetail
      image={
        "https://m.media-amazon.com/images/M/MV5BODkyODA3MjMwNF5BMl5BanBnXkFtZTgwOTc3NTU0NjM@._CR289,88,1528,859_UX1248_UY702.jpg"
      }
      title={"The First Meetup"}
      address={"Random Addrss"}
      description={"Some Description"}
    />
  );
}

//returning object where all dynamic segment values are defined
export async function getStaticPaths() {
  return {
    fallback: false, //to indicate all paths are defined
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch for single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://m.media-amazon.com/images/M/MV5BODkyODA3MjMwNF5BMl5BanBnXkFtZTgwOTc3NTU0NjM@._CR289,88,1528,859_UX1248_UY702.jpg",
        title: "The First Meetup",
        address: "Random Addrss",
        description: "Some Description",
      },
    },
  };
}
export default MeetUpIdPage;
