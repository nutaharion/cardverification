import React, { useState } from "react";
import "./App.css";
import debitcard from "../src/assets/debit-card.png";
import CardProvider from "./components/CardProvider";
import ValidationMark from "./components/ValidationMark";
import { selectCardIssuer } from "./selectCardIssuer";
import { validateCardNumber } from "./validateCardNumber";

function App() {
  const [cardNumber, setCardNumber] = useState(null);
  const [cardProvider, setCardProvider] = useState("");
  const [isCardNumberValid, setIsCardNumberValid] = useState(false);

  const handleCardNumberInputChange = (e) => {
    setCardNumber(e.target.value);
    setCardProvider(selectCardIssuer(e.target.value));
    setIsCardNumberValid(validateCardNumber(e.target.value));
  };

  return (
    <div className="App">
      <h1>Card number verification</h1>
      <img
        src={debitcard}
        alt="Debit card"
        height="100"
        style={{ marginBottom: "30px" }}
      />
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
      <CardProvider cardProvider={cardProvider} cardNumber={cardNumber} />
      <ValidationMark
        cardProvider={cardProvider}
        isCardNumberValid={isCardNumberValid}
        cardNumber={cardNumber}
      />
    </div>
  );
}

export default App;
