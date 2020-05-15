import React from "react";
import cardValidLength from "../helpers/cardValidLength";
import americanexpress from "../../src/assets/american-express.png";
import mastercard from "../../src/assets/master-card.png";
import visa from "../../src/assets/visa.png";

const RenderCardProvider = ({ cardProvider, cardNumber }) => {
  if (cardProvider && cardValidLength(cardNumber))
    return (
      <>
        <p>Your card issuer:</p>
        <img
          src={
            cardProvider === "visa"
              ? visa
              : cardProvider === "mastercard"
              ? mastercard
              : americanexpress
          }
          alt={cardProvider}
          height="100"
          style={{ marginBottom: "20px" }}
        ></img>
      </>
    );

  if (!cardNumber)
    return <p style={{ color: "red" }}>Card number can not be empty.</p>;

  if (!cardValidLength(cardNumber))
    return (
      <p style={{ color: "red" }}>
        The card number must have 13, 15 or 16 digits.
      </p>
    );

  return <p style={{ color: "red" }}>The card number is not valid.</p>;
};

export default RenderCardProvider;
