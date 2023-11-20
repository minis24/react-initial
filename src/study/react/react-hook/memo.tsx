//---------------------------------------------------------
// * react.memo
//---------------------------------------------------------
// 자식 컴포넌트에 memo를 사용하여 메모이제이션 했지만, MemoComponent 의 전체 자식컴포넌트가 리렌더링 되고 있음.

import React, { useState, useEffect, memo } from 'react'

type Props = {
    name: string;
    value: boolean;
    onChange: ()=>void
}



/*
React.memo 를 사용해 메모이제이션   
    ==> name,value,onChange를 모두 기억하고,
    ==> 이 값이 변경되지 않았을 경우 렌더링 되지 않도록 작성했지만....
    ==> 부모 컴포넌트에서 state 값이 변경되며, 리렌더링 될때, 함수형 컴포넌트가 재실행되며,
    ==> onChange 함수가 매번 재생성되었기 때문에 매번 재렌더링 되고 있다.
    ==> !!! onChange 함수를 useCallback으로 메모이제이션 해서 최적화.

*/
const ChildComponent = memo <Props>(
    ({name,value,onChange})=>{
    
        //렌더링 수행되는지 확인 목적으로 작성.
        useEffect(()=>{
            console.log('렌더링[ChildComponent] :::: name :: ',name);
        })


        return (
            <>
                <h1>
                    {name} {value ? '켜짐' : '꺼짐'} 
                </h1>
                <button onClick={onChange}>Toggle</button>
            </>
        )
    }
);






export default function MemoComponent(){

    useEffect(() =>{
        console.log('렌더링[MemoComponent] :::::: ');
    })




    const [status1,setStatus1] = useState(false);
    const [status2,setStatus2] = useState(false);





    const toggle1 = ()=>{
        setStatus1(!status1)
    }


    const toggle2 = () => {
        setStatus2(!status2)
    }  



    return (
        <>
            <ChildComponent name={'aaaaaa'} value={status1} onChange={toggle1}></ChildComponent>
            <ChildComponent name={'bbbbbb'} value={status2} onChange={toggle2}></ChildComponent>
        </>
    )

}


