function mostrarUsuarios() {
    let request = sendRequest('user', 'GET', '');
    let table = document.getElementById('users_table');
    table.innerHTML = "";
    request.onload = function () {
        let data = request.response;
        // console.log(data)
        data.forEach(element => { 
            table.innerHTML += `<tr>
                <td>${element.name}</td>
                <td>${element.lastname}</td>
                <td>${element.nickname}</td>
                <td>${element.email}</td>
                <td>${element.password}</td>
                <td>${element.administracion}</td>
                <td>${element.role}</td>
                <td>
                    <button type="button" class="btn btn-info w-auto p-2 m-1" id="editUser" onclick="window.location = './pageModules/edit_form_user.html?_id=${element._id}'">Editar</button>
                    <button type="button" class="btn btn-danger w-auto p-2 m-1" onclick="deleteUser('${element._id}')">Eliminar</button>
                    </td>
                    </td>
            </tr>`
        });
    }
}
function deleteUser(id) {

    let request = sendRequest('user/' + id, 'DELETE', '');
    request.onload = function () {
        mostrarUsuarios();
    }
}
function guardarUser() {
    let nom = document.getElementById('nombres_n').value;
    let ape = document.getElementById('apellidos_a').value;
    let nick = document.getElementById('apodo_a').value;
    let email = document.getElementById('correo_c').value;
    let pass = document.getElementById('contrasena_c').value;
    let adm = document.getElementById('administracion_ad').value;
    let rol = document.getElementById('rol_r').value;

    let data = { 
        name: nom, 
        lastname: ape, 
        nickname: nick, 
        email: email, 
        password: pass, 
        administracion: adm, 
        role: rol 
    };

    let request = sendRequest('user/', 'POST', data);
    
    request.onload = function () {
        if (request.status === 201) {
            alert('Se ha guardado correctamente el nuevo usuario.');
            window.location = '../usuarios.html';
        } else {
            alert(`Error al guardar los datos: ${request.response.error || request.responseText}`);
        }
    };

    request.onerror = function () {
        alert('Error al guardar los datos');
    };
}

function cargarDatosU(id) {
    let request = sendRequest('user/'+ id, 'GET', '');
    let nom = document.getElementById('nombres_n');
    let ape = document.getElementById('apellidos_a');
    let nick = document.getElementById('apodo_a');
    let email = document.getElementById('correo_c');
    let pass = document.getElementById('contrasena_c');
    let adm = document.getElementById('administracion_ad');
    let rol = document.getElementById('rol_r');

    request.onload = function () {
        let data = request.response;
        if (data) {
            nom.value = data.name;
            ape.value = data.lastname;
            nick.value = data.nickname;
            email.value = data.email;
            pass.value = data.password;
            adm.value = data.administracion;
            rol.value = data.role;
        }
        console.log(data)
    }
    request.onerror = function () {
        console.log('error al traer los datos')
    };
}
function editUser(id) {
    let nom = document.getElementById('nombres_n').value;
    let ape = document.getElementById('apellidos_a').value;
    let nick = document.getElementById('apodo_a').value;
    let email = document.getElementById('correo_c').value;
    let pass = document.getElementById('contrasena_c').value;
    let adm = document.getElementById('administracion_ad').value;
    let rol = document.getElementById('rol_r').value;

    let data = { 'name': nom, 'lastname': ape, 'nickname': nick, 'email': email, 'password': pass, 'administracion': adm, 'role': rol };

    let request = sendRequest('user/' + id, 'PUT', data);
    request.onload = function () {
        if (request.status === 200) {
            alert('Usuario actualizado');
            window.location = '../usuarios.html';
        } else {
            alert(`Error al actualizar usuario: ${request.responseText}`);
        }
    };
    request.onerror = function () {
        alert('Error en la solicitud de actualización');
    };
}
