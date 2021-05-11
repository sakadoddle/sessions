

const fetch = require('node-fetch')

const getMoney = () => {
    return new Promise((resolve, reject) => {

        fetch('http://localhost:3000/')
            .then(res => resolve(res.json()))
            .catch(err => reject(err))

    })
}



// Using Async and await
const start = async () => {
    try {
        const money = await getMoney();
        console.log(money)
    } catch (err) {
        console.log(err)
    }
}

start();

// Using Promise
// getText()
//     .then((data) => {
//         // console.log('Should not run first')
//         // console.log(data)

//         if (data.usd > 115) {
//             console.log('i ma rich') `
//         }
//     })
//     .then((data) => {
//         console.log('Should  run second')
//     })
//     .catch((err) => {
//         console.log(err)
//     })