import React from "react";

export default (props) => {
  return (
    <div>
      <div>FILHO = {props.childName}</div>
      <div>numero = {props.number}</div>
      <div>nome do pai = {props.name}</div>
    </div>
  );
};
