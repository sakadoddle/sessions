const _ = require('lodash');


let arr = [1, [1, [1, 2]]]

let newArr = _.flatMapDeep(arr);
console.log(newArr)