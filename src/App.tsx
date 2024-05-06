import "./App.css";
import "./index.css";
import Features from "./sections/Features";
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
    </div>
  );
}

export default App;
