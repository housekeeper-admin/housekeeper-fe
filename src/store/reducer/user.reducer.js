import {user} from "../ActionTypes";
import React from "react";
const defaultUser = {
  userName: "Guide",
  jobId: "",
};
export default (state = defaultUser, action) => {
  let temp = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case user.UPDATE_LOGIN_STATUS:
      temp = action.value;
      if(temp.token) {
        let token = temp.token;
        React.$storage.set({key: token.name, value: token.value, expired: 24*60*60*1000});
      }
      break;
  
    default:
      temp = {};
      break;
  }
  return temp;
};