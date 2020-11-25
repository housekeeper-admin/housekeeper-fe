const basicState = {
  currentRouter: {
    params: {},
    url: ""
  },
  routerArray: {
    maxLength: 8,
    array:[]
  }
};
export default (state = basicState, action) => {
  switch (action) {
    case "LoginStatus":
      state = true;
      break;
  
    default:
      break;
  }
  return state;
};