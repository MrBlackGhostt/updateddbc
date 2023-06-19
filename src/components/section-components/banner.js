import React, { Component } from "react"
import { Link } from "react-router-dom"

class Banner extends Component {
  renderContent() {
    return this.props.data.map((singleData, index) => {
      const {
        location,
        firstname,
        lastname,
        video,
        priceField,
        price,
        duration,
        link,
        durationExtraInfo,
        feature1,
        feature2,
        feature3,
        feature3extra,
        facts1,
        facts2,
        facts3,
        facts3extra,
        imagejpeg,
        imagewebp,
      } = singleData
      console.log(singleData)
      const className = `banner-slider-item banner-bg-${index + 1}`

      return (
        <div
          className={className}
          style={{
            backgroundImage: `url(${imagejpeg})`,
            backgroundPosition: "center",
          }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-xl-8 col-lg-9 offset-xl-2 offset-lg-1'>
                <div className='row'>
                  <div className='col-lg-9 col-sm-8'>
                    <div className='banner-inner'>
                      <p className='banner-cat'>{location}</p>
                      <h2 className='banner-title'>
                        {firstname} <br /> {lastname}
                      </h2>
                    </div>
                  </div>
                  {video && (
                    <div className='col-lg-3 col-sm-4'>
                      <div className='video-popup-btn s-animate-video'>
                        <a href={video} className='video-play-btn mfp-iframe'>
                          <i className='fa fa-play' />
                        </a>
                      </div>
                    </div>
                  )}
                  <div className='col-lg-12 banner-tour-package'>
                    <div className='row'>
                      <div className='col-sm-4'>
                        <div className='tp-price-meta'>
                          <p>{priceField}</p>
                          <h2>{price}</h2>
                          <p className='tp-price-meta-details'>
                            {duration} <span>{durationExtraInfo}</span>
                          </p>
                          <li className='top-bar-btn-booking'></li>
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='tp-price-meta'>
                          <p>{feature1}</p>
                          <h2>{feature2}</h2>
                          <p className='tp-price-meta-details'>
                            {feature3} <span>{feature3extra}</span>
                          </p>
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='tp-price-meta'>
                          <p>{facts1}</p>
                          <h2>{facts2}</h2>
                          <p className='tp-price-meta-details'>
                            {facts3} <span>{facts3extra}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='banner-social-meta'>
            {/* <div className='banner-slider-dots' /> */}
            <ul className='social-icon'>
              <Link className='btn btn-yellow btn-rotate' to={link}>
                Know More <i className='fa fa-paper-plane' />
              </Link>
            </ul>
          </div>
        </div>
      )
    })
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/"
    let imagealt = "image"

    return (
      <div className='banner-area viaje-go-top'>
        <div className='banner-slider'>{this.renderContent()}</div>

        <div className='container'>
          <div className='banner-slider-controls'>
            <div className='slider-nav tp-control-nav' />
            {/*slider-nav*/}
            <div className='tp-slider-extra slider-extra'>
              <div className='text'>
                <span className='first'>01</span>
                <span className='devider'>/</span>
                <span className='last' />
              </div>
            </div>
            {/*slider-extra*/}
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
