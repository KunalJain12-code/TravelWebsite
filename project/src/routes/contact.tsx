import Nav from "../component/Navbar";
import Hero from "../component/hero";
import Footer from "../component/footer";
import ContactForm from "../component/contactformat";
function Contact() {
  return (
    <>
      <Nav />
      <Hero
        cName="hero-mid"
        title="Contact"
        url="/"
        btnClass="hide"
        heroImg="https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9hdHxlbnwwfHwwfHx8MA%3D%3D"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
