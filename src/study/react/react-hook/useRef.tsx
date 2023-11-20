//---------------------------------------------------------
// * useRef 훅
//---------------------------------------------------------
// useState 와 동일하게 컴포넌트 내부에서 렌더링이 일어나도 변경가능한 상태값을 저장한다는 공통점이 있다.
// 아래와 같은 차이점이 있다.
//  1) useRef는 반환값이 객체 내부에 있는 current로 값에 접근과 변경이 가능
//  2) useRef는 그 값이 변하더라도 렌더링을 유발하지 않음.
// !!!!! 중요 !!!!!
// useRef의 최초 기본값은 return 문에 정의한 DOM이 아니고 useRef()로 넘겨받은 인수라는 점이다.
// 렌더링을 발생시키지 않으므로
// ==> useState의 이전값을 저장하는 usePrevious() 같은 훅을 구현할때 유용하다.








import React, { useRef ,useEffect ,useState} from 'react'

function usePrevious(value:number){
    const ref = useRef<number>();
    useEffect(()=>{
        ref.current = value;
    },[value])

    return ref.current;
}







export default function UseRefComponent() {


    const [counter,setCounter] = useState(0);
    const previousCounter = usePrevious(counter);




    const count = useRef(0);
    /* const inputRef = useRef<React.MutableRefObject<HTMLInputElement >>(); */
    const inputRef = useRef();

    //이떄는 렌더링 전이므로, undefined
    console.log('inputRef.current 1111 :: ' ,inputRef.current);


    useEffect(()=>{
        console.log('inputRef.current 2222:: ', inputRef.current);
    },[inputRef])



    function handleClick (){
        console.log('count.current :: ', count.current)
        count.current += 1;

        setCounter((prev =>prev+1));
    }



    return (
        <>
            {/* 버튼을 클릭해도 console의 값은 추가되는데 화면에서는 변화가 전혀 없다. */}
            
            <p><span>count.current :: {count.current}</span></p>
            <p><span>counter :: {counter}</span></p>
            <p><span>previousCounter :: {previousCounter}</span></p>
            <button onClick={handleClick}>useRef버튼</button>

            <input ref={inputRef} type="text"></input>
        </>
    )



}
