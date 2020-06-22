"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = exports.mode = void 0;

var _onErrorResumeNext = _interopRequireDefault(require("on-error-resume-next"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mode = 'line';
exports.mode = mode;
const name = 'Echo';
exports.name = name;

function help() {
  return {
    'echo Hello, World!': 'Echo back the message after deserialized as JSON',
    'echo "Hello\nWorld!"': 'Parse the message as JSON and echo back'
  };
}

async function processor(context, line) {
  await context.sendActivity({
    type: 'message',
    text: 'Echoing back in a separate activity.'
  });
  line = line.substr(5);
  const text = line[0] === '"' ? (0, _onErrorResumeNext.default)(() => JSON.parse(line)) || '[Error while parsing the JSON]' : line;
  await context.sendActivity({
    type: 'message',
    text
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9FY2hvLnRzIl0sIm5hbWVzIjpbIm1vZGUiLCJuYW1lIiwiaGVscCIsInByb2Nlc3NvciIsImNvbnRleHQiLCJsaW5lIiwic2VuZEFjdGl2aXR5IiwidHlwZSIsInRleHQiLCJzdWJzdHIiLCJKU09OIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQWI7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHLE1BQWI7OztBQUVBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZCxTQUFPO0FBQ0wsMEJBQXNCLGtEQURqQjtBQUVMLDRCQUF3QjtBQUZuQixHQUFQO0FBSUQ7O0FBRUQsZUFBZUMsU0FBZixDQUF5QkMsT0FBekIsRUFBK0NDLElBQS9DLEVBQTZEO0FBQzNELFFBQU1ELE9BQU8sQ0FBQ0UsWUFBUixDQUFxQjtBQUN6QkMsSUFBQUEsSUFBSSxFQUFFLFNBRG1CO0FBRXpCQyxJQUFBQSxJQUFJLEVBQUU7QUFGbUIsR0FBckIsQ0FBTjtBQUtBSCxFQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0ksTUFBTCxDQUFZLENBQVosQ0FBUDtBQUVBLFFBQU1ELElBQUksR0FBR0gsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLEdBQVosR0FBa0IsZ0NBQWtCLE1BQU1LLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixJQUFYLENBQXhCLEtBQTZDLGdDQUEvRCxHQUFrR0EsSUFBL0c7QUFFQSxRQUFNRCxPQUFPLENBQUNFLFlBQVIsQ0FBcUI7QUFDekJDLElBQUFBLElBQUksRUFBRSxTQURtQjtBQUV6QkMsSUFBQUE7QUFGeUIsR0FBckIsQ0FBTjtBQUlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHVybkNvbnRleHQgfSBmcm9tICdib3RidWlsZGVyJztcbmltcG9ydCBvbkVycm9yUmVzdW1lTmV4dCBmcm9tICdvbi1lcnJvci1yZXN1bWUtbmV4dCc7XG5cbmNvbnN0IG1vZGUgPSAnbGluZSc7XG5jb25zdCBuYW1lID0gJ0VjaG8nO1xuXG5mdW5jdGlvbiBoZWxwKCkge1xuICByZXR1cm4ge1xuICAgICdlY2hvIEhlbGxvLCBXb3JsZCEnOiAnRWNobyBiYWNrIHRoZSBtZXNzYWdlIGFmdGVyIGRlc2VyaWFsaXplZCBhcyBKU09OJyxcbiAgICAnZWNobyBcIkhlbGxvXFxuV29ybGQhXCInOiAnUGFyc2UgdGhlIG1lc3NhZ2UgYXMgSlNPTiBhbmQgZWNobyBiYWNrJ1xuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzb3IoY29udGV4dDogVHVybkNvbnRleHQsIGxpbmU6IHN0cmluZykge1xuICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XG4gICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgIHRleHQ6ICdFY2hvaW5nIGJhY2sgaW4gYSBzZXBhcmF0ZSBhY3Rpdml0eS4nXG4gIH0pO1xuXG4gIGxpbmUgPSBsaW5lLnN1YnN0cig1KTtcblxuICBjb25zdCB0ZXh0ID0gbGluZVswXSA9PT0gJ1wiJyA/IG9uRXJyb3JSZXN1bWVOZXh0KCgpID0+IEpTT04ucGFyc2UobGluZSkpIHx8ICdbRXJyb3Igd2hpbGUgcGFyc2luZyB0aGUgSlNPTl0nIDogbGluZTtcblxuICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XG4gICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgIHRleHRcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGhlbHAsIG1vZGUsIG5hbWUsIHByb2Nlc3NvciB9XG4iXX0=