import React, { Component } from "react"
import { Link } from "react-router-dom"
import ImageLazyLoad from "../section-components/ImageLazyLoad"

const instagram = [
  {
    imagejpeg:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-instagram-outdoor.jpg",
    imagewebp:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-instagram-outdoor.webp",
    url: "https://www.instagram.com/p/CIOBTJ_phx-/",
  },
  {
    imagejpeg:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-delhi-agra-instagram.jpg",
    imagewebp:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-delhi-agra-instagram.webp",
    url: "https://www.instagram.com/p/CEdgqHBJVxS/",
  },
  {
    imagejpeg:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-instagram-cycle.jpg",
    imagewebp:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-instagram-cycle.webp",
    url: "https://www.instagram.com/p/CDvKSXhJ9P8/",
  },
  {
    imagejpeg:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-tour-outdoors.jpg",
    imagewebp:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-tour-outdoors.webp",
    url: "https://www.instagram.com/p/CCNXSYxpkOW/",
  },
  {
    imagejpeg:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-india-gate.jpg",
    imagewebp:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-india-gate.webp",
    url: "https://www.instagram.com/p/CBc_k7dJkhM/",
  },
  {
    imagejpeg:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-president-house.jpg",
    imagewebp:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-president-house.webp",
    url: "https://www.instagram.com/p/CAJ8SqjJoHY/",
  },
]
class Footer_v1 extends Component {
  componentDidMount() {
    let publicUrl = process.env.PUBLIC_URL + "/"
    const minscript = document.createElement("script")
    minscript.async = true
    minscript.src = publicUrl + "assets/js/main.js"

    document.body.appendChild(minscript)
  }
  renderContent() {
    return instagram.map((singleData) => {
      const { imageweb, imagejpeg, url } = singleData
      let publicUrl = process.env.PUBLIC_URL + "/"
      return (
        <li>
          <a href={url} target='_blank'>
            <ImageLazyLoad
              imagejpeg={imagejpeg}
              imagewebp={imageweb}
              alt='Delhi by Cycle Instagram images'
            />
            {/* <picture>
              <source
                srcSet={imageweb}
                alt={"Delhi by Cycle Instagram images"}
              />
              <img src={imagejpeg} alt={"Delhi by Cycle Instagram images"} />
            </picture> */}
          </a>
        </li>
      )
    })
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/"
    let imgattr = "Footer logo"

    return (
      <footer className='footer-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='footer-widget widget'>
                <div className='about_us_widget'>
                  <Link to='/' className='footer-logo'>
                    <picture>
                      <source
                        srcSet={
                          "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-logo.png"
                        }
                      />
                      <img
                        src={
                          "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-logo.png"
                        }
                        alt={imgattr}
                      />
                    </picture>
                  </Link>
                  <p>
                    Welcome to DelhiByCycle! A lifetime experience in the
                    streets of Delhi & countryside of India is waiting for you.
                  </p>
                  <ul className='social-icon'>
                    <li>
                      <a
                        className='facebook'
                        href='https://www.facebook.com/delhibycycle'
                        target='_blank'
                      >
                        <i className='fa fa-facebook  ' />
                      </a>
                    </li>
                    <li>
                      <a
                        className='twitter'
                        href='https://twitter.com/delhibycycle'
                        target='_blank'
                      >
                        <i className='fa fa-twitter  ' />
                      </a>
                    </li>
                    <li>
                      <a
                        className='pinterest'
                        href='https://www.instagram.com/delhibycycle/'
                        target='_blank'
                      >
                        <i className='fa fa-instagram' />
                      </a>
                    </li>
                    <li>
                      <a
                        className='pinterest'
                        href='https://in.pinterest.com/dbycycle/'
                        target='_blank'
                      >
                        <i className='fa fa-pinterest' />
                      </a>
                    </li>
                    <li>
                      <a
                        className='pinterest'
                        href='https://www.youtube.com/channel/UCmEP7wlda-Q8mZPk47D8YxA'
                        target='_blank'
                      >
                        <i className='fa fa-youtube' />
                      </a>
                    </li>
                    <li>
                      <a
                        className='pinterest'
                        href='https://www.linkedin.com/company/delhibycycle'
                        target='_blank'
                      >
                        <i className='fa fa-linkedin' />
                      </a>
                    </li>
                    <li>
                      <a
                        className='pinterest'
                        href='https://www.tripadvisor.in/Attraction_Review-g304551-d1788534-Reviews-DelhiByCycle-New_Delhi_National_Capital_Territory_of_Delhi.html'
                        target='_blank'
                      >
                        <i className='fa fa-tripadvisor' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='footer-widget widget '>
                <div className='widget-contact'>
                  <h4 className='widget-title'>Contact us</h4>
                  <p>
                    <i className='fa fa-map-marker' />
                    <span>
                      Jack's Adventures Pvt. Ltd., Asaf Ali Road, New Delhi,
                      India
                    </span>
                  </p>
                  <p className='location'>
                    <i className='fa fa-envelope-o' />
                    <span>info@delhibycycle.com</span>
                  </p>
                  <p className='telephone'>
                    <i className='fa fa-phone base-color' />
                    <span>+91 9811723720</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-6'>
              <div className='footer-widget widget'>
                <h4 className='widget-title'>Quick Link</h4>
                <ul className='widget_nav_menu  viaje-go-top'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/about'>About Us</Link>
                  </li>
                  <li>
                    <Link to='/destination-list'>Destination</Link>
                  </li>
                  <li>
                    <Link to='/tour-details'>Tours</Link>
                  </li>
                  <li>
                    <Link to='/blog'>Blog</Link>
                  </li>
                  <li>
                    <Link to='/contact'>Contact</Link>
                  </li>
                  <li>
                    <Link to='/privacy'>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to='/contact'>Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='footer-widget widget'>
                <h4 className='widget-title'>Instagram Gallery</h4>
                <ul className='widget-instagram-feed'>
                  {this.renderContent()}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='copyright-inner'>
          <div className='copyright-text'>
            © Delh Cycle 2022 All Rights Reserved
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer_v1
