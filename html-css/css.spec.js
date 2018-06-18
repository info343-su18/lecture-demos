//include custom matchers
const styleMatchers = require('jest-style-matchers');
expect.extend(styleMatchers);

const cssPath = __dirname + '/css/*.css';

describe('Source code is valid', () => {
  test('CSS validates without errors', async () => {
    await expect(cssPath).toHaveNoCssLintErrorsAsync();
  })
});
