//hoc.js 高阶
import React from "react";

const hoc = (Comp) => (props) => {
  return <Comp title="WOW" {...props}></Comp>;
};

export default hoc; // hoc
