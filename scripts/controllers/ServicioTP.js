angular
  .module('app')
  .controller('ServicioTP', function($scope, Bandera, i18nService, uiGridConstants,NgMap) {
    $scope.titulo = "Configuracion Campos";
    console.info(Bandera);

    // Objeto de configuracion de la grilla.
    $scope.gridOptions = {};
    $scope.gridOptions.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridOptions.paginationPageSize = 25;
 
    $scope.gridOptions.columnDefs = columDefs();
    // Activo la busqueda en todos los campos.
  //  $scope.gridOptions.enableFiltering = true;
    // Configuracion del idioma.
    i18nService.setCurrentLang('es');


    var datos;
    Bandera.TraerUnPais("argentina").
    then(function(respuesta){
      datos = respuesta;
      $scope.gridOptions.data = datos;
    },
      function(error){
        console.info(error);
      }
      );

    console.info(datos);

function columDefs () {
  return [
        { field: 'nombre', name: 'nombre'},
       { field: 'Bandera', name: 'Bandera', cellTemplate:'<img width=\"50px\" ng-src=\"{{grid.getCellValue(row,col)}}\" lazy-src>' , 
        type: 'text'},
        { field: 'BanderaChica', name: 'BanderaChica', cellTemplate:'<img width=\"15px\" ng-src=\"{{grid.getCellValue(row,col)}}\" lazy-src>'  ,type: 'text' }
      
        ];
    }

  
  })
