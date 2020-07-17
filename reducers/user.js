export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: false,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: false,
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: false,
  changeNicknameLoading: false, // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
export const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
export const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";

export const FOLLOW_REQUEST = "FOLLOW_REQUEST";
export const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
export const FOLLOW_FAILURE = "FOLLOW_FAILURE";

export const UN_FOLLOW_REQUEST = "UN_FOLLOW_REQUEST";
export const UN_FOLLOW_SUCCESS = "UN_FOLLOW_SUCCESS";
export const UN_FOLLOW_FAILURE = "UN_FOLLOW_FAILURE";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const dummyUser = (data) => ({
  ...data,
  nickname: "eunhye",
  id: 1,
  Posts: [{ id: 1 }],
  Followings: [
    { nickname: "zzzz" },
    { nickname: "바보냐" },
    { nickname: "wjddbal" },
  ],
  Followers: [
    { nickname: "zzzz" },
    { nickname: "바보냐" },
    { nickname: "wjddbal" },
  ],
});

export const loginRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST,
});

// (이전상태, 액션) => 다음상태
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        logInLoading: true,
        logInError: null,
        logInDone: false,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.user),
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        logInLoading: false,
        logInError: action.error,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: false,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
        logOutDone: true,
        me: null,
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        logOutLoading: false,
        logOutError: action.error,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: false,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: true,
        me: null,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.error,
      };
    case CHANGE_NICKNAME_REQUEST:
      return {
        ...state,
        changeNicknameLoading: true,
        changeNicknameDone: false,
        changeNicknameError: false,
      };
    case CHANGE_NICKNAME_SUCCESS:
      return {
        ...state,
        changeNicknameLoading: false,
        changeNicknameDone: true,
        me: null,
      };
    case CHANGE_NICKNAME_FAILURE:
      return {
        ...state,
        changeNicknameLoading: false,
        changeNicknameError: action.error,
      };
    case ADD_POST_TO_ME:
      return {
        ...state,
        me: {
          ...state.me,
          Posts: [{ id: action.data }, ...state.me.Posts],
        },
      };
    case REMOVE_POST_OF_ME:
      return {
        ...state,
        me: {
          ...state.me,
          Posts: state.me.Posts.filter((v) => v.id !== action.data),
        },
      };
    default:
      return state;
  }
};

export default reducer;
