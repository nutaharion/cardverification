import React from "react";
import cardValidLength from "../helpers/cardValidLength";
import validmark from "../../src/assets/check-mark.png";
import invalidmark from "../../src/assets/close.png";

const RenderValidationMark = ({
  cardProvider,
  isCardNumberValid,
  cardNumber,
}) => {
  if (cardProvider && cardValidLength(cardNumber))
    return (
      <>
        <p>Is a card number valid?</p>
        <img
          src={isCardNumberValid ? validmark : invalidmark}
          alt={isCardNumberValid ? "validmark" : "invalidmark"}
          height="100"
          style={{ marginBottom: "20px" }}
        ></img>
      </>
    );

  return <></>;
};

export default RenderValidationMark;
