// class contato

class contato {
    constructor(nome, email, telefone, tipo, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipo = tipo;
        this.mensagem = mensagem;
    }
}

function Post(form) {
    // Coleta os dados do formulário
    const data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("tipo").value,
        form.elements.namedItem("mensagem").value
    );

    // Armazena no console
    console.log("=== Novo contato recebido ===");
    console.log("Nome:      ", data.nome);
    console.log("E-mail:    ", data.email);
    console.log("Telefone:  ", data.telefone);
    console.log("Tipo:      ", data.tipo);
    console.log("Mensagem:  ", data.mensagem);
    console.log("Objeto completo:", data);

    // Esconde o formulário e exibe mensagem de agradecimento
    form.style.display = "none";

    const msgDiv = document.getElementById("mensagem-agradecimento");
    msgDiv.innerHTML =
        "<p>Obrigado pelo contato, <strong>" + data.nome + "</strong>!</p>" +
        "<p>Recebemos sua mensagem e em breve entraremos em contato pelo e-mail <strong>" + data.email + "</strong>.</p>";
    msgDiv.style.display = "block";

    // Impede o envio padrão do formulário
    return false;
}
