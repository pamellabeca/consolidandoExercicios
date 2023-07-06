function calcularTemp(temperatura) {

    temperatura = temperatura.toUpperCase()

    if (temperatura.includes("C")) {
      
      let tempCelsius = parseFloat(temperatura)
      let tempFahrenheit = (tempCelsius * 9/5) + 32
      return tempFahrenheit + "F"

    }
  
    else if (temperatura.includes("F")) {

      let tempFahrenheit = parseFloat(temperatura)
      let tempCelsius = (tempFahrenheit - 32) * 5/9
      return tempCelsius + "C"

    }
  
    
    else{
        return "!Formato inválido. Utilize o formato 'Temperatura°C' ou 'Temperatura°F'!"
    }
}
  
  

console.log(calcularTemp("50F")) 
console.log(calcularTemp("0c")) 
console.log(calcularTemp("32K"))
  