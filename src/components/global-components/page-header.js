import React, { Component } from "react";
import { Link } from "react-router-dom";

class Page_header extends Component {
  render() {
    let HeaderTitle = this.props.headertitle;
    let publicUrl = process.env.PUBLIC_URL + "/";
    let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle;

    return (
      <div
        className="breadcrumb-area jarallax"
        style={{
          backgroundImage:
            "url(" + this.props.backgroundImage ||
            "assets/img/bg/delhi-by-cycle-contact-us.webp)",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className={
                this.props.videoUrl ? "col-lg-9 col-sm-8" : "col-lg-12"
              }
            >
              <div className="breadcrumb-inner">
                <h1 className="page-title">{HeaderTitle}</h1>
                <ul className="page-list">
                  <li>
                    <Link to="/">
                      Home | <hr />
                    </Link>
                  </li>
                  <li>{Subheader}</li>
                </ul>
              </div>
            </div>
            {this.props.videoUrl && (
              <div className="col-lg-3 col-sm-4" style={{ zIndex: 1000 }}>
                <div className="video-popup-btn s-animate-video">
                  <a
                    href="https://www.youtube.com/watch?v=c7XEhXZ_rsk"
                    className="video-play-btn mfp-iframe"
                  >
                    <i className="fa fa-play" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Page_header;
