import {useState,memo} from 'react';

export default function A(){

    console.log('Function A Component 렌더링 ')
    return (
        <div className="App">
            <h1>Hello React!</h1>

            <B />
        </div>
    )
}


function B(){
    console.log('Function B Component 렌더링 ')
    const [counter,setCounter] = useState(0);

    function hanbdleButtonClick(){
        setCounter((prev) => prev + 1)
    }

    return (
        <>
            <label>
                <C number={counter} />    
            </label>
            
            <button onClick={hanbdleButtonClick}>+Button</button>
        </>
    )
}

function C({number} : {number:number}){
    console.log('Function C Component 렌더링 ')
    return (
        <div>
            {number} <D />
        </div>
    )
}

const D = memo(() => {
    console.log('Function D Component 렌더링 ')
    return (<>리액트 재밌다아아아아.</>)
});



