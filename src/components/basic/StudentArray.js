import React from "react";

export default (props) => {
  const studentInfo = (student) => (
    <span>
      {student.id}) {student.name} {student.gradePoint}
    </span>
  );

  const studentResultText = (student) => (
    <span> {student.gradePoint >= 7 ? "Aprovado" : "Reprovado"}</span>
  );

  const studentResult = (student) => (
    <strong style={{ color: student.gradePoint >= 7 ? "#005" : "#f00" }}>
      {studentResultText(student)}
    </strong>
  );

  const listStudent = props.students.map((student, index) => (
    <li key={index}>
      {studentInfo(student)} {studentResult(student)}
    </li>
  ));

  return <div>{listStudent}</div>;
};
