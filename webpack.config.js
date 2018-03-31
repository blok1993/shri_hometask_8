const production = true;

module.exports = {
    entry: './app/js/view.js',
    devtool: production ? false : "inline-sourcemap",
    output: {
        path: __dirname + "/dist",
        filename: 'main.bundle.js'
    }
};