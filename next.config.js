const withImages = require('next-images')

module.exports = {
    images: {
        domains: ['openweathermap.org']
    },
    
    webpack: (config, options) => {
        config.module.rules.push(
          {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            loader: 'url-loader?limit=100000' 
          }
        )
        return config
    },
}