import { helper } from "@ember/component/helper";

export function not([a]) {
  return !a;
}

export default helper(not);
