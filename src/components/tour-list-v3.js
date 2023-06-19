// All tour page
import React, { Component } from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import TourLIst from "./section-components/tour-list-v3";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";
import { connect } from "react-redux";
import { tourListPage } from "../actions";


class TourListPageV3 extends Component {
  componentWillMount() {
    this.props.tourListPage();
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Navbar />
        {this.props.tourlistpagedata && (
          <div>
            <PageHeader
              headertitle={this.props.tourlistpagedata.header.headertitle}
              backgroundImage={
                this.props.tourlistpagedata.header.backgroundImage
              }
            />
            <TourLIst data={this.props.tourlistpagedata.tourlist} />
          </div>
        )}
      
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tourlistpagedata: state.pageData.tourlistpagedata,
  };
}

export default connect(mapStateToProps, { tourListPage })(TourListPageV3);
