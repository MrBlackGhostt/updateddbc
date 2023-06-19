import { FIELD_CHANGED, NEWSLETTER, CONTACT_US, PAYMENT } from "./types";
import axios from "axios";

export const onAuthFieldChanged = (prop, value) => {
	return {
		type: FIELD_CHANGED,
		payload: { prop, value },
	};
};

export const subscribeUser = (email) => (dispatch) => {
	axios
		.post("https://www.delhibycycle.com/newsletter", { email })
		.then((data) => {
			dispatch({
				type: NEWSLETTER,
				payload: data.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

export const contactus = (name, number, email, message) => (dispatch) => {
	axios
		.post("https://www.delhibycycle.com/contactus", {
			name,
			number,
			email,
			message,
		})
		.then((data) => {
			dispatch({
				type: CONTACT_US,
				payload: data.data,
			});
		})
		.catch((error) => {
			console.log(error);
		});
};
