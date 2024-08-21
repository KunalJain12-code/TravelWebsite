import Nav from "../component/Navbar";
import Hero from "../component/hero";
import Footer from "../component/footer";
import AboutUs from "../component/aboutus";
function About() {
  return (
    <>
      {" "}
      <Nav />
      <Hero
        cName="hero-mid"
        title="About"
        url="/"
        btnClass="hide"
        heroImg="https://images.unsplash.com/photo-1532767153582-b1a0e5145009?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5pZ2h0fGVufDB8fDB8fHww"
      />
      <AboutUs/>
      <Footer />
    </>
  );
}
export default About;
