import React, { Component } from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Contact from "./section-components/contact";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";

class ContactPage extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Navbar />
        <PageHeader
          headertitle="Contact Us"
          backgroundImage="https://delhibycycle.s3.ap-south-1.amazonaws.com/delhi-by-cycle-contact-us.jpg"
        />
        <Contact />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default ContactPage;
