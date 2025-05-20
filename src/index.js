/*!
 * @moyal/js-type - Minimal, robust type detection and value classification utility for JavaScript.
 *
 * File: moyal.linq.js
 * Repository: https://github.com/IlanMoyal/moyal.js.type
 * Author: Ilan Moyal (https://www.moyal.es)
 * Contact: ilan.amoyal[guess...what]gmail.com
 *
 * Description:
 * moyal.js.type is a lightweight, dependency-free utility library that provides accurate and extensible type-checking functions for JavaScript values, across both browser and Node.js environments. It helps you safely determine value types, including edge cases like user-defined classes, boxed primitives, cross-realm objects, and complex built-in types such as Map, Set, Date, and Promise.
 * Unlike typeof, instanceof, or loose type tricks, this library uses stable techniques like Object.prototype.toString.call(...) and constructor introspection to reliably classify values, even across different JavaScript contexts (e.g., iframes or VMs).
 *
 * License:
 * MIT License – Permission is granted for free use, modification, and distribution,
 * provided that the copyright notice and license appear in all copies.
 * Full license text: https://opensource.org/licenses/MIT
 *
 * © 2000–present Ilan Moyal. All rights reserved.
 */

/**
 * Utility functions for working with data types.
 * @module TypeUtils
 */

const __primitives = ["string", "number", "bigint", "boolean", "symbol"];
const __object_toString = Object.prototype.toString;

/**
 * Determines whether the given function is a user defined class constructor.
 * Inspects the function’s string to determine if it's a class constructor.
 *
 * @param {*} fn - The function to test.
 * @returns {boolean} `true` if the given function is a user defined class constructor.
 */
function isClass(fn) {
	/* assume value is a function */
	const str = Function.prototype.toString.call(fn);
	return /^class\s/.test(str);
}

/**
 * Returns the type name of a given value.
 * - For primitives: returns `"string"`, `"number"`, etc.
 * - For objects: returns class name or `"object"` if plain.
 * - For built-in types like Date, RegExp, Map: returns the constructor name.
 * - For plain objects: returns "object". For arrays: "array".
 * - For classes: returns `"class"` for user defined classes.
 * - For functions: returns `"function"`
 *
 * @param {*} value - The value whose type name to determine.
 * @returns {string} The detected type name.
 */
export function getTypeName(value) {
	if(value === null)
		return "null";

	let name = typeof value;
	if (name === "function") {
		if(isClass(value)) 
			name = "class";
	}
	else if (name === "object") {
		name = __object_toString.call(value).slice(8, -1).toLowerCase();
		if(!__primitives.includes(name)) {
			const ctor = value.constructor;
			if (ctor && typeof ctor.name === "string") {
				name = ctor.name;
				if(name === "Object" || name === "Array")
					name = name.toLowerCase();
			}
		}
	}
	return name;
}

/**
 * Checks if the specified value matches the given type name.
 * @param {*} value - The value to test.
 * @param {string} typeName - The expected type name.
 * @returns {boolean} `true` if the value’s type matches the given name.
 */
export function isType(value, typeName) {
	return getTypeName(value) === typeName;
}

/**
 * Checks if the specified value is a string (primitive or String object).
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if the specified value is a string.
 */
export function isString(value) { return getTypeName(value) === "string"; }

/**
 * Checks if the specified value is a symbol.
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if the specified value is a symbol.
 */
export function isSymbol(value) { return getTypeName(value) === "symbol"; }

/**
 * Checks whether the specified value is a number (primitive or Number object).
 * Excludes NaN and Infinity by default unless explicitly allowed.
 *
 * @param {*} value - The value to test.
 * @param {Object} [options]
 * @param {boolean} [options.allowNaN=true] - Whether to consider NaN a valid number.
 * @param {boolean} [options.allowInfinity=true] - Whether to consider Infinity/-Infinity valid.
 * @returns {boolean} - `true` if the specified value is a number.
 */
export function isNumber(value, { allowNaN = true, allowInfinity = true } = {}) {
	if (getTypeName(value) !== "number") return false;

	const num = Number(value);
	if (!allowNaN && Number.isNaN(num)) return false;
	if (!allowInfinity && !Number.isFinite(num)) return false;

	return true;
}

/**
 * Checks if the specified value is a bigint (primitive or BigInt object).
 * @param {*} value - The value to test.
 * @returns {boolean} - `true` if the specified value is big integer.
 */
export function isBigInt(value) { return getTypeName(value) === "bigint"; }

/**
 * Checks if the value is a numeric type (either number or bigint).
 * @param {*} value
 * @returns {boolean} - `true` if the value is a numeric type (either number or bigint).
 */
