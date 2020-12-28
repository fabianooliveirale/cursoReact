import React, { useState } from "react";

export default () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        value={text}
        onChange={({ target: { value } }) => setText(value)}
      />
    </div>
  );
};
