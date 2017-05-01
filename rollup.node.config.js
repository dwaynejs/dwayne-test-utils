const npm = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');

module.exports = {
  entry: './src/node.js',
  dest: './lib/node.js',
  format: 'cjs',
  external: [
    'dwayne',
    'jsdom'
  ],
  plugins: [
    npm(),
    babel()
  ]
};
