//---------------------------------------------------------
// * useEffect 훅
//---------------------------------------------------------
// 애플리케이션 내 컴포넌트의 여러 값들을 활용해 동기적으로 부수효과를 만드는 메커니즘
// ==> useEffect 는 자바스크립트의 proxt나, 데이터바인딩,옵저버 같은 특별한 기능을 통해
// ==> 값의 변화를 관찰하는것이 아니고,!!!!!
// ==> 렌더링할때마다, 의존성에 있는 값들을 보면서 이 의존성의 값이 이전과 다른게 하나라도 있으면!!!
// ==> 부수 효과를 실행하는 함수이다.
// ==> 따라서 !!!!
// ==> useEffect 는 state와 props 의 변화 속에서 일어나는 렌더링 과정에서 실행되는 부수효과 함수라고 볼수 있다.
// ==> !! 여기서 부수효과란, 렌더링이 완료된 이후, 실행되는 사이드 이펙트를 일으키고 싶을때 사용하는 훅이다.

type Props ={
    user : string;
}


import {useState,useEffect} from 'react'

export default function UseEffectComponent(props:Props){
    console.log('UseEffectComponent 렌더링....')
    const [count,setCount] = useState(0);




    /*
    React Hook useEffect has a missing dependency: 'props'. 
    Either include it or remove the dependency array.eslintreact-hooks/exhaustive-deps
        ==> !! useEffect 인수 내부에서 사용하는 값중 의존성 배열에 포함되어 있지 않은 값이 있는 경우 경고!!!
        ==> 가급접 사용하지 않는게 좋다.왜냐면, useEffect 는 반드시 의존성 배열로 전달한 값의 변경에 의해 실행되야 하는 훅이기 떄문.
    */
    useEffect(()=>{
        console.log(props)
    }, []);  // eslint-disable-line react-hooks/exhaustive-deps 
    // ==>[ eslint-disable-line react-hooks/exhaustive-deps ] : ESLint 경고를 무시함!!!




    useEffect(()=>{
        function addMouseEvent(){
            console.log('count :: ', count);
        }

        window.addEventListener('click',addMouseEvent);


        //클린업 함수 : 이벤트를 등록 하고 지울 떄 사용.
        // 1) 클린업 함수는 이전 count값(즉, 이전 state)를 참조해 실행됨.
        // 2) 클린업 함수는 새로운 값과 함께 렌더링된 뒤에 실행됨.
        //    ==> 새로운 값을 기반으로 렌더링 된 뒤에 실행되지만, 변경된 값을 읽는 것이 아니라,
        //    ==> 함수가 정의되었을 당시에 선언됐던 이전 값을 보고 실행됨.
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // 3) 중요
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // ==>> 함수형 컴포넌트의 useEffect는 실행될때 마다(콜백이 실행될때마다)
        // ==>> 이전의 클린업 함수가 존재한다면, 그 클린업 함수를 실행한뒤에 콜백을 실행한다.
        // ==>> !!! 따라서 특정 이벤트의 핸들러가 무한히 추가되는것을 방지할 수 있다.
        // ==> 클린업 함수는 언마운트 라기보다는 함수형 컴포넌트가 리렌더링 되었을 때, 
        // ==> 의존성 변화가 있었을 당시 이전의 값을 기준으로 실행되는, 이전상태를 청소해 주는 개념.

        return () =>{ 
            console.log('....클린업 함수 실행 !!! count :: ' ,count);
            window.removeEventListener('click',addMouseEvent);
        }
    },[count])

    function handleClick(){
        setCount((prev) => prev +1);
    }

    return (
        <div>
            <h1>HookUseEffect Component state [ {count} ]</h1>
            <button onClick={handleClick}>버튼</button>
        </div>
    )

}


