var fib = Number(prompt('Please enter number: '));

document.write('Entered value : ' + fib);
document.write('<br>');
document.write('Fibonacci value : ' + getFibonacci(fib));

function getFibonacci(num){
    if(num <= 2){
        return 1;
    } else {
        return getFibonacci(num - 1) + getFibonacci(num -2);
    }
}