// Challenge 1

for(var i = 1; i <= 20; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

// Challenge 2

function countDown(num){
    console.log(num);
    while(num > -3.5){
        num -= 1.5;
        console.log(num)
    }
}

var y = countDown(4);
console.log(y);

// Challenge 3
var sum = 0;
for(var i = 1; i <= 100; i++){
    sum += i;
}

console.log(sum)

//Challenge 4
var n = 1
var product = 0
for(var i = 1; product < 1e8; i++){
    product = n * i
    n++
}
console.log(n)