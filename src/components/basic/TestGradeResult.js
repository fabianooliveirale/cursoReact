import React from "react";

export default function ({ testGrade, name }) {
  const status = testGrade >= 7 ? "Aprovado" : "reprovado";
  const formatTestGrade = Math.ceil(testGrade);
  return (
    <div>
      <h2>{name}</h2>
      <p>
        {name} foi {status} sua nota: {formatTestGrade}
      </p>
    </div>
  );
}
