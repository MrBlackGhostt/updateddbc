import React, { Component } from "react";
import { connect } from "react-redux";
import { tourCategoryPage, toggleFetch } from "../actions";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import DestinationLIst from "./section-components/destination-list";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";

class DestinationList extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.tourCategoryPage(this.props.match.params.tourtype);
    console.log(this.props.match.params.tourtype);
  }

  componentWillUpdate() {
    if (this.props.fetch) {
      console.log("fetch the thing", this.props.fetch);
      this.props.tourCategoryPage(this.props.match.params.tourtype);
    }
    console.log(this.props.match.params.tourtype);
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.props.tourcategorypagedata && (
          <div>
            <PageHeader
              headertitle={this.props.tourcategorypagedata.fullname}
              backgroundImage={this.props.tourcategorypagedata.backgroundImage}
            />
            <DestinationLIst data={this.props.tourcategorypagedata.data} />
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
    tourcategorypagedata: state.pageData.tourcategorypagedata,
    fetch: state.modal.fetch,
  };
}

export default connect(mapStateToProps, { tourCategoryPage })(DestinationList);
