const arr = {
    w1:"Hello",
    w2: "Java",
    w3: "Script"
};

function getData({w1, w2, w3}){
    return `${w1} ${w2} ${w3}`;
}

console.log(getData(arr));