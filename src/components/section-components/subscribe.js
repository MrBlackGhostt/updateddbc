import React, { Component,useState } from "react";
import { connect } from "react-redux";
import {
  onAuthFieldChanged,
  subscribeUser,
  toggleNotification,
} from "../../actions";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Swal from 'sweetalert2'
// import dcbSubscribe from "../assets/img/dcbSubscribe.jpeg"; 



const Alert = ()=>{
    Swal.fire({
      imageUrl: '../assets/img/dcbSubscribe.jpeg',
      // imageHeight: 1500,
      imageAlt: 'A tall image'
    })
  }

class Subscribe extends Component {

  componentDidMount() {
    const emailInput = document.getElementById("email");
    const submitBtn = document.getElementById("button");
submitBtn.disabled = true;
    if (emailInput && submitBtn) {
      emailInput.addEventListener("input", function () {
        if (emailInput.checkValidity()) {
          submitBtn.disabled = false;
        } else {
          submitBtn.disabled = true;
        }
      });
    }
  }
 
  onFormSubmit(e) {
    e.preventDefault();
    if (this.props.subscriberemail.length > 0) {
      this.props.subscribeUser(this.props.subscriberemail);
      this.props.toggleNotification(
        // "Successfully added to the Delhi By Cycle Email List"
      );
    }
  }




  render() {
  
    // var setIsValidEmail= false
    // function validate(e){
    //   const newEmail = e.target.value;
  
    // if (newEmail.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/)) {
    //   setIsValidEmail=true;
    // } else {
    //   setIsValidEmail = false;
    // }
    // }
  

    return (
      <div className="newslatter-area pd-top-90">
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
                <form onSubmit={this.onFormSubmit.bind(this)}>
                  <div className="input-group newslatter-wrap">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-envelope" />
                      </span>
                    </div>
                    <input
                      name="email"
                      id="email"
                      value={this.props.subscriberemail}
                      onChange={(e) =>
                        this.props.onAuthFieldChanged(
                          "subscriberemail",
                          e.target.value
                        )}
                      type="email"
          required
                      className="form-control"
                      placeholder="Email"
                    />
                    <div className="input-group-append">
                      <input
                        id="button"
                        type="submit"
                        className="btn btn-yellow vaijesubmit"
                        value="Subscribe"
                        onClick={Alert}

                      />
                    </div>
                  </div>
                </form>
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
    subscriberemail: state.auth.subscriberemail,
  };
  }

  export default connect(mapStateToProps, {
    onAuthFieldChanged,
    subscribeUser,
    toggleNotification,
  })(Subscribe);
