'use strict';

export default {

  browserPort: 3000,
  UIPort: 3001,

  sourceDir: './app/',
  buildDir: './build/',

  styles: {
    src: 'app/styles/**/*.scss',
    dest: 'build/css',
    prodSourcemap: false,
    sassIncludePaths: []
  },

  scripts: {
    src: ['app/js/TS_main.js'],
    dest: 'build/js'
  },

  TS: {
    src: [
      'app/js/**/*.ts',
      'app/js/**/**/*.ts'
    ],
    dest: 'build/js'
  },

  dependencies: {
    src: [
      'node_modules/jquery/dist/jquery.min.js',
      'externalJS/*.js',
      'node_modules/angular*/*.min.js',
      'node_modules/angular*/**/*.min.js'
    ],
    dest: 'build/dependencies',
    name: 'main.js'
  },

  images: {
    src: 'app/img/**/*',
    dest: 'build/img'
  },

  fonts: {
    src: ['app/fonts/**/*'],
    dest: 'build/css/fonts'
  },

  assetExtensions: [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ],

  views: {
    index: 'app/index.html',
    src: [
      'app/views/**/*.html',
      'app/views/*.html'
    ],
    dest: 'build/views'
  },

  gzip: {
    src: 'build/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest: 'build/',
    options: {}
  },

  browserify: {
    bundleName: 'main.js',
    prodSourcemap: false
  },

  test: {
    karma: 'test/karma.conf.js',
    protractor: 'test/protractor.conf.js'
  },

  init: function() {
    this.views.watch = [
      this.views.index,
      this.views.src
    ];

    return this;
  }

}.init();
