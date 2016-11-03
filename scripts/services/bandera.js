angular
  .module('app')
  .service('Bandera', function ($http, factoryRutas) {
     this.nombre = "supe";
     this.TraerSoloImagen =TraerSoloImagen;
     var url = factoryRutas.ApiBanderas;
     function TraerSoloImagen(){

     }
     // esta funcion es privada
     function TraerUrl(parametro){
     	if(!parametro){
     		return url;
     	}else{
     		return url+ "/" + parametro;
     	}
     		
     }
     
     this.TraerUnPais=TraerUnPais;
     function TraerUnPais(Pais){
 	
 	return  	$http.get(TraerUrl(Pais))
     	.then(
     		function(respuesta){
     			console.info(respuesta);
     			return respuesta.data;
     		}

     	);
     }


     this.TraerTodos = function(){

   return  	$http.get(TraerUrl())
     	.then(
     		function(respuesta){
     			console.info(respuesta.data.Paises);
     			return respuesta.data.Paises;
     		}

     	);

     };
  })
