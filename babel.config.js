module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          "@src": "./src"
        },
      }
    ]
  ]
};
