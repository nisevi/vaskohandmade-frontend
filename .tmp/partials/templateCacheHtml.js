angular.module("vaskohandmade").run(["$templateCache", function($templateCache) {$templateCache.put("app/main/main.html","<div class=container-fluid><acme-navbar creation-date=main.creationDate></acme-navbar><div class=\"jumbotron text-center\"><h1>\'Allo, \'Allo!</h1><p class=lead><img src=assets/images/yeoman.png alt=\"I\'m Yeoman\"><br>Always a pleasure scaffolding your apps.</p><p class=\"animated infinite\" ng-class=main.classAnimation><button type=button class=\"btn btn-lg btn-success\" ng-click=main.showToastr()>Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values=\"[\'Yeoman\', \'Gulp\', \'Angular\']\"></acme-malarkey></p></div><div class=row><div class=\"col-sm-6 col-md-4\" ng-repeat=\"awesomeThing in main.awesomeThings | orderBy:\'rank\'\"><div class=thumbnail><img class=pull-right ng-src=\"assets/images/{{ awesomeThing.logo }}\" alt=\"{{ awesomeThing.title }}\"><div class=caption><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href={{awesomeThing.url}}>{{ awesomeThing.url }}</a></p></div></div></div></div></div>");
$templateCache.put("app/components/navbar/navbar.html","<nav class=\"navbar navbar-static-top navbar-inverse\"><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=https://github.com/Swiip/generator-gulp-angular><span class=\"glyphicon glyphicon-home\"></span> Gulp Angular</a></div><div class=\"collapse navbar-collapse\" id=bs-example-navbar-collapse-6><ul class=\"nav navbar-nav\"><li class=active><a ng-href=#>Home</a></li><li><a ng-href=#>About</a></li><li><a ng-href=#>Contact</a></li></ul><ul class=\"nav navbar-nav navbar-right acme-navbar-text\"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>");}]);