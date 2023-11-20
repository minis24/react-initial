//---------------------------------------------------------
// * 게으른 초기화.
//---------------------------------------------------------
// useState 초기값이 복잡하거나, 무거운 연산을 포함하고 있을시 사용권장.
// 오직, state가 처음 만들어질때만 사용됨.
// 이후 리렌더링 시에는 무시됨.



import {useState} from 'react'

export default function Hook(){
    console.log('Hook 렌더링....')
    const [state,setState] = useState(()=>{
        console.log('...복잡하고, 무거운 연산....'); //Hook 컴포넌트가 처음 구동시에만 실행됨. 리렌더링시는 실행x
        
        return 0;
    });

    function handleClick(){
        setState((prev) => prev +1);
    }

    return (
        <div>
            <h1>Hook Component state [ {state} ]</h1>
            <button onClick={handleClick}>Hook 버튼</button>
        </div>
    )

}


