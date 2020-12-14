import storage from "../apis/storage";
import STORAGE from "../configs/storage";
import {Redirect} from "react-router-dom";
import React from "react";
/**
 * 对登录权限页面重定向
 * @param {object} ReactElement 
 * @param {object} Routes 
 */
export default function Redirect_TO_AUTH(ReactElement) {
  let auth = storage.get({key: STORAGE.TOKEN}) || null;
  return auth?ReactElement:<Redirect to="/login"></Redirect>;
}
