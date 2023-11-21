//---------------------------------------------------------
// * useImperativeHandler 훅
//---------------------------------------------------------
// 부모에게서 넘겨받은 ref를 원하는대로 수정 할 수 있는 훅이다.

import { forwardRef, useImperativeHandle, useState ,useRef, useEffect} from "react";


const Input = forwardRef((props,ref)=>{


    useEffect(()=>{
        console.log(';;;;',props)
        console.log('!!!!', ref)
    });


    //useImperativeHandler를 사용하면
    // ==> ref의 동작을 추가로 정의할 수 있다.
    // ==> 원래 ref는 {current:<HtmlElement>} 와 같은 형태로 HTMLElement 만 주입할 수 있는 객체인데
    // ==> useImperativeHandler를사용해 추가적인 동작을 정의했다.
    // ==> 단순히 HTMLElement 뿐만 아니라, 자식컴포넌트에서 새롭게 설정한 객체의 키와 같에 대해서도 접근할 수 있게 되었다.
    // ==> !!!! 이 ref의 값에 원하는 값이나 액션을 정의할 수 있다.!!!!

    useImperativeHandle(
        ref,
        ()=>({ alert: () => alert(props.value),}),
        //useEffect의 deps와 같다.
        [props.value],
    )

    return <input ref={ref} {...props}></input>
});


export default function UseImperativeHandleComponent(){
    //input 에 사용할 ref
    const inputRef = useRef();

    //inpunt 의 value
    const [text,setText] = useState('');

    function handleClick(e){
        console.log(inputRef)
        console.log(inputRef.current)
        inputRef.current.alert();
    }

    function handleChange(e) {
        setText(e.target.value)
    }

    return (
        <>
            <Input ref={inputRef} value={text} onChange={handleChange}></Input>
            <button onClick={handleClick}>Focus</button>
        </>
    )

}
