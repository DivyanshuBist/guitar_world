import React from "react";

export default function Error(props) {
  return (
    <div className={`alert alert-${props.varient || "info"}`}>
      {props.children}
    </div>
  );
}
