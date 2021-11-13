const v = require('validator')


module.exports = class RectanguloBO{
    static validateData(RectanguloObj){
        let lado1 = RectanguloObj.getLado1();
        let lado2 = RectanguloObj.getLado2();
        console.log(lado1 + 'LADO 1')
        console.log(lado2 + 'LADO 2')
        if(v.isNumeric(lado1.toString()) && lado1>= 0 && v.isNumeric(lado2.toString()) && lado2>= 0){
            return true;
        }
        return false;

    }
}