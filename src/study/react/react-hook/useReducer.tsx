//---------------------------------------------------------
// * useReducer 훅
//---------------------------------------------------------
// useState의 심화버전, 좀더 복잡한 상태값을 미리 정의해 놓은 시나리오에 따라 관리할 수 있다.

// (1) 반환값
//   길이가 2인 배열
//   * state : 현재 reducer가 가지고 있는 값을 의미,
//     ==> useState와 마찬가지로 배열을 반환하는데 동일하게 첫번째 요소가 이 값이다.
//   * dispatcher: state를 업데이트 하는 함수. 
//     ==> useReducer가 반환하는 배열의 두번째 요소.
//     ==> setState는 단순히 값을 넘겨주지만, 여기서는 state를 변경할 수 있는 액션을 넘겨준다.


// (2) 파라미터 (2개에서 3개의 인수를 팔요로한다.)  
//   * 첫번쨰 파라미터 
//      ==> reducer : useReducer의 기본 액션을 정의하는 함수
//   * 두번째 파라미터 
//      ==> initialState : useReducer 의 초기값
//   * 세번째 파라미터(옵션)
//      ==> init : useState로 함수를 넘겨줄 때 처럼 초기값을 지연해서 생성시키고 싶을때 사용하는 함수.
//      ==> 이값이 전달되면, useState와 동일하게 게으른 초기화가 일어나며, initialState를 인수로 init 함수가 실행된다.


import { useReducer } from "react";

//useReducer 가 사용할 state 정의
type State ={
    count : number;
}



// state 의 변화를 발생시킬 action의 타입과 넘겨줄 값(payload)를 정의
// 꼭 type과 payload 라는 네이밍을 지킬 필요는 없으며, 굳이 객체일 필요도 없다.
// 다만, 관행적으로 많이 쓰인다.
type Action = {
    type: 'up' | 'down' | 'reset' ; 
    payload? : State;
}


//무거운 연산이 포함된 게으른 초기화 함수
function init(count: State):State{

    // count :: State 를 받아서 초깃값을 어떻게 정의할 지 연산하면 된다.
    return count;
}


//초기값
const initialState:State = {count:0}



//앞서 선언한 state와 action을 기반으로 state 가 어떻게 변경될지 정의
function reducer (state:State , action:Action): State{

    switch(action.type){
        case 'up' : 
            return {count : state.count +1 }
        case 'down' :
            return {count : state.count -1 }
        case 'reset' : 
            console.log(action)
            return init(action.payload || {count: 0 })
        default : throw new Error(`unexpected action type :: ${action.type}`)
    }

}


export default function UseReducerComponent (){

    const [state,dispatcher] = useReducer(reducer,initialState,init);

    function handleUpButtonClick(){
        dispatcher({type:'up'})
    }

    function handleDownButtonClick() {
        dispatcher({ type: 'down' })
    }

    function handleResetButtonClick() {
        dispatcher({ type: 'reset' ,payload: {count: 1} })
    }


    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={handleUpButtonClick}> useReducer Up 버튼</button>
            <button onClick={handleDownButtonClick}> useReducer Down 버튼</button>
            <button onClick={handleResetButtonClick}> useReducer Reset 버튼</button>
        </div>
    )
}