import ManageAttendance from "../pages/Manage/Attendance";
import ManageAskLeave from "../pages/Manage/AskLeave";
import ManageResign from "../pages/Manage/Resign";
export default [
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
];