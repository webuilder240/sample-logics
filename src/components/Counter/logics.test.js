import { increment, decrement } from './logics';
import { expect, test } from "vitest"

test('increment', () => {
  expect(increment(1)).toBe(2);
});

test("decrement", () => {
  expect(decrement(1)).toBe(0)
})
