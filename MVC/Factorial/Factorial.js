module.exports = class Factorial {

constructor(numero){
this.numero = parseInt(numero);
}

 FactorialR(numero){
    if (numero >= 0 && Number.isInteger(numero)) {//solo se permiten enteros positivos
      if (numero == 0 || numero == 1) //aca se acaba el codigo
        return 1;
      return this.FactorialR(numero-1) * numero; //recursivo donde devuelvo el siguiente numero * actual
    } else {
      return "el numero debe ser entero positivo"; //en tal caso que entre un numero invalido
    }
  }

 calculoFactorial(){
   return this.FactorialR(this.numero)
 }





getNumero(){
    return this.numero; 
}

setNumero(numero){
    this.numero = numero;
}

}
