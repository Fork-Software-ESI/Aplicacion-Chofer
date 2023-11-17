let es = document.getElementById("español")
let en = document.getElementById("ingles")

//navbar
let txtInicio = document.getElementById("inicio")
let txtSobreNosotros = document.getElementById("sobre-nosotros-txt")
let txtNosotros = document.getElementById("SobreNosotros")
let txtServicios = document.getElementById("servicios")
let txtContacto = document.getElementById("contacto")
let txtIngles = document.getElementById("ingles")
let txtEspañol = document.getElementById("español")
//homepage
let txtBienvenido = document.getElementById("bienvenido")
let txtIDChofer = document.getElementById("ID_Chofer")
let txtListarPaquete = document.getElementById("listarPaquete")
let txtPaquete = document.getElementById("paquete")
let txtIDLote = document.getElementById("id-lote")
let txtIDPaquete = document.getElementById("id-paquete")
let txtIDEstado = document.getElementById("id-estado")
let txtDestino = document.getElementById("destino")
let txtAccion = document.getElementById("accion-paquete")
let txtCamion = document.getElementById("camion")
let txtidChofer = document.getElementById("id-chofer")
let txtIDCamion = document.getElementById("id-camion")
let txtFecha = document.getElementById("fecha-hora-inicio")
let txtIDEstadoCamion = document.getElementById("id-estado-camion")
let txtMarcar = document.getElementById("marcarHora")
let txtHora = document.getElementById("hora")
let txtLlegada = document.getElementById("llegada")
let txtSalida = document.getElementById("salida")
let txtBotonMarcar = document.getElementById("boton-marcar")
let txtRuta = document.getElementById("ruta")

//footer
let txtEmpresa = document.getElementById("empresa")
let txtDondeUbicarnos = document.getElementById("donde-ubicarnos")
let txtDireccion = document.getElementById("direccion")
let txtNosotrosFooter = document.getElementById("nosotros-footer")
let txtServiciosFooter = document.getElementById("servicios-footer")
let txtContactoFooter = document.getElementById("contacto-footer")

function traducirAIngles(){
    //navbar
    txtInicio.innerHTML = "Home"
    txtServicios.innerHTML = "Services"
    txtIngles.innerHTML = "English"
    txtEspañol.innerHTML = "Spanish"
    //homepage
    txtBienvenido.innerHTML = "Welcome Driver"
    txtIDChofer.innerHTML = "Driver Batch"
    txtListarPaquete.innerHTML = "List Package"
    txtPaquete.innerHTML = "Package"
    txtIDLote.innerHTML = "Lot Batch"
    txtIDPaquete.innerHTML = "Package Batch"
    txtIDEstado.innerHTML = "State Batch"
    txtDestino.innerHTML = "Destination"
    txtAccion.innerHTML = "Action"
    txtCamion.innerHTML = "Truck"
    txtidChofer.innerHTML = "Driver Batch"
    txtIDCamion.innerHTML = "Truck Batch"
    txtFecha.innerHTML = "Date and Time Start"
    txtIDEstadoCamion.innerHTML = "State Truck"
    txtMarcar.innerHTML = "Mark"
    txtHora.innerHTML = "Time"
    txtLlegada.innerHTML = "Arrival"
    txtSalida.innerHTML = "Exit"
    txtBotonMarcar.innerHTML = "Mark"
    txtRuta.value = "Route"
    //footer
    txtEmpresa.innerHTML = "Company"
    txtDondeUbicarnos.innerHTML = "Where to find us"
    txtDireccion.innerHTML = "We find ourselves 25 de agosto 1800"
    txtNosotrosFooter.innerHTML = "About us"
    txtServiciosFooter.innerHTML = "Services"
    txtContactoFooter.innerHTML = "Contact"
}

function traducirAEspanol(){
    //navbar
    txtInicio.innerHTML = "Inicio"
    txtServicios.innerHTML = "Servicios"
    txtIngles.innerHTML = "Ingles"
    txtEspañol.innerHTML = "Español"
    //homepage
    txtBienvenido.innerHTML = "Bienvenido Chofer"
    txtIDChofer.innerHTML = "ID Chofer"
    txtListarPaquete.innerHTML = "Listar Paquete"
    txtPaquete.innerHTML = "Paquete"
    txtIDLote.innerHTML = "ID Lote"
    txtIDPaquete.innerHTML = "ID Paquete"
    txtIDEstado.innerHTML = "ID Estado"
    txtDestino.innerHTML = "Destino"
    txtAccion.innerHTML = "Accion"
    txtCamion.innerHTML = "Camion"
    txtidChofer.innerHTML = "ID Chofer"
    txtIDCamion.innerHTML = "ID Camion"
    txtFecha.innerHTML = "Fecha y Hora Inicio"
    txtIDEstadoCamion.innerHTML = "ID Estado Camion"
    txtMarcar.innerHTML = "Marcar"
    txtHora.innerHTML = "Hora"
    txtLlegada.innerHTML = "Llegada"
    txtSalida.innerHTML = "Salida"
    txtBotonMarcar.innerHTML = "Marcar"
    txtRuta.value = "Ruta"
    //footer
    txtEmpresa.innerHTML = "Empresa"
    txtDondeUbicarnos.innerHTML = "Donde ubicarnos"
    txtDireccion.innerHTML = "Nos encontramos en calle 25 de agosto 1800"
}

es.addEventListener("click", function(){
    localStorage.setItem("idioma", "es")
    traducirAEspanol()
})

en.addEventListener("click", function(){
    localStorage.setItem("idioma", "en")
    traducirAIngles()
})

idioma = localStorage.getItem("idioma")

if(idioma == "es"){
    traducirAEspanol()
}

if(idioma == "en"){
    traducirAIngles()
}