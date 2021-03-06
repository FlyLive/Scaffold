var path = require('path');
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        "index": path.resolve(__dirname, "./src/App.jsx"),
    },
    output: {
        path: path.resolve(__dirname, "./src/build"),
        filename: "[name].js" // main.js || bundle.js || [name].js || index.js
    },
    devServer: {
        hot: true,
        // 开启服务器的模块热替换（HMR）
        /* 自定义端口 */
        host: 'localhost',
        port: '6060',
        /* 前端跨域 */
        // proxy: {
        //     '/': {
        //         target: 'http://localhost:60842',
        //         secure: false
        //     }
        // }
    },
    module: {
        loaders: [
            { test: /.(png)|(jpg)|(gif)$/, loader: 'url-loader?limit=8192' },
            // { test: /\.(png|jpg|gif|svg|mp4)$/, loader: 'file-loader' },
            { test: /\.js|jsx$/, exclude: /node_modules/, loaders: ['babel-loader'] },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.HotModuleReplacementPlugin(),
        // 开启全局的模块热替换（HMR）

        new webpack.NamedModulesPlugin(),
        // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
    ],
}