//somedomain.com/meetupId
import { useRouter } from "next/router";
import React from "react";
function MeetUpIdPage() {
  const router = useRouter();
  return (
    <React.Fragment>
      <img src= "https://m.media-amazon.com/images/M/MV5BODkyODA3MjMwNF5BMl5BanBnXkFtZTgwOTc3NTU0NjM@._CR289,88,1528,859_UX1248_UY702.jpg" alt='First meetup'/>
      <h1>The First Meetup</h1>
      <address>Random Addrss</address>
      <p>Some random description</p>
      
    </React.Fragment>
  );
}
export default MeetUpIdPage;
