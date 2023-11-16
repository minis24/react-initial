type Car = {name : string};
type Truk = Car & {power : number};


function horn (car :Car ) {
    console.log(`${car.name}이 경적을 울립니다!! 빵빵`);

}


const truck : Truk = {
    name : '비싼차',
    power : 100,
}

horn(truck);