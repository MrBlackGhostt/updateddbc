import React, { Component } from "react";
import ImageLazyLoad from "../section-components/ImageLazyLoad";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Team extends Component {
  renderContent(data) {
    return data.map((singleContent) => {
      const { imagewebp, imagejpeg, name, position, para } = singleContent;
      return (
        <div className="col-lg-3 col-sm-6">
          <div className="single-team text-center">
            <div className="thumb">
              <ImageLazyLoad
                imagewebp={imagewebp}
                imagejpeg={imagejpeg}
                alt="team"
              />
            </div>
            <h3 className="name">
              <a href="#">{name}</a>
            </h3>
            <span>{position}</span>
            <p>{para}</p>
            <ul className="team-social">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      );
    });
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const { title, para, data1, data2, data3, data4, data5 } = this.props.data;

    return (
      <div
        className="team-newslater-bg"
        style={{ backgroundImage: "url(" + publicUrl + "assets/img/bg/4.png)" }}
      >
        {/* team area end */}
        <div className="team-area pd-top-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center">
                  <h2 className="title">{title}</h2>
                  <p>{para}</p>
                </div>
              </div>
            </div>
            <div className="row">{this.renderContent(data1)}</div>
            <div className="row">{this.renderContent(data2)}</div>
            <div className="row">{this.renderContent(data3)}</div>
            <div className="row">{this.renderContent(data4)}</div>
            <div className="row">{this.renderContent(data5)}</div>
          </div>
        </div>
        {/* team area end */}
        {/* newslatter area Start */}
        <div className="newslatter-area pd-top-80">
          <div className="container">
            <div className="newslatter-area-wrap border-tp-solid">
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-5 offset-xl-2">
                  <div className="section-title mb-md-0">
                    <h2 className="title">Newsletter</h2>
                    <p>Sign up to receive the best offers</p>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-7 align-self-center offset-xl-1">
                  <div className="input-group newslatter-wrap">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-envelope" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-yellow" type="button">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* newslatter area End */}
      </div>
    );
  }
}

export default Team;
