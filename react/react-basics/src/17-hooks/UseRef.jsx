import React, { createRef, useRef, useState, useEffect, Component } from 'react'

// export default function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       console.log("count: " + count);
//     }, 3000);
//   }, [count]);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>增加 count</button>
//       <button onClick={() => setCount(count - 1)}>减少 count</button>
//     </div>
//   );
// }

// export default class App extends Component {
//   state = {
//     count: 0
//   }

//   setCount = () => {
//     setTimeout(() => {
//       console.log("count: " + this.state.count)
//     }, 3000)
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setCount(this.state.count + 1)}>增加 count</button>
//         <button onClick={() => this.setCount(this.state.count - 1)}>减少 count</button>
//       </div>
//     )
//   }
// }


export default function App() {
  const count = useRef(0)

  const handleClick = (num) => {
    count.current += num
    setTimeout(() => {
      console.log("count: " + count.current);
    }, 3000)
  }

  return (
    <div>
      <p>You clicked {count.current} times</p>
      <button onClick={() => handleClick(1)}>增加 count</button>
      <button onClick={() => handleClick(-1)}>减少 count</button>
    </div>
  );
}