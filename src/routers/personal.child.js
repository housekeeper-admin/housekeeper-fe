import PersonalEntry from "../pages/Personal/Entry";
import PersonalAttendance from "../pages/Personal/Attendance";
import PersonalAskLeave from "../pages/Personal/AskLeave";
import PersonalResign from "../pages/Personal/Resign";
import PersonalWage from "../pages/Personal/Wage";
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
  }
];