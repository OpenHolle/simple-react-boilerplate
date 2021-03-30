const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
    },
    devServer: { contentBase: path.join(__dirname, 'src'), },
    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            }
        ]
    }
};
