const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: "file-loader",
                options: {
                    name: 'indonesia.png',
                    outputPath: 'img'
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: "./src/img/favicon.ico",
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
}