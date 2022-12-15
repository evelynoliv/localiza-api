const selectedStateReducer = (state = "", action) => {
  switch (action.type) {
    case "SELECTED_STATE":
      return { ...state, selectedUf: action.payload };
    default:
      return state;
  }
};

export default selectedStateReducer;
