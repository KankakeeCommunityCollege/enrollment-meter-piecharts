module.exports = {
  port: 3000,

  tasks: {
    browsersync: true,
    sass:        true,
    watch:       true,
    webpack:     true,
  },

  assets: './assets',

  browsersync: {
    notify: true,
    browsers: [
      // "Google Chrome Canary",
      'Google Chrome',
      // "Firefox Nightly",
      // "Firefox Developer Edition",
      'Firefox',
      // "Safari Technology Preview",
      'Safari'
      // "Opera",
      // "Opera Developer",
    ],
  },

  js: {
    src:   '_js',
    dest:  'js',
    entry: [
      'index.js',
    ],
  },

  sass: {
    src:          '_sass',
    dest:         'css',
    outputStyle:  'compressed',
    autoprefixer: {
      browsers: [
        '> 1%',
        'last 2 versions',
        'Firefox ESR',
      ],
    },
  },

  webpack: {
    mode:   'development',
    module: {
      rules: [],
    },
  },
}
