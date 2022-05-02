import React from "react";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10% 5% 10%" }}>
      Try saying: <br />
      Add {isIncome ? "Income " : "Expense "} of $100 in Category{" "}
      {isIncome ? "Business " : "Travel "} for Monday...
    </div>
  );
};

export default InfoCard;
