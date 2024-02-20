import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects"
import Skills from "../components/Skills"


function Home() {
  return (
  <div className=" p-0 bg-gradient-to-br from-blue-950 to-black opacity-90">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </div>
   
  );
}

export default Home;
