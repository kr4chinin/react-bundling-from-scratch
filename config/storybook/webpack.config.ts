import path from 'path';
import { Configuration } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

const config = ({ config }: { config: Configuration }) => {
	const paths: BuildPaths = {
		entry: '',
		html: '',
		build: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	};

	config.resolve?.modules?.push(paths.src);
	config.resolve?.extensions?.push('.ts', '.tsx');

	config.module?.rules?.push(buildCssLoader(true));

	return config;
};

export default config;