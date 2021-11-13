const Factorial = require("./Factorial");
const FactorialBO = require('./FactorialBO')

module.exports = function controlador(numero) {
    const factorial = new Factorial(numero)
    if(FactorialBO.validateData(factorial)){ 
        let result = factorial.calculoFactorial()
        return {result}
    }}

