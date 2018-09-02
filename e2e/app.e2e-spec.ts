'use strict'; // necessary for es6 output in node

import { VERSION } from '@angular/core';
import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  let expectedMsg = `Hello Angular! v${VERSION.full}`;

  beforeEach(function () {
    browser.get('/');
  });

  it(`should display: ${expectedMsg}`, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

  it('should load component', function () {
    expect(element(by.css('h2')).isPresent()).toBe(true);
  });

});
