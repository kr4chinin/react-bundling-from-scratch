import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCssLoader = (isDev: boolean) => {
	return {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resourcePath: string) =>
							resourcePath.endsWith('.module.scss'),
						localIdentName: isDev
							? '[local]--[hash:base64:4]'
							: '[hash:base64:8]',
					},
				},
			},
			'sass-loader',
		],
	};
};
