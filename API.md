<a name="module_TypeUtils"></a>

## TypeUtils
Utility functions for working with data types.


* [TypeUtils](#module_TypeUtils)
    * _static_
        * [.InferDataTypeResult](#module_TypeUtils.InferDataTypeResult)
            * [new exports.InferDataTypeResult(originalValue, parsedValue, type)](#new_module_TypeUtils.InferDataTypeResult_new)
            * [.originalValue](#module_TypeUtils.InferDataTypeResult+originalValue) : <code>\*</code>
            * [.parsedValue](#module_TypeUtils.InferDataTypeResult+parsedValue) : <code>\*</code>
            * [.type](#module_TypeUtils.InferDataTypeResult+type) : <code>string</code> \| <code>null</code>
        * [.version()](#module_TypeUtils.version) ⇒ <code>string</code>
        * [.getTypeName(value)](#module_TypeUtils.getTypeName) ⇒ <code>string</code>
        * [.isType(value, typeName)](#module_TypeUtils.isType) ⇒ <code>boolean</code>
        * [.isString(value)](#module_TypeUtils.isString) ⇒ <code>boolean</code>
        * [.isSymbol(value)](#module_TypeUtils.isSymbol) ⇒ <code>boolean</code>
        * [.isNumber(value, [options])](#module_TypeUtils.isNumber) ⇒ <code>boolean</code>
        * [.isBigInt(value)](#module_TypeUtils.isBigInt) ⇒ <code>boolean</code>
        * [.isNumeric(value)](#module_TypeUtils.isNumeric) ⇒ <code>boolean</code>
        * [.isBoolean(value)](#module_TypeUtils.isBoolean) ⇒ <code>boolean</code>
        * [.isUndefined(value)](#module_TypeUtils.isUndefined) ⇒ <code>boolean</code>
        * [.isNull(value)](#module_TypeUtils.isNull) ⇒ <code>boolean</code>
        * [.isFunction(value)](#module_TypeUtils.isFunction) ⇒ <code>boolean</code>
        * [.isUserDefinedClass(value)](#module_TypeUtils.isUserDefinedClass) ⇒ <code>boolean</code>
        * [.isPlainObject(value)](#module_TypeUtils.isPlainObject) ⇒ <code>boolean</code>
        * [.isObject(value)](#module_TypeUtils.isObject) ⇒ <code>boolean</code>
        * [.isDate(value)](#module_TypeUtils.isDate) ⇒ <code>boolean</code>
        * [.isArray(value)](#module_TypeUtils.isArray) ⇒ <code>boolean</code>
        * [.isError(value)](#module_TypeUtils.isError) ⇒ <code>boolean</code>
        * [.isPrimitive(value)](#module_TypeUtils.isPrimitive) ⇒ <code>boolean</code>
        * [.isIntegral(value, [additionalPredicate])](#module_TypeUtils.isIntegral) ⇒ <code>boolean</code>
        * [.isIterable(value)](#module_TypeUtils.isIterable) ⇒ <code>boolean</code>
        * [.isFunctionOrGeneratorFunction(value)](#module_TypeUtils.isFunctionOrGeneratorFunction) ⇒ <code>boolean</code>
        * [.isGeneratorFunction(value)](#module_TypeUtils.isGeneratorFunction) ⇒ <code>boolean</code>
        * [.isAsyncFunction(value)](#module_TypeUtils.isAsyncFunction) ⇒ <code>boolean</code>
        * [.inferDataType(value)](#module_TypeUtils.inferDataType) ⇒ <code>InferDataTypeResult</code>
        * [.parseBool(value)](#module_TypeUtils.parseBool) ⇒ <code>boolean</code> \| <code>undefined</code>
        * [.isRegExp(value)](#module_TypeUtils.isRegExp) ⇒ <code>boolean</code>
        * [.isMap(value)](#module_TypeUtils.isMap) ⇒ <code>boolean</code>
        * [.isSet(value)](#module_TypeUtils.isSet) ⇒ <code>boolean</code>
        * [.isWeakMap(value)](#module_TypeUtils.isWeakMap) ⇒ <code>boolean</code>
        * [.isWeakSet(value)](#module_TypeUtils.isWeakSet) ⇒ <code>boolean</code>
        * [.isPromise(value)](#module_TypeUtils.isPromise) ⇒ <code>boolean</code>
        * [.isEmpty(value)](#module_TypeUtils.isEmpty) ⇒ <code>boolean</code>
        * [.isNotEmpty(value)](#module_TypeUtils.isNotEmpty) ⇒ <code>boolean</code>
    * _inner_
        * [~isClass(fn)](#module_TypeUtils..isClass) ⇒ <code>boolean</code>

<a name="module_TypeUtils.InferDataTypeResult"></a>

### TypeUtils.InferDataTypeResult
Represents the result of inferred data type conversion.

**Kind**: static class of [<code>TypeUtils</code>](#module_TypeUtils)  

* [.InferDataTypeResult](#module_TypeUtils.InferDataTypeResult)
    * [new exports.InferDataTypeResult(originalValue, parsedValue, type)](#new_module_TypeUtils.InferDataTypeResult_new)
    * [.originalValue](#module_TypeUtils.InferDataTypeResult+originalValue) : <code>\*</code>
    * [.parsedValue](#module_TypeUtils.InferDataTypeResult+parsedValue) : <code>\*</code>
    * [.type](#module_TypeUtils.InferDataTypeResult+type) : <code>string</code> \| <code>null</code>

<a name="new_module_TypeUtils.InferDataTypeResult_new"></a>

#### new exports.InferDataTypeResult(originalValue, parsedValue, type)

| Param | Type |
| --- | --- |
| originalValue | <code>\*</code> | 
| parsedValue | <code>\*</code> | 
| type | <code>string</code> \| <code>null</code> | 

<a name="module_TypeUtils.InferDataTypeResult+originalValue"></a>

#### inferDataTypeResult.originalValue : <code>\*</code>
**Kind**: instance property of [<code>InferDataTypeResult</code>](#module_TypeUtils.InferDataTypeResult)  
<a name="module_TypeUtils.InferDataTypeResult+parsedValue"></a>

#### inferDataTypeResult.parsedValue : <code>\*</code>
**Kind**: instance property of [<code>InferDataTypeResult</code>](#module_TypeUtils.InferDataTypeResult)  
<a name="module_TypeUtils.InferDataTypeResult+type"></a>

#### inferDataTypeResult.type : <code>string</code> \| <code>null</code>
**Kind**: instance property of [<code>InferDataTypeResult</code>](#module_TypeUtils.InferDataTypeResult)  
<a name="module_TypeUtils.version"></a>

### TypeUtils.version() ⇒ <code>string</code>
Returns the semantic version of this library.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>string</code> - - The semantic version of this library.  
<a name="module_TypeUtils.getTypeName"></a>

### TypeUtils.getTypeName(value) ⇒ <code>string</code>
Returns the type name of a given value.- For primitives: returns `"string"`, `"number"`, etc.- For objects: returns class name or `"object"` if plain.- For built-in types like Date, RegExp, Map: returns the constructor name.- For plain objects: returns "object". For arrays: "array".- For classes: returns `"class"` for user defined classes.- For functions: returns `"function"`

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>string</code> - The detected type name.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value whose type name to determine. |

<a name="module_TypeUtils.isType"></a>

### TypeUtils.isType(value, typeName) ⇒ <code>boolean</code>
Checks if the specified value matches the given type name.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - `true` if the value’s type matches the given name.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |
| typeName | <code>string</code> | The expected type name. |

<a name="module_TypeUtils.isString"></a>

### TypeUtils.isString(value) ⇒ <code>boolean</code>
Checks if the specified value is a string (primitive or String object).

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - `true` if the specified value is a string.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isSymbol"></a>

### TypeUtils.isSymbol(value) ⇒ <code>boolean</code>
Checks if the specified value is a symbol.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - `true` if the specified value is a symbol.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isNumber"></a>

### TypeUtils.isNumber(value, [options]) ⇒ <code>boolean</code>
Checks whether the specified value is a number (primitive or Number object).Excludes NaN and Infinity by default unless explicitly allowed.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - - `true` if the specified value is a number.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  | The value to test. |
| [options] | <code>Object</code> |  |  |
| [options.allowNaN] | <code>boolean</code> | <code>true</code> | Whether to consider NaN a valid number. |
| [options.allowInfinity] | <code>boolean</code> | <code>true</code> | Whether to consider Infinity/-Infinity valid. |

<a name="module_TypeUtils.isBigInt"></a>

### TypeUtils.isBigInt(value) ⇒ <code>boolean</code>
Checks if the specified value is a bigint (primitive or BigInt object).

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - - `true` if the specified value is big integer.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isNumeric"></a>

### TypeUtils.isNumeric(value) ⇒ <code>boolean</code>
Checks if the value is a numeric type (either number or bigint).

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - - `true` if the value is a numeric type (either number or bigint).  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="module_TypeUtils.isBoolean"></a>

### TypeUtils.isBoolean(value) ⇒ <code>boolean</code>
Checks if the specified value is a boolean (primitive or Boolean object).

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - - `true` if the specified value is boolean.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isUndefined"></a>

### TypeUtils.isUndefined(value) ⇒ <code>boolean</code>
Checks if the specified value is undefined.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - - `true` if the specified value is undefined.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isNull"></a>

### TypeUtils.isNull(value) ⇒ <code>boolean</code>
Checks if the specified value is null.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - - `true` if the specified value is null.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isFunction"></a>

### TypeUtils.isFunction(value) ⇒ <code>boolean</code>
Checks if the specified value is a standard function.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - - `true` if the specified value is Function.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isUserDefinedClass"></a>

### TypeUtils.isUserDefinedClass(value) ⇒ <code>boolean</code>
Checks if the specified value is a user defined class.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - - `true` if the specified value is user defined class.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isPlainObject"></a>

### TypeUtils.isPlainObject(value) ⇒ <code>boolean</code>
Checks if the specified value is a plain object (i.e., created via `{}` or `new Object()`).This works reliably across realms.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - `true` if it's a plain object.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

<a name="module_TypeUtils.isObject"></a>

### TypeUtils.isObject(value) ⇒ <code>boolean</code>
Checks if the specified value is a non-wrapper object (i.e., not a function, not null, not a boxed primitive).Includes objects like arrays, plain objects, Date, RegExp, etc.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - `true` if it's a real object, excluding primitive wrappers and functions.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

<a name="module_TypeUtils.isDate"></a>

### TypeUtils.isDate(value) ⇒ <code>boolean</code>
Checks if the specified value is instance of Date.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - - `true` if the specified value is instance of Date.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isArray"></a>

### TypeUtils.isArray(value) ⇒ <code>boolean</code>
Checks if the specified value is an array.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - - `true` if the specified value is an array.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isError"></a>

### TypeUtils.isError(value) ⇒ <code>boolean</code>
Checks if the specified value is of Error type.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - - `true` if the specified value is of Error type.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isPrimitive"></a>

### TypeUtils.isPrimitive(value) ⇒ <code>boolean</code>
Determines whether the specified value is one of the primitive types: string, number, bigint, boolean and symbol (including wrapper type over primitive)This function treats primitives any of the following: string, number, boolean, symbol, bigint and their wrapper String, Number, Boolean.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - - true if the specified value is one of the primitive types: string, number, bigint, boolean and symbol (including wrapper type over primitive)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="module_TypeUtils.isIntegral"></a>

### TypeUtils.isIntegral(value, [additionalPredicate]) ⇒ <code>boolean</code>
Checks if the value is an integer (number or bigint), optionally applying a custom predicate.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - - `true` if the value is integral number and passed the test against the additional predicate (if it was specified) .  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  | The value to test. |
| [additionalPredicate] | <code>function</code> | <code></code> | Additional test to apply to the value. |

<a name="module_TypeUtils.isIterable"></a>

### TypeUtils.isIterable(value) ⇒ <code>boolean</code>
Checks if the specified value is iterable (has a `[Symbol.iterator]` method).

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - - `true` if the specified value is iterable (has a `[Symbol.iterator]` method).  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isFunctionOrGeneratorFunction"></a>

### TypeUtils.isFunctionOrGeneratorFunction(value) ⇒ <code>boolean</code>
Checks if the specified value is a function or a generator function.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - - `true` if the specified value is a function or a generator function.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isGeneratorFunction"></a>

### TypeUtils.isGeneratorFunction(value) ⇒ <code>boolean</code>
Checks if the specified value is a generator function.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - - `true` if the specified value is a generator function.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isAsyncFunction"></a>

### TypeUtils.isAsyncFunction(value) ⇒ <code>boolean</code>
Checks if the specified value is an asynchronous function.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - - `true` if the specified value is an asynchronous function.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.inferDataType"></a>

### TypeUtils.inferDataType(value) ⇒ <code>InferDataTypeResult</code>
Parses common values like string "true" → boolean true, "42.0" → number, etc.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="module_TypeUtils.parseBool"></a>

### TypeUtils.parseBool(value) ⇒ <code>boolean</code> \| <code>undefined</code>
Parses a string to boolean. If the input is already boolean, returns it.If it's "true" or "false" (case insensitive), converts accordingly.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> \| <code>undefined</code> - - 'true' if the specified value is a string trimmed to literal 'true' (case insensitive) or `false` if it is trimmed to literal 'false' (case insensitive).  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to parse. |

<a name="module_TypeUtils.isRegExp"></a>

### TypeUtils.isRegExp(value) ⇒ <code>boolean</code>
Checks if the specified value is a RegExp.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - `true` if the value is a RegExp.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isMap"></a>

### TypeUtils.isMap(value) ⇒ <code>boolean</code>
Checks if the specified value is a Map.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - `true` if the value is a Map.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isSet"></a>

### TypeUtils.isSet(value) ⇒ <code>boolean</code>
Checks if the specified value is a Set.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - `true` if the value is a Set.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isWeakMap"></a>

### TypeUtils.isWeakMap(value) ⇒ <code>boolean</code>
Checks if the specified value is a WeakMap.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - `true` if the value is a WeakMap.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isWeakSet"></a>

### TypeUtils.isWeakSet(value) ⇒ <code>boolean</code>
Checks if the specified value is a WeakSet.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - `true` if the value is a WeakSet.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isPromise"></a>

### TypeUtils.isPromise(value) ⇒ <code>boolean</code>
Checks if the specified value is a Promise.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - `true` if the value is a Promise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isEmpty"></a>

### TypeUtils.isEmpty(value) ⇒ <code>boolean</code>
Checks if the specified value is "empty".The following are considered empty:- null, undefined- empty string: ""- empty array: []- empty object: {}- empty Map or Set - Note: The implementation avoids treating numbers or booleans as "empty". Only typical "container-like" values and nullish types are evaluated.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - `true` if the value is considered empty.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils.isNotEmpty"></a>

### TypeUtils.isNotEmpty(value) ⇒ <code>boolean</code>
Checks if the specified value is not empty.See `isEmpty` for full empty definition.

**Kind**: static method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - `true` if the value is not considered empty.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

<a name="module_TypeUtils..isClass"></a>

### TypeUtils~isClass(fn) ⇒ <code>boolean</code>
Determines whether the given function is a user defined class constructor.Inspects the function’s string to determine if it's a class constructor.

**Kind**: inner method of [<code>TypeUtils</code>](#module_TypeUtils)  
**Returns**: <code>boolean</code> - `true` if the given function is a user defined class constructor.  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>\*</code> | The function to test. |

