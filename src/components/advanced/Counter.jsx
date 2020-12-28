import React, { useState } from "react";

export default () => {
  const [value, setValue] = useState(0);
  const [input, setInput] = useState(1);

  const plus = () => {
    setValue(value + parseInt(input));
  };

  const minus = () => {
    setValue(value - parseInt(input));
  };

  return (
    <div style={styles.span}>
      <div style={styles.text}>{value}</div>
      <span style={{ color: "#fff", marginLeft: 8 }}>
        Digite um valor:
        <input
          type="number"
          pattern="[0-9]{0,5}"
          value={input}
          onChange={({ target: { value } }) => setInput(value)}
          style={{ marginRight: 10, marginLeft: 10, fontSize: 18 }}
        />
      </span>
      <span style={styles.viewButtons}>
        <button style={styles.button} onClick={plus}>
          +
        </button>
        <button style={styles.button} onClick={minus}>
          -
        </button>
      </span>
    </div>
  );
};

const styles = {
  button: {
    height: 32,
    width: "50%",
    marginTop: 10,
    fontSize: 20,
    margin: 1,
  },
  span: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#000",
  },
  text: {
    display: "flex",
    color: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    fontSize: 32,
  },
  viewButtons: {
    display: "flex",
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  input: {},
};
