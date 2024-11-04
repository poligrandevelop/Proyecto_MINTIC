function mostrarTecnico() {
    let request = sendRequest('tecnicos', 'GET', '');
    let table = document.getElementById('tec_table');
    table.innerHTML = "";
    request.onload = function () {
        let data = request.response;
        // console.log(data)
        data.forEach(element => {
            table.innerHTML += `<tr>
                <td>${element.nombres}</td>
                <td>${element.apellidos}</td>
                <td>${element.documento}</td>
                <td>${element.correo}</td>
                <td>${element.telefono}</td>
                <td>${element.direccion}</td>
                <td>${element.proyecto}</td>
                <td>${element.zona}</td>
                <td>
                    <button type="button" class="btn btn-info w-auto p-2 m-1" id="editTec" onclick="window.location = './pageModules/edit_form_tec.html?_id=${element._id}'">Editar</button>
                    <button type="button" class="btn btn-danger w-auto p-2 m-1" onclick="deleteTec('${element._id}')">Eliminar</button>
                    </td>
                    </td>
            </tr>`
        });
    }
}
function deleteTec(id) {

    let request = sendRequest('tecnicos/' + id, 'DELETE', '');
    request.onload = function () {
        mostrarTecnico();
    }
}
function guardarTec() {
    let nom = document.getElementById('nombres_n').value;
    let ape = document.getElementById('apellidos_a').value;
    let doc = document.getElementById('documento_d').value;
    let cor = document.getElementById('correo_c').value;
    let tel = document.getElementById('telefono_t').value;
    let dir = document.getElementById('direccion_dir').value;
    let proy = document.getElementById('proyecto_p').value;
    let zona = document.getElementById('zona_z').value;

    let data = { 'nombres': nom, 'apellidos': ape, 'documento': doc, 'correo': cor, 'telefono': tel, 'direccion': dir, 'proyecto': proy, 'zona': zona };

    let request = sendRequest('tecnicos/', 'POST', data);

    request.onload = function () {
        window.location = '../tecnicos.html';
    };

    request.onerror = function () {
        alert('Error al guardar los datos');
    };
}
function cargarDatosT(id) {
    let request = sendRequest('tecnicos/' + id, 'GET', '');
    let nom = document.getElementById('nombres_n');
    let ape = document.getElementById('apellidos_a');
    let doc = document.getElementById('documento_d');
    let cor = document.getElementById('correo_c');
    let tel = document.getElementById('telefono_t');
    let dir = document.getElementById('direccion_dir');
    let proy = document.getElementById('proyecto_p');
    let zona = document.getElementById('zona_z');

    request.onload = function () {

        let data = request.response;
        if (data) {
            nom.value = data.nombres || '';
            ape.value = data.apellidos || '';
            doc.value = data.documento || '';
            cor.value = data.correo || '';
            tel.value = data.telefono || '';
            dir.value = data.direccion || '';
            proy.value = data.proyecto || '';
            zona.value = data.zona || '';
        }
        console.log(data)
    }
    request.onerror = function () {
        console.log('error al traer los datos')
    };
}
function editTec(id) {
    let nom = document.getElementById('nombres_n').value;
    let ape = document.getElementById('apellidos_a').value;
    let doc = document.getElementById('documento_d').value;
    let cor = document.getElementById('correo_c').value;
    let tel = document.getElementById('telefono_t').value;
    let dir = document.getElementById('direccion_dir').value;
    let proy = document.getElementById('proyecto_p').value;
    let zona = document.getElementById('zona_z').value;

    let data = { 'nombres': nom, 'apellidos': ape, 'documento': doc, 'correo': cor, 'telefono': tel, 'direccion': dir, 'proyecto': proy, 'zona': zona };

    let request = sendRequest('tecnicos/' + id, 'PUT', data);

    request.onload = function () {
        window.location = '../tecnicos.html';
    };

    request.onerror = function () {
        alert('Error al guardar los datos');
    };
}