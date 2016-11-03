angular
  .module('app')
  .service('factoryRutas', function () {
 var objeto ={};
   objeto.nombre = "factory de banderas";
   objeto.ApiBanderas = "http://www.egos27.somee.com/api/bandera";
   return objeto;
  })//cierro factory
