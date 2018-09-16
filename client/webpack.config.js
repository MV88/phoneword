const HtmlWebpackPlugin = require('html-webpack-plugin');


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/indexTemplate.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports = {
    entry: [
        "./src/app.js"
    ],
	output: {
		path: __dirname,
        publicPath: '/',
		filename: "public/build/app.bundle.js"
	},
	plugins: [HtmlWebpackPluginConfig],
    module: {
    	rules: [
      		{
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }]
            }
    	]
  	},
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/words': {
                target: "http://localhost:5000",
                secure: false,
                headers: {
                    host: "localhost"
                }
            }
        }
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
