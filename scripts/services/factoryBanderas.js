angular
  .module('app')
  .service('factoryBandera', function ($http) {

 var url ="http://www.egos27.somee.com/api/bandera";
 var objeto ={};


  function TraerUrl(parametro){
        if(!parametro){
            return url;
        }else{
            return url+ "/" + parametro;
        }
            
     }

   objeto.nombre = "factory de banderas";
   objeto.TraerTodos= TraerTodos;

   return objeto;

   function TraerTodos(){

      return    $http.get(TraerUrl())
        .then(
            function(respuesta){
               // console.info(respuesta.data.Paises);
                return respuesta.data.Paises;
            }

        );

   }
  })//cierro factory
