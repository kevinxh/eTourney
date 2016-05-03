import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config'


const dev = (app) => {

	let compiler = webpack(webpackConfig);
	app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath }));
	app.use(webpackHotMiddleware(compiler));
	return app;
};

export default dev;