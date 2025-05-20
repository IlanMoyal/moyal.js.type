<!-- TOC-SECTION-MARKER -->

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [Use Cases](#use-cases)
- [Why Not Just Use `typeof`?](#why-not-just-use-typeof)
- [API Overview](#api-overview)

<!-- CONTENT-SECTION-MARKER -->

## Overview

moyal.js.type is a lightweight, dependency-free utility library that provides accurate and extensible type-checking functions for JavaScript values, across both browser and Node.js environments. It helps you safely determine value types, including edge cases like user-defined classes, boxed primitives, cross-realm objects, and complex built-in types such as Map, Set, Date, and Promise.

Unlike typeof, instanceof, or loose type tricks, this library uses stable techniques like Object.prototype.toString.call(...) and constructor introspection to reliably classify values, even across different JavaScript contexts (e.g., iframes or VMs).

## Features

- Detect all JavaScript primitives and boxed types (string, number, boolean, symbol, bigint).
- Identify standard objects: Array, Date, Error, RegExp, Function, Generator, AsyncFunction, Promise.
- Classify user-defined classes with isUserDefinedClass.
- Distinguish Map, Set, WeakMap, WeakSet.
- Determine null, undefined, and plain objects.
- Test if a value is iterable or a function/generator.
- Infer type and parse values with inferDataType(), parseBool().
- Test whether a value is empty or notEmpty (for strings, arrays, objects, maps, sets)

## Quick Start

```js
import { getTypeName, isFunction, isMap, isEmpty, inferDataType } from "@moyal/js-type";

getTypeName("hello");            // "string"
isFunction(function () {});      // true
isMap(new Map());                // true
isEmpty([]);                     // true
isEmpty({});                     // true
isEmpty(" ");                    // false

const result = inferDataType("42.00");
console.log(result.parsedValue); // 42
console.log(result.type);        // "number"

```

For more code examples, see also **"/{{examplesFolder}}"** and (or) **"/{{testFolder}}/units"** in [GitHub Repository](https://github.com/{{git:username}}/{{git:repository-name}}).

## Use Cases

- Testing utilities and assertion frameworks.
- JSON schema validators or serializers.
- Form validation libraries.
- Dynamic serialization / deserialization logic.
- Type introspection in frameworks.

## Why Not Just Use typeof?

JavaScript’s typeof is:

- ❌ Misleading for null (returns "object")
- ❌ Useless for arrays, dates, and most built-ins.
- ❌ Unsafe across realms (e.g., iframes, VMs).

This library solves those issues in a clean, predictable way.

## API Overview

| Function                     | Description |
|------------------------------|-------------|
| `getTypeName(value)`         | Returns the type name of a value (handles primitives, objects, classes). |
| `isType(value, typeName)`    | Checks if the specified value matches the given type name. |
| `isString(value)`            | Checks if the value is a string (primitive or String object). |
| `isNumber(value, opts?)`     | Checks if the value is a number (with optional NaN/Infinity filtering). |
| `isBigInt(value)`            | Checks if the value is a bigint. |
| `isNumeric(value)`            | Checks if the value is a numeric type (either number or bigint). |
| `isBoolean(value)`           | Checks if the value is a boolean. |
| `isSymbol(value)`            | Checks if the value is a symbol. |
| `isNull(value)`              | Checks if the value is `null`. |
| `isUndefined(value)`         | Checks if the value is `undefined`. |
| `isFunction(value)`          | Checks if the value is a function. |
| `isGeneratorFunction(value)`| Checks if the value is a generator function. |
| `isAsyncFunction(value)`     | Checks if the value is an async function. |
| `isFunctionOrGeneratorFunction(value)` | Checks if the value is a regular or generator function. |
| `isUserDefinedClass(value)`  | Checks if the value is a user-defined class constructor. |
| `isPlainObject(value)`       | Checks if the value is a plain object (`{}` or `new Object`). |
| `isObject(value)`            | Checks for non-wrapper object (not null, not boxed). |
| `isArray(value)`             | Checks if the value is an array. |
| `isDate(value)`              | Checks if the value is a `Date` instance. |
| `isError(value)`             | Checks if the value is an `Error`. |
| `isRegExp(value)`            | Checks if the value is a regular expression. |
| `isMap(value)`               | Checks if the value is a `Map`. |
| `isSet(value)`               | Checks if the value is a `Set`. |
| `isWeakMap(value)`           | Checks if the value is a `WeakMap`. |
| `isWeakSet(value)`           | Checks if the value is a `WeakSet`. |
| `isPromise(value)`           | Checks if the value is a `Promise`. |
| `isIterable(value)`          | Checks if the value is iterable. |
| `isPrimitive(value)`         | Checks if the value is a primitive or a boxed primitive. |
| `isIntegral(value, fn?)`     | Checks if the value is an integer (`number` or `bigint`). Optional predicate. |
| `isEmpty(value)`             | Checks if the value is considered "empty". |
| `isNotEmpty(value)`          | Opposite of `isEmpty`. |
| `inferDataType(value)`       | Parses a string to boolean or number. Returns an object with original, parsed, and type. |
| `parseBool(value)`           | Parses a string or boolean-like value to a boolean. |
| `InferDataTypeResult`        | Class returned by `inferDataType()` with fields: `originalValue`, `parsedValue`, `type`. |

