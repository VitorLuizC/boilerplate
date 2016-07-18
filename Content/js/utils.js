(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isNullOrWhitespace = isNullOrWhitespace;
exports.isElement = isElement;
exports.isString = isString;
exports.isFunction = isFunction;
function isNullOrWhitespace(input) {
    if (typeof input === 'undefined' || input == null) return true;
    return input.replace(/\s/g, '').length < 1;
}

function isElement(value) {
    return value instanceof HTMLElement;
}

function isString(value) {
    return typeof value === "string" || value instanceof String;
}

function isFunction(value) {
    return typeof value === "function" || value instanceof Function;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJTY3JpcHRzXFx1dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O1FDQWlCLGtCLEdBQUEsa0I7UUFLRCxTLEdBQUEsUztRQUlBLFEsR0FBQSxRO1FBSUEsVSxHQUFBLFU7QUFiUixTQUFTLGtCQUFULENBQTRCLEtBQTVCLEVBQW1DO0FBQ3ZDLFFBQUksT0FBTyxLQUFQLEtBQWlCLFdBQWpCLElBQWdDLFNBQVMsSUFBN0MsRUFBbUQsT0FBTyxJQUFQO0FBQ25ELFdBQU8sTUFBTSxPQUFOLENBQWMsS0FBZCxFQUFxQixFQUFyQixFQUF5QixNQUF6QixHQUFrQyxDQUF6QztBQUNIOztBQUVNLFNBQVMsU0FBVCxDQUFtQixLQUFuQixFQUEwQjtBQUM3QixXQUFRLGlCQUFpQixXQUF6QjtBQUNIOztBQUVNLFNBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QjtBQUM1QixXQUFRLE9BQU8sS0FBUCxLQUFpQixRQUFqQixJQUE2QixpQkFBaUIsTUFBdEQ7QUFDSDs7QUFFTSxTQUFTLFVBQVQsQ0FBb0IsS0FBcEIsRUFBMkI7QUFDOUIsV0FBUSxPQUFPLEtBQVAsS0FBaUIsVUFBakIsSUFBK0IsaUJBQWlCLFFBQXhEO0FBQ0giLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwi77u/ZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbE9yV2hpdGVzcGFjZShpbnB1dCkge1xyXG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3VuZGVmaW5lZCcgfHwgaW5wdXQgPT0gbnVsbCkgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXFxzL2csICcnKS5sZW5ndGggPCAxO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gKHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcclxuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbik7XHJcbn1cclxuIl19
