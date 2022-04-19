import { useState } from "react";

export default function Fact() {
  const [fact, ] = useState([
    {
      icon: "bi bi-emoji-smile",
      datacounter: "",
      title: "Happy Client 1",
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
    <section id="facts" class="facts">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Facts</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row">
          {fact.map((item) => {
            return (
              <div class="col-lg-3 col-md-6">
                <div class="count-box">
                  <i class={item.icon}></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    class="purecounter"
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
