import React, { Component } from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import BlogDetails from "./blog-components/blog-details";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";
import { blogDetailPage } from "../actions";
import { connect } from "react-redux";

class BlogDetailsPage extends Component {
  state = { fetch: false };
  componentWillMount() {
    window.scrollTo(0, 0);
    this.props.blogDetailPage(this.props.match.params.blogname);
  }
  componentDidUpdate() {
    if (this.state.params !== this.props.match.params.blogname) {
      window.scrollTo(0, 0);
      this.props.blogDetailPage(this.props.match.params.blogname);
      this.setState({ params: this.props.match.params.blogname });
    }
  }

  compo;
  render() {
    return (
      <div>
        <Navbar />
        {this.props.blogdetailpagedata && (
          <div>
            <PageHeader
              headertitle={this.props.blogdetailpagedata.header.headertitle}
              backgroundImage={
                this.props.blogdetailpagedata.header.backgroundImage
              }
            />
            <BlogDetails data={this.props.blogdetailpagedata.blogDetails} />
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
    blogdetailpagedata: state.pageData.blogdetailpagedata,
  };
}

export default connect(mapStateToProps, { blogDetailPage })(BlogDetailsPage);
