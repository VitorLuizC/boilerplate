export function isNullOrWhitespace(input) {
    if (typeof input === 'undefined' || input == null) return true;
    return input.replace(/\s/g, '').length < 1;
}

export function isElement(value) {
    return (value instanceof HTMLElement);
}

export function isString(value) {
    return (typeof value === "string" || value instanceof String);
}

export function isFunction(value) {
    return (typeof value === "function" || value instanceof Function);
}
