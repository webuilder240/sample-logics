import { formatRange } from "./formatRange";
import { expect, test } from "vitest"

test("formatRange", () => {
  expect(formatRange(new Date("2021-01-01"), new Date("2021-01-03"))).toBe("2021/01/01～2021/01/03")
})
