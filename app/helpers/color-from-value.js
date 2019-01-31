import { helper } from "@ember/component/helper";

/**
 * @see https://stackoverflow.com/a/3426956/2250435
 */
function hashCode(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

/**
 * @see https://stackoverflow.com/a/3426956/2250435
 */
function intToRGB(i) {
  var c = (i & 0x00ffffff).toString(16).toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
}

export function colorFromValue([value]) {
  return intToRGB(hashCode(value));
}

export default helper(colorFromValue);
