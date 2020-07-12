import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import post from "./post";
import user from "./user";

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDATE,", action.payload);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
