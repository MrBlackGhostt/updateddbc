import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Faq extends Component {
  renderSecondayContent(singleArray) {
    return singleArray.map((singleData) => {
      return [<h6>{singleData.question}</h6>, <p>{singleData.answer}</p>];
    });
  }
  renderAnswers(data) {
    return data.map((singleArray, index) => {
      const id = `tabs_${index}`;
      return (
        <div className="tab-pane fade" id={id}>
          <div className="faq-details">
            {this.renderSecondayContent(singleArray)}
          </div>
        </div>
      );
    });
  }
  renderCategories() {
    return this.props.data.categories.map((singleCategory, index) => {
      const href = `#tabs_${index}`;
      const className = index === 0 ? "nav-link active show" : "nav-link";
      return (
        <li className="nav-item">
          <a className={className} data-toggle="tab" href={href}>
            {singleCategory}
          </a>
        </li>
      );
    });
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="faq-page-area pd-top-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="row">
                <div className="col-xl-8">
                  <div className="section-title mb-0">
                    <h2 className="title">Frequently Asked Questions</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <ul className="nav nav-tabs tp-tabs">
                    {this.renderCategories()}
                  </ul>
                </div>
                <div className="col-md-7">
                  <div
                    className="tab-content faq-tab-content"
                    style={{
                      backgroundImage:
                        "url(" + publicUrl + "assets/img/others/12.png)",
                    }}
                  >
                    {this.renderAnswers(this.props.data.data)}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <aside className="sidebar-area">
                <div className="widget widget_search bg-none pd-none">
                  <form className="search-form">
                    <div className="form-group">
                      <input type="text" placeholder="Search" />
                    </div>
                    <button className="submit-btn" type="submit">
                      <i className="ti-search" />
                    </button>
                  </form>
                </div>
                <div className="widget widget_categories mb-0">
                  <h2 className="widget-title">Category</h2>
                  <ul>
                    <li>
                      <a href="#">Software</a> 33
                    </li>
                    <li>
                      <a href="#">App Landing</a> 81
                    </li>
                    <li>
                      <a href="#">Saas Landing</a> 12
                    </li>
                    <li>
                      <a href="#">Design Studio</a> 17
                    </li>
                    <li>
                      <a href="#">Product Showcase</a> 62
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
