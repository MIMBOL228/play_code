const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
    },
    entry: {
        index: "./src/index.js"
    },
    module: {
        rules: [
            { 
                test: /\.svg$/, 
                use: 'svg-inline-loader' 
            },
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            filename: 'index.html',
            chunks: ['index']
        })
    ],
    mode: 'production'
}