angular
  .module('app')
  .controller('factoryCtrl', function($scope,Bandera, factoryBandera, i18nService, uiGridConstants) {
    $scope.titulo = "Configuracion Campos";
    console.info(factoryBandera);
    console.info(Bandera);

     var datos;
    factoryBandera.TraerTodos().
    then(function(respuesta){
    console.info(respuesta);
    },
      function(error){
        console.info(error);
      }
      );

    // Objeto de configuracion de la grilla.
    $scope.gridOptions = {};
    $scope.gridOptions.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridOptions.paginationPageSize = 25;
    $scope.gridOptions.columnDefs = columnDefs();
    // Activo la busqueda en todos los campos.
    $scope.gridOptions.enableFiltering = true;
    // Configuracion del idioma.
    i18nService.setCurrentLang('es');

/*
   factoryBandera.data().then(function(rta){
    // Cargo los datos en la grilla.
     $scope.gridOptions.data = rta;
   });

  console.log(uiGridConstants);*/

    function columnDefs () {
  return [
        { field: 'Nombre', name: 'Nombre'},
       { field: 'Bandera', name: 'Bandera', cellTemplate:'<img width=\"50px\" ng-src=\"{{grid.getCellValue(row,col)}}\" lazy-src>' , 
        type: 'text'},
        { field: 'BanderaChica', name: 'BanderaChica', cellTemplate:'<img width=\"15px\" ng-src=\"{{grid.getCellValue(row,col)}}\" lazy-src>'  ,type: 'text' }
      
        ];
    }
  })
