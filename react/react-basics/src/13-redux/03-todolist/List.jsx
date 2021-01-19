import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeDataAction, loadDataAction } from "./store/actionCreator";

// const mapDispatchtoProps = (dispatch) => {
//   // bindActionCreators({ loadDataAction }, dispatch);
//   return {
//     actions: bindActionCreators(
//       {
//         removeData: (index) => removeDataAction(index),
//         loadData: () => loadDataAction(),
//       },
//       dispatch
//     ),
//   };
// };
// // const mapStateToProps = (state) => {
//   return { list: state.list };
// };

function List() {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDataAction());
  }, []);

  const handleClick = (index) => {
    return () => {
      dispatch(removeDataAction(index));
    };
  };

  return (
    <div>
      <ul>
        {list.map((value, index) => {
          return (
            <li key={index}>
              {typeof value == "string" ? value : value.positionName}
              <button onClick={handleClick(index)}>REMOVE</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
