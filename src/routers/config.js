import DashBoard from "../pages/DashBoard";
import LoginPage from "../pages/Login";
import NoMatch from "../pages/NoMatch";
import Personal from "../pages/Personal";
import Entry from "../pages/Personal/Entry";
export default [
  {
    path: "/home/:JobId",
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
  },
  {
    path: "/personal",
    name: "Personal",
    component: Personal,
    routes: {
      path: "/personal/entry",
      name: "Entry",
      component: Entry
    }
  }
];