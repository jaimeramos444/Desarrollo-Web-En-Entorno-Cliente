
let random = (b) => {

    let a = 1;

    return random = Math.round(Math.random() * (b - a)) + a;


}

console.log(random(10));