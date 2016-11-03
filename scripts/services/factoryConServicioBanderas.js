angular
  .module('app')
  .service('factoryConServicioBanderas', function (Bandera) {
objeto = {};
   objeto.nombre = "factory de banderas";
   objeto.TraerTodos= TraerTodos;
   objeto.TraerUnPais = TraerUnPais;
   objeto.TraerUrl = TraerUrl;

   return objeto;

 function TraerUrl(parametro){
      return Bandera.TraerUrl(parametro);
        
     }

 function TraerUnPais(pais){

      return    Bandera.TraerUnPais(pais);
        

   }
   function TraerTodos(){

      return    Bandera.TraerTodos();
        

   }
  })//cierro factory