export function isNumeric(value) {
	return isNumber(value) || isBigInt(value);
}

/**
 * Checks if the specified value is a boolean (primitive or Boolean object).
 * @param {*} value - The value to test.
 * @returns {boolean} - `true` if the specified value is boolean.
 */
export function isBoolean(value) { return getTypeName(value) === "boolean"; }

/**
 * Checks if the specified value is undefined.
 * @param {*} value - The value to test.
 * @returns {boolean} - `true` if the specified value is undefined.
 */
export function isUndefined(value) { return value === undefined; }

/**
 * Checks if the specified value is null.
 * @param {*} value - The value to test.
 * @returns {boolean} - `true` if the specified value is null.
 */
export function isNull(value) { return value === null; }

/**
 * Checks if the specified value is a standard function.
 * @param {*} value - The value to test.
 * @returns {boolean} - `true` if the specified value is Function.
 */
export function isFunction(value) { return getTypeName(value) === "function"; }

/**
 * Checks if the specified value is a user defined class.
 * @param {*} value - The value to test.
 * @returns {boolean} - `true` if the specified value is user defined class.
 */
export function isUserDefinedClass(value) { return getTypeName(value) === "class"; }

/**
 * Checks if the specified value is a plain object (i.e., created via `{}` or `new Object()`).
 * This works reliably across realms.
 * 
 * @param {*} value - The value to check.
 * @returns {boolean} `true` if it's a plain object.
 */
export function isPlainObject(value) {
	if (__object_toString.call(value) !== "[object Object]") return false;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null;
}
/**
 * Checks if the specified value is a non-wrapper object (i.e., not a function, not null, not a boxed primitive).
 * Includes objects like arrays, plain objects, Date, RegExp, etc.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} `true` if it's a real object, excluding primitive wrappers and functions.
 */
export function isObject(value) {
	if (value === null || typeof value !== "object" || Array.isArray(value)) 
    return false;

	// Exclude known boxed primitive wrappers
	const tag = __object_toString.call(value);
	return !["[object String]", "[object Number]", "[object Boolean]", "[object BigInt]", "[object Symbol]", "[object Function]"].includes(tag);
}

/**
 * Checks if the specified value is instance of Date.
 * @param {*} value - The value to test.
 * @returns {boolean} - `true` if the specified value is instance of Date.
 */
export function isDate(value) { return getTypeName(value) === "Date";  /* cross realm safe. instanceof is NOT cross realm safe! */}

/**
 * Checks if the specified value is an array.
 * @param {*} value - The value to test.
 * @returns {boolean} - `true` if the specified value is an array.
 */
export function isArray(value) { return Array.isArray(value); }

/**
 * Checks if the specified value is of Error type.
 * @param {*} value - The value to test.
 * @returns {boolean} - `true` if the specified value is of Error type.
 */
export function isError(value) { 
	return value != null 
		&&
		__object_toString.call(value) === "[object Error]"; // Works on cross realm
		/* Note: 
		*   obj instanceof Error; 
		* works only in same realm (same frame!)
		*/
}

/**
 * Determines whether the specified value is one of the primitive types: string, number, bigint, boolean and symbol (including wrapper type over primitive)
 * This function treats primitives any of the following: string, number, boolean, symbol, bigint and their wrapper String, Number, Boolean.
 * @param {*} value
 * @returns {boolean} - true if the specified value is one of the primitive types: string, number, bigint, boolean and symbol (including wrapper type over primitive)
 */
export function isPrimitive(value) {
	return value != null && __primitives.includes(getTypeName(value));
}

/**
 * Checks if the value is an integer (number or bigint), optionally applying a custom predicate.
 * @param {*} value - The value to test.
 * @param {function(NumericValue):boolean} [additionalPredicate = null] - Additional test to apply to the value.
 * @returns {boolean} - `true` if the value is integral number and passed the test against the additional predicate (if it was specified) .
 */
export function isIntegral(value, additionalPredicate = null) { 
	const isIntegral =
		isBigInt(value) ||
		(isNumber(value) && Math.floor(value) === value);
	return isIntegral && (additionalPredicate == null || additionalPredicate(value) === true); 
}

/**
 * Checks if the specified value is iterable (has a `[Symbol.iterator]` method).
 * @param {*} value - The value to test.
 * @returns {boolean} - `true` if the specified value is iterable (has a `[Symbol.iterator]` method).
 */
export function isIterable(value) {
	return isFunctionOrGeneratorFunction(value?.[Symbol.iterator]);
}

/**
 * Checks if the specified value is a function or a generator function.
 * @param {*} value - The value to test.
 * @returns {boolean} - `true` if the specified value is a function or a generator function.
 */
