import { Compare } from "./compare.js"

/**
 * A comparator function for {@link Date} objects in ascending order.
 */
export const compareDate: Compare<Date> = (a, b) => a.getTime() - b.getTime()
