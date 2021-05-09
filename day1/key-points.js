// Types of variable define

let myString = 'This is string variable'        // let assigned value can be changed
const MY_NAME = 'Steve'                         // const assigned value cannot be changed .


// Types of Data types

let arr = 'String';                             // String
let nub = 24;                                   // Number
let arr = [1, 2, 'string text']                 // Array
let obj = {                                     // OBb
    'key2': 23,
    'key3': [1, 2, 'string text']
}


// Add or Get Element in Array
let arr = [1, 2, 'string text']

arr.push('new element')                         // Add new element to array
console.log(arr[2])                             //  Get element of array with index 2


// Add/Edit/Get Object Element
let obj = {
    'key1': 'value',
    'key2': 23,
    'key3': [1, 2, 'string text']
}


console.log(obj.key2)                           // Get value of an object
obj['key1'] = 'New value can be set here'       // Edit value of an object
obj['newKey'] = 'This is the new key'           // Add ne key for an object



// Nodejs Global Variable 

__dirname                                       // Gives current working directory
module                                          // Use for exporting the methods
require                                         // Use for importing packages or methods that is exported in another file
process                                         // Get current node process data 


// Major loop concept

let arr = [1, 2, 'string text']

// .foreach
arr.foreach((ele) => {                          // Used for basic loop array and doesn't return value
    console.log(ele)
})

// .map
arr.map((ele) => {                              // Used for to edit array and get return value of new array

    if (ele === 2) {
        return 'Change value';
    }

    return ele;
})


//.filter  
arr.filter((ele) => {                           // Used to filter array

    if (ele !== 2) return ele
})