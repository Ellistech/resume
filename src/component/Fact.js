import { useState } from "react";

export default function Fact() {
  const [fact, ] = useState([
    {
      icon: "bi bi-emoji-smile",
      datacounter: "1200",
      title: "Happy Client ",
    },
    {
      icon: "bi bi-journal-richtext",
      datacounter: "",
      title: "Project",
    },
    {
      icon: "bi bi-headset",
      datacounter: "",
      title: "Hour of support",
    },
    {
      icon: "bi bi-award",
      datacounter: "",
      title: "Award",
    },
  ]);
  return (
    <section id="facts" className="facts">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Facts</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row">
          {fact.map((item , index) => {
            return (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="count-box">
                  <i className={item.icon}></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end={item.datacounter}
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
