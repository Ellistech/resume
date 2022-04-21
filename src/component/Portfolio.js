import { useState } from "react";

export default function Portfolio() {
  const data = {
    desciption: `Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.`,
    links: [
      {
        image: "assets/img/portfolio/portfolio-1.jpg",
        title: "App 1",
        subTitle: "App",
        type: 'web',
      },
      {
        image: "assets/img/portfolio/portfolio-2.jpg",
        title: "App 1",
        subTitle: "App",
        type: 'app',
      },
      {
        image: "assets/img/portfolio/portfolio-3.jpg",
        title: "App 1",
        subTitle: "App",
        type: 'card',
      },
      {
        image: "assets/img/portfolio/portfolio-4.jpg",
        title: "App 1",
        subTitle: "App",
        type: 'web',
      },
      {
        image: "assets/img/portfolio/portfolio-5.jpg",
        title: "App 1",
        subTitle: "App",
        type: 'app',
      },
      {
        image: "assets/img/portfolio/portfolio-6.jpg",
        title: "App 1",
        subTitle: "App",
        type: 'app',
      },
      {
        image: "assets/img/portfolio/portfolio-7.jpg",
        title: "App 1",
        subTitle: "App",
        type: 'app',
      },
      {
        image: "assets/img/portfolio/portfolio-8.jpg",
        title: "App 1",
        subTitle: "App",
        type: 'web',
      },
      {
        image: "assets/img/portfolio/portfolio-9.jpg",
        title: "App 1",
        subTitle: "App",
        type: 'app',
      },
    ]
  }
  const [portfolio, setPortfolio] = useState(data);

  const filterCards = function(type){
    let selectedCards = [];
    if(type === 'all'){
      selectedCards = data.links;
    } else {
      selectedCards = data.links.filter(item=> item.type === type);
    }
    const newPortfolio = {
      ...portfolio,
      links: selectedCards
    };
    setPortfolio({
      ...newPortfolio
    });
  }
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            {portfolio.desciption}
          </p>
        </div>

        <div className="row">
          <div
            className="col-lg-12 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* <ul id="portfolio-flters">
              <li onClick={()=> filterCards('all')} className="filter-active">
                All
              </li>
              <li onClick={()=> filterCards('app')}>App</li>
              <li onClick={()=> filterCards('card')}>Card</li>
              <li onClick={()=> filterCards('web')}>Web</li>
            </ul> */}
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {
            portfolio.links.map((item  , index)=> {
              return (
                <div className="col-lg-4 col-md-6 portfolio-item" key={index}>
                  <div className="portfolio-wrap">
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>{item.title}</h4>
                      <p>{item.subTitle}</p>
                      <div className="portfolio-links">
                        <a
                          href={item.image}
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title="App 1"
                        >
                          <i className="bx bx-plus"></i>
                        </a>
                        <a
                          href="portfolio-details.html"
                          className="portfolio-details-lightbox"
                          data-glightbox="type: external"
                          title="Portfolio Details"
                        >
                          <i className="bx bx-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}
