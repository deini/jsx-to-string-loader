## jsx-to-string webpack loader

[![Build status](https://badge.buildkite.com/7b06f4a0e69daeeaddf022521fe20202dc99ad1399cb2e0f8c.svg)](https://buildkite.com/ammo/jsx-to-string-loader)

### Installation

`yarn add jsx-to-string-loader --dev`
or
`npm install jsx-to-string-loader --save-dev`

### Configuration

Add loader to `webpack.config.js`

Example:

```js
module: {
  rules: [
    {
      test: /\.jsx$/,
      use: {
        loader: 'jsx-to-string-loader',
      },
    },
  ];
}
```

Make sure `jsx-to-string-loader` comes **after** loaders such as `babel-loader` or `ts-loader`.
