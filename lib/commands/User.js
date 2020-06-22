"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'User ID';
exports.name = name;

function help() {
  return {
    'user': 'Dump the user ID and username',
    'user id': 'Dump the user ID',
    'user name': 'Dump the username'
  };
}

async function processor(context, arg = '') {
  switch (arg.trim().toLowerCase()) {
    case 'id':
      await context.sendActivity({
        text: `Your user ID is \`${context.activity.from.id}\`.`,
        type: 'message'
      });
      break;

    case 'name':
      await context.sendActivity({
        text: `Your user name is "${context.activity.from.name}".`,
        type: 'message'
      });
      break;

    default:
      await context.sendActivity({
        text: `Your user ID is \`${context.activity.from.id}\`.\n\nAnd your user name is "${context.activity.from.name}".`,
        type: 'message'
      });
      break;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9Vc2VyLnRzIl0sIm5hbWVzIjpbIm5hbWUiLCJoZWxwIiwicHJvY2Vzc29yIiwiY29udGV4dCIsImFyZyIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInNlbmRBY3Rpdml0eSIsInRleHQiLCJhY3Rpdml0eSIsImZyb20iLCJpZCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLFNBQWI7OztBQUVBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZCxTQUFPO0FBQ0wsWUFBUSwrQkFESDtBQUVMLGVBQVcsa0JBRk47QUFHTCxpQkFBYTtBQUhSLEdBQVA7QUFLRDs7QUFFRCxlQUFlQyxTQUFmLENBQXlCQyxPQUF6QixFQUErQ0MsR0FBVyxHQUFHLEVBQTdELEVBQWlFO0FBQy9ELFVBQVFBLEdBQUcsQ0FBQ0MsSUFBSixHQUFXQyxXQUFYLEVBQVI7QUFDRSxTQUFLLElBQUw7QUFDRSxZQUFNSCxPQUFPLENBQUNJLFlBQVIsQ0FBcUI7QUFDekJDLFFBQUFBLElBQUksRUFBRyxxQkFBcUJMLE9BQU8sQ0FBQ00sUUFBUixDQUFpQkMsSUFBakIsQ0FBc0JDLEVBQUksS0FEN0I7QUFFekJDLFFBQUFBLElBQUksRUFBRTtBQUZtQixPQUFyQixDQUFOO0FBS0E7O0FBRUYsU0FBSyxNQUFMO0FBQ0UsWUFBTVQsT0FBTyxDQUFDSSxZQUFSLENBQXFCO0FBQ3pCQyxRQUFBQSxJQUFJLEVBQUcsc0JBQXNCTCxPQUFPLENBQUNNLFFBQVIsQ0FBaUJDLElBQWpCLENBQXNCVixJQUFNLElBRGhDO0FBRXpCWSxRQUFBQSxJQUFJLEVBQUU7QUFGbUIsT0FBckIsQ0FBTjtBQUtBOztBQUVGO0FBQ0UsWUFBTVQsT0FBTyxDQUFDSSxZQUFSLENBQXFCO0FBQ3pCQyxRQUFBQSxJQUFJLEVBQUcscUJBQXFCTCxPQUFPLENBQUNNLFFBQVIsQ0FBaUJDLElBQWpCLENBQXNCQyxFQUFJLGlDQUFpQ1IsT0FBTyxDQUFDTSxRQUFSLENBQWlCQyxJQUFqQixDQUFzQlYsSUFBTSxJQUQxRjtBQUV6QlksUUFBQUEsSUFBSSxFQUFFO0FBRm1CLE9BQXJCLENBQU47QUFLQTtBQXZCSjtBQXlCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR1cm5Db250ZXh0IH0gZnJvbSAnYm90YnVpbGRlcic7XG5cbmNvbnN0IG5hbWUgPSAnVXNlciBJRCc7XG5cbmZ1bmN0aW9uIGhlbHAoKSB7XG4gIHJldHVybiB7XG4gICAgJ3VzZXInOiAnRHVtcCB0aGUgdXNlciBJRCBhbmQgdXNlcm5hbWUnLFxuICAgICd1c2VyIGlkJzogJ0R1bXAgdGhlIHVzZXIgSUQnLFxuICAgICd1c2VyIG5hbWUnOiAnRHVtcCB0aGUgdXNlcm5hbWUnXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3Nvcihjb250ZXh0OiBUdXJuQ29udGV4dCwgYXJnOiBzdHJpbmcgPSAnJykge1xuICBzd2l0Y2ggKGFyZy50cmltKCkudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2lkJzpcbiAgICAgIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcbiAgICAgICAgdGV4dDogYFlvdXIgdXNlciBJRCBpcyBcXGAkeyBjb250ZXh0LmFjdGl2aXR5LmZyb20uaWQgfVxcYC5gLFxuICAgICAgICB0eXBlOiAnbWVzc2FnZSdcbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ25hbWUnOlxuICAgICAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgICAgICB0ZXh0OiBgWW91ciB1c2VyIG5hbWUgaXMgXCIkeyBjb250ZXh0LmFjdGl2aXR5LmZyb20ubmFtZSB9XCIuYCxcbiAgICAgICAgdHlwZTogJ21lc3NhZ2UnXG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgICAgICB0ZXh0OiBgWW91ciB1c2VyIElEIGlzIFxcYCR7IGNvbnRleHQuYWN0aXZpdHkuZnJvbS5pZCB9XFxgLlxcblxcbkFuZCB5b3VyIHVzZXIgbmFtZSBpcyBcIiR7IGNvbnRleHQuYWN0aXZpdHkuZnJvbS5uYW1lIH1cIi5gLFxuICAgICAgICB0eXBlOiAnbWVzc2FnZSdcbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcbiAgfVxufVxuXG5leHBvcnQgeyBoZWxwLCBuYW1lLCBwcm9jZXNzb3IgfVxuIl19