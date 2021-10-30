/**
 * Check if a value is empty. Includes nil, empty string, empty array, empty object, empty Set,
 * empty Map, or array/object with empty values.
 */
export function isEmpty(value) {
    return (value === undefined ||
        value === null ||
        value === '' ||
        (Array.isArray(value) && value.every(isEmpty)) ||
        ((value instanceof Set || value instanceof Map) && Array.from(value.values()).every(isEmpty)) ||
        (typeof value === 'object' && Object.values(value).every(isEmpty)));
}
