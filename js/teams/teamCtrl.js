var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
	$scope.teamData = teamData;
	$scope.newGame = {};
	$scope.showNewGameForm = false;
	$scope.toggleNewGameForm = function(){
		$scope.showNewGameForm = !($scope.showNewGameForm);
	};
	if($routeParams.team === 'utahjazz') {
		$scope.hometeam = 'Utah Jazz';
		$scope.logoPath = 'images/jazz-logo.png'
	}
	if($routeParams.team === 'losangeleslakers') {
		$scope.hometeam = 'Los Angeles Lakers';
		$scope.logoPath = 'images/lakers-logo.png'
	}
	if($routeParams.team === 'miamiheat') {
		$scope.hometeam = 'Miami Heat';
		$scope.logoPath = 'images/heat-logo.png'
	}
	$scope.submitGame = function(){
		$scope.newGame.homeTeam = $routeParams.team;
		$scope.newGame.opponent = $scope.opponent;
		$scope.newGame.homeTeamScore = $scope.homeScore;
		$scope.newGame.opponentScore = $scope.opponentScore;
		teamService.addNewGame($scope.newGame).then(function(){
			teamService.getTeamData($scope.newGame.homeTeam).then(function(data){
				$scope.teamData = data;
				$scope.newGame = {};
				$scope.showNewGameForm = false;
			});
		});
	};
});