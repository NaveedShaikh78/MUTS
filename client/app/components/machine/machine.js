import angular from 'angular';
import uiRouter from 'angular-ui-router';
import machineComponent from './machine.component';

let machineModule = angular.module('machine', [
  uiRouter
])

.component('machine', machineComponent)

.name;

export default machineModule;
