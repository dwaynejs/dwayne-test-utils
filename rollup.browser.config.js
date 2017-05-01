const path = require('path');
const npm = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const inject = require('rollup-plugin-inject');

module.exports = {
  entry: './src/node.js',
  dest: './lib/browser.js',
  format: 'cjs',
  external: [
    'dwayne',
    'jsdom'
  ],
  plugins: [
    npm(),
    babel(),
    inject({
      exclude: './src/global.js',
      modules: {
        global: path.resolve('./src/global.js')
      }
    })
  ]
};

