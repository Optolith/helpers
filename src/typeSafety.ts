/**
 * This function is used to make sure that the `switch` is exhaustive. Place it
 * in the `default` case of the `switch`.
 *
 * Optionally, you can pass a custom error message.
 * @param _x - The value that is used in the `switch`.
 * @param [msg] - A custom error message.
 * @example
 * const aorb = (x: "a" | "b") => {
 *   switch (x) {
 *     case "a": return 1
 *     case "b": return 2
 *     default: return assertExhaustive(x)
 *   }
 * }
 */
export function assertExhaustive(
  _x: never,
  msg: string = "The switch is not exhaustive."
): never {
  throw new Error(msg)
}
