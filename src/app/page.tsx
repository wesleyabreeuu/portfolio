import Image from "next/image";
import Portfolio from "./components/portfolio";
import "./globals.css";
import Stacks from "./components/stack-div";
import Timeline from "./components/timeline";
import Footer from "./components/footer";
import Projetos from "./components/projetos";
import Depoimento from "./components/depoimento";
import Contato from "./components/contato";

export default function Home() {
  return (
    <>
      <Portfolio />
      <Stacks />
      <Timeline />
      <Projetos />
      <Depoimento />
      <Contato />
      <Footer />
    </>
  );
}
