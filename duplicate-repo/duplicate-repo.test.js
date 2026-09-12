const { shouldSkipIssue, processIssue } = require('./duplicate-repo');

describe('shouldSkipIssue', () => {
  test('should skip a pull request', () => {
    const issue = {
      title: 'Test pull request',
      pull_request: {},
    };

    expect(shouldSkipIssue(issue)).toBe(true);
  });

  test('should not skip a regular issue', () => {
    const issue = {
      title: 'Test issue',
      pull_request: undefined,
      milestone: null,
    };

    expect(shouldSkipIssue(issue)).toBe(false);
  });
});

describe('processIssue', () => {
  test('should process a valid issue', () => {
    const issue = {
      title: 'Test issue',
      pull_request: undefined,
    };

    expect(processIssue(issue)).toBe('Processing issue: Test issue');
  });

  test('should skip a pull request', () => {
    const issue = {
      title: 'Test pull request',
      pull_request: {},
    };

    expect(processIssue(issue)).toBe('Skipping issue');
  });
});