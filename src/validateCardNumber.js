export const validateCardNumber = (cardNumber) => {
  if (!cardNumber || cardNumber.length < 13) return false;

  const splittedCardNumber = cardNumber.split("");
  let stringNumberMultiplied = "";
  let sumOfNotMultipliedNumbers = 0;

  for (let i = splittedCardNumber.length - 1; i >= 0; i--) {
    if (splittedCardNumber.length % 2 === 1)
      if (i % 2 === 0)
        sumOfNotMultipliedNumbers += parseInt(splittedCardNumber[i]);
      else stringNumberMultiplied += parseInt(splittedCardNumber[i]) * 2;

    if (splittedCardNumber.length % 2 === 0)
      if (i % 2 === 1)
        sumOfNotMultipliedNumbers += parseInt(splittedCardNumber[i]);
      else stringNumberMultiplied += parseInt(splittedCardNumber[i]) * 2;
  }

  const splittedMultipliedString = stringNumberMultiplied.split("");
  const splittedMultipliedStringSum = splittedMultipliedString.reduce(
    (a, b) => {
      return parseInt(a) + parseInt(b);
    }
  );

  if ((splittedMultipliedStringSum + sumOfNotMultipliedNumbers) % 10 === 0)
    return true;

  return false;
};
