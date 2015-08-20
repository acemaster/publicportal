var app = angular.module('ChatBot', ['ngCookies']);

app.config(function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});

app.controller('ChatScreen',['$scope','$http','$cookies',
function($scope,$http,$cookies){
   $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
   $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
   $scope.state=0;
   $scope.mode=0;
   $scope.complaint_id=-1;
   $scope.chats=[{'message':"Hello, welcome to GEARS chat bot",'uid':0},{'message':"Whazzup",'uid':0}];
   $scope.addchat=function(){
   	    var newchat={'message':$scope.newchat,'uid':1};
   		$scope.chats.push(newchat);
   		var in_data = jQuery.param({'content': $scope.newchat,'csrfmiddlewaretoken': $cookies.csrftoken, 'state_flag': $scope.state, 'mode': $scope.mode,'complaint_id':$scope.complaint_id});
   		var url='http://127.0.0.1:8000/livechatbot';
   		var my_data={test: 'data'};
   		$http.post(url, in_data)
          .success(function(out_data) {
            // Reset the form in case of success.
            console.log(out_data);
            $scope.chats.push(out_data);
            $scope.state=out_data.state;
            $scope.mode=out_data.mode;
            $scope.complaint_id=out_data.complaint_id;
            $scope.newchat="";
            document.getElementById('Chatwindow').scrollIntoView();
            if($scope.state == 4){
              var endchat={'message': "Chat ended.....", 'uid': 0};
              $scope.chats.push(endchat);
              $scope.chats.push({'message':"Hello, welcome to GEARS chat bot",'uid':0});
              $scope.chats.push({'message':"Whazzup",'uid':0});
              $scope.mode=0;
              $scope.complaint_id=-1;
              $scope.state=0;
            }
        });
   };
}]);