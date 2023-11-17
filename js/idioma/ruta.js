let es = document.getElementById("español")
let en = document.getElementById("ingles")

//navbar
let txtInicio = document.getElementById("inicio")
let txtIngles = document.getElementById("ingles")
let txtEspañol = document.getElementById("español")
//homepage
let txtIDCamion = document.getElementById("id-camion")
let txtCrearRuta = document.getElementById("crear-ruta")
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
    txtIngles.innerHTML = "English"
    txtEspañol.innerHTML = "Spanish"
    //homepage
    txtIDCamion.innerHTML = "Truck ID"
    txtCrearRuta.innerHTML = "Create Route"
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
    txtIngles.innerHTML = "Ingles"
    txtEspañol.innerHTML = "Español"
    //homepage
    txtIDCamion.innerHTML = "ID Camion"
    txtCrearRuta.innerHTML = "Crear Ruta"
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