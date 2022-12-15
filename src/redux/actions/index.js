export const getStateData = (state) => {
  return { type: "GET_STATE_DATA", payload: state };
};

export const setSelectedState = (state) => {
  return { type: "SELECTED_STATE", payload: state };
};

export const setTownState = (state) => {
  return { type: "TOWN_STATE", payload: state };
};

export const setSelectedTown = (state) => {
  return { type: "SELECTED_TOWN", payload: state };
};

export const setTownData = (state) => {
  return { type: "SET_TOWN_DATA", payload: state };
  
};

