import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import CounterSection from "./components/CounterSection";
import Features from "./components/Features.jsX";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

import ImageView from "./components/popup/ImageView";
import VideoPopup from "./components/popup/VideoPopup";

import Header from "./layouts/Header";
import MobileHeader from "./layouts/MobileHeader";
import Mouse from "./layouts/Mouse";
import Preloader from "./layouts/Preloader";
import ScrollTop from "./layouts/ScrollTop";

function App() {
  return (
    <>
      <Preloader />
      <VideoPopup />
      <ImageView />
      <MobileHeader />
      <Header />
      <Home />
      <Features />
      <About />
      <CounterSection />
      <Portfolio />
      <Skills />
      <Service />
      <Process />
      <Testimonials />
      {/* Tengo qure revisar una imagen que no da dice service 1*/}
      <Contact />
      <Blog />
      <Copyright />
      <Mouse />
      <ScrollTop />
    </>
  );
}

export default App;
