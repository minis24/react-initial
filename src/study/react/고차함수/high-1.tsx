//---------------------------------------------------------
// * 고차함수
//---------------------------------------------------------
// 사전적 정의 : 함수를 인수로 받거나, 결과로 반환 하는 함수.



function add(a : number){
    return function (b : number){
        return a+b;
    }
}

const result = add(1);
const result2 = result(2);


console.log(result);

/* 
ƒ (b){
        return a+b;
    }
*/


console.log(result2);

/* 3 */