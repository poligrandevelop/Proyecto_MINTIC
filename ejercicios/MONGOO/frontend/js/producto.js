function mostrarProductos() {
    let request = sendRequest('productos', 'GET', '');
    let table = document.getElementById('prod_table');
    table.innerHTML = "";
    request.onload = function () {
        let data = request.response;
        // console.log(data)
        data.forEach(element => {
            table.innerHTML += `<tr>
                <td hidden>${element._id}</td>
                <td>${element.Producto}</td>
                <td>${element.Preoveedor}</td>
                <td>${element.UnidadesDisponibles}</td>
                <td>${element.ubicacionAlmacen}</td>
                <td>${element.serial}</td>
                <td>${element.fechaCompra}</td>
                <td>
                    <button type="button" class="btn btn-info w-auto p-2 m-1" id="editProd" onclick="window.location = './pageModules/edit_form_prod.html?_id=${element._id}'">Editar</button>
                    <button type="button" class="btn btn-danger w-auto p-2 m-1" onclick="deleteProd('${element._id}')">Eliminar</button>
                    </td>
            </tr>`
        });
    }
}
function deleteProd(id) {

    let request = sendRequest('productos/' + id, 'DELETE', '');
    request.onload = function () {
        mostrarProductos();
    }
}
function guardarProd() {
    let prod = document.getElementById('producto_p').value;
    let prov = document.getElementById('proveedor_p').value;
    let udm = document.getElementById('unidades_u').value;
    let loc = document.getElementById('location_l').value;
    let ser = document.getElementById('serial_s').value;
    let date = document.getElementById('date_pur').value;

    let data = { 'Producto': prod, 'Preoveedor': prov, 'UnidadesDisponibles': udm, 'ubicacionAlmacen': loc, 'serial': ser, 'fechaCompra': date };

    let request = sendRequest('productos/', 'POST', data);

    request.onload = function () {
        window.location = '../producto.html';
    };

    request.onerror = function () {
        alert('Error al guardar los datos');
    };
}
function cargarDatosP(id) {
    let request = sendRequest('productos/' + id, 'GET', '');
    let prod = document.getElementById('producto_p')
    let prov = document.getElementById('proveedor_p')
    let udm = document.getElementById('unidades_u')
    let loc = document.getElementById('location_l')
    let ser = document.getElementById('serial_s')
    let date = document.getElementById('date_pur')

    request.onload = function () {
        let data_P = request.response;
        prod.value = data_P.Producto;
        prov.value = data_P.Preoveedor; 
        udm.value = data_P.UnidadesDisponibles;
        loc.value = data_P.ubicacionAlmacen;
        ser.value = data_P.serial;
        date.value = data_P.fechaCompra;
        console.log(data_P);
    };

    request.onerror = function () {
        console.log('error al traer los datos');
    };
}

function editProd(id) {

    let prod = document.getElementById('producto_p').value;
    let prov = document.getElementById('proveedor_p').value;
    let udm = document.getElementById('unidades_u').value;
    let loc = document.getElementById('location_l').value;
    let ser = document.getElementById('serial_s').value;
    let date = document.getElementById('date_pur').value;

    let data = { 'Producto': prod, 'Preoveedor': prov, 'UnidadesDisponibles': udm, 'ubicacionAlmacen': loc, 'serial': ser, 'fechaCompra': date };
    
    console.log('estoy llevando este id: ', id);
    let request = sendRequest('productos/' + id, 'PUT', data);

    request.onload = function () {
        window.location = '../producto.html';
        console.log('Se ha modificado el registro', id);
    };

    request.onerror = function () {
        alert('Error al guardar los datos');
    };
}