import PersonalEntry from "../pages/Personal/Entry";
import PersonalAttendance from "../pages/Personal/attendance";
import PersonalAskLeave from "../pages/Personal/askleave";
import PersonalResign from "../pages/Personal/resign";
import PersonalWage from "../pages/Personal/wage";
import PersonalTask from "../pages/Personal/task";
export default [
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
];