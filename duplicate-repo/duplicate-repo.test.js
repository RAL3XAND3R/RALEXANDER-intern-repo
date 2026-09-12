const { shouldSkipIssue } = require('./duplicate-repo');

describe('shouldSkipIssue', () => {
  test('should return false for a normal issue', () => {
    const issue = {
      title: 'Normal issue',
      pull_request: undefined,
      milestone: null,
    };

    expect(shouldSkipIssue(issue)).toBe(false);
  });

  test('should return true for a pull request', () => {
    const issue = {
      title: 'Pull request',
      pull_request: {},
      milestone: null,
    };

    expect(shouldSkipIssue(issue)).toBe(true);
  });

  test('should return false for an issue with a normal milestone', () => {
    const issue = {
      title: 'Issue with milestone',
      pull_request: undefined,
      milestone: {
        title: 'Normal milestone',
      },
    };

    expect(shouldSkipIssue(issue)).toBe(false);
  });
});