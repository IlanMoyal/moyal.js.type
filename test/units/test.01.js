/*!
 * File: test/units/test.01.js
 */

import {
  getTypeName, isString, isNumber, isBoolean, isBigInt, isSymbol,
  isNull, isUndefined, isFunction, isUserDefinedClass, isPlainObject,
  isObject, isArray, isDate, isError, isPrimitive, isIntegral, isIterable,
  isFunctionOrGeneratorFunction, isGeneratorFunction, isAsyncFunction,
  parseBool, inferDataType, InferDataTypeResult,
  isRegExp, isMap, isSet, isWeakMap, isWeakSet, isPromise,
  isEmpty, isNotEmpty,
  isNumeric
} from "../../src/index.js";

import { TestGroup } from "@moyal/js-test";

export default new TestGroup("moyal.js.type – exported functions")
  .areEqual("getTypeName string", "string", getTypeName("x"))
  .areEqual("getTypeName null", "null", getTypeName(null))
  .areEqual("getTypeName array", "array", getTypeName([]))
  .areEqual("getTypeName class", "class", getTypeName(class A {}))

  .isTrue("isString('')", isString(""))
  .isTrue("isString(new String())", isString(new String()))
  .isTrue("new String('Hello'))", isString(new String("Hello")))
  .isFalse("isString(9) === false", isString(9))

  .isTrue("isNumber(5)", isNumber(5))
  .isTrue("isNumber(5.2)", isNumber(5.2))
  .isFalse("isNumber(NaN) with allowNaN = false", isNumber(NaN, { allowNaN: false }))
  .isTrue("isNumber(NaN) with allowNaN = true", isNumber(NaN, { allowNaN: true }))
  .isFalse("isNumber(Infinity) with allowInfinity = false", isNumber(Infinity, { allowInfinity: false }))
  .isTrue("isNumber(Infinity) with allowInfinity = true", isNumber(Infinity, { allowInfinity: true }))
  
  .isTrue("isNumeric(3)", isNumeric(3))
  .isTrue("isNumeric(-2.1)", isNumeric(-2.1))
  .isTrue("isNumeric(3n)", isNumeric(3n))
  .isFalse("isNumeric(null)", isNumeric(null))
  

  .isTrue("isBoolean(true)", isBoolean(true))
  .isTrue("isBoolean(false)", isBoolean(false))
  .isFalse("isBoolean(1)", isBoolean(1))
  .isFalse("isBoolean(0)", isBoolean(0))

  .isTrue("isBigInt(2n)", isBigInt(2n))
  .isTrue("isSymbol(Symbol())", isSymbol(Symbol()))

  .isTrue("isNull(null)", isNull(null))
  .isTrue("isUndefined()", isUndefined())
  .isTrue("isUndefined(undefined)", isUndefined(undefined))

  .isTrue("isFunction(() => {})", isFunction(() => {}))
  .isTrue("isUserDefinedClass(class C {})", isUserDefinedClass(class C {}))
  .isTrue("isPlainObject({})", isPlainObject({}))
  .isFalse("isPlainObject([])", isPlainObject([]))
  .isTrue("isObject({})", isObject({}))
  .isFalse("isObject(null)", isObject(null))
  .isTrue("isArray([])", isArray([]))
  .isTrue("isDate(new Date())", isDate(new Date()))
  .isTrue("isError(new Error())", isError(new Error()))
  .isTrue("isError(new (class MyError extends Error{})())", isError(new (class MyError extends Error{})()))
  .isTrue("isUserDefinedClass(class MyError extends Error{})", isUserDefinedClass(class MyError extends Error{}))
  .isTrue("isError(new (class MyError extends Error{})())", isError(new (class MyError extends Error{})()))

  .isTrue("isPrimitive('x')", isPrimitive("x"))
  .isTrue("isPrimitive(new String('x'))", isPrimitive(new String("x")))
  .isFalse("isPrimitive({})", isPrimitive({}))
  .isTrue("isIntegral(42)", isIntegral(42))
  .isFalse("isIntegral(3.14)", isIntegral(3.14))

  .isTrue("isIterable([1,2,3])", isIterable([1,2,3]))
  .isTrue("isFunctionOrGeneratorFunction(function*(){})", isFunctionOrGeneratorFunction(function*(){}))
  .isTrue("isGeneratorFunction(function*(){})", isGeneratorFunction(function*(){}))
  .isTrue("isAsyncFunction(async () => {})", isAsyncFunction(async () => {}))
  .isTrue("parseBool(' true ')", parseBool(" true "))
  .isFalse("parseBool(' false ')", parseBool(" false "))
  .areEqual("inferDataType('42').parsedValue", inferDataType("42").parsedValue, 42)
  .isTrue("inferDataType returns InferDataTypeResult", inferDataType("true") instanceof InferDataTypeResult)
  .isTrue("isRegExp(/abc/)", isRegExp(/abc/))
  .isTrue("isRegExp(new RegExp())", isRegExp(new RegExp()))
  .isTrue("isMap(new Map())", isMap(new Map()))
  .isTrue("isSet(new Set())", isSet(new Set()))
  .isTrue("isWeakMap(new WeakMap())", isWeakMap(new WeakMap()))
  .isTrue("isWeakSet(new WeakSet())", isWeakSet(new WeakSet()))
  .isTrue("isPromise(Promise.resolve())", isPromise(Promise.resolve()))
  .isTrue("isEmpty(null)", isEmpty(null))
  .isTrue("isEmpty([])", isEmpty([]))
  .isFalse("isEmpty([1])", isEmpty([1]))
  .isTrue("isNotEmpty({ x: 1 })", isNotEmpty({ x: 1 }))
  ;
