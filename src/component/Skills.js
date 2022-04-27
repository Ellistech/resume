import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { useState, useEffect } from "react";
import { getSkill } from "../service/data.service";



export default function Skills() {
  const [skill, setSkill] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getSkill();
      setSkill(() => ({ ...data }));
      // console.log(data);
    };
    fetchData();
  }, []);


  return (
    <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{skill?.attributes?.title}</h2>
          <p>
           {skill?.attributes?.description}
          </p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6">
          {skill?.attributes?.skills?.map((data, index) => { 
            return (
              <div className="progress" key={index}>
              <span className="skill">
                {data.skillName} <i className="val"></i>
              </span>
              <div className="progress-bar-wrap">
                <Progress
                  role="progressbar"
                  percent={data.percentage}
                  status="active"
                />
              </div>
            </div>
            );
          }
          )}
          </div>
          {/* <div className="col-lg-6">
          {skill?.attributes?.skills?.map((data, index) => { 
            return (
              <div className="progress" key={index}>
              <span className="skill">
                {data.skillName} <i className="val"></i>
              </span>
              <div className="progress-bar-wrap">
                <Progress
                  role="progressbar"
                  percent={data.percent}
                  status="active"
                />
              </div>
            </div>
            );
          }      
          )}
          </div> */}
        </div>
      </div>
    </section>
  );
}
