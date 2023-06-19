import * as React from "react"

import { Component } from "react"
import { Link } from "react-router-dom"
import ImageLazyLoad from "../section-components/ImageLazyLoad"
import parse from "html-react-parser"
import { connect } from "react-redux"
import {
  onAuthFieldChanged,
  toggleNotification,
  countIncrease,
} from "../../actions"
import axios from "axios"
import Foo from "./star-rating"
import Rating from "@mui/material/Rating"
import Stack from "@mui/material/Stack"
import CountrySelector from "./CountrySelect"




class TourDetails extends Component {
  componentDidMount() {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    document.body.appendChild(script)
  }
  renderHostDescription(host) {
    return host.description.map((singleContent) => {
      return <p style={{ textAlign: "justify" }}>{singleContent}</p>
    })
  }
  async openPaymentWindow() {
    console.log(this.props)
    const data = await axios.post("https://www.delhibycycle.com/razorpay", {
      amount: this.props.people * this.props.data.price,
      name: this.props.contactname ? this.props.contactname : "",
      email: this.props.contactemail ? this.props.contactemail : "",
      phone: this.props.contactnumber ? this.props.contactnumber : "",
      date: this.props.date ? this.props.date : "",
      people: this.props.people ? this.props.people : "",
      tourName: this.props.data.tourName,
      category: this.props.category,
    })

    const newfunc = this.props.toggleNotification
    // rzp_live_WDu5gN6on4Dgvv
    var options = {
      key: "rzp_live_WDu5gN6on4Dgvv", // Enter the Key ID generated from the Dashboard
      amount: data.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Delhi By Cycle",
      description: this.props.data.tourName + "Booking",
      image:
        "https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-logo.png",
      order_id: data.data.order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        try {
          const data = await axios.post(
            "https://www.delhibycycle.com/razorpaybooking",
            {
              paymentId: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
              signature: response.razorpay_signature,
            }
          )
          if (data.data.length > 0) {
            newfunc(data.data)
          }
        } catch (err) {
          if (err) {
            newfunc(
              "Something went wrong. Please contact the customer care team"
            )
          }
        }
      },
      prefill: {
        name: this.props.contactname,
        email: this.props.contactemail,
        contact: this.props.contactnumber,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    }
    var rzp1 = new window.Razorpay(options)
    rzp1.open()
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code)
      alert(response.error.description)
      alert(response.error.source)
      alert(response.error.step)
      alert(response.error.reason)
      alert(response.error.metadata.order_id)
      alert(response.error.metadata.payment_id)
    })
  }
  renderReviews() {
    return (
      this.props.data.reviews &&
      this.props.data.reviews.length > 0 &&
      this.props.data.reviews.map((singleReview) => {
        const { imagejpeg, imagewebp, name, date, ratings, country, review } =
          singleReview
        return (
          <li>
            <div className='single-comment-wrap'>
              <div className='thumb'>
                <ImageLazyLoad
                  imagewebp={imagewebp}
                  imagejpeg={imagejpeg}
                  alt='review'
                />
              </div>
              <div className='content'>
                <h4 className='title'>{name}</h4>
                <span className='date'>{date}</span>
                <div className='tp-review-meta'>
                  <i className='ic-yellow fa fa-star' />
                  <i className='ic-yellow fa fa-star' />
                  <i className='ic-yellow fa fa-star' />
                  <i className='ic-yellow fa fa-star' />
                  <i className='ic-yellow fa fa-star' />
                </div>
                {this.renderReviewDescription(review)}
              </div>
            </div>
          </li>
        )
      })
    )
  }
  renderReviewDescription(review) {
    return review.map((singlePara) => {
      return <p>{singlePara}</p>
    })
  }
  renderFeatures(highlights) {
    let publicUrl = process.env.PUBLIC_URL + "/"
    return highlights.map((singleFeature, index) => {
      const { time, name, imagewebp, imagejpeg, shortDescription } =
        singleFeature
      return (
        <div className='col-lg-4 col-md-4'>
          <div className='single-blog'>
            <div className='p-list'>
              <div className='list'>{index + 1}</div>
              <p>{time}</p>
            </div>
            <div className='thumb'>
              <ImageLazyLoad
                imagewebp={imagewebp}
                imagejpeg={imagejpeg}
                alt={name}
              />
            </div>
            <div className='single-blog-details'>
              <h4 className='title'>{name}</h4>
              <p className='content'>{shortDescription}</p>
            </div>
          </div>
        </div>
      )
    })
  }
  renderTourDescription(data) {
    return data.map((singleData) => {
      return <p style={{ textAlign: "justify" }}>{singleData}</p>
    })
  }
  renderTourSuggestion(tourSuggestions) {

    return tourSuggestions.map((singleTour) => {
      return (
        <li>
          <Link
            to={
              this.props.location.includes("/tours/cycle-tours") ||
              this.props.location.includes("/tours/walking-tours") ||
              this.props.location.includes("/tours/bicycle-touring")
                ? singleTour.link1
                : singleTour.link
            }
          >
            <div class='media'>
              <ImageLazyLoad
                imagewebp={singleTour.imagewebp}
                imagejpeg={singleTour.imagejpeg}
              />
              <div class='media-body'>
                <span class='post-date'>{singleTour.title}</span>
                <h6 class='title'>
                  <a href='#/blog-details'>{singleTour.heading}</a>
                </h6>
              </div>
            </div>
          </Link>
        </li>
      )
    })
  }
  renderInclusions(tourDetailsAndInclusion) {
    let publicUrl = process.env.PUBLIC_URL + "/"
    return tourDetailsAndInclusion.map((singleData) => {
      const { title, icon, description, iconwebp, iconjpeg } = singleData
      return (
        <div className='col-xl-4 col-sm-6'>
          <div className='single-package-included'>
            <ImageLazyLoad
              imagewebp={iconwebp}
              imagejpeg={iconjpeg}
              alt={title}
            />

            <h6>{title}</h6>
            <p>{description}</p>
          </div>
        </div>
      )
    })
  }

  renderContent() {
    if (this.props.data && this.props.data.photos) {
      console.log("new photos", this.props.data.photos)
      const { tourName } = this.props.data
      return this.props.data.photos.map((singleData, index) => {
        return (
          <div className='d-client-review-slider-item'>
            <div className='single-destination-grid text-center'>
              <div className='thumb'>
                <img style={{ width: "100%" }} src={singleData.imagejpeg} />
              </div>
            </div>
          </div>
        )
      })
    }
    // return null;
    else {
      console.log("the current count is", this.props.count)
      console.log("old photos", this.props.sliderData)
      return this.props.sliderData.map((singleData, index) => {
        return (
          <div className='d-client-review-slider-item'>
            <div className='single-destination-grid text-center'>
              <img src={singleData.imagejpeg} />
            </div>
          </div>
        )
      })
    }
  }

  renderTags(tags) {
    return tags.map((singleTag) => {
      return (
        <a style={{ backgroundColor: "orange" }} href='#'>
          {singleTag}
        </a>
      )
    })
  }
  renderUpdatedPhotos() {
    if (this.props.data && this.props.data.photos) {
      this.props.countIncrease()
      this.setState({ photos: this.props.data.photos })
    }
  }
  checkCount() {
    if (this.props.count === 0 && this.props.data && this.props.data.photos) {
      console.log("need to increase the count")
      this.props.countIncrease()
      this.setState({ photos: this.props.data.photos })
    }
  }
  render() {
    const {
      location,
      tourName,
      duration,
      serviceLocation,
      price,
      groupSize,
      bookingType,
      tourSuggestions,
      time,
      rating,
      level,
      date,
      feature,
      tagline,
    } = this.props.data
	console.log("tour suggestions");
	console.log(tourSuggestions)
    const rate = parseFloat(rating)
    return (
      <div className='tour-details-area'>
        <div className='tour-details-gallery'>
          <div className='container-bg'>
            <div className='container'>
              <div
                className='destinations-client-review-slider tp-common-slider-style'
                style={{ marginBottom: "35px" }}
              >
                {this.renderContent()}
                {this.checkCount()}
              </div>

              <div className='row' style={{ color: "#777" }}>
                <div className='col-xl-3 col-lg-4'>
                  <div className='details'>
                    <p className='location mb-0' style={{ color: "#666" }}>
                      <i
                        className='fa fa-map-marker'
                        style={{ color: "#777" }}
                      />
                      {location}
                    </p>
                    <h4 className='title' style={{ color: "#666" }}>
                      {tourName}
                    </h4>
                    <p className='content' style={{ color: "#666" }}>
                      {duration}
                    </p>

                    <div style={{ display: "flex" }}>
                      <Stack spacing={1}>
                        <Rating
                          name='half-rating-read'
                          value={rate}
                          precision={0.5}
                          readOnly
                        />
                      </Stack>
                      <div className='tp-review-meta'>
                        {" "}
                        <span>{rate}</span>
                      </div>
                    </div>
                    {this.props.data.tags && (
                      <div className='all-tags' style={{ color: "#666" }}>
                        {this.renderTags(this.props.data.tags)}
                      </div>
                    )}
                  </div>
                </div>
                <div className='col-xl-9 col-lg-8'>
                  <div className='book-list-warp'>
                    <p className='book-list-content' style={{ color: "#666" }}>
                      {bookingType}
                    </p>
                    <div className='tp-price-meta'>
                      <p style={{ color: "#666" }}>Price</p>
                      <h2>INR {price}</h2>
                    </div>
                  </div>
                  <ul className='tp-list-meta border-tp-solid'>
                    <li style={{ color: "#666" }} className='ml-0'>
                      <i
                        className='fa fa-calendar-o'
                        style={{ color: "#666" }}
                      />{" "}
                      {date}
                    </li>
                    <li style={{ color: "#666" }}>
                      <i className='fa fa-clock-o' style={{ color: "#666" }} />{" "}
                      {time}
                    </li>
                    <li style={{ color: "#666" }}>
                      <i className='fa fa-users' style={{ color: "#666" }} />
                      {groupSize}
                    </li>
                    <li style={{ color: "#666" }}>
                      <i
                        className='fa fa-snowflake-o'
                        style={{ color: "#666" }}
                      />{" "}
                      {level}
                    </li>
                    <li style={{ color: "#666" }}>
                      <i className='fa fa-star' style={{ color: "#666" }} />{" "}
                      {rating}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='tour-details-wrap'>
                <h4 className='single-page-small-title'>{tagline}</h4>
                {this.props.data.tourShortDescription &&
                  this.renderTourDescription(
                    this.props.data.tourShortDescription
                  )}
                <div className='package-included-area'>
                  <h4 className='single-page-small-title'>Included</h4>
                  {this.props.data.tourDetailsAndInclusion && (
                    <div className='row'>
                      {this.renderInclusions(
                        this.props.data.tourDetailsAndInclusion
                      )}
                    </div>
                  )}
                </div>
                <div className='package-included-location'>
                  <h4 className='single-page-small-title'>{feature}</h4>
                  {this.props.data.highlights && (
                    <div className='row'>
                      {this.renderFeatures(this.props.data.highlights)}
                    </div>
                  )}
                </div>
                <div className='host-area'>
                  <div className='single-host-wrap text-center'>
                    {this.props.data.host && (
                      <div className='thumb'>
                        <ImageLazyLoad
                          imagewebp={this.props.data.host[0].imagewebp}
                          imagejpeg={this.props.data.host[0].imagejpeg}
                          alt='host'
                        />
                      </div>
                    )}
                    {this.props.data.host && (
                      <h4>{this.props.data.host[0].name}</h4>
                    )}
                    {this.props.data.host &&
                      this.renderHostDescription(this.props.data.host[0])}
                    <Link className='btn btn-yellow' to='/contact'>
                      Contact Team
                    </Link>
                  </div>
                </div>
                <div className='service-location-map'>
                  <h4 className='single-page-small-title'>Meeting Point</h4>
                  <div className='service-location-map'>
                    <iframe src={serviceLocation} />
                  </div>
                </div>
                <div className='comments-area tour-details-review-area'>
                  <h4 className='comments-title'>Reviews</h4>
                  <ul className='comment-list mb-0'>{this.renderReviews()}</ul>
                </div>
                <div className='location-review-area'>
                  <form className='tp-form-wrap bg-gray tp-form-wrap-one'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <h4 className='single-page-small-title'>
                          Write A Review
                        </h4>
                      </div>
                      <div className='col-lg-6'>
                        <div className='text-lg-right'>
                          <span className='mr-3 ml-0'>Assigned Rating</span>
                          <Foo />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <label className='single-input-wrap'>
                          <span className='single-input-title'>Name</span>
                          <input
                            type='text'
                            name='name'
                            value={this.props.contactname}
                            onChange={(e) =>
                              this.props.onAuthFieldChanged(
                                "contactname",
                                e.target.value
                              )
                            }
                          />
                        </label>
                      </div>
                      <div className='col-lg-6'>
                        <label className='single-input-wrap'>
                          <span className='single-input-title'>Email</span>
                          <input
                            type='email'
                            name='email'
                            value={this.props.contactemail}
                            onChange={(e) =>
                              this.props.onAuthFieldChanged(
                                "contactemail",
                                e.target.value
                              )
                            }
                          />
                        </label>
                      </div>
                      <div className='col-lg-12'>
                        <label className='single-input-wrap'>
                          <span className='single-input-title'>Comments</span>
                          <textarea
                            defaultValue={""}
                            value={this.props.contactmessage}
                            onChange={(e) =>
                              this.props.onAuthFieldChanged(
                                "contactmessage",
                                e.target.value
                              )
                            }
                            name='message'
                          />
                        </label>
                      </div>
                      <div className='col-12'>
                        <a className='btn btn-yellow' href='#'>
                          Send
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className='col-lg-4'>
              <div className='sidebar-area sidebar-area-4'>
                <div className='widget tour-list-widget'>
                  <h2 className='widget-title'>Book Tour</h2>

                  <div className='widget-tour-list-meta'>
                    <div className='single-widget-search-input-title'>
                      <i className='fa fa-person-walking-luggage' /> Tour Type
                    </div>

                    <div className='single-widget-search-input'>
                      <select
                        onChange={(e) => {
                          console.log(e.target.value)
                          this.props.onAuthFieldChanged(
                            "category",
                            e.target.value
                          )
                        }}
                        name='cars'
                        id='cars'
                        style={{
                          border: "1px solid #eaeaea",
                          color: "#666",
                          width: "100%",
                          height: "50px",
                          lineHeight: "50px",
                          padding: "0 20px",
                          backgroundPosition: "20px",
                          borderRadius: "4px",
                          marginBottom: "22px",
                        }}
                      >
                        <option value='Regular Tour'>Regular Tour</option>
                        <option value='Couple Tour'>Private Couple Tour</option>
                        <option value='Family Tour'>Private Family Tour</option>
                      </select>

                      <div className='single-widget-search-input-title'>
                        <i className='fa fa-user'></i> Name
                      </div>
                      <div className='single-widget-search-input'>
                        <input
                          type='text'
                          name='name'
                          placeholder='name'
                          value={this.props.contactname}
                          onChange={(e) =>
                            this.props.onAuthFieldChanged(
                              "contactname",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className='single-widget-search-input-title'>
                        <i className='fa fa-envelope'></i> Email
                      </div>
                      <div className='single-widget-search-input'>
                        <input
                          type='email'
                          name='email'
                          placeholder='email'
                          value={this.props.contactemail}
                          onChange={(e) =>
                            this.props.onAuthFieldChanged(
                              "contactemail",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className='single-widget-search-input-title'>
                        <i className='fa fa-phone'></i> Phone
                      </div>
                      <div className='single-widget-search-input'>
                        <input
                          type='text'
                          name='number'
                          placeholder='Phone'
                          value={this.props.contactnumber}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "")
                            this.props.onAuthFieldChanged(
                              "contactnumber",
                              value
                            )
                          }}
                        />
                      </div>
                      <div className='single-widget-search-input-title'>
                        <i className='fa fa-calendar-minus-o'></i>Tour Date
                      </div>
                      <div className='single-widget-search-input'>
                        <input
                          type='date'
                          value={this.props.date}
                          onChange={(e) => {
                            this.props.onAuthFieldChanged(
                              "date",
                              e.target.value
                            )
                          }}
                          className='departing-date custom-select hasDatepicker'
                          placeholder='Tour Date'
                          id='dp1609765011924'
                        />
                      </div>
                      <div className='single-widget-search-input-title'>
                        <i className='fa fa-plus-circle' /> No Of People
                      </div>
                      <div className='single-widget-search-input'>
                        <input
                          type='text'
                          name='number'
                          placeholder='No Of People'
                          value={this.props.people}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "")

                            this.props.onAuthFieldChanged("people", value)
                          }}
                        />
                      </div>

                      <div className='single-widget-search-input-title'>
                        <i className='fa fa-earth-asia' /> Country
                      </div>
                      <div className='single-widget-search-input'>
                     <CountrySelector name='cars' style={{ border: "1px solid #eaeaea",
                            color: "#666",
                            width: "100%",
                            height: "50px",
                            lineHeight: "50px",
                            padding: "0 20px",
                            backgroundPosition: "20px",
                            borderRadius: "4px",}}/>
                      </div>

                      <div className='single-widget-search-input-title'>
                        <i className='fa fa-plus-circle' /> Category
                      </div>

                      <div className='single-widget-search-input'>
                        <select
                          onChange={(e) => {
                            console.log(e.target.value)
                            this.props.onAuthFieldChanged(
                              "category",
                              e.target.value
                            )
                          }}
                          name='cars'
                          id='cars'
                          style={{
                            border: "1px solid #eaeaea",
                            color: "#666",
                            width: "100%",
                            height: "50px",
                            lineHeight: "50px",
                            padding: "0 20px",
                            backgroundPosition: "20px",
                            borderRadius: "4px",
                          }}
                        >
                          <option value='International Tourist'>
                            International Tourist
                          </option>
                          <option value='Expats'>Expats</option>
                          <option value='Domestic Tourist'>
                            Domestic Tourist
                          </option>
                          <option value='Students'>Students</option>
                        </select>
                        {/* <input
												type="text"
												name="number"
												placeholder="Phone"
												value={this.props.contactnumber}
												onChange={(e) => {
													const value = e.target.value.replace(/\D/g, "");
													this.props.onAuthFieldChanged("contactnumber", value);
												}}
											/> */}
                      </div>

                      <div class='single-widget-search-input-title'>
                        <i class='fa fa-keyboard-o'></i> Remarks
                      </div>
                      <div class='single-widget-search-input'>
                        <textarea
                          style={{ minHeight: "137px" }}
                          defaultValue={""}
                          placeholder='For Private Tours, Corporate Tours, & Bespoke Tours drop us an email or simply click the WhatsApp button. Let us know if you need helmets and baby seat in the remark'
                          value={this.props.contactmessage}
                          onChange={(e) =>
                            this.props.onAuthFieldChanged(
                              "contactmessage",
                              e.target.value
                            )
                          }
                          name='message'
                        />
                      </div>
                      <div class='text-lg-center text-left'>
                        <div
                          class='btn btn-yellow'
                          onClick={this.openPaymentWindow.bind(this)}
                        >
                          {this.props.people >= 6 ? (
                            <span>
                              Pay INR{" "}
                              {this.props.data.price * this.props.people * 0.9}
                            </span>
                          ) : (
                            <span>
                              Pay INR{" "}
                              {this.props.data.price * this.props.people} to
                              Book
                            </span>
                          )}
                          <i class='fa fa-paper-plane'></i>
                        </div>
                        {this.props.people >= 6 ? (
                          <p>(10% discount applied) to Book</p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                
              </div>
              
              <div>
                  <aside class='sidebar-area sidebar-area-4'>
                  {tourSuggestions && tourSuggestions.length > 0 &&(
                      <div class='widget widget-recent-post'>
                        <h2 class='widget-title'>Tours You May Also Like</h2>
						
						
                        <ul>{this.renderTourSuggestion(tourSuggestions)}</ul>
						
                      </div>
                  )}
                  </aside>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contactemail: state.auth.contactemail,
    contactname: state.auth.contactname,
    contactnumber: state.auth.contactnumber,
    contactmessage: state.auth.contactmessage,
    people: state.auth.people,
    date: state.auth.date,
    count: state.modal.count,
    counter: state.pageData.counter,
    category: state.auth.category,
  }
}

export default connect(mapStateToProps, {
  onAuthFieldChanged,
  toggleNotification,
  countIncrease,
})(TourDetails)
