//informacion de los huespedes
function traerInformacion(){
    $.ajax({
        url:"https://g4e5c907d65bdcb-db202109251503.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success: function(respuesta){
            console.log(respuesta);
            respuestaHuesped(respuesta.items);
        }

    });

}

function respuestaHuesped(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar Huesped</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),  
        email:$("#email").val(),
        age:$("#age").val(),

    };
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url: "https://g4e5c907d65bdcb-db202109251503.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success: function(respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("Se ha guardado datos del Huesped")

        }

    });

}
    
function editarInformacion(){
    let myData={
    id:$("#id").val(),
    name:$("#name").val(),  
    email:$("#email").val(),
    age:$("#age").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4e5c907d65bdcb-db202109251503.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"aplication/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion();
            alert("Se ha actualizado el Huesped!!")
        }

    });

}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
        
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4e5c907d65bdcb-db202109251503.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"aplication/JSON",
        datatype:"JSON",
        success:function(respuesta){
            console.log(myData);
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha eliminado Huesped")
        }

    });

}

// Mensajes de los huespedes al hotel


function consultaMensaje(){
    $.ajax({
        url: "https://g4e5c907d65bdcb-db202109251503.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success: function(resultadoMensaje ){
            console.log(resultadoMensaje );
            $("#message").empty();
            $("#id_message").val(""),
            mostrarmensaje(resultadoMensaje.items);
        }

    });

}

function mostrarmensaje(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar Huesped</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#message").append(myTable);
}

function registrarMensaje(){
    let Datos={
        id:$("#id1").val(),
        messagetext:$("#descMensaje").val(),
    };
    let dataToSend=JSON.stringify(Datos);
    $.ajax({
        url:"https://g4e5c907d65bdcb-db202109251503.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:Datos,
        datatype:"JSON",
        success:function(resultadoMensaje){
            $("#resultadoMensaje").empty();
            $("#id1").val("");
            $("#descMensaje").val("");
            alert("Se ha registro el mensaje")
        }
    });
}
    
function editarMensaje(){
    let myData={
        messagetext:$("#messagetext").val(),
        id:$("#idmessage").val(),
    

    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4e5c907d65bdcb-db202109251503.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"aplication/JSON",
        datatype:"JSON",
        success:function(resultadoMensaje ){
            console.log(myData);
            $("#message").empty();
            $("#idmessage").val("");
            $("#messagetext").val("");
            consultaMensaje();
            alert("Mensaje actualizado!!")
        }

    });

}
function borrarMensaje(idElemento){
    let myData={
        id:idElemento
        
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g4e5c907d65bdcb-db202109251503.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"aplication/JSON",
        datatype:"JSON",
        success:function(resultadoMensaje){
            console.log(dataToSend);
            $("#message").empty();
            consultaMensaje()
            alert("Se ha eliminado Mensaje")
        }

    });

}

//Habitaciones  del hotel
function consultaHabitaciones() {
    $.ajax({
        url: "https://g4e5c907d65bdcb-db202109251503.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",

        type: "GET",
        datatype: "JSON",
        success: function(resultadohabitaciones) {
            console.log(resultadohabitaciones);
			$("#habitaciones").empty();
            $("#id").val(""),
                $("#room").val(""),
                $("#stars").val(""),
                $("#category").val(""),
                $("#description").val(""),
            mostrarRespuestaHabitaciones(resultadohabitaciones.items);
        }
    });
}

function guardarHabitacion() {
    let myDataHab = {
        id: $("#id").val(),
        room: $("#room").val(),
        stars: $("#stars").val(),
        category_id: $("#category").val(),
        description: $("#description").val(),
    };

    let dataToSend = JSON.stringify(myDataHab);

    $.ajax({
        url: "https://g4e5c907d65bdcb-db202109251503.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",

        type: "POST",
        data: myDataHab,
        datatype: "JSON",
        success: function(resultadohabitaciones) {
            $("#habitacion").empty();
            $("#id").val(""),
                $("#room").val(""),
                $("#stars").val(""),
                $("#category").val(""),
                $("#description").val(""),

                alert("Se ha guardado habitacion")
        }
    });
}

function editarHabitacion() {
    let myDataHab = {
        room: $("#room").val(),
        stars: $("#stars").val(),
        category_id: $("#category").val(),
        description: $("#description").val(),
        id: $("#id").val(),
    };

    let dataToSend = JSON.stringify(myDataHab);

    $.ajax({
        url:" https://g4e5c907d65bdcb-db202109251503.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(resultadohabitaciones) {
            console.log(dataToSend);
            $("#habitacion").empty();
            $("#id").val(""),
                $("#room").val(""),
                $("#stars").val(""),
                $("#category").val(""),
                $("#description").val(""),
                consultaHabitaciones()
            alert("La habitacion se ha Actualizado")
        }
    });
}

function borrarHabitacion(idElemento) {

    let myDataHab = {
        id: idElemento
    };

    let dataToSend = JSON.stringify(myDataHab);

    $.ajax({
        url: "https://g4e5c907d65bdcb-db202109251503.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(resultadohabitaciones) {
            console.log(dataToSend);
            $("#habitacion").empty();
            consultaHabitaciones()
			alert("se ha Eliminado")
        }
    });
}

function mostrarRespuestaHabitaciones(items) {
    let myTable = "<table>"
    for (i = 0; i < items.length; i++) {
        myTable+= "<tr>";
        myTable+= "<td>" + items[i].id + "</td>";
        myTable+= "<td>" + items[i].room + "</td>";
        myTable+= "<td>" + items[i].stars + "</td>";
        myTable+= "<td>" + items[i].category_id + "</td>";
        myTable+= "<td>" + items[i].description + "</td>";
        myTable+= "<td> <button onclick='borrarHabitacion(" + items[i].id + ")'>Borrar</button>";
        myTable+= "</tr>";
    }
    myTable += "</table>";
    $("#habitacion").append(myTable);
}




