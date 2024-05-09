import { error } from "console";

export function convert(
  digits: number[],
  inputBase: number,
  outputBase: number
): any {
  // Start checking Error
  const checkBase = (input: number): Boolean => {
    return input === 1 || input === 0 || input < 0 || input % 1 !== 0;
  };
  if (checkBase(inputBase)) {
    throw new Error("Wrong input base");
  }
  if (checkBase(outputBase)) {
    throw new Error("Wrong output base");
  }

  const isEmptyList = digits.length === 0;
  const isMultipleZero = digits.filter((val) => val === 0).length > 1;
  const isLeadingZero = digits[0] !== 1;
  const hasNegative = digits.filter((val) => val < 0).length > 0;
  const isInvalidPositive =
    inputBase === 2 && digits.filter((val) => val > 1).length > 0;

  if (
    (isMultipleZero && isLeadingZero) ||
    isEmptyList ||
    hasNegative ||
    isInvalidPositive
  ) {
    throw new Error("Input has wrong format");
  }
  // End checking Error

  let result: number[] = [];
  if (inputBase === 10 && outputBase !== 10) {
    const dec = parseInt(digits.join(""));
    result = decToAnyBase(dec, outputBase);
  } else {
    // any base to dec
    let dec = 0;
    for (let i = digits.length - 1, j = 0; i >= 0; i--, j++) {
      const val = digits[j] * Math.pow(inputBase, i);
      dec = dec + val;
    }

    if (outputBase === 10) {
      result = dec.toString().split("").map(Number);
    } else {
      result = decToAnyBase(dec, outputBase);
    }
  }

  return result;
}

function decToAnyBase(input: number, outputBase: number): number[] {
  if (input === 0) {
    return [0];
  }

  let vTemp = input;
  let nums: number[] = [];
  while (vTemp !== 0) {
    const v = Math.floor(vTemp / outputBase);
    const r = vTemp % outputBase;

    nums.push(r);
    vTemp = v;
  }

  return nums.reverse();
}
