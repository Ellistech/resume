import Layout from "./component/Layout";
import ContactForm from "./component/ContactForm";
import About from "./component/About";
import Fact from "./component/Fact";
import Skills from "./component/Skills";
import Resume from "./component/Resume";
import Portfolio from "./component/Portfolio";
import Service from "./component/Service";
import Testimonials from "./component/Testimonials";
import Home from "./component/Home";

function App() {
  const page = (
    <div>
      <Home />

      <main id="main">
        <About />
        <Fact />
        <Skills />
        {/* <Resume /> */}
        <Portfolio />
        <Testimonials />
        <Service />
        <ContactForm />
      </main>
    </div>
  );
  return <Layout content={page} />;
}

export default App;
