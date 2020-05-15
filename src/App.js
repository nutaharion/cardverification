import React, { useState } from "react";
import "./App.css";
import { checkCardNumber } from "./checkCardNumber";
import debitcard from "../src/assets/debit-card.png";
import americanexpress from "../src/assets/american-express.png";
import mastercard from "../src/assets/master-card.png";
import visa from "../src/assets/visa.png";
import validmark from "../src/assets/check-mark.png";
import invalidmark from "../src/assets/close.png";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardProvider, setCardProvider] = useState("");
  const [isCardNumberValid, setIsCardNumberValid] = useState(false);

  const handleCardNumberInputChange = (e) => {
    setCardNumber(e.target.value);
    const verification = checkCardNumber(e.target.value);
    setCardProvider(verification[0]);
    setIsCardNumberValid(verification[1]);
  };

  const cardHasSuficientLength = () => {
    return (
      cardNumber.length === 13 ||
      cardNumber.length === 15 ||
      cardNumber.length === 16
    );
  };

  const returnCardProvider = () => {
    if (cardProvider && cardHasSuficientLength())
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

    if (!cardHasSuficientLength)
      return (
        <p style={{ color: "red" }}>
          The card number must have 13, 15 or 16 digits.
        </p>
      );

    if (!cardNumber)
      return <p style={{ color: "red" }}>Card number can not be empty.</p>;

    return <p style={{ color: "red" }}>The card number is not valid.</p>;
  };

  const returnIsCardValid = () => {
    if (cardProvider && cardHasSuficientLength())
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
  };

  return (
    <div className="App">
      <h1>Card number verification</h1>
      <img
        src={debitcard}
        alt="Debit card"
        height="100"
        style={{ marginBottom: "30px" }}
      ></img>
      <label
        htmlFor="cardNumber"
        style={{
          display: "block",
        }}
      >
        Enter a card number to check:
      </label>
      <input
        type="number"
        id="cardNumber"
        name="cardNumber"
        onChange={handleCardNumberInputChange}
        style={{ width: "20em" }}
      />
      <br />
      {returnCardProvider()}
      {returnIsCardValid()}
    </div>
  );
}

export default App;
