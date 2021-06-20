$(document).ready(function(){
	
		
		comunicacion().then(function(){
			console.log("La aplicación sigue su ejecución");
		})
		
		
});


async function comunicacion(){
	
		await $.ajax({
			type:"GET",
			dataType:"html",
			url:"./ServletTest",
			data: $.param({
				usuario:"miguel",
				tecnologia:"java"
			}),
			success: function(data){
				let parsedData = JSON.parse(data);
				console.log(parsedData[1]["autor"]);
			}
		})
	
}


