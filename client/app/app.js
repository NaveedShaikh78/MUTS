import 'angular-material/angular-material.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'angular-animate';
import 'angular-messages';
import 'angular-aria';

import ngMaterial from 'angular-material';
import 'normalize.css';

import 'angular-ui-grid/ui-grid.css';
import uiGrid from 'angular-ui-grid';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    ngMaterial,
    uiGrid,
    'ui.grid.treeView',
    'ui.grid.pagination',
    'ui.grid.resizeColumns',
    'ui.grid.selection',
    'ui.grid.expandable',
    'ui.grid.exporter',
    'ui.grid.autoResize', 
  ])
  .config(($locationProvider, $mdIconProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
     $mdIconProvider
      .defaultIconSet("app/avatars.svg", 128)
      .icon("chart", "app/assets/chart.svg", 30);
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
