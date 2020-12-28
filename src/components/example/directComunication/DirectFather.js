import React from "react";

import DirectChild from "./DirectChild";

export default (props) => {
  return (
    <div>
      <div>PAI = {props.name}</div>
      <DirectChild {...props} number={20} />
    </div>
  );
};
