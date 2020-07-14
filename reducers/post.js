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
  postAdded: false,
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

const ADD_POST = "ADD_POST";
export const addPost = () => {
  return { type: ADD_POST };
};

// (이전상태, 액션) => 다음상태
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
