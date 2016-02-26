/// <reference path='../_all.ts' />

module app {
    'use strict';

    export class TodoItem {
        constructor(
            public title: string,
            public completed: boolean
            ) { }
    }
}
