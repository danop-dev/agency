import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import NavBar from '../components/Navbar';
import Review from '../components/Review';
import BlogCard from '../components/BlogCard';
import BannerContact from '../components/BannerContact';
import Footer from '../containers/Footer';

//img
import projectImg from '../assets/img/work/1.jpg';
import bannerContactImg from '../assets/img/pic-banner.png';

//testimonial img
import testimonialPers1 from '../assets/img/testimonials/1.png';

//blog img
import blogImg1 from '../assets/img/blog/1.jpg';
import blogImg2 from '../assets/img/blog/2.jpg';
import blogImg3 from '../assets/img/blog/3.jpg';

const PostPage = () => {


  const listItem = (data, type) => {
    let key = 1;
    return (
      <Fragment>
        {
          type === "ol"
            ?
            <ol className="text-list --decimalList">
              {data.map(item => (
                <li key={key++} className="text-list__item">{item}</li>
              ))}
            </ol>
            :
            <ul className="text-list --circleList">
              {data.map(item => (
                <li key={key++} className="text-list__item">{item}</li>
              ))}
            </ul>
        }
      </Fragment>
    )
  }

  return (
    <Fragment>
      <NavBar name={"Agency"} />
      <section className="section info-section--project">
        <div className="container--min">
          <div className="info-project__wrapper">
            <a href="/portfolio" className="back-btn">Back to Blog</a>
            <h2 className="h2-title">Agency is a business you hire to outsource</h2>
            <div className="info-date__article-line ">
              <p className="article-author">In <span>Stories</span> by <span>Gabriel Pires</span></p>
              <div className="article-date ">Date <span>7 Dec, 2021</span></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="personal-img">
            <img src={projectImg} alt="Me" />
          </div>
        </div>
        <div className="container--min">
          <div className="text-info-box">
            <p className="paragraph">Agency provides a full service range including technical skills, design, business understanding.</p>
            <p className="paragraph paragraph--opacity">Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
          </div>
        </div>

        <div className="container--min">

          <div className="text-info-box">
            <h4 className="h4-title">Promote your product</h4>
            <p className="paragraph paragraph--opacity">Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>

            {listItem(["Digital marketing", "Efforts instead", "Handling in-house"], "ul")}

            <p className="paragraph paragraph--opacity">Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
          </div>

          <div className="text-info-box">
            <h4 className="h4-title">Service online and help</h4>
            <p className="paragraph paragraph--opacity">Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>

            {listItem(["Marketing efforts", "Instead of handling", "In-house"], "ol")}

            <p className="paragraph paragraph--opacity">Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
          </div>

          <div className="text-info__card">
            <p className="paragraph">Provide your business with a variety of digital solutions to promote your product or service online and help you.</p>
          </div>

          <p className="paragraph paragraph--opacity">Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</p>

          <div className="text-info-author">
            <div className="line"></div>
            <div className="text-info-author-info">
              <Review
                fontColor={"#391400"}
                img={testimonialPers1}
                name={"Samuil Sadovsky"}
                pos={"Editor"}
                sizeImg={80}
              />
              <ul className="footer__social-list">
                <li className="social-li-item">
                  <a href="#" className="social__link">
                    <FontAwesomeIcon icon={faFacebookF} className="social__link-icon" />
                  </a>
                </li>
                <li className="social-li-item">
                  <a href="#" className="social__link">
                    <FontAwesomeIcon icon={faTwitter} className="social__link-icon" />
                  </a>
                </li>
                <li className="social-li-item">
                  <a href="#" className="social__link">
                    <FontAwesomeIcon icon={faInstagram} className="social__link-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="line"></div>
          <h4 className="h4-title">Related Articles</h4>
          <BlogCard
            blogData={[
              {
                id: 1,
                img: blogImg1,
                link: "#",
                category: "Stories",
                title: "Agency is a business you hire to outsource",
                date: "5 Nov, 2021"
              },
              {
                id: 2,
                img: blogImg2,
                link: "#",
                category: "Design",
                title: "Outsource your digital marketing efforts",
                date: "29 Oct, 2021"
              },
              {
                id: 3,
                img: blogImg3,
                link: "#",
                category: "Design",
                title: "Outsource your digital marketing efforts",
                date: "29 Oct, 2021"
              }
            ]}
          />
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
  )
}

export default PostPage;