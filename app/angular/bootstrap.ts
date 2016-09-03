
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import '@angular/common';
import '@angular/core';
import '@angular/http';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';

import './legacy-app';

import {upgradeAdapter} from './upgrade-adapter';

/* Bootstrapping AngularJS. */
import {WtApp} from './app/app.component';

const ngApp = require('./app/ng-module-app');
ngApp.directive('wtApp', upgradeAdapter.downgradeNg2Component(WtApp));

upgradeAdapter.bootstrap(document.body.parentElement, ['app']);

/*
 * @todo: Call `bootstrap(LzApp)` once we get rid of AngularJS 1.
 */
