/**
 *
 * @param str 字符串
 */
function firstCharLower(str: string) {
  if (!str || str.length === 0) {
    return "";
  }
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export default firstCharLower;