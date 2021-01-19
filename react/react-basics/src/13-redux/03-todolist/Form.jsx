import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { putDataAction } from "./store/actionCreator";

// const mapDispatchToProps = (dispatch) => {
//   return {
//     putData(task) {
//       dispatch(putDataAction(task));
//     },
//   };
// };

function Form(props) {
  const [inputval, setinputval] = useState("");
  
  const dispatch = useDispatch(putDataAction());

  function handleKeyUp(e) {
    if (e.keyCode === 13) {
      dispatch(inputval);
      setinputval("");
    }
  }
  return (
    <input
      type="text"
      value={inputval}
      onChange={(e) => setinputval(e.target.value)}
      onKeyUp={handleKeyUp}
    />
  );
}

export default Form;
