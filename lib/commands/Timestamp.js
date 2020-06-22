"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;

var _delay = _interopRequireDefault(require("delay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const name = 'Timestamp grouping';
exports.name = name;

function help() {
  return {
    'timestamp': 'Show 4 messages at different time for testing timestamp grouping'
  };
}

async function processor(context, arg) {
  await context.sendActivity({
    text: 'I am going to send 5 messages at different time _t_.',
    type: 'message'
  });
  await context.sendActivity({
    text: 'First message at time _t_ = 0.',
    type: 'message'
  });
  await (0, _delay.default)(1000);
  await context.sendActivity({
    text: 'At time _t_ = 1.',
    type: 'message'
  });
  await (0, _delay.default)(2000);
  await context.sendActivity({
    text: 'At time _t_ = 3.',
    type: 'message'
  });
  await (0, _delay.default)(3000);
  await context.sendActivity({
    text: 'At time _t_ = 6.',
    type: 'message'
  });
  await (0, _delay.default)(4000);
  await context.sendActivity({
    text: 'Final message at time _t_ = 10.',
    type: 'message'
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9UaW1lc3RhbXAudHMiXSwibmFtZXMiOlsibmFtZSIsImhlbHAiLCJwcm9jZXNzb3IiLCJjb250ZXh0IiwiYXJnIiwic2VuZEFjdGl2aXR5IiwidGV4dCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBR0EsTUFBTUEsSUFBSSxHQUFHLG9CQUFiOzs7QUFFQSxTQUFTQyxJQUFULEdBQWdCO0FBQ2QsU0FBTztBQUNMLGlCQUFhO0FBRFIsR0FBUDtBQUdEOztBQUVELGVBQWVDLFNBQWYsQ0FBeUJDLE9BQXpCLEVBQStDQyxHQUEvQyxFQUE2RDtBQUMzRCxRQUFNRCxPQUFPLENBQUNFLFlBQVIsQ0FBcUI7QUFDekJDLElBQUFBLElBQUksRUFBRSxzREFEbUI7QUFFekJDLElBQUFBLElBQUksRUFBRTtBQUZtQixHQUFyQixDQUFOO0FBS0EsUUFBTUosT0FBTyxDQUFDRSxZQUFSLENBQXFCO0FBQ3pCQyxJQUFBQSxJQUFJLEVBQUUsZ0NBRG1CO0FBRXpCQyxJQUFBQSxJQUFJLEVBQUU7QUFGbUIsR0FBckIsQ0FBTjtBQUtBLFFBQU0sb0JBQU0sSUFBTixDQUFOO0FBRUEsUUFBTUosT0FBTyxDQUFDRSxZQUFSLENBQXFCO0FBQ3pCQyxJQUFBQSxJQUFJLEVBQUUsa0JBRG1CO0FBRXpCQyxJQUFBQSxJQUFJLEVBQUU7QUFGbUIsR0FBckIsQ0FBTjtBQUtBLFFBQU0sb0JBQU0sSUFBTixDQUFOO0FBRUEsUUFBTUosT0FBTyxDQUFDRSxZQUFSLENBQXFCO0FBQ3pCQyxJQUFBQSxJQUFJLEVBQUUsa0JBRG1CO0FBRXpCQyxJQUFBQSxJQUFJLEVBQUU7QUFGbUIsR0FBckIsQ0FBTjtBQUtBLFFBQU0sb0JBQU0sSUFBTixDQUFOO0FBRUEsUUFBTUosT0FBTyxDQUFDRSxZQUFSLENBQXFCO0FBQ3pCQyxJQUFBQSxJQUFJLEVBQUUsa0JBRG1CO0FBRXpCQyxJQUFBQSxJQUFJLEVBQUU7QUFGbUIsR0FBckIsQ0FBTjtBQUtBLFFBQU0sb0JBQU0sSUFBTixDQUFOO0FBRUEsUUFBTUosT0FBTyxDQUFDRSxZQUFSLENBQXFCO0FBQ3pCQyxJQUFBQSxJQUFJLEVBQUUsaUNBRG1CO0FBRXpCQyxJQUFBQSxJQUFJLEVBQUU7QUFGbUIsR0FBckIsQ0FBTjtBQUlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlbGF5IGZyb20gJ2RlbGF5JztcbmltcG9ydCB7IFR1cm5Db250ZXh0IH0gZnJvbSAnYm90YnVpbGRlcic7XG5cbmNvbnN0IG5hbWUgPSAnVGltZXN0YW1wIGdyb3VwaW5nJztcblxuZnVuY3Rpb24gaGVscCgpIHtcbiAgcmV0dXJuIHtcbiAgICAndGltZXN0YW1wJzogJ1Nob3cgNCBtZXNzYWdlcyBhdCBkaWZmZXJlbnQgdGltZSBmb3IgdGVzdGluZyB0aW1lc3RhbXAgZ3JvdXBpbmcnXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3Nvcihjb250ZXh0OiBUdXJuQ29udGV4dCwgYXJnPzogc3RyaW5nKSB7XG4gIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcbiAgICB0ZXh0OiAnSSBhbSBnb2luZyB0byBzZW5kIDUgbWVzc2FnZXMgYXQgZGlmZmVyZW50IHRpbWUgX3RfLicsXG4gICAgdHlwZTogJ21lc3NhZ2UnXG4gIH0pO1xuXG4gIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcbiAgICB0ZXh0OiAnRmlyc3QgbWVzc2FnZSBhdCB0aW1lIF90XyA9IDAuJyxcbiAgICB0eXBlOiAnbWVzc2FnZSdcbiAgfSk7XG5cbiAgYXdhaXQgZGVsYXkoMTAwMCk7XG5cbiAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgIHRleHQ6ICdBdCB0aW1lIF90XyA9IDEuJyxcbiAgICB0eXBlOiAnbWVzc2FnZSdcbiAgfSk7XG5cbiAgYXdhaXQgZGVsYXkoMjAwMCk7XG5cbiAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgIHRleHQ6ICdBdCB0aW1lIF90XyA9IDMuJyxcbiAgICB0eXBlOiAnbWVzc2FnZSdcbiAgfSk7XG5cbiAgYXdhaXQgZGVsYXkoMzAwMCk7XG5cbiAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgIHRleHQ6ICdBdCB0aW1lIF90XyA9IDYuJyxcbiAgICB0eXBlOiAnbWVzc2FnZSdcbiAgfSk7XG5cbiAgYXdhaXQgZGVsYXkoNDAwMCk7XG5cbiAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgIHRleHQ6ICdGaW5hbCBtZXNzYWdlIGF0IHRpbWUgX3RfID0gMTAuJyxcbiAgICB0eXBlOiAnbWVzc2FnZSdcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGhlbHAsIG5hbWUsIHByb2Nlc3NvciB9XG4iXX0=