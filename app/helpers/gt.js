import { helper } from "@ember/component/helper";

export function gt([a, b]) {
  return a > b;
}

export default helper(gt);
