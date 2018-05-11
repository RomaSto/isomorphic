module.exports = function override(config, env) {
  console.log(config, env);

  if (env === 'production') {
    config.devtool = false;
  }
  return config;
};
