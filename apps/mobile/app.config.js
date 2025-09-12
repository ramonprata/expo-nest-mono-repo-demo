require('ts-node').register({
  transpileOnly: true,
});

module.exports = async ({ config }) => {
  const appConfig = process.env.EXPO_PUBLIC_APP_CONFIG || 'local';

  let customConfig = {};
  try {
    const imported = await import(`./app.config.${appConfig}.ts`);
    customConfig = imported.default || imported;
  } catch {
    console.warn(
      `Could not load app.config.${appConfig}.ts, using default config.`,
    );
  }

  return {
    ...config,
    ...customConfig,
    extra: {
      ...config.extra,
      ...customConfig.extra,
    },
  };
};
