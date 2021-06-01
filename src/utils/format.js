/**
 * 格式化时间
 * @param {number} date 
 */
export default function formatDate(date) {
    date = new Date(date || Date.now());
    let YY = date.getFullYear() + "-";
    let MM = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
    let DD = (date.getDate() < 10 ? "0" + (date.getDate()) : date.getDate());
    let hh = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
    let mm = (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
    return YY + MM + DD + " " + hh + mm;
}