## jsx-to-string webpack loader

[![npm version](https://badge.fury.io/js/jsx-to-string-loader.svg)](https://badge.fury.io/js/jsx-to-string-loader)
[![Build status](https://badge.buildkite.com/7b06f4a0e69daeeaddf022521fe20202dc99ad1399cb2e0f8c.svg)](https://buildkite.com/ammo/jsx-to-string-loader)

Easily convert code between delimiters to string. Pairs well with projects like [react-live](https://github.com/FormidableLabs/react-live) and [react-simple-code-editor](https://github.com/satya164/react-simple-code-editor).

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

### Usage

Usage example with [react-simple-code-editor](https://github.com/satya164/react-simple-code-editor)

```jsx
import Editor from 'react-simple-code-editor';

const code = (
  /* jsx-to-string:start */
  <strong>Hello World!</strong>
  /* jsx-to-string:end */
);

function App() {
  return <Editor value={code} />;
}
```

Will be transformed to:

```js
import Editor from 'react-simple-code-editor';

const code = `<strong>Hello World!</strong>`;

function App() {
  return <Editor code={code} />;
}
```

The idea is that you keep writing JSX instead of template strings. It makes more sense when writing more involved components. This next one is using [react-live](https://github.com/FormidableLabs/react-live) to show an example of a component with state.

```jsx
import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const exampleCode = (
  /* jsx-to-string:start */
  function Example() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }
  /* jsx-to-string:end */
);

const scope = { useState };

function App() {
  return (
    <LiveProvider code={code} scope={scope}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
}
```

You can also use it inside of JSX
```jsx
function App() {
  return (
    <Example>
      <div>
        <p>Hello world</p>
      </div>
    </Example>
  );
}
```

Will be transformed to:

```jsx
function App() {
  return (
    <Example>
{`<div>
  <p>Hello world</p>
</div>`}
    </Example>
  );
}
```
