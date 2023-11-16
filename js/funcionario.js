function buscarPaquetes(ID_Chofer) {
    var ID_Chofer = document.getElementById("ID_Chofer").value;
    jQuery.ajax({
        url: "http://localhost:8002/api/paquetes",
        type: "GET",
        data: {
            ID_Chofer: ID_Chofer
        },
        success: function (data) {
            console.log(data);

            
        }
    })
}