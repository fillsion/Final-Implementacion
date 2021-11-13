module.exports = class Triangulo {

constructor(lado1, lado2, lado3){
this.l1 = parseFloat(lado1);
this.l2 = parseFloat(lado2);
this.l3 = parseFloat(lado3);
}

  areaPerimetroTriangulo(){
      let l1 = this.l1;
      let l2 = this.l2;
      let l3 = this.l3;
    if (l1 >0 && l2>0 && l3>0){
      if(l1+l2>l3 && l1+l3>l2 && l2+l3 >l1){
        let perimetro = l1+l2+l3;
        let s = perimetro/2;
        let area = Math.sqrt(s*(s-l1)*(s-l2)*(s-l3));
        return {
          area: area,
          perimetro: perimetro
        }
      } else{
        return "No cumple con la desigualdad triangular";
      }

    }else{
      return "Los lados deben ser mayores a 0";
    }

  }






getLado1(){
    return this.lado1; 
}

getLado2(){
    return this.lado2; 
}

getLado3(){
    return this.lado3; 
}

setLado1(numero){
    this.lado1 = numero;
}

setLado2(numero){
    this.lado2 = numero;
}

setLado3(numero){
    this.lado3 = numero;
}

}
