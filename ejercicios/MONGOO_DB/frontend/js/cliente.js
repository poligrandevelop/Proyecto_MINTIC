function mostrarClientes() {
    let request = sendRequest('clientes', 'GET', '');
    let table = document.getElementById('cli_table');
    table.innerHTML = "";
    request.onload = function () {
        let data = request.response;
        data.forEach(element => {
            table.innerHTML += `<tr>
                <td>${element.nombres}</td>
                <td>${element.apellidos}</td>
                <td>${element.documento}</td>
                <td>${element.correo}</td>
                <td>${element.telefono}</td>
                <td>${element.direccion}</td>
                <td>
                    <button type="button" class="btn btn-info w-auto p-2 m-1" id="editProd" onclick="window.location = './pageModules/edit_form_cli.html?_id=${element._id}'">Editar</button>
                    <button type="button" class="btn btn-danger w-auto p-2 m-1" onclick="deleteCli('${element._id}')">Eliminar</button>
                </td>
            </tr>`;
        });
    };
}

function deleteCli(id) {
    console.log('ID recibido para eliminar:', id);

    let request = sendRequest(`clientes/${id}`, 'DELETE');

    request.onload = function () {
        console.log('Estado de la solicitud:', request.status);

        if (request.status === 200) {
            console.log('Eliminación exitosa:', request.response);
            mostrarClientes();
        } else {
            console.error('Error al eliminar - estado no 200:', request.status, request.statusText);
            alert('No se pudo eliminar el cliente. Intente nuevamente.');
        }
    };

    request.onerror = function () {
        console.error('Error de red al intentar eliminar el cliente');
        alert('No se pudo eliminar el cliente. Error en la conexión.');
    };
}

function guardarCli() {
    let nom = document.getElementById('nombres_n').value;
    let ape = document.getElementById('apellidos_a').value;
    let doc = document.getElementById('documento_d').value;
    let cor = document.getElementById('correo_c').value;
    let tel = document.getElementById('telefono_t').value;
    let dir = document.getElementById('direccion_dir').value;

    let data = { 'nombres': nom, 'apellidos': ape, 'documento': doc, 'correo': cor, 'telefono': tel, 'direccion': dir };

    let request = sendRequest('clientes/', 'POST', data);

    request.onload = function () {
        window.location = '../clientes.html';
    };

    request.onerror = function () {
        alert('Error al guardar los datos');
    };
}
function cargarDatosC(id) {
    let request = sendRequest('clientes/' + id, 'GET', '');
    let nom = document.getElementById('nombres_n');
    let ape = document.getElementById('apellidos_a');
    let doc = document.getElementById('documento_d');
    let cor = document.getElementById('correo_c');
    let tel = document.getElementById('telefono_t');
    let dir = document.getElementById('direccion_dir');
    
    request.onload = function () {

        let data = request.response;
        if (data) {
            nom.value = data.nombres || '';
            ape.value = data.apellidos || '';
            doc.value = data.documento || '';
            cor.value = data.correo || '';
            tel.value = data.telefono || '';
            dir.value = data.direccion || '';
            
        }
        console.log(data)
    }
    request.onerror = function () {
        console.log('error al traer los datos')
    };
}

function editCli(id) {
    let nom = document.getElementById('nombres_n').value;
    let ape = document.getElementById('apellidos_a').value;
    let doc = document.getElementById('documento_d').value;
    let cor = document.getElementById('correo_c').value;
    let tel = document.getElementById('telefono_t').value;
    let dir = document.getElementById('direccion_dir').value;

    let data = { 'nombres': nom, 'apellidos': ape, 'documento': doc, 'correo': cor, 'telefono': tel, 'direccion': dir };
    console.log('estoy llevando este id: ', id);
    let request = sendRequest('clientes/' + id, 'PUT', data);

    request.onload = function () {
        window.location = '../clientes.html';
        console.log('Se ha modificado el registro', id);
    };

    request.onerror = function () {
        console.log('Error al guardar los datos');
    };
}