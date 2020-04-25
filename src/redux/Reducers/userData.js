const initialState = {
  login: false,
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case "USER_DATA":
      return { ...state, login: action.userLogin };
    default:
      return state;
  }
};

export default userData;
