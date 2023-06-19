import React, { Component } from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Intro from "./section-components/intro-v3";
import About from "./section-components/about";
import History from "./section-components/history";
import Team from "./section-components/team";
import Footer from "./global-components/footer";

import { connect } from "react-redux";
import { aboutPage } from "../actions";

class AboutPage extends Component {
  componentDidMount() {
    this.props.aboutPage();
  }
  render() {
    console.log("new data", this.props.aboutpagedata);
    return (
      <div>
        <Navbar />
        {this.props.aboutpagedata && (
          <div>
            <PageHeader
              headertitle={this.props.aboutpagedata.header.headertitle}
              backgroundImage={this.props.aboutpagedata.header.backgroundImage}
            />
            <Intro data={this.props.aboutpagedata.intro} />
            <About data={this.props.aboutpagedata.aboutTour} />
            <History data={this.props.aboutpagedata.history} />
            <Team data={this.props.aboutpagedata.team} />
          </div>
        )}

        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    aboutpagedata: state.pageData.aboutpagedata,
  };
}

export default connect(mapStateToProps, { aboutPage })(AboutPage);
