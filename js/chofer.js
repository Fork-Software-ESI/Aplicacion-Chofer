const URL = "http://localhost:8002/api/";

function llamarFunciones(ID_Chofer){
    var ID_Chofer = document.getElementById("ID_Chofer").value;
    document.getElementById("footer").style.position = "relative";

    verCamion(ID_Chofer, function (exito) {
        if (exito) {
            console.log("Camion encontrado");
            verPaquete(ID_Chofer);
        } else {
            console.log("ID_Chofer: " + ID_Chofer);
        }
    });
}


function verCamion(ID_Chofer, callback) {
    jQuery.ajax({
        url: "http://localhost:8002/api/camion",
        type: "GET",
        data: {
            ID_Chofer: ID_Chofer
        },
        success: function (data) {
            var tablaResultados = document.getElementById("tablaResultadosCamion");
            tablaResultados.innerHTML = '';
            var camion = document.createElement("tr");
            camion.innerHTML = `
                <td data-cell="ID Chofer">${data.camion.ID_Chofer}</td>
                <td data-cell="ID Camion">${data.camion.ID_Camion}</td>
                <td data-cell="Marca">${data.camion.Fecha_Hora_Inicio}</td>
                <td data-cell="Modelo">${data.camion.ID_Estado}</td>
                `;
            tablaResultados.appendChild(camion);
            callback(true);

        },
        error: function () {
            alert("Error al cargar los datos");
            console.log("ID_Chofer: " + ID_Chofer)
            callback(false);
        }
    })
}

function verPaquete(ID_Chofer) {
    jQuery.ajax({
        url: "http://localhost:8002/api/paquetes",
        type: "GET",
        data: {
            "ID_Chofer": ID_Chofer
        },
        success: function (data) {
            var tablaResultados = document.getElementById("tablaResultadosPaquete");
            tablaResultados.innerHTML = '';
            data.paquetes.forEach(element => {
                var fila = document.createElement("tr");
                fila.innerHTML = `
                    <td data-cell="ID Lote">${element.ID_Lote}</td>
                    <td data-cell="ID Paquete">${element.ID_Paquete}</td>
                    <td data-cell="ID Estado">${element.ID_Estado}</td> 
                    <td data-cell="Destino">${element.Destino}</td>
                `;
                tablaResultados.appendChild(fila);
                if(element.ID_Estado === 2){
                    var editar = document.createElement("td");
                    editar.setAttribute("data-cell", "Editar");
                    editar.innerHTML = `
                        <button class="btn" onclick="marcarEntregado('${ID_Chofer}', '${element.ID_Paquete}')" style="color: black;">Entregado</button>
                    `;
                    fila.appendChild(editar);
                }
            });
        },
        error: function () {
            alert("Error al cargar los datos");
        }
    })
}

function marcarEntregado(ID_Chofer, ID_Paquete) {
    jQuery.ajax({
        url: "http://localhost:8002/api/paquetes",
        type: "POST",
        data: {
            "ID_Paquete": ID_Paquete,
            "ID_Chofer": ID_Chofer
        },
        success: function (data) {
            alert("Paquete marcado como entregado");
            verPaquete(ID_Chofer);
        },
        error: function () {
            alert("Error al cargar los datos");
        }
    })
}

function plataforma(ID_Chofer, accion){
    var accion = document.getElementById("accion").value;
    jQuery.ajax({
        url: "http://localhost:8002/api/plataforma",
        type: "POST",
        data: {
            "ID_Chofer": ID_Chofer,
            "accion": accion
        },
        success: function () {
            alert("Accion realizada");
            verCamion(ID_Chofer);
        },
        error: function () {
            alert("Error al cargar los datos");
        }
    })
}