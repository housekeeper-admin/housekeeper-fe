const path = require('path');

//实验室
// const targetHost = '192.168.0.185';
//杨航后端
// const targetHost = '192.168.43.141';

module.exports = {
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsDirectory: 'static',
  publicPath: '/',
  indexPath: path.resolve(__dirname, '../public/index.html'),
  productionJsSourceMap: false,
  devServer: {
    port: 8080,
    host: 'localhost',
    contentBase: path.join(__dirname, '../public'),
    watchContentBase: true,
    publicPath: '/',
    compress: true,
    historyApiFallback: true,
    hot: true,
    clientLogLevel: 'error',
    open: true,
    overlay: false,
    quiet: false,
    noInfo: false,
    watchOptions: {
      ignored: /node_modules/
    },
    proxy: {
      // '/api/**': {
      //   target: `http://${targetHost}:8081/Company01_war_exploded/home/personal`,
      //   pathRewrite: { '^/api': '' },
      //   changeOrigin: true,
      // },
    }
  }
};
