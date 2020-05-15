import React, { useState } from "react";
import "./App.css";
import { checkCardNumber } from "./checkCardNumber";
import debitcard from "../src/assets/debit-card.png";
import RenderCardProvider from "./components/RenderCardProvider";
import RenderValidationMark from "./components/RenderValidationMark";

function App() {
  const [cardNumber, setCardNumber] = useState(null);
  const [cardProvider, setCardProvider] = useState("");
  const [isCardNumberValid, setIsCardNumberValid] = useState(false);

  const handleCardNumberInputChange = (e) => {
    setCardNumber(e.target.value);
    const verification = checkCardNumber(e.target.value);
    setCardProvider(verification[0]);
    setIsCardNumberValid(verification[1]);
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
      <RenderCardProvider cardProvider={cardProvider} cardNumber={cardNumber} />
      <RenderValidationMark
        cardProvider={cardProvider}
        isCardNumberValid={isCardNumberValid}
        cardNumber={cardNumber}
      />
    </div>
  );
}

export default App;
