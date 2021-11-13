const v = require('validator')


module.exports = class TrianguloBO{
    static validateData(TrianguloObj){
        const lado1 = RectanguloObj.getLado1();
        const lado2 = RectanguloObj.getLado2();
        const lado3 = RectanguloObj.getLado2();
        let desigualdad = (lado1+lado2>lado3 && lado1+lado3>lado2 && lado2+lado3 >lado1);
        if(v.isNumeric(lado1.toString()) && lado1>= 0 && v.isNumeric(lado2.toString()) && lado2>= 0 && v.isNumeric(lado3.toString()) && lado3>= 0 && desigualdad){
            return true;
        }
        return false;

    }
}