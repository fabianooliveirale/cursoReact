import React from "react";

export default (props) => {
  const tableLine = (
    <table style={styles.table}>
      <TableLineHeader list={["ID", "NAME", "PRICE"]} />
      <TableLineBody list={props.products} />
    </table>
  );

  return tableLine;
};

const TableLineHeader = ({ list }) => {
  return (
    <thead style={styles.headerLine}>
      <tr>
        {list.map((element, index) => {
          return (
            <th style={styles.element} key={index}>
              {element}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

const TableLineBody = ({ list }) => {
  return list.map((element, index) => {
    return (
      <tbody key={index} style={styles.bodyLine(index)}>
        <tr>
          <td style={styles.element}>{element.id}</td>
          <td style={styles.element}>{element.name}</td>
          <td style={styles.element}>{toMonetaryValue(element.price)}</td>
        </tr>
      </tbody>
    );
  });
};

const toMonetaryValue = (value) => {
  return `R$ ${value.toFixed(2)}`;
};

const styles = {
  table: {
    width: "100%",
    border: `2px solid #000`,
  },
  bodyLine: (index) => ({
    width: "100%",
    textAlign: "center",
    backgroundColor: index % 2 === 0 ? "#ddd" : "#fff",
  }),
  headerLine: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#0f0",
  },
  element: {
    border: `2px solid #000`,
  },
};
