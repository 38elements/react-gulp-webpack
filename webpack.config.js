module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        __dirname + '/src/index.js'
    ],
    output: {
        pathinfo: true,
        filename: './dist/js/bundle.js',
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            options: {
                presets: [require.resolve('babel-preset-react-app')],
            },
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                    },
                }
            ]
        }
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    }
};
