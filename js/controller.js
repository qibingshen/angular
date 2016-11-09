var begawanCtrl = angular.module('Begawan-ctrl', []);

begawanSystem.controller('begawanController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){
	$http.get('/mock/personnelNavList.json')
		.then(function(res){
			$scope.navList = res.data.navList;
			$scope.tableHead = angular.fromJson(res.data.tableHead);
			$scope.tableBody = res.data.tableBody;
		});
}]);

begawanSystem.controller('noticeDetailController', ['$scope', '$location', '$http', '$state', '$rootScope', '$stateParams', function($scope, $location, $http, $state, $rootScope, $stateParams){
	console.log( $stateParams.id )
	$scope.getBack=function(){
		//$state.go('/personnel');
		$location.url('/personnel/');
	}
	$http.get('/mock/personnelNavList.json')
		.then(function(res){
			$scope.navList = res.data.navList;
			$scope.tableHead = angular.fromJson(res.data.tableHead);
			$scope.tableBody = res.data.tableBody;
		});
}])



begawanSystem.controller('knowledgeController', ['$scope', '$http', '$rootScope', '$state', function($scope, $http, $rootScope, $state){

	$http.get('/mock/knowledgeList.json')
		.then(function(res){
			$scope.navList = res.data.navList;
			$scope.tableHead = angular.fromJson(res.data.tableHead);
			$scope.tableBody = res.data.tableBody;
		});

}]);

begawanSystem.controller('personnelNoticeController', ['$scope', '$http', '$rootScope', '$state', 'tableHead', 'tableBody', function($scope, $http, $rootScope, $state, tableHead, tableBody){

	$scope.tableHead = angular.fromJson(tableHead);
	$scope.tableBody = tableBody;


	$scope.isAdd = false;
	$scope.isDelete = true;
	$scope.isPaging = true;
}]);

begawanSystem.controller('addNoticeController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){
	$http.get('/mock/addNotice.json')
		.then(function(res){
			$scope.navList = res.data.navList;
		});
}]);


begawanSystem.controller('noticeController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){
	$http.get('/mock/noticeDetail.json')
		.then(function(res){
			$scope.navList = res.data.navList;
		});
}]);

begawanSystem.controller('employeeController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){
	$http.get('/mock/employee.json')
		.then(function(res){
			$scope.navList = res.data.navList;
		});
}]);

begawanSystem.controller('archivesController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){
	$http.get('/mock/projectArchives.json')
		.then(function(res){
			$scope.navList = res.data.navList;
			$scope.tableBody = res.data.tableBody;
		});
}]);

begawanSystem.controller('personnelController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){
	$scope.isAdd = false;
	$scope.isDelete = true;
	$scope.isPaging = true;
	$http.get('/mock/personnelNavList.json')
		.then(function(res){
			$scope.navList = res.data.navList;
			$scope.tableHead = angular.fromJson(res.data.tableHead);
			$scope.tableBody = res.data.tableBody;
		});
}]);

begawanSystem.controller('navListController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){
	$http.get('/mock/indexNavList.json')
		.then(function(res){
			$scope.navList = res.data.navList;
			$scope.tableHead = angular.fromJson(res.data.tableHead);
			$scope.tableBody = res.data.tableBody;
		});
}]);
