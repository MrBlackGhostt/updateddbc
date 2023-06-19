import axios from "axios";
import {
	HOME_PAGE,
	ABOUT_PAGE,
	TOUR_DETAIL_PAGE,
	BLOG_DETAIL_PAGE,
	TOUR_CATEGORY_PAGE,
	FAQ_PAGE,
	TOUR_LIST_PAGE,
	BLOG_LIST_PAGE,
	HOMESCREEN_PROMPT,
	TOUR_DETAIL_CLEAR,
} from "./types";

// const devUrl = "http://localhost:80";
const url = "https://www.delhibycycle.com";
// const url = "http://localhost:80";

export const homePage = () => (dispatch) => {
	axios
		.get(`${url}/homepage`)
		.then((data) => {
			dispatch({
				type: HOME_PAGE,
				payload: data.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

export const aboutPage = () => (dispatch) => {
	axios
		.get(`${url}/aboutpage`)
		.then((data) => {
			dispatch({
				type: ABOUT_PAGE,
				payload: data.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

export const tourDetailPage = (name) => (dispatch) => {
	axios
		.post(`${url}/tourdetailpage`, { name: name })
		.then((data) => {
			dispatch({
				type: TOUR_DETAIL_PAGE,
				payload: data.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

export const tourDetailClear = () => {
	return {
		type: TOUR_DETAIL_CLEAR,
	};
};

export const blogDetailPage = (name) => (dispatch) => {
	axios
		.post(`${url}/blogdetailpage`, { name: name })
		.then((data) => {
			dispatch({
				type: BLOG_DETAIL_PAGE,
				payload: data.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

export const tourCategoryPage = (name) => (dispatch) => {
	console.log("the name is ", name);
	axios
		.post(`${url}/tourcategorypage`, { name: name })
		.then((data) => {
			dispatch({
				type: TOUR_CATEGORY_PAGE,
				payload: data.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

export const faqPage = () => (dispatch) => {
	axios
		.get(`${url}/faqpage`)
		.then((data) => {
			dispatch({
				type: FAQ_PAGE,
				payload: data.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

export const tourListPage = () => (dispatch) => {
	axios
		.get(`${url}/tourlistpage`)
		.then((data) => {
			dispatch({
				type: TOUR_LIST_PAGE,
				payload: data.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

export const blogListPage = () => (dispatch) => {
	axios
		.get(`${url}/bloglistpage`)
		.then((data) => {
			dispatch({
				type: BLOG_LIST_PAGE,
				payload: data.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

export const homescreenPrompt = (data) => ({
	type: HOMESCREEN_PROMPT,
	payload: data,
});
