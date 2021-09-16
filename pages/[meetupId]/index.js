//somedomain.com/meetupId
import { useRouter } from "next/router";
function MeetUpIdPage() {
  const router = useRouter();
  return (
    <div>
      <h1>Meetup for {router.query.meetupId}</h1>
    </div>
  );
}
export default MeetUpIdPage;
