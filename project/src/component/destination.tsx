import "../routes/dstyles.css";
import DestinationData from "../component/destinationdata";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see alot, within a time frame.</p>
      <DestinationData
        heading="Taal Volcano,Batangas"
        text=" One of the most iconic views in luzon,Mt. Taal boasts a volcano
            inside an island. if you fancy a closer look, the hike up to the
            crater is a mere 45 minutes, and is easy enough for beginners.
            Guides will assist you most of the way, and you will see the
            peculiar environment found on an active volcano,including volcanic
            rocks and steam vents. The hike can be dusty and hot, so plan for an
            early morning trip, and then unwind with some bulalo before heading
            back home!"
        img1="https://images.unsplash.com/photo-1508062878650-88b52897f298?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="first-des"
      />

      <DestinationData
        heading="Mt .Daguldul, Batangas"
        text="If you're looking for a hike that's a little more challenging but still good for beginner mountaineer, check out Mt. Dagulduln San Juan, Batangas. You'll start your hike form the beach and pass through tropical forest, different rock formations, and small streams. There's a small store  halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the brezze is fantastic. Once you've made it back down, head straight to the beach for a refreshing, well-deserved swim.  "
        img1="https://images.unsplash.com/photo-1719425620960-119ae4bf1187?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2Mjc1Njd8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1696574242507-a681e66fd735?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="first-des-reverse"
      />
    </div>
  );
};
export default Destination;
