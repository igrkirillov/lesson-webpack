const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'webpack_lesson_bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader , "css-loader"]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin()],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        }
    }
};