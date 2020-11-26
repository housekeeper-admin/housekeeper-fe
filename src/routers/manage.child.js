import ManageAttendance from "../pages/Manage/attendance";
import ManageAskLeave from "../pages/Manage/askleave";
import ManageTask from "../pages/Manage/task";
import ManageResign from "../pages/Manage/resign";
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
  {
    path: "/home/manage/task",
    name: "Task",
    component: ManageTask
  }
];