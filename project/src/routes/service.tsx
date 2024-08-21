import Nav from "../component/Navbar";
import Hero from "../component/hero";
import Footer from "../component/footer";
import Trip from "../component/trip";
function Service() {
  return (
    <>
      <Nav />
      <Hero
        cName="hero-mid"
        title="Service"
        url="/"
        btnClass="hide"
        heroImg="https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bnJpc2V8ZW58MHx8MHx8fDA%3D"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
