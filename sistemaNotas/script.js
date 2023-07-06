function sistemaNotas(nota){
    if (isNaN(nota) || nota < 0 || nota > 100) {
        console.log("Nota Inválida")
    } else if (nota < 60) {
        console.log("F")
    } else if (nota >= 60 && nota <= 69) {
        console.log("D")
    } else if (nota >= 70 && nota <= 79) {
        console.log("C")
    } else if (nota >= 80 && nota <= 89) {
        console.log("B")
    } else if (nota >= 90) {
        console.log("A")
    }
}

sistemaNotas(120)
sistemaNotas(24.5)
sistemaNotas(64)
sistemaNotas(73)
sistemaNotas(88)
sistemaNotas(100)