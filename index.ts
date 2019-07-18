export const START_KEY = '/* jsx-to-string:start */';
export const END_KEY = '/* jsx-to-string:end */';

export default function jsxToStringLoader(source: string): string {
  const sourceArr = source.split('\n');
  const start = sourceArr.findIndex(line => line.includes(START_KEY));
  const end = sourceArr.findIndex(line => line.includes(END_KEY));

  if (start !== -1 && end !== -1) {
    sourceArr[start] = '{`';
    sourceArr[end] = '`}';

    // Number or white-spaces to remove to all lines
    const leftPad = sourceArr[start + 1].search(/\S|$/);

    // Remove extra white-spaces
    for (let i = start + 1; i < end; i++) {
      sourceArr[i] = sourceArr[i].substr(leftPad);
    }

    // Remove extra {} on JS Expressions
    if (sourceArr[start + 1].trim().charAt(0) === '{') {
      sourceArr[start + 1] = sourceArr[start + 1].replace('{', '');
      sourceArr[end - 1] = sourceArr[end - 1].replace('}', '');
    }

    return jsxToStringLoader(sourceArr.join('\n'));
  }

  return sourceArr.join('\n');
}
