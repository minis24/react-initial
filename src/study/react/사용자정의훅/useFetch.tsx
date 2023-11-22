//---------------------------------------------------------
// * 사용자정의훅
//---------------------------------------------------------
// 서로다른 컴포넌트 내부에서 같은 로직을 공유하고자 할때 사용.
// 이름이 반드시 "use"로 시작하는 함수여야 한다.

import { useEffect, useState } from "react";


export default function useFetch<T>(
    url:string,
    {method,body}:{method:string,body?:XMLHttpRequestBodyInit},
){


    //응답결과
    const [result,setResult] = useState<T | undefined>();
    
    //요청 중 여부
    const [isLoading,setIsLoadding] = useState<boolean>();
    
    //2xx 3xx 로 정상 응답인지 여부
    const [ok,setOk] = useState<boolean | undefined>();

    //HTTP status
    const [status,setStatus] = useState<number |undefined>();

    useEffect(()=>{
        console.log('url :: ',url);
        console.log('method :: ', method);
        console.log('body :: ', body);


        const abortController = new AbortController();
        

        //즉시 실행 함수
        (
            async ()=>{
                console.log( '------------------------------------- ')
                console.log('useFetch 시작')
                console.log('------------------------------------- ')
                setIsLoadding(true);

                console.log('signal :: ', abortController.signal);

                try{
                    /* const response = await fetch(url, {
                        method,
                        body,
                        signal: abortController.signal,
                    }) */

                    const response = await fetch(url)

                    console.log('response :: ', response)

                    setOk(response.ok);
                    setStatus(response.status);


                    if (response.ok) {
                        const apiResult = await response.json();


                        setResult(apiResult);
                    }

                    setIsLoadding(false);

                }catch(error ){
                    console.log(error)
                }
                
            }
        )();


        //클린업 함수
        return () =>{
            abortController.abort();
        }
    },[url,method,body]);



    return {ok,result,isLoading,status}

}



