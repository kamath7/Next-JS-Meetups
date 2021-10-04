import NewMeetupForm from "../../components/meetups/NewMeetupForm";

//somedomain.com/add-meetup
function AddMeetup() {
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

    console.log(data);
  }

  return (
    <div>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </div>
  );
}
export default AddMeetup;
