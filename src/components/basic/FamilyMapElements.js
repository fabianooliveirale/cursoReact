import React, { cloneElement } from "react";

export default (props) => {
  return (
    <div>
      {props.children.map((element, index) => {
        return cloneElement(element, { ...props, key: index });
      })}
    </div>
  );
};
