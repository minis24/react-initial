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
                console.log('-------------------------------------')
                console.log('useFetch 시작')
                console.log('-------------------------------------')
                setIsLoadding(true);

                console.log('signal :: ', abortController.signal);

                try{
                    const response = await fetch(url, {
                        method,
                        body,
                        signal: abortController.signal,
                    })

                    //const response = await fetch(url)

                    console.log('response :: ', response)

                    setOk(response.ok);
                    setStatus(response.status);


                    if (response.ok) {
                        const apiResult = await response.json();


                        setResult(apiResult);
                    }

                    setIsLoadding(false);

                }catch(error ){
                    console.log(':::::: ',error)
                }
                
            }
        )();


        //클린업 함수
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // 3) 중요
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // ==>> 함수형 컴포넌트의 useEffect는 실행될때 마다(콜백이 실행될때마다)
        // ==>> 이전의 클린업 함수가 존재한다면, 그 클린업 함수를 실행한뒤에 콜백을 실행한다.
        // ==>> !!! 따라서 특정 이벤트의 핸들러가 무한히 추가되는것을 방지할 수 있다.
        // ==> 클린업 함수는 언마운트 라기보다는 함수형 컴포넌트가 리렌더링 되었을 때,
        // ==> 의존성 변화가 있었을 당시 이전의 값을 기준으로 실행되는, 이전상태를 청소해 주는 개념.
        return () =>{
            // useFetch가 또 호출되면, 이전에 호출되었던 fetch 를 중지한다.
            abortController.abort();
        }
    },[url,method,body]);



    return {ok,result,isLoading,status}

}



