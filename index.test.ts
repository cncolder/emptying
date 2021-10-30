// @ts-ignore
import { isEmptyValue } from './index.ts';

describe('isEmptyValue', () => {
  it.each([
    undefined,
    null,
    NaN,
    '',
    [''],
    [{ a: '' }],
    [{ a: { b: { c: undefined } } }],
    new Set(),
    new Set(['']),
    new Map(),
    new Map([['a', null]]),
    {},
    { a: null },
    { a: { b: { c: '' } } },
  ])('truthy if value is %o', (value) => {
    expect(isEmptyValue(value)).toBeTruthy();
  });

  it.each([
    0,
    true,
    false,
    'a',
    ['a'],
    [{ a: 'a' }],
    new Set([1]),
    new Map([['a', 1]]),
    { a: 1 },
    { a: 1, b: null },
  ])('falsey if value is %o', (value) => {
    expect(isEmptyValue(value)).toBeFalsy();
  });
});
