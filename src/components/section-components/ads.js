import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageLazyLoad from "../section-components/ImageLazyLoad";
import parse from "html-react-parser";

class Ads extends Component {
    render() {
        const { imagejpeg, imagewebp } = this.props.data;
        return (
            
                <div className="ads-area pd-top-90 viaje-go-top" style={{paddingBottom: "0"}} >
            <div className="container">
                    <div className="row justify-content-center"  >
                        <div className="col-xl-12 col-lg-10 " style={{ margin: "-65px", marginBottom: "-35px" }}
                           >
                            <a className="ads-thumb " href="https://www.klm.co.in/">
                                <img  src={imagejpeg} imagewebp={imagewebp} style={{width: "200vw",textAlign: "center"}}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ads;