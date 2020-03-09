const env = process.env;

module.exports = {
  application: {
    call_timeout: 30,
    port: 5000,
    global_prefix: env.GLOBAL_PREFIX || 'v1'
  }
};
