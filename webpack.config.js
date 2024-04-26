const path =require ('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { emit } = require('process');


module.exports ={
  entry: "./src/index.js",
  output: {
    path:path.resolve(__dirname,'dist'),
    filename:'main.js',
    assetModuleFilename: 'images/[hash][ext][query]'

  },
  module:{
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

    
      {
        test: /\.(png|jpg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:6].[ext]',
          outputPath: 'images',
          publicPath: 'images',
          emitFile: true,
          esModule: false

        },

       
      },
    ],
  },
    plugins:[
    new HtmlWebpackPlugin({
      filename: "log-in.html",
      template: "./src/log-in.html"  
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    
    
    new HtmlWebpackPlugin({
      filename: "sign-up.html",
      template: "./src/sign-up.html"
    }),
    
    
    new HtmlWebpackPlugin({
      filename: "1-student.html",
      template: "./src/1-student.html"
    }),
    
    
    new HtmlWebpackPlugin({
      filename: "2-student.html",
      template: "./src/2-student.html"
    })
  
]
}




















