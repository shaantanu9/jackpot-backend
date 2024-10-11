export type ISymbol = "C" | "L" | "O" | "W";

export const symbols: ISymbol[] = ["C", "L", "O", "W"];

// calculate reward based
export const calculateReward = (symbol: ISymbol): number => {
  switch (symbol) {
    case "C":
      return 10;
    case "L":
      return 20;
    case "O":
      return 30;
    case "W":
      return 40;
    default:
      return 0;
  }
};

// calculate total reward
export const calculateTotalReward = (symbols: ISymbol[]): number => {
  let totalReward = 0;
  symbols.forEach((symbol) => {
    totalReward += calculateReward(symbol);
  });
  return totalReward;
};

// winning combination
export const isWinningCombination = (symbols: ISymbol[]): boolean => {
  return symbols.every((symbol) => symbol === symbols[0]);
};

// generate random symbol
export const generateRandomSymbol = (): ISymbol[] => {
  return Array.from(
    { length: 3 },
    () => symbols[Math.floor(Math.random() * symbols.length)]
  );
};
// generate non winning symbol
export const generateNonWinningCombination = (): ISymbol[] => {
  let symbol = generateRandomSymbol();
  // while (isWinningCombination(symbol)) {
  //   // symbol = generateRandomSymbol();
  // }
  symbol = ["C", "L", "O"]; // for testing
  return symbol;
};
// cheat
export const rollSlotMachine = (credit: number) => {
  let symbols = generateRandomSymbol();

  if (credit > 40 && isWinningCombination(symbols)) {
    const cheatPercentage = credit < 60 ? 0.3 : 0.6;
    const random = Math.random();

    if (random < cheatPercentage) {
      symbols = generateNonWinningCombination();
    }
  }

  const updatedCredit = isWinningCombination(symbols)
    ? calculateTotalReward(symbols) + credit
    : credit;
  return { symbols, updatedCredit };
};
