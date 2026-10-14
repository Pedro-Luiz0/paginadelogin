const form = document.querySelector('#formularioLogin');
const username = document.querySelector('#nomeusuario');
const password = document.querySelector('#senha');
const confirmPassword = document.querySelector('#confirmarsenha');
const strengthMessage = document.querySelector('#forcaSenha');
const message = document.querySelector('#mensagem');
const result = document.querySelector('#resultado');

function updatePasswordStrength() {
    const length = password.value.length;
    strengthMessage.className = 'forca-senha';

    if (length < 4) {
        strengthMessage.textContent = 'Senha fraca';
        strengthMessage.classList.add('vermelho');
    } else if (length < 6) {
        strengthMessage.textContent = 'Senha intermediária';
        strengthMessage.classList.add('amarelo');
    } else {
        strengthMessage.textContent = 'Senha forte';
        strengthMessage.classList.add('verde');
    }
}

function updatePasswordMatch() {
    const hasPasswordInput = password.value.length > 0 || confirmPassword.value.length > 0;
    const passwordsMatch = password.value === confirmPassword.value;

    confirmPassword.setAttribute('aria-invalid', String(hasPasswordInput && !passwordsMatch));
    message.textContent = hasPasswordInput && !passwordsMatch
        ? 'As senhas devem ser iguais.'
        : '';
    message.classList.toggle('erro', hasPasswordInput && !passwordsMatch);
}

password.addEventListener('input', () => {
    updatePasswordStrength();
    updatePasswordMatch();
    result.hidden = true;
});

confirmPassword.addEventListener('input', () => {
    updatePasswordMatch();
    result.hidden = true;
});

username.addEventListener('input', () => {
    result.hidden = true;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    updatePasswordMatch();

    if (username.value.trim().length < 3) {
        message.textContent = 'O usuário deve ter no mínimo 3 caracteres.';
        message.classList.add('erro');
        username.focus();
        result.hidden = true;
        return;
    }

    if (password.value.length === 0 || confirmPassword.value.length === 0) {
        message.textContent = 'Preencha os campos de senha.';
        message.classList.add('erro');
        (password.value.length === 0 ? password : confirmPassword).focus();
        result.hidden = true;
        return;
    }

    if (password.value !== confirmPassword.value) {
        message.textContent = 'As senhas devem ser iguais.';
        message.classList.add('erro');
        confirmPassword.focus();
        result.hidden = true;
        return;
    }

    message.textContent = '';
    message.classList.remove('erro');

    const usernameLine = document.createElement('p');
    usernameLine.textContent = `Usuário: ${username.value.trim()}`;
    const passwordLine = document.createElement('p');
    passwordLine.textContent = `Senha: ${password.value}`;

    result.replaceChildren(usernameLine, passwordLine);
    result.hidden = false;
});

document.addEventListener('DOMContentLoaded', () => {
    const botaoCriarConta = document.getElementById('btVerificar');

    botaoCriarConta.addEventListener('click', (event) => {
        event.preventDefault(); // Evita o comportamento padrão do botão
        window.location.href = 'login.html'; // Redireciona para a página de login
    });
});