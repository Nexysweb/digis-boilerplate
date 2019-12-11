module.exports = function (api) {
  const inProd = api.env("production");

  // the statement below is commented to avoid pollution in the console (`false`)
  //console.log(inProd)

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-transform-arrow-functions'
  ]

  const presets = [
    '@babel/preset-env'
  ];

  plugins.push(
    ['@babel/plugin-transform-runtime', {
      corejs: 3,
      helpers: true,
      regenerator: true,
      useESModules: false
    }]
  );

  return {
    plugins,
    presets
  };
};