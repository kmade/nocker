const { Config, environment } = require('webpack-config');
const mode = process.env.NODE_ENV || 'development';


environment.setAll({
    env: () => mode
});

module.exports = new Config().extend(`config/webpack.[env].config.js`);
