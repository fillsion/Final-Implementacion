const Rectangulo = require("./Rectangulo");
const RectanguloBO = require('./RectanguloBO')

module.exports = function controlador(lado1, lado2) {
    const rectangulo = new Rectangulo(lado1, lado2);
    if(RectanguloBO.validateData(rectangulo)){ 
        let result = rectangulo.areaPerimetroRectangulo();
        return {result}
    }}

