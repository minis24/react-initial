//---------------------------------------------------------
// * useContext 훅
//---------------------------------------------------------
// 리액트에서 context 란.
//  (1) 리액트 애플리케이션은 기본적으로 부모컴포넌트와 자식 컴포넌트로 이뤄진 트리구조를 갖고 있기 때문에.
//  (2) 부모가 가지고 있는 데이터를 자식에서도 사용하고 싶다면, props로 데이터를 넘겨주는것이 일반적이다.
//  (3) 그러나, 전달해야 하는 데이터가 있는 컴포넌트와 전달받아야 하는 컴포넌트가 거리가 멀어질수록
//  (4) 코드가 복잡해진다.
//  (5) 아래 코드와 같이 A컴포넌트가 제공하는 값을 D컴포넌트 까지 계속 넘겨줘야하는데.
//     ==> 이러한 기법은 prop 내려주기(props Drilling) 이라고 한다.
//     ==> 사용하든 안하든 전달해줘야 하므로 매우 번거로운 작업이므로, 이때 Context 를 사용한다.

/*
    <A props={something}>
        <B props={something}>
            <C props={something}>
                <D props={something} />
            </C>
        </B>
    </A>

*/


// !!!! 중요 !!!!
// useContext 는 상위 컴포넌트에서 만들어진 Context 를 함수형 컴포넌트에서 사용할 수 있도록 만들어진 훅이다.



import React, { useContext, createContext} from 'react'



//!!! 생성된 Context [여기서는 MyContext] 가 ContextProvider 의 리턴객체가 되야한다.
const MyContext = createContext<{hello:string | undefined}>(undefined)




function ContextProvider({ children, text }: PropsWithChildren<{text: string}>) {

    return (
        <MyContext.Provider value={{ hello: text }}>{children}</MyContext.Provider>
    )
}





function useMyContext(){
    //위에서 생성한 Context 객체를 인수로 설정한다.
    const context = useContext(MyContext);
    if(context === undefined){
        throw new Error('useMyContext는 ContextProvider 내부에서만 사용할 수 있다.');
    }

    return context;
}





function ChildComponent (){
// 타입이 명확히 설정되어 있어서 굳이 undefined 체크를 하지 않아도 됨.
// 이 컴포너트가 Provider 하위에 없다면 에러가 발생함.

    const {hello} = useMyContext();
    return <>{hello}</>

}





export default function UseContextParentComponent() {


    return (
        <>
            <ContextProvider text="asdfasdf">
                <ChildComponent />

            </ContextProvider>
        </>
    )



}
