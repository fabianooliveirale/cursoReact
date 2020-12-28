import React, { useState } from "react";

import IndirectChild from "./IndirectChild";

export default (props) => {
  const [father, setFather] = useState(0);

  return (
    <div style={{ flex: 1 }}>
      <div>PAI = {father.name || ""}</div>
      <IndirectChild {...props} number={20} setFather={setFather} />
    </div>
  );
};
