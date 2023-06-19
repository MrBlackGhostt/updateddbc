import {
  HOME_PAGE,
  ABOUT_PAGE,
  TOUR_DETAIL_PAGE,
  BLOG_DETAIL_PAGE,
  TOUR_CATEGORY_PAGE,
  TOUR_LIST_PAGE,
  FAQ_PAGE,
  BLOG_LIST_PAGE,
  TOUR_DETAIL_CLEAR,
} from "../actions/types";

const INITIAL_STATE = {
  homepagedata: null,
  aboutpagedata: null,
  tourdetailpagedata: null,
  blogdetailpagedata: null,
  tourcategorypagedata: null,
  faqpagedata: null,
  counter: 0,
  tourlistpagedata: null,
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case HOME_PAGE:
      return {
        ...state,
        homepagedata: actions.payload,
      };
    case ABOUT_PAGE:
      return {
        ...state,
        aboutpagedata: actions.payload,
      };
    case FAQ_PAGE:
      return {
        ...state,
        faqpagedata: actions.payload,
      };
    case TOUR_DETAIL_PAGE:
      return {
        ...state,
        tourdetailpagedata: actions.payload,
        counter: state.counter + 1,
      };
    case TOUR_DETAIL_CLEAR:
      console.log("tou details clear called");
      return {
        ...state,
        tourdetailpagedata: null,
      };
    case BLOG_DETAIL_PAGE:
      return {
        ...state,
        blogdetailpagedata: actions.payload,
      };
    case TOUR_CATEGORY_PAGE:
      return {
        ...state,
        tourcategorypagedata: actions.payload,
      };
    case TOUR_LIST_PAGE:
      return {
        ...state,
        tourlistpagedata: actions.payload,
      };
    case BLOG_LIST_PAGE:
      return {
        ...state,
        bloglistpagedata: actions.payload,
      };

    default:
      return state;
  }
};
