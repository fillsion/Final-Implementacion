const Circulo = require("./Circulo");
const CirculoBO = require('./CirculoBO')

module.exports = function controlador(radio) {
    const circulo = new Circulo(radio)
    if(CirculoBO.validateData(circulo)){ 
        let result = factorial.calculoFactorial()
        return {result}
    }}

