const hello = (name) => {
    console.log(`Say hello to ${name}`)
}

const world = (name) => {
    console.log(`World`)
}


const myString = 'MY string';

module.exports = { hello, world, myString }


// Or you can individual export 
/*

module.exportshello = (name) => {
    console.log(`Say hello to ${name}`)
}

module.exportsworld = (name) => {
    console.log(`World`)
}


module.exports.myString = 'MY string';
*/

