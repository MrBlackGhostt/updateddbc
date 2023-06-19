import React, { Component } from "react"
import { Link } from "react-router-dom"
import ImageLazyLoad from "../section-components/ImageLazyLoad"
import parse from "html-react-parser"

class HolidayCity extends Component {
  renderContent() {
    let publicUrl = process.env.PUBLIC_URL + "/"
    return this.props.data.map((singleData) => {
      const { imagejpeg, imagewebp, location, name, duration, price, link } =
        singleData
      return (
        <div className='col-lg-3 col-sm-6'>
          <div
            className='single-destinations-list style-two wow animated fadeInUp'
            data-wow-duration='0.4s'
            data-wow-delay='0.1s'
          >
            <Link to='tours'>
              <div className='thumb'>
                <ImageLazyLoad imagejpeg={imagejpeg} imagewebp={imagewebp} />
              </div>
              <div className='details'>
                <p className='location'>
                  <img
                    src={
                      "https://delhibycycle.s3.ap-south-1.amazonaws.com/map-icon-delhi-by-cycle.png"
                    }
                    alt='map'
                  />
                  {location}
                </p>

                <h4 className='title'>{name}</h4>
                <p className='content'>{duration}</p>
                <div className='tp-price-meta'>
                  <h2>{price}</h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )
    })
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/"

    return (
      <div className='holiday-plan-area tp-holiday-plan-area mg-top-96'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-6 col-lg-9'>
              <div className='section-title text-center'>
                <h2
                  className='title wow animated fadeInUp'
                  data-wow-duration='0.6s'
                  data-wow-delay='0.1s'
                >
                  Cycle through the history and culture of India
                </h2>
                <p
                  className='wow animated fadeInUp'
                  data-wow-duration='0.6s'
                  data-wow-delay='0.2s'
                >
                  "Experience the true essence of India as you uncover the
                  vibrant soul of its cities! Delve into the captivating blend
                  of history, culture, bustling streets, and warm hospitality on
                  our meticulously crafted cycle tours."
                </p>
                <Link className='btn btn-yellow' to='tours'>
                  View All <i className='fa fa-paper-plane' />
                </Link>
              </div>
            </div>
          </div>
          <div className='row'>{this.renderContent()}</div>
        </div>
      </div>
    )
  }
}

export default HolidayCity
