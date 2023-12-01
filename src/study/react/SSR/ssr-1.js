"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var server_1 = require("react-dom/server");
function ChildrenComponent(_a) {
    var fruits = _a.fruits;
    (0, react_1.useEffect)(function () {
        console.log(fruits);
    }, [fruits]);
    function handleClick() {
        console.log('hello');
    }
    return (<>
            <ul>
                {fruits.map(function (fruit) {
            return (<li key={fruit} onClick={handleClick}>{fruit}</li>);
        })}
            </ul>
        </>);
}
function SampleComponent() {
    return (<>
            <div>hello</div>
            <ChildrenComponent fruits={['apple', 'banana', 'peach']}></ChildrenComponent>
        </>);
}


var result = server_1.default.renderToString(react_1.default.createElement('div', { id: 'root' }, <SampleComponent />));
