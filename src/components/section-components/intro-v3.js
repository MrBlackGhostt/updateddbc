import React, { Component } from "react";
import ImageLazyLoad from "../section-components/ImageLazyLoad";
import parse from "html-react-parser";

class IntroV3 extends Component {
  renderContent() {
    return this.props.data.data.map((singleContent) => {
      const { imagewebp, imagejpeg, alt, text, title } = singleContent;
      return (
        <div className="col-lg-3 col-md-6"> 
          <div className="single-intro style-two">
            <div className="thumb">
              <ImageLazyLoad
                imagewebp={imagewebp}
                imagejpeg={imagejpeg}
                alt={alt}
              />
            </div>
            <h4 className="intro-title">{title}</h4>
            <p  style={{ textAlign: "justify" }}>{text}</p>
          </div>
        </div>
      );
    });
  }
  render() {
    const { text1, text2 } = this.props.data;
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="intro-area pd-top-108">
        <div className="container">
          <div className="section-title text-lg-center text-left">
            <h2 className="title">
              <span>{text1}</span> {text2}
            </h2>
          </div>
          <div className="row">{this.renderContent()}</div>
        </div>
      </div>
    );
  }
}

export default IntroV3;
