export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "제로초",
      },
      content: "첫번째 게시글 #해시태그 #리액트",
      Images: [
        {
          src: "https://www.carta.is/static/img/logo-carta-rec%402x.png",
        },
        {
          src: "https://www.carta.is/static/img/pix4d-logo-large.png",
        },
        {
          src: "https://www.carta.is/static/img/pix4d-logo-large.png",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "우왕",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "쭨당",
        },
      ],
    },
  ],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: false,
};

const dummyPost = {
  id: 2,
  User: {
    id: 1,
    nickname: "제로초",
  },
  content: "넥스트 고고",
  Images: [],
  Comments: [],
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) => ({ type: ADD_POST_REQUEST, data });
export const addComment = (data) => ({ type: ADD_COMMENT_REQUEST, data });

// (이전상태, 액션) => 다음상태
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: false,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: false,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
