import Image from "next/image";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Discover from "../components/Discover";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Discover />
    </main>
  );
}
