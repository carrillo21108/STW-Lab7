const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index:'./src/index.js',
    libros_populares:'./src/libros_populares/libros_populares.js',
    nuevos_lanzamientos:'./src/nuevos_lanzamientos/nuevos_lanzamientos.js',
    libro_detalles:'./src/libro_detalles/libro_detalles.js',
    historia1:'./src/historias/historia1.js',
    historia2:'./src/historias/historia2.js',
    historia3:'./src/historias/historia3.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/estilos.bundle.css'
    }),
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html',
      chunks:['index']
    }),
    new HtmlWebpackPlugin({
      template:'./src/libros_populares/libros_populares.html',
      filename:'libros_populares/libros_populares.html',
      chunks:['libros_populares']
    }),
    new HtmlWebpackPlugin({
      template:'./src/nuevos_lanzamientos/nuevos_lanzamientos.html',
      filename:'nuevos_lanzamientos/nuevos_lanzamientos.html',
      chunks:['nuevos_lanzamientos']
    }),
    new HtmlWebpackPlugin({
      template:'./src/libro_detalles/libro_detalles.html',
      filename:'libro_detalles/libro_detalles.html',
      chunks:['libro_detalles']
    }),
    new HtmlWebpackPlugin({
      template:'./src/historias/historia1.html',
      filename:'historias/historia1.html',
      chunks:['historia1']
    }),
    new HtmlWebpackPlugin({
      template:'./src/historias/historia2.html',
      filename:'historias/historia2.html',
      chunks:['historia2']
    }),
    new HtmlWebpackPlugin({
      template:'./src/historias/historia3.html',
      filename:'historias/historia3.html',
      chunks:['historia3']
    })],
  module:{
    rules:[
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ]
        }
    ]
  }
};