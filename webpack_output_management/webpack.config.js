const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',

	devtool: 'inline-source-map',

	entry: {
		app: path.resolve(__dirname, 'src', 'app.ts'),
		bar: path.resolve(__dirname, 'src', 'bar.ts'),
	},

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js',
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'CONQUER WEBPACK V4!',
			filename: './index.html',
		}),
	],

	devServer: {
		host: '127.0.0.1',
		port: 8000,
		inline: true,
		overlay: true,
		historyApiFallback: true,
	},

	resolve: {
		extensions: ['.ts', '.js'],
	},
};
