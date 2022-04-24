import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";


export default function Skills() {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                HTML <i className="val"></i>
              </span>
              <div className="progress-bar-wrap">
                <Progress
                  role="progressbar"
                  percent={80}
                  status="active"
                />
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                CSS <i className="val"></i>
              </span>
              <div className="progress-bar-wrap">
              <Progress
                  role="progressbar"
                  percent={70}
                  status="active"
                />
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                JavaScript <i className="val"></i>
              </span>
              <div className="progress-bar-wrap">
              <Progress
                  role="progressbar"
                  percent={70}
                  status="active"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                PHP <i className="val"></i>
              </span>
              <div className="progress-bar-wrap">
              <Progress
                  role="progressbar"
                  percent={50}
                  status="active"
                />
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                WordPress/CMS <i className="val"></i>
              </span>
              <div className="progress-bar-wrap">
              <Progress
                  role="progressbar"
                  percent={37}
                  status="active"
                />
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                Photoshop <i className="val"></i>
              </span>
              <div className="progress-bar-wrap">
              <Progress
                  role="progressbar"
                  percent={55}
                  status="active"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