export function isFunctionOrGeneratorFunction(value) {
	const type = typeof value;
	const tag = __object_toString.call(value);
	return (type === "object" || type === "function") && (tag === "[object Function]" || tag === "[object GeneratorFunction]");
}

/**
 * Checks if the specified value is a generator function.
 * @param {*} value - The value to test.
 * @returns {boolean} - `true` if the specified value is a generator function.
 */
export function isGeneratorFunction(value) {
	return __object_toString.call(value) === "[object GeneratorFunction]";
}

/**
 * Checks if the specified value is an asynchronous function.
 * @param {*} value - The value to test.
 * @returns {boolean} - `true` if the specified value is an asynchronous function.
 */
export function isAsyncFunction(value) {
	return __object_toString.call(value) === "[object AsyncFunction]";
}

/**
 * Parses common values like string "true" → boolean true, "42.0" → number, etc.
 * @param {*} value
 * @returns {InferDataTypeResult}
 */
export function inferDataType(value) {
	const type = getTypeName(value);
	if (type !== "string") {
		return new InferDataTypeResult(value, value, type);
	}
	const trimmed = value.trim();
	if (trimmed === "true" || trimmed === "false") {
		return new InferDataTypeResult(value, trimmed === "true", "boolean");
	}

	const parsed = parseFloat(trimmed);
	if (!isNaN(parsed)) {
		// normalize both to Number→String comparison to avoid fragile regex cleanup
		const parsedStr = parsed.toString();
		const inputNumeric = Number(trimmed).toString();

		if (parsedStr === inputNumeric) {
			return new InferDataTypeResult(value, parsed, "number");
		}
	}
	return new InferDataTypeResult(value, value, "string");
}

/**
 * Parses a string to boolean. If the input is already boolean, returns it.
 * If it's "true" or "false" (case insensitive), converts accordingly.
 * @param {*} value - The value to parse.
 * @returns {boolean|undefined} - 'true' if the specified value is a string trimmed to literal 'true' (case insensitive) or `false` if it is trimmed to literal 'false' (case insensitive).
 */
export function parseBool(value) {
	if (isBoolean(value)) 
		return value;

	if (isString(value)) {
		const lower = value.trim().toLowerCase();
		if (lower === "true") return true;
		if (lower === "false") return false;
	}
 	return undefined;
}

/**
 * Represents the result of inferred data type conversion.
 */
export class InferDataTypeResult {
	/**
	 * @param {*} originalValue
	 * @param {*} parsedValue
	 * @param {string|null} type
	 */
	constructor(originalValue, parsedValue, type) {
	/** @type {*} */
	this.originalValue = originalValue;
	/** @type {*} */
	this.parsedValue = parsedValue;
	/** @type {string|null} */
	this.type = type;
	}
}

/**
 * Checks if the specified value is a RegExp.
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if the value is a RegExp.
 */
export function isRegExp(value) {
	return getTypeName(value) === "RegExp";
}

/**
 * Checks if the specified value is a Map.
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if the value is a Map.
 */
export function isMap(value) {
	return getTypeName(value) === "Map";
}

/**
 * Checks if the specified value is a Set.
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if the value is a Set.
 */
export function isSet(value) {
	return getTypeName(value) === "Set";
}

/**
 * Checks if the specified value is a WeakMap.
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if the value is a WeakMap.
 */
export function isWeakMap(value) {
	return getTypeName(value) === "WeakMap";
}

/**
 * Checks if the specified value is a WeakSet.
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if the value is a WeakSet.
 */
export function isWeakSet(value) {
	return getTypeName(value) === "WeakSet";
}

/**
 * Checks if the specified value is a Promise.
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if the value is a Promise.
 */
export function isPromise(value) {
	return getTypeName(value) === "Promise";
}

/**
 * Checks if the specified value is "empty".
 * The following are considered empty:
 * - null, undefined
 * - empty string: ""
 * - empty array: []
 * - empty object: {}
 * - empty Map or Set 
 * - Note: The implementation avoids treating numbers or booleans as "empty". Only typical "container-like" values and nullish types are evaluated.
 * 
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if the value is considered empty.
 */
export function isEmpty(value) {
	if (value == null) return true; // null or undefined
	
	if (isString(value) || Array.isArray(value)) {
		return value.length === 0;
	}

	if (isMap(value) || isSet(value)) {
		return value.size === 0;
	}

	if (isPlainObject(value)) {
		return Object.keys(value).length === 0;
	}

	return false;
}

/**
 * Checks if the specified value is not empty.
 * See `isEmpty` for full empty definition.
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if the value is not considered empty.
 */
export function isNotEmpty(value) {
	return !isEmpty(value);
}