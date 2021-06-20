var username = new URL(location.href).searchParams.get("username");
var user;

$(document).ready(function(){
	
	
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	
	
	
	getUsuario().then(function(){
		
		$("#mi-perfil-btn").attr("href","profile.html?username=" + username);
		
		$("#user-saldo").html(user.saldo.toFixed(2)+"€")
		
		getLibros(false,"ASC");
		
		$("#ordenar-genero").click(ordenarLibros);
				
	})
	
});


async function getUsuario(){
	
	await $.ajax({
			type:"GET",
			dataType:"html",
			url:"./ServletUsuarioPedir",
			data: $.param({
				username: username,
			}),
			success: function(result){
				let parsedResult = JSON.parse(result);
				
				if (parsedResult != false){
					user = parsedResult;
				}
				else{
					console.log("Error recuperando los datos del usuario");
				}
			}
		});
	
	
}

function getLibros(ordenar,orden){
	
	$.ajax({
			type:"GET",
			dataType:"html",
			url:"./ServletLibroListar",
			data: $.param({
				ordenar: ordenar,
				orden: orden
			}),
			success: function(result){
				let parsedResult = JSON.parse(result);
				
				if (parsedResult != false){
					mostrarLibros(parsedResult);
				}
				else{
					console.log("Error recuperando los datos de los libros");
				}
			}
		});
	
}

function mostrarLibros(libros){
	
	let contenido = "";
	
	$.each(libros, function(index, libro){
		
		libro = JSON.parse(libro);
		let precio;
		
		if (libro.copias > 0){
			
			if (user.premium){
				
				if (libro.novedad){
					precio = (2 - (2 * 0.1));
				}
				else{
					precio = (1 - (1 * 0.1));
				}
			}
			else{
				if (libro.novedad){
					precio = 2;
				}
				else{
					precio = 1;
				}
			}
			
			contenido += '<tr><th scope="row">' + libro.id + '</th>' + 
				'<td>' + libro.titulo + '</td>' +
				'<td>' + libro.genero + '</td>' +
				'<td>' + libro.autor + '</td>' +
				'<td>' + libro.copias + '</td>' +
				'<td><input type="checkbox" name="novedad" id="novedad' + libro.id + '" disabled '; 
			if (libro.novedad){
				contenido += 'checked';
			}
			contenido += '></td>' +
				'<td>' + precio + '</td>' +
				'<td><button onclick="alquilarLibro(' + libro.id + ',' + precio + ');" class="btn btn-success" ';
			if (user.saldo < precio){
				contenido += ' disabled ';
			}
				
			contenido += '>Reservar</button></td></tr>'
				
			
		}
		
	});
	
	$("#libros-tbody").html(contenido);
	

	
	
}

function ordenarLibros(){
	
	if ($("#icono-ordenar").hasClass("fa-sort")) {
		getLibros(true, "ASC");
		$("#icono-ordenar").removeClass("fa-sort");
		$("#icono-ordenar").addClass("fa-sort-down");
	} else if ($("#icono-ordenar").hasClass("fa-sort-down")) {
		getLibros(true, "DESC");
		$("#icono-ordenar").removeClass("fa-sort-down");
		$("#icono-ordenar").addClass("fa-sort-up");
	} else if ($("#icono-ordenar").hasClass("fa-sort-up")) {
		getLibros(false, "ASC");
		$("#icono-ordenar").removeClass("fa-sort-up");
		$("#icono-ordenar").addClass("fa-sort");
	}
	
}

function alquilarLibro(id,precio){
	
	$.ajax({
			type:"GET",
			dataType:"html",
			url:"./ServletLibroAlquilar",
			data: $.param({
				id:id,
				username:username
				
			}),
			success: function(result){
				let parsedResult = JSON.parse(result);
				
				if (parsedResult != false){
					restarDinero(precio).then(function(){
						location.reload();
					})
				}
				else{
					console.log("Error en la reserva de la película");
				}
			}
		});
	
}


async function restarDinero(precio){
	
	await $.ajax({
			type:"GET",
			dataType:"html",
			url:"./ServletUsuarioRestarDinero",
			data: $.param({
				username:username,
				saldo: parseFloat(user.saldo - precio)
				
			}),
			success: function(result){
				let parsedResult = JSON.parse(result);
				
				if (parsedResult != false){
					console.log("Saldo actualizado");
				}
				else{
					console.log("Error en el proceso de pago");
				}
			}
		});
	
}

