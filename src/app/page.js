import About from "./sections/About";
// import Benefits from "./sections/Benefits";
import Faq from "./sections/Faq";
import Perks from "./sections/Perks";
import Header from "./sections/Header";
// import Team from "./sections/Team";
import Navbar from "./components/Navbar";
import SneakPeek from "./sections/SneakPeek";
import Companies from "./sections/Companies";
import Forge from "./sections/Forge";
import Instructions from "./sections/Instructions";
import Footer from "./sections/Footer";
// Instructions
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Perks />
      <Forge />
      <Companies/>
      <Faq />
      <SneakPeek/>
      <Instructions/>
      <Footer/>
    </>
  );
}
