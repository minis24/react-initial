//---------------------------------------------------------
// * useMemo 훅
//---------------------------------------------------------
// 비용이 큰 연산에 대한 결과를 저장(메모이제이션)해 두고, 이 저장된 값을 반환하는 훅.
// 첫번째 인수 : 어떤 값을 반환하는 생성함수.
// 두번쨰 인수 : 해당함수가 의존하는 값의 배열
//   ==> 렌더링 발생시, !!!
//   ==> 의존성 배열의 값이 변경되지 않았으면, 함수를 재실행하지 않고, 이전에 기억해 둔 해당 값을 반환.
//   ==> 의존성 배열의 값이 변경되었다면, 첫번째 인수의 생성함수를 실행한 후에 그 값을 반환하고, 다시 저장해둠.




function ExpensiveComponent ({value}:{value:number}){

    useEffect(()=>{
        console.log('렌더링....[expensiveComponent]')
    });

    return <span>{value + 1000}</span>
}



type Props ={
    user : string;
}


import { useState, useEffect, useMemo } from 'react'

export default function UseMemoComponent(props:Props){
    console.log('UseMemoComponent 렌더링....');
    console.log('props....', props)
    const [value,setValue] = useState(10);
    const [, triggerRendering] = useState(false);

    const MemoizedComponent = useMemo(
        ()=>{
            return <ExpensiveComponent value ={value}></ExpensiveComponent>
        }
    ,[value])



    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setValue(Number(e.target.value));
    }

    function handleClick() {
        triggerRendering((prev) => !prev);
    }

    return (
        <div>
            <input value ={value} onChange={handleChange}></input>
            <button onClick={handleClick}>렌더링 발생</button>
            {MemoizedComponent}
        </div>
    )

}


