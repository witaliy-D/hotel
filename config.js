// eslint-disable-next-line no-redeclare
/* global module */

const config = {
  dir: {
    dist: 'docs/',
    blocks: 'src/blocks/',
    clean: {
      imgs: [
        'docs/img/**/*',
        '!docs/img/favicons',
        '!docs/img/symbols.svg',
        '!docs/img/sprite.png'
      ],
      fonts: 'docs/fonts/**/*',
      pages: 'docs/*.html'
    },
    pages: 'src/pages/*.pug',
    pug: [
      'src/pug/**/*.pug',
      '!src/pug/helpers/blocks-mixins.pug'
    ],
    pugBlocks: 'src/blocks/**/*.pug',
    styles: {
      src: 'src/scss/style.scss',
      dist: 'docs/css/',
      watch: [
        'src/scss/**/*.scss',
        '!src/scss/helpers/blocks-mixins.scss'
      ]
    },
    stylesBlocks: 'src/blocks/**/*.scss',
    scripts: {
      src: 'src/js/app.js',
      dist: 'docs/js/',
      watch: [
        'src/js/**/*.js',
        'src/blocks/**/*.js'
      ]
    },
    imgs: {
      src: [
        'src/img/*',
        '!src/img/sprite',
        '!src/img/symbols',
        '!src/img/favicon'
      ],
      dist: 'docs/img/',
      watch: [
        'src/img/**/*',
        '!src/img/favicon/*',
        '!src/img/sprite/*',
        '!src/img/symbols/*'
      ]
    },
    sprite: 'src/img/sprite/*',
    spriteCss: 'src/scss/base/',
    symbols: 'src/img/symbols/*.svg',
    fonts: 'src/fonts/**/*',
    gzip: 'src/.htaccess',
    copy: 'src/assets/**/*',
    favicons: {
      src: 'src/img/favicon/favicon.png',
      dist: 'docs/img/favicons/'
    }
  }
};

module.exports = config;
