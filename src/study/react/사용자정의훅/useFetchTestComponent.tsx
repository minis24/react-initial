//---------------------------------------------------------
// * 사용자정의훅
//---------------------------------------------------------
// 서로다른 컴포넌트 내부에서 같은 로직을 공유하고자 할때 사용.
// 이름이 반드시 "use"로 시작하는 함수여야 한다.


//!!!!! 사용자정의 훅이 필요한 경우 !!!!!!!!
//  ==> 단순히 useEffect, useState와 같이 리액트에서 제공하는 훅으로만, 공통 로직을 격리할 수 있는경우
//      사용자정의 훅은 그 자체로는 렌더링에 영향을 미치지 못하므로, 사용이 제한적이므로,
//      반환하는 값을 바탕으로 무엇을 할지 개발자에게 달려있다.
//       ==> 따라서 컴포넌트 내부에 미치는 영향을 최소화해 개발자가 훅을 원하는 방향으로만 사용할 수 있다는 장점이 있다.









import { useEffect } from "react";
import useFetch from "./useFetch"



/* interface Todo {
    userId : number
    id : number
    title : string
    completed : boolean
} */


export default function UseFetchTestComponent(){

    const reqUrl = 'http://localhost:8091/adm/mnu/initTree?menuType=02'

    //사용자정의 훅 사용
    const {isLoading,result,status,ok} = useFetch(
        reqUrl,
        {
            method : 'GET',
        },
    )


    console.log('isLoading :: ' ,isLoading)
    console.log('result :: ', result)
    console.log('status :: ', status)
    console.log('ok :: ', ok)

    useEffect(()=>{
        if(!isLoading){
            console.log('fetchResult >> ',status)
        }
    },[status,isLoading]);


    return (
        <>
            <div>
                {ok ? (
                    <div>
                        <p>{status}</p>   
                    </div>)
                : null}
            </div>
        </>
    )
}