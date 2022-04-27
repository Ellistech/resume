import { useState, useEffect } from "react";
import React from "react";
import { getTestimonial } from "../service/data.service";




export default function Testimonials() {
  const [testimonial, setTestimonial] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getTestimonial();
      setTestimonial(() => ({ ...data }));
      // console.log(data);
    };
    fetchData();
  }, []);

  
  return (
    <React.Fragment>
   
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{testimonial?.attributes?.title}</h2>
        </div>
        <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">
           
              {testimonial?.attributes?.testimonial?.map((data, index) => {
                return (
                  <div className="swiper-slide" key={index}>
                  <div className="testimonial-item" >
                    <img src="assets/img/icon.jpg" className="testimonial-img" alt="" />
                    <h3>{data?.name}</h3>
                    <h4>{data?.role}</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      {data?.description}
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                   
                  </div>
                  </div>
                )
              })
              }
           
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
    </React.Fragment>
  )

}
