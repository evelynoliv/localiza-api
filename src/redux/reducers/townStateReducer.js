const townStateReducer = (state = [], action) => {
  switch (action.type) {
    case "TOWN_STATE":
      return { ...state, towns: action.payload };
    default:
      return state;
  }
};

export default townStateReducer;
