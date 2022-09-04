const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        /** "port" 
         * port of dev server
        */
        port: "9500",
        /** "static" 
         * This property tells Webpack what static file it should serve
        */
        static: ["./dist"],
        /** "open" 
         * opens the browser after server is successfully started
        */
        open: false,
        /** "hot"
         * enabling and disabling HMR. takes "true", "false" and "only". 
         * "only" is used if enable Hot Module Replacement without page 
         * refresh as a fallback in case of build failures
         */
        hot: true ,
        /** "liveReload"
         * disable live reload on the browser. "hot" must be set to false for this to work
        */
        liveReload: true
    },
})
