"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;

var _delay = _interopRequireDefault(require("delay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EVENT_ACTIVITY = {
  type: 'event',
  name: 'sample:backchannel',
  value: {
    message: 'This is one of the content of the "event" activity.'
  }
};
const name = 'Demo for backchannel sample';
exports.name = name;

function help() {
  return {
    'sample:backchannel': 'Demo for backchannel sample'
  };
}

async function processor(context) {
  await context.sendActivity({
    type: 'message',
    text: `I am sending an \`event\` activity like below:\n\n\`\`\`\n${JSON.stringify(EVENT_ACTIVITY, null, 2)}\n\`\`\``
  });
  await (0, _delay.default)(1000);
  await context.sendActivity(EVENT_ACTIVITY);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9TYW1wbGVCYWNrY2hhbm5lbC50cyJdLCJuYW1lcyI6WyJFVkVOVF9BQ1RJVklUWSIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJtZXNzYWdlIiwiaGVscCIsInByb2Nlc3NvciIsImNvbnRleHQiLCJzZW5kQWN0aXZpdHkiLCJ0ZXh0IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFHQSxNQUFNQSxjQUFjLEdBQUc7QUFDckJDLEVBQUFBLElBQUksRUFBRSxPQURlO0FBRXJCQyxFQUFBQSxJQUFJLEVBQUUsb0JBRmU7QUFHckJDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxPQUFPLEVBQUU7QUFESjtBQUhjLENBQXZCO0FBUUEsTUFBTUYsSUFBSSxHQUFHLDZCQUFiOzs7QUFFQSxTQUFTRyxJQUFULEdBQWdCO0FBQ2QsU0FBTztBQUNMLDBCQUFzQjtBQURqQixHQUFQO0FBR0Q7O0FBRUQsZUFBZUMsU0FBZixDQUF5QkMsT0FBekIsRUFBK0M7QUFDN0MsUUFBTUEsT0FBTyxDQUFDQyxZQUFSLENBQXFCO0FBQ3pCUCxJQUFBQSxJQUFJLEVBQUUsU0FEbUI7QUFFekJRLElBQUFBLElBQUksRUFBRyw2REFBNkRDLElBQUksQ0FBQ0MsU0FBTCxDQUFlWCxjQUFmLEVBQStCLElBQS9CLEVBQXFDLENBQXJDLENBQXlDO0FBRnBGLEdBQXJCLENBQU47QUFLQSxRQUFNLG9CQUFNLElBQU4sQ0FBTjtBQUVBLFFBQU1PLE9BQU8sQ0FBQ0MsWUFBUixDQUFxQlIsY0FBckIsQ0FBTjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlbGF5IGZyb20gJ2RlbGF5JztcbmltcG9ydCB7IFR1cm5Db250ZXh0IH0gZnJvbSAnYm90YnVpbGRlcic7XG5cbmNvbnN0IEVWRU5UX0FDVElWSVRZID0ge1xuICB0eXBlOiAnZXZlbnQnLFxuICBuYW1lOiAnc2FtcGxlOmJhY2tjaGFubmVsJyxcbiAgdmFsdWU6IHtcbiAgICBtZXNzYWdlOiAnVGhpcyBpcyBvbmUgb2YgdGhlIGNvbnRlbnQgb2YgdGhlIFwiZXZlbnRcIiBhY3Rpdml0eS4nXG4gIH1cbn07XG5cbmNvbnN0IG5hbWUgPSAnRGVtbyBmb3IgYmFja2NoYW5uZWwgc2FtcGxlJztcblxuZnVuY3Rpb24gaGVscCgpIHtcbiAgcmV0dXJuIHtcbiAgICAnc2FtcGxlOmJhY2tjaGFubmVsJzogJ0RlbW8gZm9yIGJhY2tjaGFubmVsIHNhbXBsZSdcbiAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc29yKGNvbnRleHQ6IFR1cm5Db250ZXh0KSB7XG4gIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcbiAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgdGV4dDogYEkgYW0gc2VuZGluZyBhbiBcXGBldmVudFxcYCBhY3Rpdml0eSBsaWtlIGJlbG93OlxcblxcblxcYFxcYFxcYFxcbiR7IEpTT04uc3RyaW5naWZ5KEVWRU5UX0FDVElWSVRZLCBudWxsLCAyKSB9XFxuXFxgXFxgXFxgYFxuICB9KTtcblxuICBhd2FpdCBkZWxheSgxMDAwKTtcblxuICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eShFVkVOVF9BQ1RJVklUWSk7XG59XG5cbmV4cG9ydCB7IGhlbHAsIG5hbWUsIHByb2Nlc3NvciB9XG4iXX0=