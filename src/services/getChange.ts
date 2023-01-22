type SetStateAction<S> = S | ((prevState: S) => S) | undefined;

type Record<K extends string | number | symbol, T> = { [P in K]: T };

export const getChange = (
  ammountRequired: number,
  availableMoney: Record<number, number>
) => {
  const nominals = Object.keys(availableMoney)
    .map(Number)
    .sort((a, b) => b - a);

  const collect = (
    amount: number,
    nominals: number[]
  ): SetStateAction<Record<number, number>> => {
    if (amount === 0) return {};
    if (!nominals.length) return;

    let currentNominal = nominals[0];
    let avaiableNotes = availableMoney[currentNominal];
    let notesNeeded = Math.floor(amount / currentNominal);
    let numberOfNotes = Math.min(avaiableNotes, notesNeeded);

    for (let i = numberOfNotes; i >= 0; i--) {
      let result = collect(amount - i * currentNominal, nominals.slice(1));

      if (result) {
        return i ? { [currentNominal]: i, ...(result as []) } : result;
      }
    }
  };

  return collect(ammountRequired, nominals);
};
