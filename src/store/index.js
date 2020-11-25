import { createStore,combineReducers } from "redux";
import router from "./reducer/router.reducer";
import user from "./reducer/user.reducer";
const store = createStore(
  combineReducers({router,user}),
  //引入redux-dev-tools 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;