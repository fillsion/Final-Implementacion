module.exports = class Fibonacci {

constructor(numero){
this.numero = numero;
}

  fibonacci(numero){
    if (numero > 0 && Number.isInteger(numero)) { // solo se permiten enteros positivos
      if(numero == 1){
        return ([0]);
      } 
      let numeros = [0, 1];
      for (let i = 2; i < numero; i++) {
        numeros[i] = numeros[i - 2] + numeros[i - 1];
      }
      return (numeros);
    } else {
      return ("solo se permiten enteros positivos");
    }
  }



getNumero(){
    return this.numero;
}

setNumero(numero){
    this.numero = numero;
}

}
