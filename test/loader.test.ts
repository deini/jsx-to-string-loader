import jsxToStringLoader, { START_KEY, END_KEY } from '../index';

test('single line JSX', () => {
  const code = `
    {${START_KEY}}
    <Button>Test Button</Button>
    {${END_KEY}}
  `;

  expect(jsxToStringLoader(code)).toMatchSnapshot();
});

test('multi-line JSX', () => {
  const code = `
    {${START_KEY}}
    <div>
      <Button>Test Button</Button>
    </div>
    {${END_KEY}}
  `;

  expect(jsxToStringLoader(code)).toMatchSnapshot();
});

test('multiple keys in the same file', () => {
  const code = `
    {${START_KEY}}
    <div>
      <Button>Test Button 1</Button>
    </div>
    {${END_KEY}}

    {${START_KEY}}
    <div>
      <Button>Test Button 2</Button>
    </div>
    {${END_KEY}}
  `;

  expect(jsxToStringLoader(code)).toMatchSnapshot();
});

test('JS expressions', () => {
  const code = `
  {${START_KEY}}
  {function Example() {
    const [activeTab, setActiveTab] = React.useState('tab1');

    return (
      <>
        <Tabs activeTab={activeTab} onTabClick={setActiveTab}>
          <Tabs.Tab id="tab1">Example 1</Tabs.Tab>
          <Tabs.Tab id="tab2">Example 2</Tabs.Tab>
          <Tabs.Tab id="tab3">Example 3</Tabs.Tab>
          <Tabs.Tab id="tab4" disabled>
            Example 4
          </Tabs.Tab>
        </Tabs>
        <Box marginTop="large">
          {activeTab === 'tab1' && <Text>Content 1</Text>}
          {activeTab === 'tab2' && <Text>Content 2</Text>}
          {activeTab === 'tab3' && <Text>Content 3</Text>}
          {activeTab === 'tab4' && <Text>Content 4</Text>}
        </Box>
      </>
    );
  }}
  {${END_KEY}}
  `;

  expect(jsxToStringLoader(code)).toMatchSnapshot();
});

test('escapes all backticks', () => {
  const code = `
  {${START_KEY}}
  {function Example() {
    const [activeTab, setActiveTab] = React.useState(\`tab1\`);

    return (
      <>
        <Tabs activeTab={activeTab} onTabClick={setActiveTab}>
          <Tabs.Tab id="tab1">Example 1</Tabs.Tab>
          <Tabs.Tab id="tab2">Example 2</Tabs.Tab>
          <Tabs.Tab id="tab3">Example 3</Tabs.Tab>
          <Tabs.Tab id="tab4" disabled>
            Example 4
          </Tabs.Tab>
        </Tabs>
        <Box marginTop="large">
          {activeTab === "tab" && <Text>Content 1</Text>}
          {activeTab === "tab2" && <Text>Content 2</Text>}
          {activeTab === "tab3" && <Text>Content 3</Text>}
          {activeTab === "tab4" && <Text>Content 4</Text>}
        </Box>
      </>
    );
  }}
  {${END_KEY}}
  `;

  expect(jsxToStringLoader(code)).toMatchSnapshot();
});

test('works outside jsx', () => {
  const code = `
    ${START_KEY}
    <div>
      <Button>Test Button</Button>
    </div>
    ${END_KEY}
  `;

  expect(jsxToStringLoader(code)).toMatchSnapshot();
});
