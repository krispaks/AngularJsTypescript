# AngularJsTypescript
Typescript Implementation of AngularJS 1.5

* Loading by SystemJS
* AngularJS 1.5 Components
* Component Routing
* Basic Angular Material
* Jasmine Html testing integration
* VS Code

----------- TODO -------------------
* integrate with Protractor
* integrate Protractor and Gulp

----------- SETUP ------------------

* open command line pointed to the folder directory AngularJsTypescript
* make sure the following are installed globally
  * bower
  * typings
  * gulp
  * live-server
  * protractor (follow instructions on how to setup - https://angular.github.io/protractor/#/)
  * dont forget to install java sdk (http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* "run" AngularJsTypescript>npm install - populate node_modules folder
* "run" AngularJsTypescript>bower install - populate bower_components folder
* go to AngularJsTypescript\app
* "run" AngularJsTypescript\app>typings install - populate definitions in app folder
* go to AngularJsTypescript\e2e
* "run" AngularJsTypescript\e2e>typings install - populate definitions in e2e folder(used for testing) 
* "run" AngularJsTypescript>gulp startup - transfers files from bower_component and node_modules to assets and lib folders respectively, transpile ts files.
* "run" AngularJsTypescript>protractor conf.js - this is to run the ui specs.
* go to folder AngularJsTypescript\wwwroot
* "run" AngularJsTypescript\wwwroot>live-server - this should automatically load up the index.html file
* to open jasmine testing html page - browse to index-test.html

