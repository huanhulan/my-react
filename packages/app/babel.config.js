module.exports = function baseBabelConfig(api) {
  api.cache(true);
  return {
    sourceType: 'unambiguous',
    presets: [
      [
        '@babel/preset-env',
        // {
        //   useBuiltIns: 'usage',
        //   corejs: 2,
        // },
      ],
      [
        '@babel/preset-typescript',
        {
          isTSX: true,
          allExtensions: true,
        },
      ],
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      [
        '@babel/plugin-transform-react-jsx',
        {
          pragma: 'createElement',
        },
      ],
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
    ],
  };
};
