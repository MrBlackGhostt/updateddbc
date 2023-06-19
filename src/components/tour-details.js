// proper tour file
import React, { Component } from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import TourDetails from "./section-components/tour-details";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";
import { tourDetailPage, countIncrease, tourDetailClear } from "../actions";
import { connect } from "react-redux";
import BookBtn from "./BookBtn";

const photos = [
  {
    imagejpeg:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/shahjahan-tour-chandani-chowk-delhi-by-cycle.jpg",
    imagewebp:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/shahjahan-tour-chandani-chowk-delhi-by-cycle.webp",
  },
  {
    imagejpeg:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/shahjahan-tour-chandani-chowk-delhi-by-cycle.jpg",
    imagewebp:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/shahjahan-tour-chandani-chowk-delhi-by-cycle.webp",
  },
  {
    imagejpeg:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/shahjahan-tour-chandani-chowk-delhi-by-cycle.jpg",
    imagewebp:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/shahjahan-tour-chandani-chowk-delhi-by-cycle.webp",
  },
  {
    imagejpeg:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/shahjahan-tour-chandani-chowk-delhi-by-cycle.jpg",
    imagewebp:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/shahjahan-tour-chandani-chowk-delhi-by-cycle.webp",
  },
  {
    imagejpeg:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/shahjahan-tour-chandani-chowk-delhi-by-cycle.jpg",
    imagewebp:
      "https://delhibycycle.s3.ap-south-1.amazonaws.com/shahjahan-tour-chandani-chowk-delhi-by-cycle.webp",
  },
];
// const photos = [
//   {
//     imagejpeg:
//       "https://delhibycycle.s3.ap-south-1.amazonaws.com/shahjahan-tour-chandani-chowk-delhi-by-cycle.jpg",
//     imagewebp:
//       "https://delhibycycle.s3.ap-south-1.amazonaws.com/shahjahan-tour-chandani-chowk-delhi-by-cycle.webp",
//   },
//   {
//     imagejpeg:
//       "https://delhibycycle.s3.ap-south-1.amazonaws.com/street-food-safari-jalebi-delhi-by-cycle.jpg",
//     imagewebp:
//       "https://delhibycycle.s3.ap-south-1.amazonaws.com/street-food-safari-jalebi-delhi-by-cycle.webp",
//   },
//   {
//     imagejpeg:
//       "https://delhibycycle.s3.ap-south-1.amazonaws.com/shahjahan-tour-maiden-hotel-delhi-by-cycle.jpg",
//     imagewebp:
//       "https://delhibycycle.s3.ap-south-1.amazonaws.com/shahjahan-tour-maiden-hotel-delhi-by-cycle.webp",
//   },
//   {
//     imagejpeg:
//       "https://delhibycycle.s3.ap-south-1.amazonaws.com/street-food-safari-potato-fries-delhi-by-cycle.jpg",
//     imagewebp:
//       "https://delhibycycle.s3.ap-south-1.amazonaws.com/street-food-safari-potato-fries-delhi-by-cycle.webp",
//   },
//   {
//     imagejpeg:
//       "https://delhibycycle.s3.ap-south-1.amazonaws.com/shahjahan-tour-turkmaan-gate-delhi-by-cycle.jpg",
//     imagewebp:
//       "https://delhibycycle.s3.ap-south-1.amazonaws.com/shahjahan-tour-turkmaan-gate-delhi-by-cycle.webp",
//   },
// ];

class TourDetailsPage extends Component {
  state = { fetch: false };
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.tourDetailPage(this.props.match.params.tourname);
    this.props.countIncrease();
  }
  componentDidUpdate() {
    if (this.state.params !== this.props.match.params.tourname) {
      window.scrollTo(0, 0);
      this.props.tourDetailClear();
      this.props.tourDetailPage(this.props.match.params.tourname);
      this.props.countIncrease();
      this.setState({ params: this.props.match.params.tourname });
    }
  }

  render() {
    return (
      <div>
        <Navbar />
<BookBtn/>
        {this.props.tourdetailpagedata && (
          <PageHeader
            headertitle={this.props.tourdetailpagedata.tourName}
            backgroundImage={this.props.tourdetailpagedata.backgroundImage}
            videoUrl={this.props.tourdetailpagedata.videoUrl}
          />
        )}

        <TourDetails
          location={this.props.history.location.pathname}
          sliderData={photos}
          data={
            this.props.tourdetailpagedata ? this.props.tourdetailpagedata : {}
          }
        />

        <Subscribe />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tourdetailpagedata: state.pageData.tourdetailpagedata,
  };
}

export default connect(mapStateToProps, {
  tourDetailPage,
  countIncrease,
  tourDetailClear,
})(TourDetailsPage);
