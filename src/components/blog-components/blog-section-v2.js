// This is on the main page which show Recent  blog post

import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageLazyLoad from "../section-components/ImageLazyLoad";

class BlogSectionV2 extends Component {
  renderContent() {
    return this.props.data.map((singleData) => {
      const {
        imagejpeg,
        imagewebp,
        date,
        title,
        category,
        shortDescription,
        link,
      } = singleData;
      return (
        <div className="col-lg-4 col-sm-6">
          <div
            className="single-blog wow animated fadeInUp"
            data-wow-duration="0.4s"
            data-wow-delay="0.1s"
          >
            <Link to={link}>
              <div className="thumb">
                <ImageLazyLoad
                  imagejpeg={imagejpeg}
                  alt={title}
                  imagewebp={imagewebp}
                />
                {/* <picture>
                  <source srcSet={imagewebp} type="image/webp" />
                  <source srcSet={imagejpeg} type="image/jpeg" />
                  <img src={imagejpeg} alt={title} />
                </picture> */}

                <Link className="tag" to={link}>
                  {category}
                </Link>
              </div>
              <div className="single-blog-details">
                <p className="date">{date}</p>
                <h4 className="title">{title}</h4>
                <p className="content">{shortDescription}</p>
                <Link className="btn-read-more" to={link}>
                  <span>
                    Read More
                    <i className="la la-arrow-right" />
                  </span>
                </Link>
              </div>
            </Link>
          </div>
        </div>
      );
    });
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="blog-area pd-top-108 viaje-go-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center">
                <h2
                  className="title wow animated fadeInUp"
                  data-wow-duration="0.6s"
                  data-wow-delay="0.1s"
                >
                  Recent Blog Posts
                </h2>
                <p
                  className="wow animated fadeInUp"
                  data-wow-duration="0.6s"
                  data-wow-delay="0.2s"
                >
                  It is not always possible to explain everything on the tours
                  and we always seek to help more with the tours, details,
                  destination, travel hacks, stories, etc. So, here is
                  everything you wanna read.
                </p>
                <Link className="btn btn-yellow" to="/blogs">
                  View All Blogs <i className="fa fa-paper-plane" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

export default BlogSectionV2;
