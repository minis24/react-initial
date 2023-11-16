import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




/**
 * by jkkim 2023.11.16 함수형 컴포넌트 ,클래스형 컴포넌트 비교테스트하려고 추가함.
 */
import { FunctionalComponent } from './study/FunctionalComponent'
import { ClassComponent } from './study/ClassComponent'
import { List } from './study/RerenderComponent'
import A from './study/RerenderingScenario'
import RenderingMemo from './study/RerenderingMemo'




function App() {
  const [count, setCount] = useState(0);

  const arr = [1,2,3];
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>




      {/* 함수형 컴포넌트 추가 */}
      <FunctionalComponent user={'jkkim'}></FunctionalComponent>
      <ClassComponent user={'쩐쩐쩐'}></ClassComponent>

{/* 
      <ul>
        {arr.map((index)=>(<li key ={index}>{index}</li>))}
      </ul>

*/}

      {/* <List arr={arr}>dkd</List> */}


      <A></A>

      <RenderingMemo></RenderingMemo>
      
    </>
  )
}

export default App
