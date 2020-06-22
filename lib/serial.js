"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = serial;

var _autoResetEvent = _interopRequireDefault(require("auto-reset-event"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function serial(fn) {
  const acquire = (0, _autoResetEvent.default)();
  return async (...args) => {
    const release = await acquire();

    try {
      return await fn(...args);
    } finally {
      release();
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJpYWwuanMiXSwibmFtZXMiOlsic2VyaWFsIiwiZm4iLCJhY3F1aXJlIiwiYXJncyIsInJlbGVhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVlLFNBQVNBLE1BQVQsQ0FBZ0JDLEVBQWhCLEVBQW9CO0FBQ2pDLFFBQU1DLE9BQU8sR0FBRyw4QkFBaEI7QUFFQSxTQUFPLE9BQU8sR0FBR0MsSUFBVixLQUFtQjtBQUN4QixVQUFNQyxPQUFPLEdBQUcsTUFBTUYsT0FBTyxFQUE3Qjs7QUFFQSxRQUFJO0FBQ0YsYUFBTyxNQUFNRCxFQUFFLENBQUMsR0FBR0UsSUFBSixDQUFmO0FBQ0QsS0FGRCxTQUVVO0FBQ1JDLE1BQUFBLE9BQU87QUFDUjtBQUNGLEdBUkQ7QUFTRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBdXRvUmVzZXRFdmVudCBmcm9tICdhdXRvLXJlc2V0LWV2ZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VyaWFsKGZuKSB7XG4gIGNvbnN0IGFjcXVpcmUgPSBjcmVhdGVBdXRvUmVzZXRFdmVudCgpO1xuXG4gIHJldHVybiBhc3luYyAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IHJlbGVhc2UgPSBhd2FpdCBhY3F1aXJlKCk7XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IGZuKC4uLmFyZ3MpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICByZWxlYXNlKCk7XG4gICAgfVxuICB9O1xufVxuIl19