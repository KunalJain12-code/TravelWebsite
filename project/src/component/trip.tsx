import "../routes/tripstyles.css";
import TripData from "../component/tripdata";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p> You can discover unique destinations using Google Maps. </p>
      <div className="tripcard">
        <TripData
          image="https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Trip in Indonesia"
          text="Indonesia, officialy the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific Oceans. It consists of over 170000 islands, including Sumatra,Java,Sulawesi, and parts of Borneo and New Guinea."
        />
        <TripData
          image="https://images.unsplash.com/photo-1508062878650-88b52897f298?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Trip in Malaysia"
          text="Malaysia is a Southeast Asian country coccupying pats of the Malay Peninsula and the island of Borneo.It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."
        />
        <TripData
          image="https://images.unsplash.com/photo-1525218291292-e46d2a90f77c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="Trip in France"
          text="France, in Western Europe, encompasses medieval cities, alphine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses,classical art museams including the Louvre and monuments like Eiffel Tower."
        />
      </div>
    </div>
  );
}
export default Trip;
