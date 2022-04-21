import { useState, useEffect } from "react";
import { getHomePage } from "../service/data.service"

export default function Home() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getHomePage();
      setData(data);
      // console.log(data); 
    };
    fetchData();
  }, []);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>{data?.attributes?.title}</h1>
        <p>
          {data?.attributes?.name}
          <span
            className="typed"
            data-typed-items="Designer, Developer, Freelancer, Photographer"
          ></span>
        </p>
        <div className="social-links">
          <div className="social-links">
            <a href="https://twitter.com/?lang=en-in" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="https://www.facebook.com" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="https://www.skype.com/en" className="google-plus"><i className="bx bxl-skype"></i></a>
            <a href="https://www.linkedin.com" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}
