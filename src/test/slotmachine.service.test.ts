import {
  calculateReward,
  calculateTotalReward,
  isWinningCombination,
  ISymbol,
  rollSlotMachine,
} from "../services/slotmachine.services";

describe("Slot Machine", () => {
  describe("calculateReward", () => {
    it("should return correct rewards for each symbol", () => {
      expect(calculateReward("C")).toBe(10);
      expect(calculateReward("L")).toBe(20);
      expect(calculateReward("O")).toBe(30);
      expect(calculateReward("W")).toBe(40);
    });
  });

  describe("calculateTotalReward", () => {
    it("should calculate total reward correctly", () => {
      const symbols: ISymbol[] = ["C", "L", "O"];
      const totalReward = calculateTotalReward(symbols);
      expect(totalReward).toBe(60); // 10+20+30
    });
  });

  describe("isWinningCombination", () => {
    it("should return true for a winning combination", () => {
      const winningSymbols: ISymbol[] = ["C", "C", "C"];
      expect(isWinningCombination(winningSymbols)).toBe(true);
    });

    it("should return false for a non-winning combination", () => {
      const nonWinningSymbols: ISymbol[] = ["C", "L", "O"];
      expect(isWinningCombination(nonWinningSymbols)).toBe(false);
    });
  });

  describe("rollSlotMachine", () => {
    it("should return updated credit when winning", () => {
      const credit = 50;
      const result = rollSlotMachine(credit);
      expect(result).toHaveProperty("symbols");
      isWinningCombination(result.symbols)
        ? expect(result.updatedCredit).toBeGreaterThan(credit)
        : expect(result.updatedCredit).toBe(credit);
    });

    it("should cheat under certain condition", () => {
      const credit = 55;
      // to get same result each time C C C
      jest.spyOn(Math, "random").mockReturnValue(0.1);
      const result = rollSlotMachine(credit);

      expect(isWinningCombination(result.symbols)).toBe(false);
      jest.spyOn(Math, "random").mockRestore();
    });
  });
});
