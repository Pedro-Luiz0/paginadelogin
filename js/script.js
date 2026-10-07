const password = document.querySelector('#senha');

const msg = document.querySelector('#mensagem');

password.addEventListener('input', function(tx) {
    const texto = tx.target.value;

    if (texto.length < 4) {
        console.log("Senha Fraca");
        msg.classList.remove("verde");
        msg.classList.remove("amarelo");
        msg.classList.add("vermelho");
    } else if (texto.length < 7) {
        msg.classList.remove("vermelho");
        msg.classList.remove("verde");
        msg.classList.add("amarelo");
        console.log("Senha Intermediária");
    } else {
        msg.classList.remove("amarelo");
        msg.classList.add("verde");
        console.log("Senha Forte");
    }
})