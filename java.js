
const start = prompt('Enter the start: ')
const startCount = parseInt(start, 10)
const end = prompt('Enter the end: ')
const endCount = parseInt(end, 10)
const step = prompt('Enter the step: ')
const stepCount = parseInt(step, 10)

const startOut = document.getElementById('start')
const sumOut = document.getElementById('sum')
const binaryOut = document.getElementById('binary')



let a = startCount;
let b = endCount;
let c = stepCount;

//Functions
function arrayList (start, end, step) {
    const arrList = [] 
    for(let i = a, max = b; i <= b; i += c) { 
        arrList.push(i);
    }
    return arrList;
}


function arraySum (start, end, step) {
    let sum = 0
    const arrSum = [];
        for(let i = a, max = b; i <= b; i+= c) { 
            sum += i;
        }
    return sum;
}

function arrayBinary (start, end , stop) {
    let i = 0;
    const arrBinary = []; 
        for(let i = a, max = b; i <= b; i+= c) {
            arrBinary.push(i);
            }
        arrBinary.toString(i, 2)
    return arrBinary;
}

let x = parseFloat(arrayBinary)


//Output to HTML
startOut.innerHTML = 'The generated array is: ' +  arrayList (a, b, c) 
sumOut.innerHTML = 'The sum is: ' + arraySum (start, end, step)
binaryOut.innerHTML = 'The binary of absolute element values are: ' + x