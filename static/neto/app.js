var mvcApp = angular.module('filtersApp', []);

mvcApp.controller('controller', function($scope) {

  $scope.data = new Date();

  $scope.letras = "abcdefghijklmnopqrstuvwyz";

  $scope.filtro = "";

  $scope.states = [{
      name: 'Pedro Mariano da Silva',
      cidade: 'Belo Horizonte',
      fone: 3420921001
    }, {
      name: 'Mariana Barbosa ',
      cidade: 'São Paulo',
      fone: 1430923301
    }, {
      name: 'Kleber Augusto',
      cidade: 'Aparecida de Goiânia',
      fone: 6230002334
    }, {
      name: 'Moises Pereira',
      cidade: 'Rio de Janeiro',
      fone: 2120923349
    }, {
      name: 'João Paulo Barbosa',
      cidade: 'São Paulo',
      fone: 1432988833
    },
    {
      name: 'Margarida',
      cidade: 'Guápo',
      fone: 6235678823
    }
  ];

  $scope.addState = function() {
    $scope.states.push({
      name: $scope.nome,
      cidade: $scope.cidade,
      fone: 1000
    });
    $scope.nome = '';
    $scope.cidade = '';
    $scope.fone = '';
  };

});