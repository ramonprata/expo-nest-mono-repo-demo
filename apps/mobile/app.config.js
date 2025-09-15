const customConfig = require(
  `./app.${process.env.EXPO_PUBLIC_APP_CONFIG || 'local'}.config.js`,
).default;

export default ({ config }) => ({
  ...config,
  ...customConfig,
  extra: {
    ...config.extra,
    ...customConfig.extra,
  },
});
