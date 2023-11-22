//---------------------------------------------------------
// * 고차함수(컴포넌트)
//---------------------------------------------------------
// 사전적 정의 : 함수를 인수로 받거나, 결과로 반환 하는 함수.
// 고차컴포넌트는 "with" 로 시작하는 이름을 사용해야 한다.

import { ComponentType } from "react";



interface LoginProps {
    loginRequired?:boolean
}


function withLoginComponent<T> (Component:ComponentType<T>){
    return function (props: T & LoginProps){
        console.log('props :: ',props);


        const {loginRequired, ...restProps} = props;
        console.log('loginRequired :: ', loginRequired);
        console.log('restProps :: ',restProps);


        if(loginRequired){
            return <>로그인이 필요합니다.</>
        }

        return <Component {...(restProps as T)} />
    }
}



//원래 구현하고자 하는 컴포넌트를 만들고 ,withLoginComponent를 감싸기만 하면 끝!
// 로그인 여부, 로그인이 안되면, 다른 컴포넌트를 렌더링 하는 책임은 모두
// 고차 컴포넌트 인 withLoginComponent에 맡길 수 있으므로 매우 편리하다
const Component = withLoginComponent(

    //컴포넌트를 파라미터로 넘김.
    //고차컴포넌트(withLoginComponent) 에서 처리결과에 따라 
    //  ==> 인수로 넘긴 아래의 컴포넌트가 반환되거나,
    //  ==> 다른 처리가 된 컴포넌트가 반환되도록 할 수 있다 (ex : <>로그인이 필요합니다</> 반환)  
    (props:{value : string})=>{
        console.log('1111 :: ',props)
        return <h3>{props.value}</h3>
    }
);



export default function TestComponent(){
    //로그인 정보를 가져온다.
    const isLogin = true;
    if (isLogin){
        return <Component value="abcde" loginRequired={isLogin} />
    }
    
    return <Component value="abbbfddd" />
    
}