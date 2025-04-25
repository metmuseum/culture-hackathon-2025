// // import React, {useEffect, useRef} from 'react'
// // import {DosPlayer} from 'js-dos'

// // const Doom = () => {
// //   const canvasRef = useRef(null)

// //   useEffect(() => {
// //     const player = new DosPlayer({
// //       canvas: canvasRef.current,
// //       style: {
// //         width: '640px',
// //         height: '400px',
// //       },
// //     })

// //     // Directly reference public folder path
// //     player.run('/doom.zip')

// //     return () => {
// //       player.stop()
// //     }
// //   }, [])

// //   return (
// //     <div>
// //       <canvas ref={canvasRef}></canvas>
// //     </div>
// //   )
// // }

// // export default Doom
// //
// import React, {useEffect, useRef} from 'react'

// const Doom = () => {
//   const canvasRef = useRef(null)

//   useEffect(() => {
//     if (window.Dos) {
//       window
//         .Dos(canvasRef.current, {
//           wdosboxUrl: 'https://js-dos.com/6.22/current/wdosbox.js',
//         })
//         .ready((fs, main) => {
//           fs.extract('/doom.zip').then(() => {
//             main(['-c', 'doom.exe'])
//           })
//         })
//     } else {
//       console.error('js-dos is not loaded')
//     }
//   }, [])

//   return (
//     <div>
//       <canvas ref={canvasRef} width={640} height={400}></canvas>
//     </div>
//   )
// }

// export default Doom
