export const checkCardNumber = (cardNumber) => {
  let cardIssuer = null;
  let isCardValid = false;

  //Select card issuer
  if (cardNumber.length >= 13) {
    if (
      cardNumber[0] === "4" &&
      (cardNumber.length === 13 || cardNumber.length === 16)
    )
      cardIssuer = "visa";
    else if (
      cardNumber.length === 15 &&
      cardNumber[0] === "3" &&
      (cardNumber[1] === "4" || cardNumber[1] === "7")
    )
      cardIssuer = "americanexpress";
    else if (
      cardNumber.length === 16 &&
      ((cardNumber[0] === "5" &&
        parseInt(cardNumber[1]) >= 1 &&
        parseInt(cardNumber[1]) <= 5) ||
        (cardNumber[0] === "2" && cardNumber[1] === "2"))
    )
      cardIssuer = "mastercard";
    else cardIssuer = null;

    //Check if the number is valid
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

    (splittedMultipliedStringSum + sumOfNotMultipliedNumbers) % 10 === 0
      ? (isCardValid = true)
      : (isCardValid = false);
  }

  return [cardIssuer, isCardValid];
};
