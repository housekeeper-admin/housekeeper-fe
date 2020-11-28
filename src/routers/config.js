import DashBoard from "../pages/DashBoard";
import LoginPage from "../pages/Login";
import NoMatch from "../pages/NoMatch";
import Manage from "../pages/Manage";
import Logistics from "../pages/Logistics";
import Editor from "../pages/Editor";
import MessageDetail from "../pages/Article/index";
import ManageChild from "./manage.child";
import PersonalChild from "./personal.child";
import PersonalCenter from "../pages/PersonalCenter";
import Personal from "../pages/Personal/index";
export const mainRouter = [
  {
    path: "/home",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage
  },
  {
    path: "*",
    name: "NoMatch",
    component: NoMatch
  }
];

export const DashRouter = [
  {
    path: "/home/center",
    name: "Center",
    component: PersonalCenter
  },
  {
    path: "/home/personal",
    name: "Personal",
    component: Personal,
    routes: PersonalChild
  },
  {
    path: "/home/manage",
    name: "Manage",
    component: Manage,
    routes: ManageChild
  },
  {
    path: "/home/logistics",
    name: "Logistics",
    component: Logistics
  },
  {
    path: "/home/editor",
    name: "Editor",
    component: Editor
  },
  {
    path: "/home/detail/message/:id",
    name: "MessageDetail",
    component: MessageDetail
  }
];