angular
  .module('app')
  .controller('ConfiguradoTP', function($scope, data, i18nService, uiGridConstants) {
    $scope.titulo = "Configuracion Campos";
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

    data.data100().then(function(rta){
      // Cargo los datos en la grilla.
      $scope.gridOptions.data = rta;
      console.info(rta);
    });

    console.log(uiGridConstants);

    function columnDefs () {
      return [
        { field: 'id', name: '#', width: 100},
        
        { field: 'nombre', name: 'nombre',width: 100
          ,enableFiltering: false
        },
        { field: 'apellido', name: 'apellido', width: 100},
        { field: 'email', name: 'mail' ,width: 100},
        { field: 'sexo', name: 'sexo', width: 100
        // filtro de busqueda.
          ,filter: {
            // term: '1',
            type: uiGridConstants.filter.SELECT,
            selectOptions: [
              {value: 'Male', label: 'Masculino'},
              {value: 'Female', label: 'Femenino'}
            ]
          }
          //filtro de los datos
          ,cellFilter: 'sexoTP'
        },
        { field: 'fechaNacimiento', name: 'fechaNacimiento', width: 200
          ,type: 'date'
          ,cellFilter: "date: 'dd-MM-yyyy'"
        },
        { field: 'avatar',  name: 'avatar', cellTemplate:"<img width=\"50px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>",width: 100
          ,type: 'text'
          ,cellFilter: "date: 'dd-MM-yyyy'"
        },
         { field: 'foto',  name: 'foto', cellTemplate:"<img width=\"30px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>",width: 100
          ,type: 'text'
        },
        { field: 'sueldoPretendido',  name: 'sueldoPretendido',width: 200
          ,type: 'text'
        }
         
       
      ];
    }
  })
