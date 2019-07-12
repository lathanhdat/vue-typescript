module.exports = {
  transpileDependencies: ['vuex-module-decorators'],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.html$/,
          loader: 'vue-template-loader',
          exclude: /index.html/,
        },
      ],
    },
  },
};
