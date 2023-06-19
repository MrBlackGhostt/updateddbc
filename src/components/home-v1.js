import React, { Component, useEffect } from "react"
import Navbar from "./global-components/navbar"
import Banner from "./section-components/banner"
import Ads from "./section-components/ads"
import HomeData from "./section-components/homeData"
import Offer from "./section-components/offer"
import HolidayPlan from "./section-components/holiday-plan"
import HolidayCity from "./section-components/tour-city"

import Subscribe from "./section-components/subscribe"
import Footer from "./global-components/footer"
import Client from "./section-components/client"
import BlogSection from "./blog-components/blog-section-v2"

import { homePage } from "../actions"

import { connect } from "react-redux"

const bannerData = [
  {
    duration: "4 Hours",
    durationExtraInfo: "Morning Tour",
    facts1: "We hosted more than",
    facts2: "30,000+",
    facts3: "people",
    facts3extra: "on this tour",
    feature1: "Explore the organized chaos",
    feature2: "Old Delhi",
    feature3: "Breakfast",
    feature3extra: "Included",
    firstname: "The Shahjahan",
    lastname: "Tour",
    location: "Old Delhi Cycle Tour",
    price: "INR 2000",
    priceField: "price",
    imagejpeg:
      "https://dbcpictures.s3.ap-south-1.amazonaws.com/landing+page/shahjahan_tour_landing_page_banner_delhi_by_cycle.jpg",
    imagewebp:
      "https://dbcpictures.s3.ap-south-1.amazonaws.com/landing+page/shahjahan_tour_landing_page_banner_delhi_by_cycle.webp",
    video: "https://www.youtube.com/watch?v=7uOZSi1iUio",
  },
  {
    duration: "4 Hours",
    durationExtraInfo: "Morning Tour",
    facts1: "We hosted more than",
    facts2: "30,000+",
    facts3: "people",
    facts3extra: "on this tour",
    feature1: "Explore the organized chaos",
    feature2: "Old Delhi",
    feature3: "Breakfast",
    feature3extra: "Included",
    firstname: "The Shahjahan",
    lastname: "Tour",
    location: "Old Delhi Cycle Tour",
    price: "INR 2000",
    priceField: "price",
    imagejpeg:
      "https://dbcpictures.s3.ap-south-1.amazonaws.com/landing+page/shahjahan_tour_landing_page_banner_delhi_by_cycle.jpg",
    imagewebp:
      "https://dbcpictures.s3.ap-south-1.amazonaws.com/landing+page/shahjahan_tour_landing_page_banner_delhi_by_cycle.webp",
    video: "https://www.youtube.com/watch?v=7uOZSi1iUio",
  },
  {
    duration: "4 Hours",
    durationExtraInfo: "Morning Tour",
    facts1: "We hosted more than",
    facts2: "30,000+",
    facts3: "people",
    facts3extra: "on this tour",
    feature1: "Explore the organized chaos",
    feature2: "Old Delhi",
    feature3: "Breakfast",
    feature3extra: "Included",
    firstname: "The Shahjahan",
    lastname: "Tour",
    location: "Old Delhi Cycle Tour",
    price: "INR 2000",
    priceField: "price",
    imagejpeg:
      "https://dbcpictures.s3.ap-south-1.amazonaws.com/landing+page/shahjahan_tour_landing_page_banner_delhi_by_cycle.jpg",
    imagewebp:
      "https://dbcpictures.s3.ap-south-1.amazonaws.com/landing+page/shahjahan_tour_landing_page_banner_delhi_by_cycle.webp",
    video: "https://www.youtube.com/watch?v=7uOZSi1iUio",
  },
]

class Home_V1 extends Component {
  componentDidMount() {
    this.props.homePage()
  }

  renderBanner() {
    if (this.props.homepagedata === null) {
      return <Banner data={bannerData} />
    } else {
      return <Banner data={this.props.homepagedata.banner} />
    }
  }

  render() {
    console.log(this.props.history.location.pathname)
    return (
      <div>
        <Navbar location={this.props.history.location.pathname} />

        {this.renderBanner()}

        <div>
          {this.props.homepagedata === null ? (
            <>
              <Offer data={HomeData.offerData} />
              <HolidayPlan data={HomeData.holidayData} />
              <HolidayCity data={HomeData.holidayData} />
              <BlogSection data={HomeData.blogData} />
              <Client data={HomeData.reviewsData} />
              <Ads data={HomeData.klmData} />
            </>
          ) : (
            <>
              <Offer data={this.props.homepagedata.offerData} />
              <HolidayPlan data={this.props.homepagedata.holidayData} />
              <HolidayCity data={this.props.homepagedata.holidayData} />
              <BlogSection data={this.props.homepagedata.blogData} />
              <Client data={this.props.homepagedata.reviews} />
              <Ads data={this.props.homepagedata.klm} />
            </>
          )}
        </div>

        <Subscribe />
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    homepagedata: state.pageData.homepagedata,
  }
}

export default connect(mapStateToProps, { homePage })(Home_V1)
