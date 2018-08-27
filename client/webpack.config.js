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
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
