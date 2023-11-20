//---------------------------------------------------------
// * useCallback 훅
//---------------------------------------------------------
// 인수로 넘겨받은 콜백 자체를 기억.특정 함수를 새로 만들지 않고, 재사용함.
// ==> 함수의 메모이제이션에 사용
// 첫번째 인수 : 함수
// 두번쨰 인수 : 해당함수가 의존하는 값의 배열
//   ==> 렌더링 발생시, !!!
//   ==> 의존성 배열의 값이 변경되지 않았으면, 
//   ==> 의존성 배열의 값이 변경되었다면, 





import React, { useState, useEffect, memo, useCallback } from 'react'

type Props = {
    name: string;
    value: boolean;
    onChange: () => void
}



const ChildComponent = memo<Props>(
    ({ name, value, onChange }) => {

        //렌더링 수행되는지 확인 목적으로 작성.
        useEffect(() => {
            console.log('렌더링[ChildComponent] :::: name :: ', name);
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






export default function UseCallbackComponent() {

    useEffect(() => {
        console.log('렌더링[MemoComponent] :::::: ');
    })




    const [status1, setStatus1] = useState(false);
    const [status2, setStatus2] = useState(false);





    const toggle1 = useCallback(() => {
        setStatus1(!status1)
    },[status1])


    const toggle2 = useCallback(() => {
        setStatus2(!status2)
    },[status2])



    return (
        <>
            <ChildComponent name={'useCallBack AAAA'} value={status1} onChange={toggle1}></ChildComponent>
            <ChildComponent name={'useCallBack BBBB'} value={status2} onChange={toggle2}></ChildComponent>
        </>
    )



}
