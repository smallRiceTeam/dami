/*
<<<<<<< HEAD
 * @Author: yx
 * @Date: 2019-11-19 17:38:03
 * @LastEditors: yx
 * @LastEditTime: 2019-11-29 20:30:02
 * @Description: 
=======
 * @Author: your name
 * @Date: 2019-11-26 13:32:06
 * @LastEditTime: 2019-12-05 21:33:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \newxmsc\config\index.js
>>>>>>> wwt
 */
'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
<<<<<<< HEAD
      '/api':{
        // target:'http://10.35.161.175',
        target:'http://localhost:3000',
        changeOringe:true,
        pathRewrite:{
          '^/api':''
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
=======
      '/api': {        
        target: 'http://localhost:3000',        
        changeOrigin: true,        
        pathRewrite: {  
          '^/api': ''        
        }      
      }
 
    },

    // Various Dev Server settings
    host: '10.35.161.14', // can be overwritten by process.env.HOST
>>>>>>> wwt
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
<<<<<<< HEAD
    assetsPublicPath: '/',
=======
    assetsPublicPath: './',
>>>>>>> wwt

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
