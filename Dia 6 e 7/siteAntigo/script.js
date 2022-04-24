let itensLista = [];

function AddReceitas() {

    let caixa = document.getElementById("container");

    let nome = document.getElementById("nome").value;
    let tempoPreparo = document.getElementById("tempoPreparo").value;
    let categoria = document.getElementById("categoria").value;

    if ((nome && tempoPreparo && categoria) == "") {
        alert("Um dos campos encontra-se vazio");
    }
    else {

        // criação de elementos

        let divBox = document.createElement("div");

        let divIcon = document.createElement("div");

        let trash = document.createElement("img");

        let divTitle = document.createElement("div");

        let divTempo = document.createElement("div");

        let divCategoria = document.createElement("div");

        let spanTitle = document.createElement("span");

        let spanTempo = document.createElement("span");

        let spanCategoria = document.createElement("span");

        //Atribui as palavras

        trash.src = "img/trash.png";

        divIcon.appendChild(trash);

        spanTitle.appendChild(nome);

        spanTempo.appendChild(tempoPreparo);

        spanCategoria.appendChild(categoria);

        //manipulação das palavras

        divTitle.appendChild(spanTitle);

        divTempo.appendChild(spanTempo);

        divCategoria.appendChild(spanCategoria);

        //criação da Box

        divBox.appendChild(divIcon);

        divBox.appendChild(divTitle);

        divBox.appendChild(divTempo);

        divBox.appendChild(divCategoria);

        //Exibe caixa

        caixa.appendChild(divBox);

    }
}