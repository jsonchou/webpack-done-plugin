# webpack-done-plugin

## USE

```javascript
if (env == 'p') {
    plugins.push(
        new WebpackDonePlugin({
            cb(results) {
                // after webpack build, this command will execute
                execSync('npm run copy')
            }
        })
    )
}
```