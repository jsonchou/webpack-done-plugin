/**
 * @class WebpackDonePlugin
 * @extends Object
 * Webpack Done Callback.
 */

const path = require('path');
const process = require('process');
const os = require('os');
const exec = require('child_process').execSync;
const chalk=require('chalk')


class WebpackDonePlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        if (compiler.hooks && compiler.hooks.watchRun && compiler.hooks.done) {
            // for webpack >= 4
            compiler.hooks.done.tap('webpack-done-plugin', this.onCompilationDone.bind(this));
        } else {
            // for webpack < 4
            compiler.plugin('done', this.onCompilationDone.bind(this));
        }
    }
    onCompilationDone(results) {
        if (!results.hasErrors()) {
            console.log(chalk.green('build done, prepare for your own command\r\n'))
            this.options.cb && this.options.cb(results)
        }
    };
}

module.exports = WebpackDonePlugin;