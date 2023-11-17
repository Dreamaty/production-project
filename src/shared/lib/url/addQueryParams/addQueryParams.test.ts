import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
  test('should with one param', () => {
    const params = getQueryParams({
      test: 'value',
    });
    expect(params).toBe('?test=value');
  });
  test('should with multiply param', () => {
    const params = getQueryParams({
      test: 'value',
      second: '2',
    });
    expect(params).toBe('?test=value&second=2');
  });
  test('should with undefined', () => {
    const params = getQueryParams({
      test: 'value',
      second: undefined,
    });
    expect(params).toBe('?test=value');
  });
});
