const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader,'css-loader']
			},
			{
				test: /\.js$/i,
				use: [
					{
						loader: 'babel-loader',
						options: {
							exclude: ['node_modules'],
							presets: ['@babel/preset-env'],
						}
					}
				]
			},
			{
				test: /\.(woff|eot|ttf|svg)$/i,
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			title: 'Javascript Calculator',
			template: './src/index.html',
			chunks: 'index',
		})
	]
}

module.exports = config
