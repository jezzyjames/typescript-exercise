const allergens: any = {
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats",
};

export class Allergies {
  private allergics: string[] = [];

  private findScoreBase(index: number): number {
    let scoreBase = 1;
    while (scoreBase * 2 <= index) {
      scoreBase = scoreBase * 2;
    }
    return scoreBase;
  }

  constructor(allergenIndex: number) {
    let scoreBase = this.findScoreBase(allergenIndex);

    let score = allergenIndex;
    while (scoreBase >= 1 && score !== 0) {
      if (allergens[scoreBase] !== undefined && scoreBase <= score) {
        this.allergics.push(allergens[scoreBase]);
      }

      score = score - scoreBase;
      scoreBase = this.findScoreBase(score);
    }
  }

  public list(): unknown {
    return this.allergics.reverse();
  }

  public allergicTo(allergen: string): unknown {
    return this.allergics.includes(allergen);
  }
}
