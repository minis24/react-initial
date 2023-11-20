import {memo,useState} from 'react';


const Child = memo(() =>{
    return <li>hello</li>
});
/* const Child = () => {
    return <li>hello</li>
};
 */

export function List({arr} : {arr : number[]}){
    const [state,setState] = useState(0);

    function handleButtonClick (){
        setState((prev) =>{
            console.log('prev :: ' ,prev);
            return prev +1
        })
    }



    return (
    <>
            <button onClick={handleButtonClick}>{state}</button>

            <ul>
                {arr.map((_,index)=>{
                        //console.log('___ :: ' ,_)
                        console.log('index :: ', index)

                        return (<Child />)
                        /* return (<Child key={index}/>) */
                        
                       /*  return (<Child key={Math.random()} />) */
                })}
            </ul>
        </>
        )
}


