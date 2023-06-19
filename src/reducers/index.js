import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import authReducer from "./authReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  pageData: pageReducer,
  auth: authReducer,
  modal: modalReducer,
});
