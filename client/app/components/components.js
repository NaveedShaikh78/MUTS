import angular from 'angular';
import Dashboard from './dashboard/dashboard';
import About from './about/about';
import Machine from './machine/machine';

let componentModule = angular.module('app.components', [
  Dashboard,
  About,
  Machine
]).name;

export default componentModule;
