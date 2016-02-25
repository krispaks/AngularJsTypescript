/// <reference path='../typings/main.d.ts' />

'use strict';

import 'jasmine';
import 'jasmine-boot';
import 'jasmine-html';

describe('First Testing', () => {
    it('javascript rocks', () => expect(true).toEqual(true));
    it('typescript rocks', () => expect(true).toEqual(true));
    it('angular rocks', () => expect(true).toEqual(true));
    it('angular material rocks', () => expect(true).toEqual(true));
});