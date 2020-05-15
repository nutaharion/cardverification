const cardValidLength = (cardNumber) => {
  if (!cardNumber) return false;

  return (
    cardNumber.length === 13 ||
    cardNumber.length === 15 ||
    cardNumber.length === 16
  );
};

export default cardValidLength;
