document.addEventListener("DOMContentLoaded", () => {
    const inputNome = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let amigos = [];

    window.adicionarAmigo = () => {
        const nome = inputNome.value.trim();
        if (nome && !amigos.includes(nome)) {
            amigos.push(nome);
            atualizarLista();
            inputNome.value = "";
        } else {
            alert("Nome inválido ou já adicionado!");
        }
    };

    function atualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach((amigo, index) => {
            const li = document.createElement("li");
            li.textContent = amigo;
            li.classList.add("fade-in", "name-item");
            
            const btnRemover = document.createElement("button");
            btnRemover.textContent = "❌";
            btnRemover.classList.add("remove-btn");
            btnRemover.onclick = () => removerAmigo(index);
            
            li.appendChild(btnRemover);
            listaAmigos.appendChild(li);
        });
    }

    function removerAmigo(index) {
        amigos.splice(index, 1);
        atualizarLista();
    }

    window.sortearAmigo = () => {
        if (amigos.length < 1) {
            alert("Adicione pelo menos 1 amigo para sortear!");
            return;
        }
        let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        
        resultado.innerHTML = "";
        const li = document.createElement("li");
        li.textContent = `Sorteado: ${sorteado}`;
        li.classList.add("fade-in", "sorteado-item");
        resultado.appendChild(li);
    };

    inputNome.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            adicionarAmigo();
        }
    });
});
