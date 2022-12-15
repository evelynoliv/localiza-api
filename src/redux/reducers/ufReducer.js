const ufReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_STATE_DATA":
      return { ...state, ufs: action.payload };
    default:
      return state;
  }
};

export default ufReducer;
