import React from "react";

export default (props) => {
  return (
    <div style={styles.flex}>
      <div>FILHO = {props.childName}</div>
      <div>numero = {props.number}</div>
      <div>nome do pai = {props.name}</div>
      <div style={styles.displayFlex}>
        <button
          style={styles.button}
          onClick={() => {
            props.setFather({ name: "predo" });
          }}
        >
          Fornecer por Estado
        </button>
      </div>
    </div>
  );
};

const styles = {
  button: {
    padding: 10,
    flex: 1,
    marginTop: 10,
  },
  flex: {
    flex: 1,
  },
  displayFlex: {
    flex: 1,
    display: "flex",
  },
};
