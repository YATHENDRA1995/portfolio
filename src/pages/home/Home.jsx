import Footer from "../../shared/components/footer/Footer";
import Header from "../../shared/components/header/Header";
import { MainContainer } from "./Home.style";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Timeline from "./components/timeline/Timeline";

const Home = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Banner />
        <About />
        <Timeline />
        <Skills />
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </MainContainer>
    </>
  );
};

export default Home;
