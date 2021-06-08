import http from './http';
import * as user from './user';
import * as article from './article';
import * as wage from './wage';
import * as attendance from './attendance';
import * as resign from './resign';
import * as logistics from './logistics';
import * as askleave from './askleave';

export const client = http;

export default {
  user,
  article,
  wage,
  attendance,
  resign,
  logistics,
  askleave,
};
