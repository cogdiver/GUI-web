const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/',
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      '@routes': path.resolve(__dirname, './src/routes/'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
      '@context': path.resolve(__dirname, './src/context/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: [
        //   {
        //     loader: MiniCssExtractPlugin.loader,
        //   },
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|gif|jpg)$/,
        type: 'asset'
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: { name: "assets/[name].[ext]" },
        //   },
        // ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
//     contentBase: path.resolve(__dirname, "dist"),
//     compress: true,
//     port: 3005,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new Dotenv({
      systemvars: true,
    }),
  ]
};
