var fib = Number(prompt('Please enter number: '));

document.write(getFibonacci(fib));

function getFibonacci(num){
    if(num === 0){
        return sum;
    }
    var sum = num + getFibonacci(num - 1);
}