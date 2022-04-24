function login() {
    let nome = document.getElementById("nome").value
    let senha = document.getElementById("senha").value
    let confirmarSenha = document.getElementById("confirmarSenha").value
    console.log(nome, senha, confirmarSenha)

    if (senha == confirmarSenha && (nome && senha && confirmarSenha != "")) {
        alert("Concluido. Você está logado agora!")
    }
    else {
        alert("As senhas não coincidem")
    }
}