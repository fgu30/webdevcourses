import React, { useEffect } from "react";
import hoc from "./hoc";

const App = (baicai) => {
  useEffect(() => {
    console.log(baicai);
  });

  return <div>hello </div>;
};

export default hoc(App);
