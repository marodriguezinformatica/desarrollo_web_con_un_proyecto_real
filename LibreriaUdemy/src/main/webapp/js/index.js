$(document).ready(function(){
	
	$("#form-login").submit(function(event){
		
		event.preventDefault();
		autenticarUsuario();	
	});
	
	$("#form-register").submit(function(event){
		
		event.preventDefault();
		registrarUsuario();	
	})
	
	
});

function autenticarUsuario(){
	
	let username = $("#usuario").val();
	let contrasena = $("#contrasena").val();
	
		$.ajax({
			type:"GET",
			dataType:"html",
			url:"./ServletUsuarioLogin",
			data: $.param({
				username: username,
				contrasena: contrasena
			}),
			success: function(result){
				let parsedResult = JSON.parse(result);
				
				if (parsedResult != false){
					$("#login-error").addClass("d-none");
					let username = parsedResult['username'];
					document.location.href = "home.html?username=" + username;
				}
				else{
					$("#login-error").removeClass("d-none");
				}
			}
		});
	
}


function registrarUsuario(){
	
	let username = $("#input-username").val();
	let contrasena = $("#input-contrasena").val();
	let contrasenaConfirmacion = $("#input-contrasena-repeat").val();
	let nombre = $("#input-nombre").val();
	let apellidos = $("#input-apellidos").val();
	let email = $("#input-email").val();
	let saldo = $("#input-saldo").val();
	let premium = $("#input-premium").prop("checked");
	
	if (contrasena == contrasenaConfirmacion){
		
		$.ajax({
			type:"GET",
			dataType:"html",
			url:"./ServletUsuarioRegister",
			data: $.param({
				username: username,
				contrasena: contrasena,
				nombre: nombre,
				apellidos: apellidos,
				email: email,
				saldo: saldo,
				premium: premium
			}),
			success: function(result){
				let parsedResult = JSON.parse(result);
				
				if (parsedResult != false){
					$("#register-error").addClass("d-none");
					let username = parsedResult['username'];
					document.location.href = "home.html?username=" + username;
				}
				else{
					$("#register-error").removeClass("d-none");
					$("#register-error").html("Error en el registro del usuario");
					
				}
				
			}
		});
		
	}
	else{
		$("#register-error").removeClass("d-none");
		$("#register-error").html("Las contraseñas no coinciden");
	}
	
	
	
	
	
	
}