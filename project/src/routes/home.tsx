import Nav from "../component/Navbar";
import Hero from "../component/hero";
import Destination from "../component/destination";
import Trip from "../component/trip";
import Footer from "../component/footer";
function Home() {
  return (
    <>
      <Nav />
      <Hero
        cName="hero"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        heroImg="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
