import { useState , useEffect} from "react";
import { getHomePage } from "../service/data.service"

export default function Home() {
    const [data, setData] = useState({});
    useEffect(() => {
      const fetchData = async () => {
        const {data} = await getHomePage();
        setData(data);
        // console.log(data);
      };
      fetchData();
    }, []);
    
  const [firstPage] = useState({
   
    links: [
      {
        class: "twitter",
        icon: "bx bxl-twitter",
        link: "https://twitter.com/?lang=en-in",
      },
      {
        class: "facebook",
        icon: "bx bxl-facebook",
        link: "https://www.facebook.com",
      },
      {
        class: "instagram",
        icon: "bx bxl-instagram",
        link: "https://www.instagram.com",
      },
      {
        class: "google",
        icon: "bx bxl-google",
        link: "http://google.com",
      },
      {
        class: "linkedin",
        icon: "bx bxl-linkedin",
        link: "https://www.linkedin.com",
      },
    ],
  });
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
          {firstPage.links.map((item) => {
            return (
              <a href={item.link} class={item.class} target="_blank">
                <i class={item.icon}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

