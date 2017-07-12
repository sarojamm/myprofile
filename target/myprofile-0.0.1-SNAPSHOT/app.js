'use strict';

define([ 
        'controller',
        'service',
        'directive'            
              
        
//        'common/directives/myHeader', 
//       'common/directives/popupModel', 
   //    'common/directives/helpdoc',  
     
      
        
], function() {
	 return angular.module('app', [ 'ngResource','app.services',  'app.controllers' ,'app.directives'])
    .config(['$httpProvider','$compileProvider',function ($httpProvider,$compileProvider) {
	    $httpProvider.defaults.useXDomain = true; 
	    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
	 }]) 	 
	.config(function ($provide){
		$provide.decorator("$exceptionHandler",
				 ["$delegate", 
				    function ($delegate) {
				    		return function(exception, cause){
				    			exception.message =" the message comming from "+ exception.message;
				    			$delegate(exception, cause);
				    			//alert("this is  test for update file.from app.js" + exception.message);				    	
				    };
	   }]);
	
	})
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when( '/',            { templateUrl : 'view/profile.html', controller: 'loginCtrl'})
	        .otherwise(             {redirectTo: 'view/about.html', controller: 'homeCtrl'}); 
        
        
        
        
         });

});

function useStub() {
    return (window.location.protocol == 'http:');
}
