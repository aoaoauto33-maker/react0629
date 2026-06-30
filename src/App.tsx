// // -1- 基本 StateBasic
// import { useState } from 'react'
// import "./App.css"
// import StateBasic from './StateBasic'


// function App(){
//   const [count, _] = useState(0)

//   return(
//   <>
//     <StateBasic init={0} />
//   </>
// )
// }

// export default App








// // -2- 繰り返し
// import './App.css'
// import ForList from './components/ui/ForList'
// import { books } from './datas/books';

// function App() {
//   return (
//     <>
//       <ForList src={books} />
//     </>
//   )
// }

// export default App











// -3- コンポーネント分離
import './App.css'
import ForList from './components/ui/ForList'
import { books } from './datas/books';

function App() {
  return (
    <>
      <ForList src={books} />
    </>
  )
}

export default App









// // -4- リストの絞り込み
// import './App.css'
// import ForFilter from './components/ui/ForFilter'
// import { books } from './datas/books';

// function App() {
//   return (
//     <>
//       <ForFilter items={books} price={3000}/>
//     </>
//   )
// }

// export default App
