const FibonacciBO = require('./FibonacciBO')
const Fibonacci = require("./Fibonacci");

module.exports = function controlador(numero) {
    const fibonacci = new Fibonacci(numero)
    if(FactorialBO.validateData(fibonacci)){ 
        let result = factorial.calculoFactorial()
        return {result}
    }}

