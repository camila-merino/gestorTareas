const path = require('path');

module.exports = {
    mode:'development', 
    entry: './src/index.js', // Punto de entrada de la aplicación
    output: {
        filename: 'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Regex para identificar archivos CSS
                use: ['style-loader', 'css-loader'], //Loaders para procesar archivos CSS
            },
            {
                test: /\.js$/, // Regex para identifcar archivos JS
                exclude: /node_modules/, // Excluir carpeta node_modules
                use: {
                    loader: 'babel-loader', // Loader para llevar JS moderno a JS antiguo para que sea compatible con todos los navegadores
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', // Generar mapas de código para facilitar la depuración
    devServer: {
        static: {
directory: path.resolve(__dirname, 'dist'),
        },
        compress: true, // Habilitar la compresión gzip
        port: 9000, // Puerto de servidor de desarrollo
    },
};