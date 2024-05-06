const path = require("path");

//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
//引入clean插件
const  {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode:'development',
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title:'测试标题'
            template: "./src/index.html",
        })
    ],
    //用來设置引用模块
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}
