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

Make sure `jsx-to-string-loader` comes **after** loaders like `babel-loader` or `ts-loader
