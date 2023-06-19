import React, { Component } from "react"
import { Link } from "react-router-dom"
import parse from "html-react-parser"
import ImageLazyLoad from "../section-components/ImageLazyLoad"

class Client extends Component {
  renderContent() {
    return this.props.data.map((singleData) => {
      const {
        imagejpeg,
        date,
        tourName,
        reviewerName,
        reviewerjpeg,
        reviewerwebp,
        country,
        review,
      } = singleData
      return (
        <div className='swiper-slide'>
          <div className='client-slider-item'>
            <div className='row'>
              <div
                className='col-lg-5 thumb'
                style={{
                  backgroundImage: "url(" + `${imagejpeg})`,
                }}
              >
                <div className='title-meta'>
                  <p>{date}</p>
                  <h3>{tourName}</h3>
                </div>
              </div>
              <div className='col-lg-7'>
                <div className='details'>
                  <div className='tp-review-meta'>
                    <i className='ic-yellow fa fa-star' />
                    <i className='ic-yellow fa fa-star' />
                    <i className='ic-yellow fa fa-star' />
                    <i className='ic-yellow fa fa-star' />
                    <i className='ic-yellow fa fa-star' />
                    <span>5.0</span>
                  </div>
                  <ImageLazyLoad
                    style={{
                      borderRadius: "100%",
                      height: "auto",
                      width: "100px",
                      marginBottom: "10px",
                    }}
                    imagewebp={reviewerwebp}
                    alt={tourName}
                    imagejpeg={reviewerjpeg}
                  />
                  <h4>{reviewerName}</h4>
                  <span>{country}</span>
                  <p>{review}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/"

    return (
      <div className='client-area pd-top-108 pd-bottom-90 jarallax'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-6 col-lg-8'>
              <div className='section-title text-center style-two'>
                <h2 className='title' style={{ color: "#071C55" }}>
                  What Our Clients Say
                </h2>
              </div>
            </div>
          </div>
          <div className='swiper-container client-slider-two'>
            <div className='swiper-wrapper'>
              {/* item */}
              {this.renderContent()}
            </div>
            {/* Add Pagination */}
            <div className='tp-control-nav text-center'>
              <div
                className='slick-arrow swiper-buttons-prev'
                style={{ background: "orange" }}
              >
                <i className='la la-long-arrow-left' />
              </div>
              <div
                className='slick-arrow swiper-buttons-next'
                style={{ background: "orange" }}
              >
                <i className='la la-long-arrow-right' />
              </div>
            </div>
            {/* /.end carousel */}
          </div>
        </div>
      </div>
    )
  }
}

export default Client
