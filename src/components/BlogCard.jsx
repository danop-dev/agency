import React, { Fragment } from 'react'

const BlogCard = ({ blogData, type }) => {

    let blogDataMinus = [];
    blogData.forEach(function (item, index) {
        if (index !== 0) { blogDataMinus.push(item); }
    })

    if (type === "firstBig"){
        return (
            <Fragment>
                <div className="blog__wrapper blog__wrapper--col">
                    <div className="blog__col blog__col--large">
                        <div className="blog-card__item">
                            <div className="blog-card__img">
                                <a href={blogData[0].link}>
                                    <img src={blogData[0].img} alt="Blog Img" />
                                </a>
                            </div>
                            <div className="blog-card__info">
                                <div className="blog-card__category">{blogData[0].category}</div>
                                <div className="blog-card__title">{blogData[0].title}</div>
                                <div className="blog-card__date">{blogData[0].date}</div>
                            </div>

                        </div>
                    </div>

                    <div className="blog__col blog__col--min">
                        {blogDataMinus.map(item => (
                            <div key={item.id} className="blog-card__item">
                                <div className="blog-card__img">
                                    <a href={item.link}>
                                        <img src={item.img} alt="Blog Img" />
                                    </a>
                                </div>
                                <div className="blog-card__info">
                                    <div className="blog-card__category">{item.category}</div>
                                    <div className="blog-card__title">{item.title}</div>
                                    <div className="blog-card__date">{item.date}</div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <div className="blog__wrapper">
                    {blogData.map(item => (
                        <div key={item.id} className="blog-card__item">
                            <div className="blog-card__img">
                                <a href={item.link}>
                                    <img src={item.img} alt="Blog Img" />
                                </a>
                            </div>
                            <div className="blog-card__info">
                                <div className="blog-card__category">{item.category}</div>
                                <div className="blog-card__title">{item.title}</div>
                                <div className="blog-card__date">{item.date}</div>
                            </div>

                        </div>
                    ))}
                </div>

            </Fragment>
        )
    }
}

export default BlogCard