const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',

	entry: {
		app: path.resolve(__dirname, 'src', 'app.ts'),
		bar2: path.resolve(__dirname, 'src', 'bar2.ts'),
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
};
