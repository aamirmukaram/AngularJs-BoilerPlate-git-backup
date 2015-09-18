//////////////////////////////////////////////ANGULAR BOILER PLATE NOTES////////////////////////////////////////////////////
Only run "npm install"
This will execute:
->npm install
->bower install



//////////////////////////////////////////////////GULP COMMANDS///////////////////////////////////////////////////////////////
"task-add-bower"

Use this command after "bower install ******* --save-dev".
This will get selected files from bower_components and place them in bower_required_components.Add those files in index.html

////////////////////////////////////////////////////////////////////////////////////////
"task-add-ng-module"

Use this command after adding angular module file and adding angular.module("myModul",[]); in it.
in it.

This will inject dependecy in "gulp-angular-modules.js" and add that dependency in index.html
////////////////////////////////////////////////////////////////////////////////////////

Add angular snippets
In a JavaScript file type these commands followed by a TAB:
ng-c // creates an Angular controller
ng-f // creates an Angular factory
ng-m // creates an Angular module