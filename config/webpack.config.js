const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        home: path.resolve(__dirname, '..', 'src', 'scripts', 'home.js'),
        users: path.resolve(__dirname, '..', 'src', 'scripts', 'users.js'),
        main: path.resolve(__dirname, '..', 'src', 'styles', 'main.scss'),
    },
    mode: 'development',
    output: {
        filename: 'scripts/[name].bundle.js',
        path: path.join(__dirname, '..', 'public')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
                test: /\.css$/
            },
            {
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'],
                test: /\.(scss|sass)$/
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "assets/styles/[name].css"
        })
    ]
};