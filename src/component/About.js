import { useState , useEffect } from "react";
import { getAbout } from "../service/data.service";

export default function About() {
  const [data , setData] = useState({});
useEffect (() => {
  const fetchData = async () => {
    const { data } = await getAbout();
    setData(data);
    // console.log(data);
  };
  fetchData();
}, []);

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
          <p>
            {data?.attributes?.description}
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="assets/img/dev.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>{data?.attributes?.role}</h3>
            <p className="font-italic">
             {data?.attributes?.subtitle}
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Birthday:</strong> <span>{data?.attributes?.birthday}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Website:</strong> <span>{data?.attributes?.website}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong> <span>{data?.attributes?.phone}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>City:</strong> <span>{data?.attributes?.city}</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Age:</strong>
                    <span>{data?.attributes?.age}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Degree:</strong> <span>{data?.attributes?.degree}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>PhEmailone:</strong>
                    <span>{data?.attributes?.email}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Freelance:</strong> <span>{data?.attributes?.freelance}</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
             {data?.attributes?.aboutUs}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
