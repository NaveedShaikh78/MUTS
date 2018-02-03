import angular from 'angular';
import serverApi from './server-api.service';

// Create the module where our functionality can attach to
let servicesModule = angular.module('services.httpservice', []).
service('HttpService', serverApi).
name;

export default servicesModule;
