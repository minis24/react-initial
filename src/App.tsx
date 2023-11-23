import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseDebugValueComponent from './study/react/react-hook/useDebugValue';




/**
 * by jkkim 2023.11.16 함수형 컴포넌트 ,클래스형 컴포넌트 비교테스트하려고 추가함.
 */
/* import { FunctionalComponent } from './study/react/FunctionalComponent'
import { ClassComponent } from './study/react/ClassComponent'
import { List } from './study/react/RerenderComponent'
import A from './study/react/RerenderingScenario'
import RenderingMemo from './study/react/RerenderingMemo'
import Hook from './study/react/react-hook/useState'
import UseEffectComponent from './study/react/react-hook/useEffect'
import UseMemoComponent from './study/react/react-hook/useMemo' */

/* import MemoComponent from './study/react/react-hook/memo' */
/* import UseCallbackComponent from './study/react/react-hook/useCallback' */
/* import UseRefComponent from './study/react/react-hook/useRef' */
/* import UseContextParentComponent from './study/react/react-hook/useContext' */
/* import UseReducerComponent from './study/react/react-hook/useReducer' */
/* import ParentComponent from './study/react/react-hook/forwardRef' */
import UseImperativeHandleComponent from './study/react/react-hook/useImperativeHandler'
import UseFetchTestComponent from './study/react/사용자정의훅/useFetchTestComponent';
import TestComponent from './study/react/고차함수/high-2-Component';




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
      {/* <FunctionalComponent user={'jkkim'}></FunctionalComponent> */}
      {/* <ClassComponent user={'쩐쩐쩐'}></ClassComponent> */}

{/* 
      <ul>
        {arr.map((index)=>(<li key ={index}>{index}</li>))}
      </ul>

*/}

      {/* <List arr={arr}>dkd</List> */}


      {/* <A></A> */}

    
      {/* <Hook></Hook> */}
      {/* <UseEffectComponent user = {'jkkim'}></UseEffectComponent> */}
      {/* <UseMemoComponent user= {'kkkkkkkkk'}></UseMemoComponent> */}




      {/* ------------- React.memo ------------------ */}
      {/* <RenderingMemo></RenderingMemo> */}
      {/* <MemoComponent ></MemoComponent> */}
      




      {/* ------------- useCallback 훅 테스트 ------------------ */}
      {/* <UseCallbackComponent></UseCallbackComponent> */}



      {/* ------------- useRef 훅 테스트 ------------------ */}
      {/* <UseRefComponent></UseRefComponent> */}



      {/* ------------- useContext 훅 테스트 ------------------ */}
      {/* <UseContextParentComponent></UseContextParentComponent> */}


      {/* ------------- useReducer 훅 테스트 ------------------ */}
      {/* <UseReducerComponent></UseReducerComponent> */}



      {/* ------------- forwardRef 훅 테스트 ------------------ */}
      {/* <ParentComponent></ParentComponent> */}


      {/* ------------- useImperativeHandle 훅 테스트 ------------------ */}
      {/* <UseImperativeHandleComponent></UseImperativeHandleComponent> */}



      {/* ------------- useDebugValue 훅 테스트 ------------------ */}
      {/* <UseDebugValueComponent></UseDebugValueComponent> */}


      {/*------------------------------------------------------*/}
      {/* 사용자 정의 훅 테스트 컴포넌트 (useFetch실행)*/}
      {/*------------------------------------------------------*/}
      <UseFetchTestComponent></UseFetchTestComponent>



      {/*------------------------------------------------------*/}
      {/* 고차함수 테스트 컴포넌트*/}
      {/*------------------------------------------------------*/}
      {/* <TestComponent></TestComponent> */}
    </>
  )
}

export default App
