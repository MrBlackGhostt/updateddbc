import React, { Component } from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import BlogList from "./blog-components/blog-list";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";

import { connect } from "react-redux";
import { blogListPage } from "../actions";

class BlogPage extends Component {
  componentWillMount() {
    this.props.blogListPage();
  }
  render() {
    return (
      <div>
        <Navbar />
        {this.props.bloglistpagedata && (
          <div>
            <PageHeader
              headertitle={this.props.bloglistpagedata.header.headertitle}
              backgroundImage={
                this.props.bloglistpagedata.header.backgroundImage
              }
            />
            <BlogList data={this.props.bloglistpagedata.bloglist} />
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
    bloglistpagedata: state.pageData.bloglistpagedata,
  };
}

export default connect(mapStateToProps, { blogListPage })(BlogPage);
