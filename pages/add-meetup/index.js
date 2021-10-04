import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

//somedomain.com/add-meetup
function AddMeetup() {
  const router = useRouter();

  async function AddMeetupHandler(enteredData) {
    console.log(enteredData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    alert(data);
    router.push("/");
  }

  return (
    <div>
      <Head>
        <title>Add Meetup</title>
        <meta name="description" content="Browse everything cool and also add " />
      </Head>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </div>
  );
}
export default AddMeetup;
