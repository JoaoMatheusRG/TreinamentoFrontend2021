const valorMaximo = 4;
let valor = document.getElementById("contador");

function contar() {
    let valorAtual = Number(valor.textContent);
    console.log(valorAtual)
    if (valorMaximo==valorAtual) {
        alert("Você chegou ao valor máximo dos integrantes!!!")
    }
    else {
        valor.textContent = valorAtual + 1;
    }
}















