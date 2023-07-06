let caixaFamiliar = {
    receitas: [209564, 8372.05, 772378, 8498.27, 244735, 4826.29, 663799, 9953.87],
    despesas: [3373.29, 795008, 2605.25, 590468, 9923.91, 322640, 9583.78, 132423]
}

function somaArray(lista){
    let valor = 0;
    for(var i = 0; i < lista.length; i++) {
        valor += lista[i];
    }
    let soma = valor.toFixed(2)
    return soma
}

function calculoReceita(caixaFamiliar){
    let receitasTotal = somaArray(caixaFamiliar.receitas)
    let despesasTotal = somaArray(caixaFamiliar.despesas)

    let total = receitasTotal - despesasTotal

    if (total < 0){
        console.log("O saldo da família está negativo")
        console.log(total)
    }
    else{
        console.log("O saldo da família está positivo")
        console.log("valor do saldo: " + total)
    }
}

calculoReceita(caixaFamiliar)