/**
 *
 * @param str 字符串
 */
function firstCharUpper(str: string) {
  if (!str || str.length === 0) {
    return "";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default firstCharUpper;
