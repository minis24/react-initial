//---------------------------------------------------------
// * forwardRef 훅
//---------------------------------------------------------
//ref는 useRef에서 반환한 객체로 리액트 컴포넌트인 props의 ref에 넣어 HTMLElement에 접근하는 용도로 사용
// ==> key 와 마찬가지로 ref도 리액트에서 캄포넌트의 props로 사용할 수 있는 예약어로서 별도로 선언되어 있지 않더라도 사용 가능

import { useEffect ,useRef, forwardRef} from "react";


//상위컴포넌트에서 하위컴포넌트로 ref를 전달하고 싶을때는?
// ==> 즉, 상위 컴포넌트에서는 접근하고 싶은 ref가 있지만,이를 직접 props 로 넣어 사용할 수 없을때는?


function ChildComponent({ref}){
    useEffect(()=>{
        //undefiend 
        console.log('ref :: ' ,ref);
    },[ref])

    return <div>안녕111</div>
}


function AnotherChildComponent({parentRef}){
    useEffect(() => {
        //예약어로 지정된 ref 대신 다른 props로 받으면 정상적으로 작동한다.
        //parentRef ::  {current: input}
        console.log('parentRef :: ', parentRef);
        parentRef.current.value= 'aaaa'  //==> 부모창의 input 태그에 값 설정됨.
    }, [parentRef])

    return <div>안녕222</div>
} 


//ref를 받고자 하는 컴포넌트를 forwardRef로 감싸주고, 두번째 인수로 ref 를 전달 받는다.
//forwardRef를 사용하면, ref를 props로 전달할 수 있고, 자식컴포넌트에서도 ref라는 이름을 그대로 사용 할 수 있다.
const ForwardRefChildComponent = forwardRef(
    (props, ref) => {
        useEffect(() => {
            console.log('forwardRef :: ', ref);
            //ref.current.value = 'bbbb'  //==> 부모창의 input 태그에 값 설정됨.
        }, [ref])

        return (<div>안녕333</div>)
    }

);


export default function ParentComponent(){
    const inputRef = useRef();

    return (
        <>
            <input ref={inputRef} />



            {/* ==> 아래 오류 발생 <=== */}
            {/* 리액트에서 ref는 props로 사용할 수 없다. */}
            {/*  Warning: ChildComponent: 
            `ref` is not a prop. 
            Trying to access it will result in `undefined` being returned. 
            If you need to access the same value within the child component, 
            you should pass it as a different prop */}
            <ChildComponent ref={inputRef}></ChildComponent>  


            {/*==> 정상작동 함. */}
            {/* 정상작동 하지만 ref를 전달하는데 일관성을 주기 위해 forwardRef를 사용한다.*/}
            <AnotherChildComponent parentRef={inputRef} ></AnotherChildComponent> 



            {/* forwardRef를 사용하면, ref를 props로 전달할 수 있고, 자식컴포넌트에서도 ref라는 이름을 그대로 사용 할 수 있다. */}
            <ForwardRefChildComponent ref={inputRef}></ForwardRefChildComponent>
        </>
    )
}



