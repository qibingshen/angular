begawanSystem.directive('leftAccordion', function(){
	return {
		restrict: 'ECMA',
		templateUrl: '/directiveHtml/index-left.html',
		replace: false,
		link: function(event, elem, attrs){
			
		}
	}
});

begawanSystem.directive('tableList', function(){
	return {
		restrict: 'ECMA',
		templateUrl: '/directiveHtml/table-list.html',
		replace: true,
		link: function(event, elem, attrs){

		}
	}
});

begawanSystem.directive('navList', function(){
	return {
		restrict: 'ECMA',
		templateUrl: '/directiveHtml/nav-list.html',
		replace: true,
		link: function(event, elem, attrs){

		}
	}
});

begawanSystem.directive('handlePaging', function(){
	return {
		restrict: 'ECMA',
		templateUrl: '/directiveHtml/handle-paging.html',
		replace: true,
		/*scope:{
			isAdd: '=',
			isDelete: '=',
			isPaging: '='
		},
		controller: function($scope){
			$scope.isAdd = true;
			$scope.isDelete = true;
			$scope.isPaging = true;
		},*/
		link: function(scope, elem, attrs){
			console.log(attrs.isAdd);
			scope.isAdd = attrs.isAdd;
			scope.isDelete = attrs.isDelete;
			scope.isPaging = attrs.isPaging;
		}
	}
});

begawanSystem.directive('navTitle', function(){
	return {
		restrict: 'ECMA',
		templateUrl: '/directiveHtml/nav-title.html',
		replace: true,

		link: function(event, elem, attrs){

		}
	}
});

