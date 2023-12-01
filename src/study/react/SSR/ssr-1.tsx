import React,{ useEffect } from 'react'
import ReactDOMserver from 'react-dom/server'



function ChildrenComponent ({fruits}:{fruits: Array<string>}){
    useEffect(()=>{
        console.log(fruits);
    },[fruits]);


    function handleClick(){
        console.log('hello');
    }

    return (
        <>
            <ul>
                {fruits.map((fruit) => {
                    return (
                        <li key={fruit} onClick={handleClick} >{fruit}</li>
                    ) 
                })}
            </ul>
        </>
    )
}



function SampleComponent(){
    return(
        <>
            <div>hello</div>
            <ChildrenComponent fruits={['apple','banana','peach']}></ChildrenComponent>
        </>
    )
}


const result = ReactDOMserver.renderToString(
    React.createElement('div',{id:'root'},<SampleComponent />)
)