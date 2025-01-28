module.exports = {
  // presets: ['module:@react-native/babel-preset'],
  presets: ['babel-preset-expo'],
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
    ],
    'react-native-reanimated/plugin',
  ]
};
