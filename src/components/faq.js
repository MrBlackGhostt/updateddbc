import React, { Component } from "react";
import { connect } from "react-redux";
import { faqPage } from "../actions";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Faq from "./section-components/faq";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";

class FaqPage extends Component {
  componentWillMount() {
    this.props.faqPage();
  }
  render() {
    return (
      <div>
        <Navbar />
        {this.props.faqpagedata && (
          <div>
            <PageHeader
              headertitle="FAQs"
              backgroundImage="https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-about-us.jpeg"
            />
            <Faq data={this.props.faqpagedata} />
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
    faqpagedata: state.pageData.faqpagedata,
  };
}

export default connect(mapStateToProps, { faqPage })(FaqPage);
