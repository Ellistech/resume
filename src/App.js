import "./App.css";
import Layout from "./Components/Layout";
// import FrontPage from "./Components/FrontPage";
// import Resume from "./Components/Resume";
// import About from "./Components/About";
// import Skills from "./Components/SKills";
// import Fact from "./Components/Fact";
// import Portfolio from "./Components/Portfolio";
// import ContactPage from "./Components/ContactPage";
   import Service from "./Components/Service";
// import Testimonial from "./Components/Testimonial";

function App() {
  const Page = (
    <div>
      {/* <FrontPage />
      <About />
      <Fact />
      <Resume />
      <Skills />
      <Portfolio /> */}
      <Service />
      {/* <Testimonial /> */}
      {/* <ContactPage /> */}
    </div>
  );
  return <Layout content={Page} />;
}

export default App;
