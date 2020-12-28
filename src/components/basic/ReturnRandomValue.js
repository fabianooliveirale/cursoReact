import React from "react";

export default ({ firstValue, secondValue }) => {
  const formatMin = firstValue > secondValue ? secondValue : firstValue;
  const formatMax = firstValue > secondValue ? firstValue : secondValue;

  const random = Math.random() * (formatMax - formatMin) + formatMin;
  const formatedValue = Math.ceil(random);
  return (
    <p>
      Número randomizado entre intervalor de {formatMin} ah {formatMax}:{" "}
      {formatedValue}
    </p>
  );
};
