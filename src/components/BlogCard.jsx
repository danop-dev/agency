import React, { Fragment } from 'react'

const BlogCard = ({ blogData }) => {
    return (
        <Fragment>
            <div className="blog__wrapper">
                {blogData.map(item => (
                    <div className="blog-card__item">
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

export default BlogCard