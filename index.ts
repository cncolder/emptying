/**
 * Check if a value is empty. Includes undefined, null, empty string, NaN, empty array, empty
 * object, empty Set, empty Map, or array/set/map/object with empty values.
 */
export function isEmptyValue(value: any): boolean {
  if (value === undefined || value === null || value === '') {
    return true;
  }

  if (typeof value === 'number') {
    return isNaN(value);
  }

  if (typeof value === 'boolean') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.every(isEmptyValue);
  }

  if (value instanceof Set || value instanceof Map) {
    return Array.from(value.values()).every(isEmptyValue);
  }

  if (typeof value === 'object') {
    return Object.values(value).every(isEmptyValue);
  }

  return false;
}
