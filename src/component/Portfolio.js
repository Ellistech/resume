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
    <section id="portfolio" class="portfolio section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Portfolio</h2>
          <p>
            {portfolio.desciption}
          </p>
        </div>

        <div class="row">
          <div
            class="col-lg-12 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* <ul id="portfolio-flters">
              <li onClick={()=> filterCards('all')} class="filter-active">
                All
              </li>
              <li onClick={()=> filterCards('app')}>App</li>
              <li onClick={()=> filterCards('card')}>Card</li>
              <li onClick={()=> filterCards('web')}>Web</li>
            </ul> */}
          </div>
        </div>

        <div
          class="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {
            portfolio.links.map(item => {
              return (
                <div class="col-lg-4 col-md-6 portfolio-item">
                  <div class="portfolio-wrap">
                    <img
                      src={item.image}
                      class="img-fluid"
                      alt=""
                    />
                    <div class="portfolio-info">
                      <h4>{item.title}</h4>
                      <p>{item.subTitle}</p>
                      <div class="portfolio-links">
                        <a
                          href={item.image}
                          data-gallery="portfolioGallery"
                          class="portfolio-lightbox"
                          title="App 1"
                        >
                          <i class="bx bx-plus"></i>
                        </a>
                        <a
                          href="portfolio-details.html"
                          class="portfolio-details-lightbox"
                          data-glightbox="type: external"
                          title="Portfolio Details"
                        >
                          <i class="bx bx-link"></i>
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
