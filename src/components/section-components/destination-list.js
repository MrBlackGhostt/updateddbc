import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageLazyLoad from "../section-components/ImageLazyLoad";
import parse from "html-react-parser";

class DestinationList extends Component {
  renderContent() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return this.props.data.map((singleData) => {
      const {
        imagejpeg,
        imagewebp,
        location,
        name,
        duration,
        tagline,
        link,
        tourType,
        activityLevel,
        price,
      } = singleData;
      return (
        <div className="col-lg-4 col-md-6">
          <div className="single-destination-grid text-center">
            <Link to={link}>
              <div className="thumb">
                <ImageLazyLoad
                  imagejpeg={imagejpeg}
                  imagewebp={imagewebp}
                  alt={name}
                />
                {/* <picture>
                  <source srcSet={imagewebp} alt={name} />
                  <img src={imagejpeg} alt={name} />
                </picture> */}
              </div>
              <div className="details">
                <div className="tp-review-meta">
                  <span>{location}</span>
                </div>
                <h3 className="title">{name}</h3>
                <p style={{ textAlign: "left", marginLeft: "52px" }}>
                  {tagline}
                </p>
                <p style={{ textAlign: "left", marginLeft: "52px" }}>
                  <b>Duration:</b> {duration}
                </p>
                <p style={{ textAlign: "left", marginLeft: "52px" }}>
                  <b>Tour Type:</b> {tourType}
                </p>
                <p style={{ textAlign: "left", marginLeft: "52px" }}>
                  <b>Activity Level:</b> {activityLevel}
                </p>
                <p style={{ textAlign: "left", marginLeft: "52px" }}>
                  <b>Price:</b> {price}
                </p>
                <Link className="btn btn-gray" to={link}>
                  <span>
                    View More Details
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
    let imagealt = "image";

    return (
      <div className="destination-area viaje-go-top">
        <div className="container-bg mg-top--70">
          <div className="container">
            <div className="row justify-content-center">
              {this.renderContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DestinationList;
