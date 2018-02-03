import angular from 'angular';
import application from './application.service';

// Create the module where our functionality can attach to
let servicesModule = angular.module('services.application', []).
service('Application', application).
name;

export default servicesModule;
