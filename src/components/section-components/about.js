import React, { Component } from "react";
import ImageLazyLoad from "../section-components/ImageLazyLoad";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class About extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    const {
      heading,
      para1,
      para2,
      image1webp,
      image1jpeg,
      image2webp,
      image2jpeg,
    } = this.props.data;

    return (
      <div className="about-section pd-top-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="section-title mb-lg-0">
                <h2 className="title">{heading}</h2>
                <p style={{ textAlign: "justify" }}>
                  {para1} <br />
                  <br />
                  <b>Being original is not that easy</b>, {para2}
                </p>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-2">
              <div className="thumb about-section-right-thumb">
                <ImageLazyLoad
                  imagewebp={image1webp}
                  imagejpeg={image1jpeg}
                  alt={"img"}
                />
                <ImageLazyLoad
                  className="about-absolute-thumb"
                  imagewebp={image2webp}
                  imagejpeg={image2jpeg}
                  alt={"img"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
