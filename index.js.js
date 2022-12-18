// ************PROMISES IN JAVASCRIPT**************

// 1st example
let myPromise = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve("Success")
    } else {
        reject("Failed")
    }
})


myPromise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message)
})

// 2nd example
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if (location === "Google") {
            resolve("GOOGLE SAYS HII")
        } else {
            reject("We can only talk about Google")
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log("Processing response");
        resolve(`Extra Information + ${response}`)
    })
}

makeRequest("Googe").then(response => {
    console.log("Response Recieved")
    return processRequest(response)
}).then(processResponse => {
    console.log(processResponse);
}).catch(err => {
    console.log(err)
})


// ************CALLBACK FUNCTION IN JAVASCRIPT**************


const datas = [
    {
        name: "Arijit", Profession: "Web developer"
    }, {
        name: "Praveen", Profession: "Web developer"

    }
]
function getDatas() {
    setTimeout(() => {
        let output = ""
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`;
        })
        document.body.innerHTML = output
    }, 1000)
}


function createData(newData, callback) {
    setTimeout(() => {
        datas.push(newData);
        callback();
    }, 2000)
}

createData({ name: "Vivek", Profession: "Web developer" },getDatas);

// ************CLOSURE IN JAVASCRIPT**************

// 1st example
var sum = function (a) {
    console.log("Live viewers " + a);
    var c = 4
    return function (b) {
        return a + b + c
    }
}
var store = sum(2)
console.log(store(5))

// 2nd example
var sum = function (a, b, c) {

    return {
        getSumTwo: function () {
            return a + b
        },
        getSumThree: function () {
            return a + b + c
        }
    }
}
var store = sum(3, 4, 5);
console.log(store.getSumTwo());
console.log(store.getSumThree());

var store1 = sum(7, 8, 9);
console.log(store1.getSumTwo());
console.log(store1.getSumThree());


// ************ASYNC ND AWAIT IN JAVASCRIPT**************

function makeAwait(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if (location === "Google") {
            resolve("GOOGLE SAYS HII")
        } else {
            reject("We can only talk about Google")
        }
    })
}

function processAwait(response) {
    return new Promise((resolve, reject) => {
        console.log("Processing response");
        resolve(`Extra Information + ${response}`)
    })
}

async function doWork() {
    try {
        const Await = await makeAwait("Facebook");
        console.log("Response Recieved");
        const responseAwait = await processAwait(Await);
        console.log(responseAwait)
    } catch (err) {
        console.log(err);
    }
}
doWork()