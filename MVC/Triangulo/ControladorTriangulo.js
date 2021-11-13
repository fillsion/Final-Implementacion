const Triangulo = require("./Triangulo");
const TrianguloBO = require('./TrianguloBO')

module.exports = function controlador(lado1, lado2, lado3) {
    const triangulo = new Triangulo(lado1, lado2, lado3);
    if(TrianguloBO.validateData(triangulo)){ 
        let result = triangulo.areaPerimetroTriangulo;
        return {result}
    }}

