import About from "./components/About";

import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import CounterSection from "./components/CounterSection";
import Features from "./components/Features.jsx";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

import Header from "./layouts/Header";
import MobileHeader from "./layouts/MobileHeader";
import Mouse from "./layouts/Mouse";
import Preloader from "./layouts/Preloader";
import ScrollTop from "./layouts/ScrollTop";

function App() {
  return (
    <>
      <Preloader />
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
      <Contact />
      <Copyright />
      <Mouse />
      <ScrollTop />
    </>
  );
}

export default App;
