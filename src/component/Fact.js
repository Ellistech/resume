import { useState, useEffect } from "react";
import { getFact } from "../service/data.service";
import CountUp from 'react-countup';

export default function Fact() {
  const [fact, setFact] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getFact();
      setFact(() => ({ ...data }));
      // console.log(data);
    };
    fetchData();
  }, []);


  return (
    <section id="facts" className="facts">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{fact?.attributes?.title}</h2>
          <p>
            {fact?.attributes?.description}
          </p>
        </div>

        <div className="row">
          {fact?.attributes?.fact?.map((data, index) => {
            return (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="count-box">
                  <i className={data?.icon}></i>
                  <CountUp
                    start={data.counterStart}
                    end={data.counterEnd}
                    duration={1}
                    separator=","
                  />
                  <p>{data?.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
