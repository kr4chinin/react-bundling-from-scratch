import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
	return {
		port: options.port,
		open: {
			app: {
				name: 'Google Chrome'
			}
		},
		historyApiFallback: true,
		hot: true
	};
}
