import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageLazyLoad from "../section-components/ImageLazyLoad";
import parse from "html-react-parser";

class History extends Component {
  renderContent() {
    return this.props.data.data.map((singleContent) => {
      const { imagejpeg, video, heading, para } = singleContent;
      return (
        <div className="col-lg-4 col-md-6">
          <div className="single-destination-grid style-two">
            <div
              className="col-xl-5 col-lg-6 offset-xl-1 wow animated fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div
                className="video-popup-wrap"
                style={{ width: "304px", marginLeft: "-20px" }}
              >
                <div>
                  <ImageLazyLoad
                    imagejpeg={imagejpeg}
                    imagewebp={imagejpeg}
                    alt="video"
                    style={{ width: "500px" }}
                  />
                  {/* <img style={{ width: "500px" }} src={imagejpeg} alt="video" /> */}
                </div>
                <div className="video-popup-btn">
                  <a href={video} className="video-play-btn mfp-iframe">
                    <i className="fa fa-play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="details">
              <h3 className="title">
                <Link to="/destination-details">{heading}</Link>
              </h3>
              <p className="content">{para}</p>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const { title, para } = this.props.data;

    return (
      <div className="destination-grid-area pd-top-105 viaje-go-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="title">{title}</h2>
                <p>{para}</p>
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

export default History;
