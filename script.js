function gerar() {
    let numero = Number(document.getElementById('num').value)

    let resultado = document.querySelectorAll('.resultado')[0]

    if (numero == 0) {
        alert("Digite um número!")
    } else {

        let tabuada = 1

        resultado.innerHTML = '' // limpar a  tabuada após cada repetição

        for (let i = 1; i <= 10; i++) {
 
            let calculado = numero * tabuada

            resultado.innerHTML += `${numero} x ${tabuada} = ${calculado}<br>`
                                    //<br> ao final de cada resultado para quabrar a linha
            tabuada++
 // IMPORTANTE!! -> incrementar a variável apenas após mostrar o reslutado           
        }
    }
}  
