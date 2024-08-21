import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Service from "./routes/service";
import About from "./routes/about";
import Contact from "./routes/contact";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </div>
  );
}
