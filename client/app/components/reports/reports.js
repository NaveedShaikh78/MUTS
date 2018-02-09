import angular from 'angular';
import uiRouter from 'angular-ui-router';
import reportsComponent from './reports.component';

let reportsModule = angular.module('reports', [
  uiRouter
])

.component('reports', reportsComponent)

.name;

export default reportsModule;
