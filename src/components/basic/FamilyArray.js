import React from "react";
import Member from "./FamilyMember";

export default (props) => {
  return (
    <div>
      {props.members.map((element, index) => {
        return <Member key={index} {...element} />;
      })}
    </div>
  );
};
