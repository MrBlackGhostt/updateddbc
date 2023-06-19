import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageLazyLoad from "../section-components/ImageLazyLoad";
import Comments from "./comments";
import Sidebar from "./sidebar";
class BlogDetails extends Component {
	renderPhotos(imageArray) {
		return imageArray.map((singleArray, index) => {
			if (index != 0) {
				return (
						<div className="tp-gallery-item col-md-4 col-sm-6">
							<div className="tp-gallery-item-img" >
								<img
									src={singleArray.imagejpeg}
									datatype={singleArray.imagewebp}
									style={{margin:"10px"}}
								/>
							</div>
						</div>
				);
			}
		});
	}
	renderPoints(points) {
		console.log(points);
		return points.map((singlePoint) => {
			return <li>{singlePoint}</li>;
		});
	}
	render() {
		let publicUrl = process.env.PUBLIC_URL + "/";
		let imagealt = "image";
		const {
			image1webp,
			image1jpeg,
			alt1,
			date,
			title,
			quote1,
			para1,
			author,
			title1,
			points,
			video,
			para2,
			title2,
			title3,
			videojpeg,
			videowebp,
			para3,
			title4,
			para4,
			title5,
			quote,
			para5,
			title6,
			para6,
			imageArray,
			iframe,
			iframesrc,
		} = this.props.data;

		return (
			<div className="blog-details-area pd-top-120 viaje-go-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="single-blog mb-3">
								<div className="thumb">
									{/* <img src={image1jpeg} srcSet={image1webp} alt={alt1} />  its the 2 top image inside the blog page  */}

									<picture>
                    <source srcSet={image1webp} alt={alt1} />
                    <img alt={alt1} srcSet={image1jpeg} />
                  </picture>
								</div>
								<div className="single-blog-details">
									<p className="date mb-0">{date}</p>
									<h3 className="title">{title}</h3>
									<h4 className="single-page-small-title mt-5">{title1}</h4>
									<p className="content mb-0">{para1}</p>
								</div>
							</div>
							{/* details-blockquote-start */}
							{quote1 && (
								<blockquote className="blockquote tp-blockquote bg-dark-blue">
									<p className="mb-0">{quote1}</p>
								</blockquote>
							)}
							{/* details-blockquote-end */}
							<h4 className="single-page-small-title mt-5">{title2}</h4>
							<p>{para2}</p>
							<h4 className="single-page-small-title mt-5">{title3}</h4>
							<p>{para3}</p>
							{iframe && (
								<iframe src={iframesrc} height="2324" width="100%" frameborder="0" marginHeight="0" marginWidth="0">
									Loading…
								</iframe>
							)}

							{/* details-gallery-start */}
								<div className="container">
								<div className="grid-containerss">
									<div className="gallery-filter-area row custom-gutter">
										<div className="gallery-sizer col-1" />

										{/* gallery-item */}
										<div className="tp-gallery-item col-md-4 col-sm-6 mb-10" >
											<div className="tp-gallery-item-img" >
												{/* <picture>
                          <source srcSet={imageArray[0].imagewebp} alt={alt1} />
                          <source srcSet={imageArray[0].imagejpeg} alt={alt1} />
                        </picture> */}
												<img
													src={imageArray[0].imagejpeg}
													imagewebp={imageArray[0].imagewebp}
													alt={"tour details"}
													style={{}}
												/>

												{/* <img src={imageArray[0].imagewebp} alt="image" /> */}
											</div>
										</div>
										{/* gallery-item */}

										{this.renderPhotos(imageArray)}
									</div>
								</div>
							</div>
							{/* details-gallery-end */}
							{/* details-video-start */}
							<h4 className="single-page-small-title mt-5">{title4}</h4>

							{/* details-video-end */}
							<p>{para4}</p>
							{video && (
								<div className="video-popup-wrap style-two">
									<div className="thumb">
										<ImageLazyLoad imagejpeg={videojpeg} imagewebp={videowebp} alt={"tour details"} />
									</div>
									<div className="video-popup-btn">
										<a href={video} className="video-play-btn mfp-iframe">
											<i className="fa fa-play" />
										</a>
									</div>
								</div>
							)}
							<h4 className="single-page-small-title mt-5">{title5}</h4>
							<p>{para5}</p>
							<h4 className="single-page-small-title mt-5">{title6}</h4>
							<p>{para6}</p>
							{points && <ul>{this.renderPoints(points)}</ul>}

							<div className="row tag-share-area">
								<div className="col-lg-6">
									<span className="mr-2">Share:</span>
									<ul className="social-icon style-two">
										<li>
											<a className="facebook" href="#">
												<i className="fa fa-facebook" />
											</a>
										</li>
										<li>
											<a className="twitter" href="#">
												<i className="fa fa-twitter" />
											</a>
										</li>
										<li>
											<a className="pinterest" href="#">
												<i className="fa fa-instagram" />
											</a>
										</li>
										<li>
											<a className="linkedin" href="#">
												<i className="fa fa-linkedin" />
											</a>
										</li>
									</ul>
								</div>
								<div className="col-xl-5 col-lg-6 offset-xl-1">
									<div className="single-blog-post-tags d-flex">
										<span className="all-tags-title">Related Tags :</span>
										<div className="all-tags">
											<Link to="#">Europe</Link>
											<Link to="#">Natural</Link>
											<Link to="#">Travel</Link>
											<Link to="#">Discover</Link>
										</div>
									</div>
								</div>
							</div>
							<nav className="navigation post-navigation single-post-navigation">
								<div className="nav-links tp-control-nav">
									<div className="row">
										<div className="col-xl-5 col-lg-6 col-6 ">
											<div className="nav-previous w-100">
												<Link to={this.props.data.prevlink}>
													<span className="slick-arrow float-left">
														<i className="la la-long-arrow-left" />
													</span>
													<span className="nav-post-text pl-2 float-left">Prev</span>
													<h4 className="float-left">{this.props.data.prevtitle}</h4>
												</Link>
											</div>
										</div>
										<div className="col-xl-5 col-lg-6 col-6  offset-xl-2">
											<div className="nav-next w-100">
												<Link to={this.props.data.nextlink}>
													<span className="pr-2 nav-post-text">Next</span>
													<span className="slick-arrow float-right">
														<i className="la la-long-arrow-right" />
													</span>
													<h4 className="float-right">{this.props.data.nexttitle}</h4>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</nav>
							{/* author-area-start */}
							<div className="author-area media">
								<div className="media-left">
									<ImageLazyLoad imagejpeg={author.imagejpeg} imagewebp={author.imagewebp} alt={author.alt} />
								</div>
								<div className="media-body">
									<h4>{author.name}</h4>
									<p>{author.description}</p>
									<ul className="social-icon style-three">
										<li>
											<a className="facebook" href="#">
												<i className="fa fa-facebook" />
											</a>
										</li>
										<li>
											<a className="twitter" href="#">
												<i className="fa fa-twitter" />
											</a>
										</li>
										<li>
											<a className="pinterest" href="#">
												<i className="fa fa-instagram" />
											</a>
										</li>
										<li>
											<a className="linkedin" href="#">
												<i className="fa fa-linkedin" />
											</a>
										</li>
									</ul>
								</div>
							</div>
							{/* author-area-end */}
							{/* comments-area-start */}
							{/* <div className="comments-area">
                <h4 className="comments-title">Comments</h4>
                <ul className="comment-list">
                  <li>
                    <div className="single-comment-wrap">
                      <div className="thumb">
                        <img
                          src={publicUrl + "assets/img/blog-details/9.png"}
                          alt="img"
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">Tyler Bailey</h4>
                        <span className="date">17 SEP 2019</span>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr
                        </p>
                        <a href="#" className="reply btn btn-yellow">
                          <span>
                            <i className="fa fa-reply" />
                            Reply
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <ul className="children">
                      <li>
                        <div className="single-comment-wrap">
                          <div className="thumb">
                            <img
                              src={publicUrl + "assets/img/blog-details/10.png"}
                              alt="img"
                            />
                          </div>
                          <div className="content">
                            <h4 className="title">Laurie</h4>
                            <span className="date">17 SEP 2019</span>
                            <p>
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                              voluptua. At vero eos et accusam et justo duo
                              dolores et ea rebum. Stet clita kasd gubergren
                            </p>
                            <a href="#" className="reply btn btn-yellow">
                              <span>
                                <i className="fa fa-reply" />
                                Reply
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="single-comment-wrap">
                      <div className="thumb">
                        <img
                          src={publicUrl + "assets/img/blog-details/11.png"}
                          alt="img"
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">Eliza Jordan</h4>
                        <span className="date">17 SEP 2019</span>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr
                        </p>
                        <a href="#" className="reply btn btn-yellow">
                          <span>
                            <i className="fa fa-reply" />
                            Reply
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}
							{/* comments-area-end */}
							{/* blog-comment-area start */}
							<div className="blog-comment-area">
								<form className="tp-form-wrap bg-gray tp-form-wrap-one">
									<h4 className="single-page-small-title">Write A Comment.</h4>
									<div className="row">
										<div className="col-lg-6 col-md-6">
											<label className="single-input-wrap">
												<span className="single-input-title">Name</span>
												<input type="text" />
											</label>
										</div>
										<div className="col-lg-6 col-md-6">
											<label className="single-input-wrap">
												<span className="single-input-title">Email</span>
												<input type="text" />
											</label>
										</div>
										<div className="col-lg-12">
											<label className="single-input-wrap">
												<span className="single-input-title">comments</span>
												<textarea defaultValue={""} />
											</label>
										</div>
										<div className="col-12">
											<a className="btn btn-yellow" href="#">
												Send Comment
											</a>
										</div>
									</div>
								</form>
							</div>
							{/* blog-comment-area start */}
						</div>
						<Sidebar />
					</div>
				</div>
			</div>
		);
	}
}

export default BlogDetails;
