let listaAmigos = [];

document.getElementById("amigo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    listaAmigos.push(nome);
    input.value = ""; 
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome para sortear!");
        return;
    }

    const sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    document.getElementById("resultado").innerHTML = `
        <p style="color: green; font-weight: bold;">O amigo secreto sorteado é: ${sorteado}</p>
    `;
}
