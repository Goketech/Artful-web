import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Discover from "../components/Discover";
import Join from "../components/Join";
import Why from "../components/Why";
import What from "../components/What";
import Future from "../components/Future";
import Waitlist from "../components/Waitlist";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Discover />
      {/* <Join /> */}
      <Why />
      <What />
      <Future />
      <Waitlist />
      <Contact />
      <Footer />
    </main>
  );
}
