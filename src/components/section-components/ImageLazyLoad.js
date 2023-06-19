import React, { Component } from "react";

class ImageLazyLoad extends Component {
	constructor(props) {
		super(props);
		this.imageRef = React.createRef();
	}
	componentDidMount() {
		this.observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting	) {
						const image = entry.target;
						image.src = image.dataset.src;
						image.classList.remove("lazy");
						this.observer.unobserve(image);
					}
				});
			},
			{
				root: null,
				rootMargin: "400px",
			}
		);
		this.observer.observe(this.imageRef.current);
	}
	render() {
		return (
			<picture>
				<source
					className={this.props.className ? `${this.props.className} lazy` : "lazy"}
					alt={this.props.alt}
					ref={this.imageRef}
					data-src={this.props.imagewebp}
					type="image/webp"
					style={this.props.style}
				/>
				<source
					className={this.props.className ? `${this.props.className} lazy` : "lazy"}
					alt={this.props.alt}
					ref={this.imageRef}
					data-src={this.props.imagejpeg}
					type="image/jpeg"
					style={this.props.style}
				/>
				<img
					className={this.props.className ? `${this.props.className} lazy` : "lazy"}
					alt={this.props.alt}
					ref={this.imageRef}
					data-src={this.props.imagejpeg}
					style={this.props.style}
				/>
			</picture>
		);
	}
}

export default ImageLazyLoad;
