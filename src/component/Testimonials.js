import { useState } from "react";

export default function Testimonials() {
  const [testimonial] = useState([
    {
      heading: "Devanshu chauhan",
      title: "Ceo & Founder",
      description:
        "Proin iaculis purus consequat sem cure digni ssim donec devanshu chauhan from India Proin iaculis purus consequat sem cure digni ssim donec ",
    },
    {
      heading: "Saul Goodman",
      title: "Ceo & Founder",
      description:
        "Proin iaculis purus consequat sem cure digni ssim donec devanshu chauhan from India Proin iaculis purus consequat sem cure digni ssim donec",
    },
    {
      heading: "Saul Goodman",
      title: "Ceo & Founder",
      description:
        "Proin iaculis purus consequat sem cure digni ssim donec devanshu chauhan from India Proin iaculis purus consequat sem cure digni ssim donec",
    },
  ]);
  return (
    <section id="testimonials" class="testimonials section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Testimonials</h2>
        </div>

        <div
          class="testimonials-slider swiper-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="swiper-wrapper">
            {testimonial.map((item) => {
              return (
                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img
                      src="assets/img/profile-img1.jpg"
                      class="testimonial-img"
                      alt=""
                    />
                    <h3>{item.heading}</h3>
                    <h4>{item.title}</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      {item.description}
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
