export default function getNow() {
  let date = new Date();
  return {
    year:date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hour: date.getHours(),
    minutes: date.getMinutes()
  };
}