import {useState, useEffect, useMemo} from 'react';


function useMath (number:number){
    const [double,setDouble] = useState (0);
    const [tripple, setTripple] = useState(0);

    useEffect(()=>{
        setDouble(number * 2);
        setTripple(number * 3)
    },[number]);


    return useMemo(() => { 
        return { double, tripple } 
    },[double,tripple]) ;
}


export default function RenderingMemo (){
    const [counter,setCounter] = useState(0);
    const value = useMath(10);

    useEffect(()=>{
        console.log(value.double , value.tripple);
    },[value]);


    function handleClick(){
        setCounter((prev)=>prev +1 )
    }

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={handleClick}>++버튼</button>
        </>
    )
}