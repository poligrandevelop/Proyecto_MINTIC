async function login(event) {
    event.preventDefault();

    const nickname = document.getElementById('nickname_n').value;
    const password = document.getElementById('password_pass').value;
    const errorMsg = document.getElementById('error');
    errorMsg.textContent = '';

    const xhr = new XMLHttpRequest(); 
    xhr.open('POST', 'http://localhost:3000/api/user/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            try {
                const data = JSON.parse(xhr.responseText); // Intenta analizar la respuesta
                if (xhr.status === 200) {
                    localStorage.setItem('token', data.token);
                    alert('Inicio de sesión exitoso');
                    window.location.href = '../html/clientes.html';
                } else {
                    // Manejo de error
                    errorMsg.textContent = data.error || 'Error al iniciar sesión';
                }
            } catch (e) {
                // Manejo del caso en que no es JSON
                errorMsg.textContent = 'Error en la respuesta del servidor';
                console.error('Error de análisis:', e);
            }
        }
    };

    xhr.send(JSON.stringify({ nickname, password }));
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginForm').addEventListener('submit', login);
});
