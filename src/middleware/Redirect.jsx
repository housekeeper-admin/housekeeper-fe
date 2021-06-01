import storage from "../apis/storage";
import STORAGE from "../configs/storage";
import {Redirect} from "react-router-dom";
import React from "react";
/**
 * 对登录权限页面重定向
 * @param {object} ReactElement 
 * @param {object} Routes 
 */
export function Redirect_TO_Login() {
  let auth = storage.get({key: STORAGE.TOKEN}) || null;
  return auth?<Redirect to="/center"></Redirect>:<Redirect to="/login"></Redirect>;
}
/**
 * 对用户权限进行重定向
 */
export function Redirect_TO_Auth() {
  let power = storage.get({key: STORAGE.USER_INFO})?.power || 0;
  return power > 0 ?null:<Redirect to="/noauth"></Redirect>;
}
