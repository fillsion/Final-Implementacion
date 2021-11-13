module.exports = class Circulo {

constructor(radio){
this.radio = parseFloat(radio);
}

  areaPerimetroCirculo() {
     r = this.radio
    if(r >= 0){
        let perimetro = 2*Math.PI*r;
        let area = Math.PI*Math.pow(r,2);
        return {
            area: area,
            perimetro: perimetro,
        };
    } else{
        return "el radio no puede ser negativo" ;
    }
}



getRadio(){
    return this.numero;
}

setRadio(radio){
    this.radio = radio;
}

}
