const path= require('path');
const browserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports= {
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'development',
    module: {
        rules: 
            [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: '/node_modules/'
                },
                {
                    test: /\.css$/,
                    loader: ['style-loader', 'css-loader']
                }
            ]
    },
    plugins: [
        new browserSyncPlugin( {
            host: 'localhost',
            port: 3000,
            server: {baseDir: ['dist']}
        })
    ]

    
}