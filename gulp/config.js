var dest = './build', src = './src';

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + '/**'
    ]
  },
  markup: {
    src: src + "/www/**",
    dest: dest
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/app/app.js',
      dest: dest,
      outputName: 'app.js'
    },{
        entries: src + '/app/platform/PlatformMqttClientWorkerService.js',
        dest: dest,
        outputName: 'platform/PlatformMqttClientWorkerService.js'
    },{
        entries: src + '/app/platform/PlatformMqttLoadWorkerService.js',
        dest: dest,
        outputName: 'platform/PlatformMqttLoadWorkerService.js'
    }],
    extensions: ['.js'],
  }
};
