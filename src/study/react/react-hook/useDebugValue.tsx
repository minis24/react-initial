//---------------------------------------------------------
// * useDebugValue 훅
//---------------------------------------------------------
// 리액트 애플리케이션을 개발하는 과정에서 사용.
// 디버깅 하고 싶은 정보를 이 훅에다 사용하면 리액트 개발자 도구에서 볼수 있다.

// 첫번째 파라미터 : 표현할 내용
// 두번째 파라미터 : 인수로 포매팅 함수
//  ==> 값이 변경되었을 때만, 호출되어 포매팅된 값을 오출한다.
//  ==> 첫번째 인수의 값이 같으면 포매팅 함수는 호출되지 않는다.
// !!!!! 중요 !!!!!
//  ==> 오직 다른 훅 내부에서만 실행할 수 있음.

import { useDebugValue ,useState} from "react";


function useDate(){
    const date = new Date();
    /// useDebugValue 로 디버깅 정보를 기록
    useDebugValue(date, (date) => {
        return `현재시간 :: ${date.toISOString()}`
    });

    return date;
}



export default function UseDebugValueComponent (){
    const date = useDate();
    const [counter,setCounter] = useState (0);// 렌더링 발생용 변수


    function handleClick (){
        setCounter((prev)=> prev + 1)
    }

    return (
        <>
            <div className="App">
                <h1>
                    {counter} {date.toISOString()}
                </h1>
                <button onClick={handleClick}>+</button>

            </div>
        </>
    )


}