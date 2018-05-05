// import { BaseTestClass } from "./module1";
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function (i) {
        if (i === 10) {
            console.log('number ten');
        }
        console.log('Hello World');
        return 0;
    };
    return Startup;
}());
Startup.main(10);
// console.log(distinct(personArray, (a => a.firstName + '.' + a.lastName)));
console.log('Final:\n');
//# sourceMappingURL=ts1.js.map