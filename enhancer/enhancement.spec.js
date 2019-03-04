const game = require("./enhancement");
const {
  battleaxe,
  sword,
  dagger,
  chestplate,
  helmet,
  leggings,
  gloves
} = require("./items");

describe("the enhancement", () => {
  describe("the success function", () => {
    // it("should change battleaxe name", () => {
    //   const result = game.success(battleaxe);
    //   expect(result.name).toEqual("[DUO]Battleaxe");
    // });
    it("should increase battleaxe enchantment", () => {
      const result = game.success(battleaxe);
      expect(result.enhancement).toEqual("DUO");
    });
    it("should change sword name", () => {
      const result = game.success(sword);
      expect(result.name).toEqual("[+11]Sword");
    });
    it("should increase sword enchantment", () => {
      const result = game.success(sword);
      expect(result.enhancement).toEqual("+11");
    });
    // it("should change chestplate name", () => {
    //   const result = game.success(chestplate);
    //   expect(result.name).toEqual("[TET]Chestplate");
    // });
    it("should increase chestplate enchantment", () => {
      const result = game.success(chestplate);
      expect(result.enhancement).toEqual("TET");
    });
    it("should change helmet name", () => {
      const result = game.success(helmet);
      expect(result.name).toEqual("[+9]Helmet");
    });
    it("should increase helmet enchantment", () => {
      const result = game.success(helmet);
      expect(result.enhancement).toEqual("+9");
    });
    it("throw leggings, not enough durability", () => {
      expect(() => {
        game.success(leggings);
      }).toThrow();
    });
    it("throw gloves, not enough durability", () => {
      expect(() => {
        game.success(gloves);
      }).toThrow();
    });
  });

  describe("the fail function", () => {
    it("should reduce dagger durability to 20", () => {
      const result = game.fail(dagger);
      expect(result.durability).toEqual(20);
    });
    it("should reduce gloves durability to 20", () => {
      const result = game.fail(gloves);
      expect(result.durability).toEqual(0);
    });
  });

  describe("the repair function", () => {
    it("should increase durability to 100", () => {
      const result = game.repair(leggings);
      expect(result.durability).toEqual(100);
    });
  });
});
