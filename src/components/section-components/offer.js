import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageLazyLoad from "../section-components/ImageLazyLoad";
import parse from "html-react-parser";

class Offer extends Component {
  renderContent() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return this.props.data.map((singleData) => {
      const {
        imagejpeg,
        imagewebp,
        name,
        description,
        mode,
        duration,
        rating,
        price,
        offerPrice,
        link,
      } = singleData;
      return (
        <div className="d-list-slider-item" style={{width:'fit-content'}}>
          <div className="single-destinations-list text-center" style={{width:'auto'}}>
            <div className="thumb">
              {offerPrice && <span className="d-list-tag">Special Offer</span>}
              {/* <ImageLazyLoad imagewebp={imagewebp} imagejpeg={imagejpeg} style={{width:'auto' }}/> */}
<img src={imagejpeg} datasrc={imagewebp}  alt="tour-image" style={{width:'auto'}}/>
              <div className="d-list-btn-wrap">
                <div className="d-list-btn viaje-go-top">
                  <Link className="btn btn-yellow" to={link}>
                    Know More <i className="fa fa-paper-plane" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="details" style={{height:'300px',width:'fit-content',overflow:'hidden'}}>
              <h4 className="title">{name}</h4>
              <p className="content" style={{}}>{description}</p>
              <ul className="tp-list-meta border-bt-dot">
                <li>
                  <i className="fa fa-bicycle" /> {mode}
                </li>
                <li>
                  <i className="fa fa-clock-o" /> {duration}
                </li>
                <li>
                  <i className="fa fa-star" /> {rating}
                </li>
              </ul>
              <div className="tp-price-meta tp-price-meta-cl">
                <p>Price</p>
                <h2>{price}</h2>
                {offerPrice && <del> {offerPrice}</del>}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="offer-area pd-top-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center">
                <h2 className="title">A Lifetime experience in India</h2>
                <p>
                  Delhi By Cycle is making people explore the soul of real India
                  with innovative tours, new itineraries, and passionate team.
                  In the last 11 years we hosted 40,000+ over our tours.
                </p>
                <p>
                  <b>Explore Some of our Best Tours Below</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="destinations-list-slider-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-10 offset-xl-1 order-lg-12">
                <div className="destinations-list-slider">
                  {this.renderContent()}
                </div>
              </div>

              <div className="col-lg-2 align-self-center order-lg-11">
                <div className="container">
                  <div className="destinations-slider-controls">
                    <div className="slider-nav tp-control-nav" />
                    {/*slider-nav*/}
                    <div className="tp-slider-extra slider-extra">
                      <div className="text">
                        <span className="first">01 </span>
                        <span className="last" />
                      </div>
                      {/*text*/}
                      <div
                        className="d-list-progress"
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span className="slider__label sr-only" />
                      </div>
                    </div>
                    {/*slider-extra*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Offer;
