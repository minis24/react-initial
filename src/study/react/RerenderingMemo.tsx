import {useState, useEffect, useMemo} from 'react';


function useMath (number:number){

    
    const [double,setDouble] = useState (0);
    const [tripple, setTripple] = useState(0);

    //렌더링 되는지 확인용도로 작성함.
    useEffect(()=>{ 
        console.log('useMath ----------------- number :: ',number)
    });

    useEffect(()=>{
        setDouble(number * 2);
        setTripple(number * 3)
    },[number]);


    return useMemo(
        () => { 
            console.log('useMath return')
            return { double, tripple } 
        }
    ,[double,tripple]) ;
}





export default function RenderingMemo (){
    console.log('RenderingMemo --------------------------')
    const [counter,setCounter] = useState(0);
    const value = useMath(20);

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