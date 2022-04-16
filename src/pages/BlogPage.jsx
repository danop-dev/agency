import React, { Fragment } from 'react';

import NavBar from '../components/Navbar';
import Footer from '../containers/Footer';
import HeadMin from '../containers/HeadMin';
import BannerContact from '../components/BannerContact';
import BlogCard from '../components/BlogCard';
import Button from '../components/Button';
import Newsleter from '../components/Newsleter';

//img
import bannerContactImg from '../assets/img/pic-banner.png';

//blog img
import blogImg1 from '../assets/img/blog/1.jpg';
import blogImg2 from '../assets/img/blog/2.jpg';
import blogImg3 from '../assets/img/blog/3.jpg';

const BlogPage = () => {
  return (
    <Fragment>
      <NavBar name={"Agency"} />
      <HeadMin
        name={"Blog Articles"}
        paragraph={"Agency provides a full service range including technical skills, design, business understanding."}
      />

      <section className="section blog-section">
        <div className="container">
          <div className="blog__wrapper">
            <div className="blog__wrapper--2items-row">
              <BlogCard
                blogData={[
                  {
                    img: blogImg1,
                    link: "#",
                    category: "Stories",
                    title: "Agency is a business you hire to outsource",
                    date: "5 Nov, 2021"
                  },
                  {
                    img: blogImg2,
                    link: "#",
                    category: "Design",
                    title: "Outsource your digital marketing efforts",
                    date: "29 Oct, 2021"
                  }
                ]}
              />
            </div>
            <div className="line"></div>
            <BlogCard
              blogData={[
                {
                  img: blogImg1,
                  link: "#",
                  category: "Stories",
                  title: "Agency is a business you hire to outsource",
                  date: "5 Nov, 2021"
                },
                {
                  img: blogImg2,
                  link: "#",
                  category: "Design",
                  title: "Outsource your digital marketing efforts",
                  date: "29 Oct, 2021"
                },
                {
                  img: blogImg3,
                  link: "#",
                  category: "Design",
                  title: "Outsource your digital marketing efforts",
                  date: "29 Oct, 2021"
                },
                {
                  img: blogImg1,
                  link: "#",
                  category: "Stories",
                  title: "Agency is a business you hire to outsource",
                  date: "5 Nov, 2021"
                },
                {
                  img: blogImg2,
                  link: "#",
                  category: "Design",
                  title: "Outsource your digital marketing efforts",
                  date: "29 Oct, 2021"
                },
                {
                  img: blogImg3,
                  link: "#",
                  category: "Design",
                  title: "Outsource your digital marketing efforts",
                  date: "29 Oct, 2021"
                }
              ]}
            />
          </div>

          <div className="center-content">
            <Button
              type="primaryWhite"
              name="Load More"
            />
          </div>
        </div>

      </section>

      <section className="section newsletter__blog-section">
        <div className="container">
          <div className="line"></div>
          <Newsleter />
          <div className="line"></div>
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
      <Footer name={"Agency"}/>

    </Fragment>
  );
};

export default BlogPage;