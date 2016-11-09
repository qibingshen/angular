

//设置默认路由路径
begawanSystem.config(['$urlRouterProvider', function($urlRouterProvider){
	$urlRouterProvider.otherwise('/begawan');
}]);

//设置路由路径大小写敏感与否
begawanSystem.config(['$urlMatcherFactoryProvider', function($urlMatcherFactoryProvider){
	$urlMatcherFactoryProvider.caseInsensitive(false);
}]);

//设置路由路径
begawanSystem.config(['$stateProvider', function($stateProvider){
	$stateProvider
		.state('begawan', {
			url: '/begawan',
			templateUrl: '/partials/begawan.html',
			controller: 'begawanController',
			data: {
				app: '自定义数据'
			}
		}).state('personnelPant', {
			url: '/personnel',
			templateUrl: '/partials/personnel.html',
			controller: 'personnelController'
		}).state('personnelPant.personnel',{
			url: '/',
			templateUrl: '/partials/personnel-notice.html',
			controller: 'personnelNoticeController',
			resolve: {
				tableHead: function($http){
					return $http.get('/mock/personnelNavList.json')
						.then(function(res){
							return res.data.tableHead;
						})
				},
				tableBody: function($http){
					return $http.get('/mock/personnelNavList.json')
						.then(function(res){
							return res.data.tableBody;
						})
				}
			}
		}).state('personnelPant.detail',{
			url: '/:id',
			templateUrl: '/partials/notice-detail.html',
			controller: "noticeDetailController"
		}).state('personnelPant.employee',{
			url: '/personnel/employee',
			templateUrl: '/partials/employee.html',
			controller: 'employeeController'
		}).state('archives', {
			url: '/archives',
			templateUrl: '/partials/project-archives.html',
			controller: 'archivesController'
		}).state('notice', {
			url: '/notice',
			templateUrl: '/partials/notice-detail.html',
			controller: 'noticeController'
		}).state('addnotice',{
			url: '/addnotice',
			templateUrl: '/partials/add-notice.html',
			controller: 'addNoticeController'
		}).state('knowledge',{
			url: '/knowledge',
			templateUrl: '/partials/knowledge.html',
			controller: 'knowledgeController'
		})
}]);

