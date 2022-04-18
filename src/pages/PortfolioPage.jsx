import React, { Fragment } from 'react';

import NavBar from '../components/Navbar';
import HeadMin from '../containers/HeadMin';
import Button from '../components/Button';
import BannerContact from '../components/BannerContact';
import WorkCard from '../components/WorkCard';
import Footer from '../containers/Footer';

// woks
import workImg1 from '../assets/img/work/1.jpg';
import workImg2 from '../assets/img/work/2.jpg';
import workImg3 from '../assets/img/work/3.jpg';
import workImg4 from '../assets/img/work/4.jpg';

//banner img
import bannerContactImg from '../assets/img/pic-banner.png';


const PortfolioPage = () => {

  const dataWork = [
    { id: 1, img: workImg1, subtitle: "Design", title: "SOFA" },
    { id: 2, img: workImg2, subtitle: "Branding", title: "Branding" },
    { id: 3, img: workImg3, subtitle: "Branding", title: "Branding" },
    { id: 4, img: workImg4, subtitle: "Design", title: "SOFA" },

    { id: 5, img: workImg1, subtitle: "Design", title: "SOFA" },
    { id: 6, img: workImg4, subtitle: "Design", title: "SOFA" }
  ]

  return (
    <Fragment>
      <NavBar name={"Agency"} />
      <HeadMin
        name={"Portfolio"}
        paragraph={"Agency provides a full service range including technical skills, design, business understanding."}
      />

      <section className="section portfolio-page-section">
        <div className="container">
          <div className="head-work">
            <ul className="work-list-btn">
              <li className="work-list-item"><button className="work-btn">Show All <span>14</span> </button></li>
              <li className="work-list-item"><button className="work-btn">Design <span>6</span> </button></li>
              <li className="work-list-item"><button className="work-btn">Branding <span>4</span> </button></li>
              <li className="work-list-item"><button className="work-btn">Illustration <span>3</span> </button></li>
              <li className="work-list-item"><button className="work-btn">Motion <span>1</span> </button></li>
            </ul>
          </div>

          <div className="work__items-box d-flex --work-3-item">
            {dataWork.map(item => (
              <WorkCard key={item.id}
                imgPath={item.img}
                subtitle={item.subtitle}
                title={item.title}
              />
            ))}

          </div>
          <div className="center-content">
            <Button
              type="primaryWhite"
              name="Explore More"
            />
          </div>
        </div>
      </section>
      <section className="section ">
        <div className="container">
          <BannerContact
            colorText={"#fff"}
            bannerContactImg={bannerContactImg}
            bgColor={"#EF6D58"}
          />
        </div>
      </section>
      <Footer name={"Agency"} />
    </Fragment>

  );
};

export default PortfolioPage;