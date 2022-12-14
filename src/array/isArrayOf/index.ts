import { isFunction } from "../../object";

/**
 * check if each element of the array fullfil the provided condition.
 * @param array source
 * @param condition a type or a callback to be executed.
 */
export default function (
  array: Array<unknown>,
  condition: string | ((item: unknown) => boolean)
): boolean {
  if (!Array.isArray(array)) throw "(array) should be of type array.";

  if (!isFunction(condition) && typeof condition !== "string")
    throw "(verifier) should be a type as string or a callback.";

  return array.every((item) => {
    if (typeof condition === "string") {
      if (typeof item !== condition) return false;
    } else {
      if (!condition(item)) return false;
    }

    return true;
  });
}
