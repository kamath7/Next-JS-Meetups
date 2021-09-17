import NewMeetupForm from "../../components/meetups/NewMeetupForm";

//somedomain.com/add-meetup
function AddMeetup() {
  function AddMeetupHandler(enteredData) {
    console.log(enteredData);
  }

  return (
    <div>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </div>
  );
}
export default AddMeetup;
