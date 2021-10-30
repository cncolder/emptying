# emptying

🈳 Checking or pruning the empty value.

## Getting started

```shell
npm i emptying
```

### isEmptyValue

Check if a value is empty. Includes undefined, null, empty string, NaN, empty array, empty object, empty Set, empty Map, or array/set/map/object with empty values.

```js
import { isEmptyValue } from 'emptying';

isEmptyValue(undefined); // true
isEmptyValue(null); // true
isEmptyValue(NaN); // true
isEmptyValue(''); // true
isEmptyValue(['']); // true
isEmptyValue([{ a: '' }]); // true
isEmptyValue([{ a: { b: { c: undefined } } }]); // true
isEmptyValue(new Set()); // true
isEmptyValue(new Set([''])); // true
isEmptyValue(new Map()); // true
isEmptyValue(new Map([['a', null]])); // true
isEmptyValue({}); // true
isEmptyValue({ a: null }); // true
isEmptyValue({ a: { b: { c: undefined } } }); // true

isEmptyValue(0); // false
isEmptyValue(true); // false
isEmptyValue(false); // false
isEmptyValue('a'); // false
isEmptyValue(['a']); // false
isEmptyValue([{ a: 'a' }]); // false
isEmptyValue(new Set([1])); // false
isEmptyValue(new Map([['a', 1]])); // false
isEmptyValue({ a: 1 }); // false
isEmptyValue({ a: 1, b: null }); // false
```

## FAQ

**What does empty value mean?**

An empty value is data that does not need to be saved. For example, data that the API does not want to receive, or meaningless data that wastes storage space.

- `undefined`
- `null`
- `''`
- `NaN`
- `[]`
- `new Set`
- `new Map`
- `{}`

**What kind of data is not empty?**

- number includes `0`
- boolean
- string with length `' '`
- unknown value. e.g. buffer/error/function/promise/regexp/symbol and so on...

**Why divide data this way?**

I often need to filter the data before saving it. Data needs to be discarded or nulled when it doesn't make sense, regardless of how deep it is in the hierarchy.
