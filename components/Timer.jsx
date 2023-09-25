// import React, { useEffect, useState } from 'react'

// const Timer = ({setStop, questionNumber}) => {
//     const [timer, setTimer] = useState(3);
//     useEffect(() => {
//         if (timer === 0) {
//             return setStop;
//         }
//         const interval = setInterval(() => {
//             setTimer((prev) => prev - 1);
//         }, 1000)
//         return () => clearInterval(interval);
//     }, [setStop, timer]);

//     useEffect(() => {
//         setTimer(30);
//     }, [questionNumber])
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Timer
// import React, { useEffect, useState } from 'react'


// export default function Timer({ setTimeOut, questionNumber }) {
//   const [timer, setTimer] = useState(30);

//   useEffect(() => {
//     if (timer === 0) return setTimeOut(true);
//     const interval = setInterval(() => {
//       setTimer((prev) => prev - 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [timer, setTimeOut]);

//   useEffect(() => {
//     setTimer(30);
//   }, [questionNumber]);
//   return timer;
// }

import { useEffect, useState } from "react";

export default function Timer({ setTimeOut, questionNumber }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setTimeOut(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);
  return timer;
}