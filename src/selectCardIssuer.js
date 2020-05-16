export const selectCardIssuer = (cardNumber) => {
  let cardIssuer = null;

  if (!cardNumber || cardNumber.length < 13) return null;

  if (
    cardNumber.startsWith("4") &&
    (cardNumber.length === 13 || cardNumber.length === 16)
  )
    cardIssuer = "visa";

  if (
    cardNumber.length === 15 &&
    (cardNumber.startsWith("34") || cardNumber.startsWith("37"))
  )
    cardIssuer = "americanexpress";

  if (
    cardNumber.length === 16 &&
    ((cardNumber.startsWith("5") &&
      parseInt(cardNumber[1]) >= 1 &&
      parseInt(cardNumber[1]) <= 5) ||
      cardNumber.startsWith("22"))
  )
    cardIssuer = "mastercard";

  return cardIssuer;
};
