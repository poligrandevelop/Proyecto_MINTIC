async function login(event) {
    event.preventDefault(); // Previene la recarga del formulario

    const nickname = document.getElementById('nickname_n').value;
    const password = document.getElementById('password_pass').value;
    const errorMsg = document.getElementById('error');
    errorMsg.textContent = '';

    try {
        const response = await fetch('http://localhost:3000/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nickname, password })
        });

        const data = await response.json(); // Aquí solo llamas a json una vez
        console.log('Status:', response.status); // Para ver el estado de la respuesta
        console.log('Response:', data); // Para ver la respuesta del servidor

        if (response.ok) {
            localStorage.setItem('token', data.token);
            alert('Inicio de sesión exitoso');
            window.location.href = '../html/clientes.html'; // Verifica que la ruta sea correcta
        } else {
            errorMsg.textContent = data.error || 'Error al iniciar sesión';
        }
    } catch (error) {
        errorMsg.textContent = 'Error de conexión';
        console.error('Error de conexión:', error);
    }
}

// Asegúrate de agregar el evento al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginForm').addEventListener('submit', login);
});
