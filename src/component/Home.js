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
    <section id="hero" class="d-flex flex-column justify-content-center">
      <div class="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>{data?.attributes?.title}</h1>
        <p>
          {data?.attributes?.name}
          <span
            class="typed"
            data-typed-items="Designer, Developer, Freelancer, Photographer"
          ></span>
        </p>
        <div class="social-links">
          <div class="social-links">
            <a href="https://twitter.com/?lang=en-in" class="twitter"><i class="bx bxl-twitter"></i></a>
            <a href="https://www.facebook.com" class="facebook"><i class="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com" class="instagram"><i class="bx bxl-instagram"></i></a>
            <a href="https://www.skype.com/en" class="google-plus"><i class="bx bxl-skype"></i></a>
            <a href="https://www.linkedin.com" class="linkedin"><i class="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}
