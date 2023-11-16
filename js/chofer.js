const URL = "http://localhost:8002/api/";

function verPaquete(ID_Chofer) {
    var ID_Chofer = document.getElementById("ID_Chofer").value;
    jQuery.ajax({
        url: "http://localhost:8002/api/paquetes",
        type: "GET",
        data: {
            "ID_Chofer": ID_Chofer
        },
        success: function (data) {
            var tablaResultados = document.getElementById("tablaResultados");
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
                    editar.inertHTML = `
                        <button onclick="marcarEntregado('${ID_Chofer}', '${element.ID_Paquete}')" style="color: black;">Entregado</button>
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

/* <td data-cell="Marcar"><button onclick="marcarEntregado('${ID_Chofer}', '${element.ID_Paquete}')" style="color: black;">Entregado</button></td>
 */
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


function verCamion(ID_Chofer) {
    var ID_Chofer = document.getElementById("ID_Chofer").value;
    jQuery.ajax({
        url: "http://localhost:8002/api/camion",
        type: "GET",
        data: {
            "ID_Chofer": ID_Chofer
        },
        success: function (data) {
            
        }
        
    })
}