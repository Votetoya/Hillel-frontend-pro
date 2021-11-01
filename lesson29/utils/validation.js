class Validation {
    static isNumber(value) {
        return /^[0-9]+$/.test(value);
    }

    static isEmpty(value) {
        return (typeof value === 'string' && !value.trim())
        || typeof value === 'undefined'
        || value === null;
    }
}