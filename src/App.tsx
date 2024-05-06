import "./App.css";
import "./index.css";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import Partners from "./sections/Partners";
import Reviews from "./sections/Reviews";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Features />
      <Partners />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
