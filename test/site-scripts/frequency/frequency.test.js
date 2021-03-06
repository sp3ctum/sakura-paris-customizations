import { words } from "../../../src/site-scripts/frequency/frequency.js";

describe("words from title", () => {
  test("returns words", () => {
    expect(words("あたい【私】")).toEqual(["私"]);
    expect(words("わらわ【妾・私】ワラハ")).toEqual(["妾", "私"]);
  });

  test("gets rid of extra characters", () => {
    expect(words("はだし【×跣・裸＝足・跣＝足】")).toEqual([
      "跣",
      "裸足",
      "跣足",
    ]);

    expect(words("うつ・す【移す・△遷す】")).toEqual(["移す", "遷す"]);
    expect(words("ほん‐やく【翻訳（▼飜訳）】")).toEqual(["翻訳"]);
  });
});
