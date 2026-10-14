document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        alert('Login bem-sucedido!');
        // Redirecionar para outra página, se necessário
        window.location.href = 'dashboard.html';
    } else {
        alert('Nome de usuário ou senha incorretos.');
    }
});