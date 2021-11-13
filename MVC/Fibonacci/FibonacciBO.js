const v = require('validator')


module.exports = class FibonacciBO{
    static validateData(FibonacciObj){
        const numero = FibonacciObj.getNumero();
        if(v.isNumeric(numero.toString()) && Number.isInteger(numero) && numero>= 0){
            return true;
        }
        return false;

    }
}