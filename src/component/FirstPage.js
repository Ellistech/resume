import { useState } from "react";
export default function FirstPage() {
  const [firstPage, setFirstPage] = useState({
    heading: "Hello",
    name: "Devanshu",
    links: [
      {
        class: "twitter",
        icon: "bx bxl-twitter",
        link: "http://google.com",
      },
      {
        class: "facebook",
        icon: "bx bxl-facebook",
        link: "http://google.com",
      },
      {
        class: "instagram",
        icon: "bx bxl-instagram",
        link: "http://google.com",
      },
      {
        class: "google",
        icon: "bx bxl-google",
        link: "http://google.com",
      },
      {
        class: "linkedin",
        icon: "bx bxl-linkedin",
        link: "http://google.com",
      },
    ],
  });
  return (
    <section id="hero" class="d-flex flex-column justify-content-center">
      <div class="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>{firstPage.heading}</h1>
        <p>
          {firstPage.name}
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
