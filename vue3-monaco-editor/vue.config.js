const path = require('path')
const { name } = require('./package')

// webpack.config.js
const MonacoEditorPlugin = require('monaco-editor-webpack-plugin')


function resolve (dir) {
  return path.join(__dirname, dir)
}

const port = 7105

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    plugins: [
      new MonacoEditorPlugin()
      // new MonacoEditorPlugin({
      //   // https://github.com/Microsoft/monaco-editor-webpack-plugin#options
      //   // Include a subset of languages support
      //   // Some language extensions like typescript are so huge that may impact build performance
      //   // e.g. Build full languages support with webpack 4.0 takes over 80 seconds
      //   // Languages are loaded on demand at runtime
      //   languages: ['javascript', 'css', 'html', 'typescript']
      // })
    ],
    // plugins: [
    //   new MonacoEditorPlugin({
    //     languages: [],
    //     customLanguages: [
    //       // {
    //       //   label: 'yaml',
    //       //   entry: ['monaco-yaml', 'vs/basic-languages/yaml/yaml.contribution'],
    //       //   worker: {
    //       //     id: 'monaco-yaml/yamlWorker',
    //       //     entry: 'monaco-yaml/lib/esm/yaml.worker',
    //       //   },
    //       // },
    //     ],
    //   }),
    // ],
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
}
