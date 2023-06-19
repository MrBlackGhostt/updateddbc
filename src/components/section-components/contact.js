import React, { Component } from "react";
import { connect } from "react-redux";
import { onAuthFieldChanged, contactus } from "../../actions";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Contact extends Component {
  onFormSubmit(e) {
    e.preventDefault();
    if (
      this.props.contactname.length > 0 &&
      this.props.contactnumber.length > 0 &&
      this.props.contactemail.length > 0 &&
      this.props.contactmessage.length > 0
    ) {
      this.props.contactus(
        this.props.contactname,
        this.props.contactnumber,
        this.props.contactemail,
        this.props.contactmessage
      );
    }
  }
  render() {
    return (
      <div>
        <div className="contact-area pd-top-108">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-lg-center text-left">
                  <h2 className="title">Get In Touch!</h2>
                  <p>
                    If you have a story to share or a question that has not been
                    answered on our website, please get in touch with us via
                    contact details listed below or fill in the form on the
                    right.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-5 offset-xl-1 col-lg-6">
                <div className="thumb">
                  <picture>
                    <source
                      alt="contact delhi by cycle"
                      srcSet="https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-contact-us-section.webp"
                    />
                    <source
                      alt="contact delhi by cycle"
                      srcSet="https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-contact-us-section.jpeg"
                    />
                    <img
                      src="https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-contact-us-section.jpeg"
                      alt="contact delhi by cycle"
                    />
                  </picture>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <form
                  className="tp-form-wrap"
                  onSubmit={this.onFormSubmit.bind(this)}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label className="single-input-wrap style-two">
                        <span className="single-input-title">Name</span>
                        <input
                          type="text"
                          name="name"
                          value={this.props.contactname}
                          onChange={(e) =>
                            this.props.onAuthFieldChanged(
                              "contactname",
                              e.target.value
                            )
                          }
                        />
                      </label>
                    </div>
                    <div className="col-md-6">
                      <label className="single-input-wrap style-two">
                        <span className="single-input-title">Number</span>
                        <input
                          type="text"
                          name="number"
                          value={this.props.contactnumber}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            this.props.onAuthFieldChanged(
                              "contactnumber",
                              value
                            );
                          }}
                        />
                      </label>
                    </div>
                    <div className="col-lg-12">
                      <label className="single-input-wrap style-two">
                        <span className="single-input-title">Email</span>
                        <input
                          type="email"
                          name="email"
                          value={this.props.contactemail}
                          onChange={(e) =>
                            this.props.onAuthFieldChanged(
                              "contactemail",
                              e.target.value
                            )
                          }
                        />
                      </label>
                    </div>
                    <div className="col-lg-12">
                      <label className="single-input-wrap style-two">
                        <span className="single-input-title">Message</span>
                        <textarea
                          defaultValue={""}
                          value={this.props.contactmessage}
                          onChange={(e) =>
                            this.props.onAuthFieldChanged(
                              "contactmessage",
                              e.target.value
                            )
                          }
                          name="message"
                        />
                      </label>
                    </div>
                    <div className="col-12">
                      <input
                        type="submit"
                        className="btn btn-yellow"
                        value="Send Message"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-info-area pd-top-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 order-lg-12">
                <iframe
                  className="contact-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.481842793989!2d77.2230447147764!3d28.645287890254977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1467fa4edef63035%3A0xb9a565cf5e054524!2sDelhi%20By%20Cycle!5e0!3m2!1sen!2sin!4v1606974151599!5m2!1sen!2sin"
                />
              </div>
              <div className="col-xl-3 col-lg-4 order-lg-1">
                <div className="contact-info bg-gray">
                  <p>
                    <i className="fa fa-map-marker" />
                    <span>
                      Delhi By Cycle, Jack's Adventures Pvt. Ltd., Asaf Ali
                      Road, New Delhi, India
                    </span>
                  </p>
                  <p>
                    <i className="fa fa-clock-o" />
                    <span>Office Hour 10:00am to 5:00pm</span>
                  </p>
                  <p>
                    <i className="fa fa-envelope" />
                    <span>
                      Email: <span>info@delhibycycle.com</span>
                    </span>
                  </p>
                  <p>
                    <a href="https://wa.me/message/YKOLNHXXX3LQE1">
                      <i className="fa fa-whatsapp" />
                      <span>
                        <span>
                          +91 9811723720
                          <br />
                          <span style={{ marginLeft: "30px" }}>
                            (Click for WhatsApp)
                          </span>
                        </span>
                        <br />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contactemail: state.auth.contactemail,
    contactname: state.auth.contactname,
    contactnumber: state.auth.contactnumber,
    contactmessage: state.auth.contactmessage,
  };
}

export default connect(mapStateToProps, { onAuthFieldChanged, contactus })(
  Contact
);
