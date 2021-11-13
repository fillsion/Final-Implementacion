module.exports = class Rectangulo {

constructor(lado1, lado2){
this.l1 = parseFloat(lado1);
this.l2 = parseFloat(lado2);
console.log(this.areaPerimetroRectangulo(lado1,lado2))
}

areaPerimetroRectangulo(l1, l2) {
      if( l1 > 0 && l2 > 0){
          let perimetro = 2*l1 + 2*l2;
          let area = l1*l2;
          return  {
              area: area,
              perimetro: perimetro,
          };
      } else{
          return "Los lados deben ser mayores a 0";
      }
  }

getLado1(){
    return this.lado1; 
}

getLado2(){
    return this.lado2; 
}


setLado1(numero){
    this.lado1 = numero;
}

setLado2(numero){
    this.lado2 = numero;
}



}
