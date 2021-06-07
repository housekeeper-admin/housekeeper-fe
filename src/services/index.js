import http from './http';
import * as user from './user';
import * as article from './article';
import * as wage from './wage';
import * as attendance from './attendance';
import * as resign from './resign';

export const service = http;

export default {
  user,
  article,
  wage,
  attendance,
  resign,
};
