import React, { Component } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from "./components/home-v1";

import AboutUs from "./components/about";
import TourListV3 from "./components/tour-list-v3";
import TourDetails from "./components/tour-details";
import DestinationLIst from "./components/destination-list";
import DestinationLIstV2 from "./components/destination-list-v2";
import DestinationDetails from "./components/destination-details";
import Gallery from "./components/gallery";
import GalleryDetails from "./components/gallery-details";
import Faq from "./components/faq";
import Contact from "./components/contact";
import CommingSoon from "./components/comming-soon";
import UserProfile from "./components/user-profile";
import Blog from "./components/blog";
import BlogDetails from "./components/blog-details";
import TestRoute from "./components/testroute";
import PrivacyPopup from "./components/section-components/PrivacyPage";

import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// if (navigator.serviceWorker) {
// 	navigator.serviceWorker.register("./sw.js", { scope: "/" }).then(() => {
// 		console.log("Service Registration successful");
// 	});
// }

class Root extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route exact path="/" component={HomeV1} />
				<Route exact path="/about" component={AboutUs} />
				<Route exact path="/tours" component={TourListV3} />
				<Route exact path="/tours/:tourtype/:tourname" component={TourDetails} />
				<Route exact path="/blogs/:blogtype/:blogname" component={BlogDetails} />
				<Route exact path="/tours/:tourtype" component={DestinationLIst} />
				<Route exact path="/tour-details" component={TourDetails} />
				<Route exact path="/destination-list-v2" component={DestinationLIstV2} />
				<Route exact path="/destination-details" component={DestinationDetails} />
				<Route exact path="/gallery" component={Gallery} />
				<Route exact path="/gallery-details" component={GalleryDetails} />
				<Route exact path="/faq" component={Faq} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/comming-soon" component={CommingSoon} />
				<Route exact path="/user-profile" component={UserProfile} />
				<Route exact path="/blogs" component={Blog} />
				<Route exact path="/blog-details" component={BlogDetails} />
				<Route exact path="/privacy" component={PrivacyPopup} />
			</BrowserRouter>
		);
	}
}

export default Root;

ReactDOM.render(
	<Provider store={createStore(reducer, {}, composeEnhancers(applyMiddleware(reduxThunk)))}>
		<Root />
	</Provider>,
	document.getElementById("viaje")
);
