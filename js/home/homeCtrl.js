var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, teamService){
	
	$scope.getAllData = function(){
		teamService.getTeamData('utahjazz').then(function(data){
			$scope.jazzData = data;
			console.log($scope.jazzData);
			$scope.jazzData.teamName = 'Utah Jazz';
			$scope.jazzData.logoPath = 'images/jazz-logo.png';
		});
	

		teamService.getTeamData('losangeleslakers').then(function(data){
			$scope.lakersData = data;
			$scope.lakersData.teamName = 'Los Angeles Lakers';
			$scope.lakersData.logoPath = 'images/lakers-logo.png';
		});
		

		teamService.getTeamData('miamiheat').then(function(data){
			$scope.heatData = data;
			$scope.heatData.teamName = 'Miami Heat';
			$scope.heatData.logoPath = 'images/heat-logo.png';
		});
	};
	$scope.getAllData();
	
});