"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _dotenv = require("dotenv");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DEFAULT_CONFIG = {
  PORT: 3978
};
(0, _dotenv.config)();

function _default() {
  const nextEnv = _objectSpread({}, DEFAULT_CONFIG, {}, process.env);

  process.env = _objectSpread({
    PUBLIC_URL: `http://localhost:${nextEnv.PORT}/public/`
  }, nextEnv);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWcudHMiXSwibmFtZXMiOlsiREVGQVVMVF9DT05GSUciLCJQT1JUIiwibmV4dEVudiIsInByb2Nlc3MiLCJlbnYiLCJQVUJMSUNfVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsTUFBTUEsY0FBYyxHQUFHO0FBQ3JCQyxFQUFBQSxJQUFJLEVBQUU7QUFEZSxDQUF2QjtBQUlBOztBQUVlLG9CQUFZO0FBQ3pCLFFBQU1DLE9BQVkscUJBQ2JGLGNBRGEsTUFFYkcsT0FBTyxDQUFDQyxHQUZLLENBQWxCOztBQUtBRCxFQUFBQSxPQUFPLENBQUNDLEdBQVI7QUFDRUMsSUFBQUEsVUFBVSxFQUFHLG9CQUFvQkgsT0FBTyxDQUFDRCxJQUFNO0FBRGpELEtBRUtDLE9BRkw7QUFJRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ2RvdGVudic7XG5cbmNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICBQT1JUOiAzOTc4XG59O1xuXG5jb25maWcoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBuZXh0RW52OiBhbnkgPSB7XG4gICAgLi4uREVGQVVMVF9DT05GSUcsXG4gICAgLi4ucHJvY2Vzcy5lbnZcbiAgfTtcblxuICBwcm9jZXNzLmVudiA9IHtcbiAgICBQVUJMSUNfVVJMOiBgaHR0cDovL2xvY2FsaG9zdDokeyBuZXh0RW52LlBPUlQgfS9wdWJsaWMvYCxcbiAgICAuLi5uZXh0RW52XG4gIH07XG59XG4iXX0=