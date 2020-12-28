import React from "react";
import Member from "./FamilyMember";

export default (props) => {
  return (
    <div>
      <Member name="Farmatilha" lastName={props.lastName} />
      <Member name="Toliço" {...props} />
      <Member {...props} />
    </div>
  );
};
