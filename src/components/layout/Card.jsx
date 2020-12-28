import React from "react";

export default ({ title, children, backgroundColor }) => {
  const backgroundColorDefault = backgroundColor || "#323232";
  return (
    <div style={styles.cardStyle(backgroundColorDefault)}>
      <div style={styles.cardTitle}>{title}</div>
      <div style={styles.cardContent}>{children}</div>
    </div>
  );
};

const styles = {
  cardStyle: (backgroundColorDefault) => ({
    padding: 6,
    borderRadius: 6,
    backgroundColor: backgroundColorDefault,
    border: `2px solid #000`,
    overflow: "hidden",
    margin: 15,
    display: "flex",
    flexDirection: "column",
    minWidth: 300,
  }),
  cardTitle: {
    paddingTop: 10,
    paddingBottom: 10,
    display: "flex",
    padding: 5,
    color: "#fff",
    fontFamily: "Roboto Condensed",
    fontWeight: "bold",
    justifyContent: "center",
  },
  cardContent: {
    display: "flex",
    color: "#000",
    border: `2px solid #000`,
    flex: 1,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    padding: 20,
  },
};
