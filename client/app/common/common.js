import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import ServerApi from './server-api/server-api';
import Application from './application/application';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  ServerApi,
  Application
])
  
.name;

export default commonModule;
