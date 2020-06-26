const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'app.ts'),

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
							modules: {
								localIdentName: '[path][name]__[local]--[hash:base64:5]',
							},
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader'],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
};
