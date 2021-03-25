const NEW_USER_DATA = "NEW_USER_DATA";

let initialState = {
  fullName: "Не задано",
  address: "Не задано",
  phone: "Не задано",
  email: "Не задано",
};

export const formDataTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_SUBMIT":
      return {
        ...state,
        fullName: action.payload.fullName ? action.payload.fullName : "-",
        address: action.payload.address ? action.payload.address : "-",
        phone: action.payload.phone ? action.payload.phone : "-",
        email: action.payload.email ? action.payload.email : "-",
      };
    default:
      return state;
  }
};

export const addUserData = () => ({
  type: NEW_USER_DATA,
});
