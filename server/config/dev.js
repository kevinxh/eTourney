import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../webpack.config'


const dev = (app) => {
  if (process.env.NODE_ENV !== 'test') {
    const compiler = webpack(webpackConfig)
    app.use(webpackDevMiddleware(compiler,
       { noInfo: false, publicPath: webpackConfig.output.publicPath }))
    app.use(webpackHotMiddleware(compiler))
  }
  return app
}

// const dev = (app) => {
//   // const compiler = webpack(webpackConfig);
//   // app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
//   // app.use(webpackHotMiddleware(compiler));
//   return app
// }

export default dev
