const v = require('validator')


module.exports = class CirculoBO{
    static validateData(CirculoObj){
        const radio = FactorialObj.getRadio();
        if(v.isNumeric(radio.toString()) && radio>= 0){
            return true;
        }
        return false;

    }
}