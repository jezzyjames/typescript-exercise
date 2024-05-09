export function parse(phrase: string): string {
  const splited = phrase.split(" ");

  var result = "";
  for (const word of splited) {
    if (word[1] == word[1].toUpperCase()) {
      result = result + word[0].toUpperCase();
    } else if (word.includes("-")) {
      const splitedDash = word.split("-");

      for (const word of splitedDash) {
        result = result + word[0].toUpperCase();
      }
    } else {
      const splitedUpper = word.split(/(?=[A-Z])/);

      for (const word of splitedUpper) {
        result = result + word[0].toUpperCase();
      }
    }
  }

  return result;
}
