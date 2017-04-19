const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, "src/client");
const APP_DIR = path.resolve(__dirname, "src/client");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: APP_DIR + "/index.html",
    filename: "index.html",
    inject: "body",
});

const config = {
    entry: APP_DIR + "/index.js",
    output: {
        path: BUILD_DIR,
        filename: "bundle.js",
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
            { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
        ],
    },
    plugins: [HtmlWebpackPluginConfig],
};

module.exports = config;
