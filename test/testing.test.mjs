import { test } from "vitest";
import { expect } from "chai";
import { normalize } from "./testing.mjs";

test("normalize", () => {
  expect(normalize("  x  ")).to.equal("x");
  expect(normalize("   x\n   x")).to.equal("x\nx");
  expect(normalize("   x\n   x\n")).to.equal("x\nx");
  expect(normalize("\n   x\n   x")).to.equal("x\nx");
});
