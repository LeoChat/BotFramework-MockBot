"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'Unknown type of activity or attachments';
exports.name = name;

function help() {
  return {
    'unknown activity': 'Show an activity of unknown type',
    'unknown attachment': 'Show an attachment of unknown type'
  };
}

async function processor(context, arg = '') {
  switch (arg.trim().toLowerCase()) {
    case 'attachment':
      await context.sendActivity({
        type: 'message',
        attachments: [{
          contentType: 'x-unknown-attachment',
          content: {}
        }]
      });
      break;

    case 'activity':
    default:
      await context.sendActivity({
        type: 'x-unknown-activity',
        attachments: [{
          contentType: 'x-unknown-attachment',
          content: {}
        }]
      });
      break;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9Vbmtub3duLnRzIl0sIm5hbWVzIjpbIm5hbWUiLCJoZWxwIiwicHJvY2Vzc29yIiwiY29udGV4dCIsImFyZyIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInNlbmRBY3Rpdml0eSIsInR5cGUiLCJhdHRhY2htZW50cyIsImNvbnRlbnRUeXBlIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcseUNBQWI7OztBQUVBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZCxTQUFPO0FBQ0wsd0JBQW9CLGtDQURmO0FBRUwsMEJBQXNCO0FBRmpCLEdBQVA7QUFJRDs7QUFFRCxlQUFlQyxTQUFmLENBQXlCQyxPQUF6QixFQUErQ0MsR0FBVyxHQUFHLEVBQTdELEVBQWlFO0FBQy9ELFVBQVFBLEdBQUcsQ0FBQ0MsSUFBSixHQUFXQyxXQUFYLEVBQVI7QUFDRSxTQUFLLFlBQUw7QUFDRSxZQUFNSCxPQUFPLENBQUNJLFlBQVIsQ0FBcUI7QUFDekJDLFFBQUFBLElBQUksRUFBRSxTQURtQjtBQUV6QkMsUUFBQUEsV0FBVyxFQUFFLENBQUM7QUFDWkMsVUFBQUEsV0FBVyxFQUFFLHNCQUREO0FBRVpDLFVBQUFBLE9BQU8sRUFBRTtBQUZHLFNBQUQ7QUFGWSxPQUFyQixDQUFOO0FBUUE7O0FBRUYsU0FBSyxVQUFMO0FBQ0E7QUFDRSxZQUFNUixPQUFPLENBQUNJLFlBQVIsQ0FBcUI7QUFDekJDLFFBQUFBLElBQUksRUFBRSxvQkFEbUI7QUFFekJDLFFBQUFBLFdBQVcsRUFBRSxDQUFDO0FBQ1pDLFVBQUFBLFdBQVcsRUFBRSxzQkFERDtBQUVaQyxVQUFBQSxPQUFPLEVBQUU7QUFGRyxTQUFEO0FBRlksT0FBckIsQ0FBTjtBQVFBO0FBdEJKO0FBd0JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHVybkNvbnRleHQgfSBmcm9tICdib3RidWlsZGVyJztcblxuY29uc3QgbmFtZSA9ICdVbmtub3duIHR5cGUgb2YgYWN0aXZpdHkgb3IgYXR0YWNobWVudHMnO1xuXG5mdW5jdGlvbiBoZWxwKCkge1xuICByZXR1cm4ge1xuICAgICd1bmtub3duIGFjdGl2aXR5JzogJ1Nob3cgYW4gYWN0aXZpdHkgb2YgdW5rbm93biB0eXBlJyxcbiAgICAndW5rbm93biBhdHRhY2htZW50JzogJ1Nob3cgYW4gYXR0YWNobWVudCBvZiB1bmtub3duIHR5cGUnXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3Nvcihjb250ZXh0OiBUdXJuQ29udGV4dCwgYXJnOiBzdHJpbmcgPSAnJykge1xuICBzd2l0Y2ggKGFyZy50cmltKCkudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2F0dGFjaG1lbnQnOlxuICAgICAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgICAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgICAgIGF0dGFjaG1lbnRzOiBbe1xuICAgICAgICAgIGNvbnRlbnRUeXBlOiAneC11bmtub3duLWF0dGFjaG1lbnQnLFxuICAgICAgICAgIGNvbnRlbnQ6IHt9XG4gICAgICAgIH1dXG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdhY3Rpdml0eSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcbiAgICAgICAgdHlwZTogJ3gtdW5rbm93bi1hY3Rpdml0eScsXG4gICAgICAgIGF0dGFjaG1lbnRzOiBbe1xuICAgICAgICAgIGNvbnRlbnRUeXBlOiAneC11bmtub3duLWF0dGFjaG1lbnQnLFxuICAgICAgICAgIGNvbnRlbnQ6IHt9XG4gICAgICAgIH1dXG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZXhwb3J0IHsgaGVscCwgbmFtZSwgcHJvY2Vzc29yIH1cbiJdfQ==