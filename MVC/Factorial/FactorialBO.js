const v = require('validator')


module.exports = class FactorialBO{
    static validateData(FactorialObj){
        const numero = FactorialObj.getNumero();
        if(v.isNumeric(numero.toString()) && Number.isInteger(numero) && numero>= 0){
            return true;
        }
        return false;

    }
}
