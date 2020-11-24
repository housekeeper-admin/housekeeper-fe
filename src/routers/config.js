import DashBoard from "../pages/DashBoard";
import LoginPage from "../pages/Login";
import NoMatch from "../pages/NoMatch";
import Personal from "../pages/Personal";
import PersonalEntry from "../pages/Personal/Entry";
import PersonalAttendance from "../pages/Personal/attendance";
import PersonalReissue from "../pages/Personal/reissue";
import PersonalAskLeave from "../pages/Personal/askleave";
import PersonalResign from "../pages/Personal/resign";
import PersonalWage from "../pages/Personal/wage";
import PersonalTask from "../pages/Personal/task";
import Manage from "../pages/Manage";
import ManageAttendance from "../pages/Manage/attendance";
import ManageAskLeave from "../pages/Manage/askleave";
import ManageTask from "../pages/Manage/task";
import ManageResign from "../pages/Manage/resign";
import Logistics from "../pages/logistics";
import Communication from "../pages/communication";
import MessageDetail from "../pages/detail/Message";
export const mainRouter = [
  {
    path: "/",
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
    path: "/home/person",
    name: "Personal",
    component: Personal,
    routes: [
      {
        path: "/home/personal/entry",
        name: "Entry",
        component: PersonalEntry
      },
      {
        path: "/home/personal/attendance",
        name: "Attendance",
        component: PersonalAttendance
      },
      {
        path: "/home/personal/reissue",
        name: "Reissue",
        component: PersonalReissue
      },
      {
        path: "/home/personal/askleave",
        name: "AskLeave",
        component: PersonalAskLeave
      },
      {
        path: "/home/personal/resign",
        name: "Resign",
        component: PersonalResign
      },
      {
        path: "/home/personal/wage",
        name: "Wage",
        component: PersonalWage
      },
      {
        path: "/home/personal/task",
        name: "Task",
        component: PersonalTask
      }
    ]
  },
  {
    path: "/home/manage",
    name: "Manage",
    component: Manage,
    routes: [
      {
        path: "/home/manage/attendance",
        name: "Attendance",
        component: ManageAttendance
      },
      {
        path: "/home/manage/askleave",
        name: "AskLeave",
        component: ManageAskLeave
      },
      {
        path: "/home/manage/resign",
        name: "Resign",
        component: ManageResign
      },
      {
        path: "/home/manage/task",
        name: "Task",
        component: ManageTask
      }
    ]
  },
  {
    path: "/home/logistics",
    name: "Logistics",
    component: Logistics
  },
  {
    path: "/home/communication",
    name: "Communication",
    component: Communication
  },
  {
    path: "/home/detail/message/:id",
    name: "MessageDetail",
    component: MessageDetail
  }
];