"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'SVG image attachment';
exports.name = name;

function help() {
  return {
    'image-svg': 'Show a SVG image attachment'
  };
}

async function processor(context) {
  const {
    PUBLIC_URL
  } = process.env;
  await context.sendActivity({
    type: 'message',
    attachments: [{
      contentType: 'image/svg+xml',
      contentUrl: `${PUBLIC_URL}assets/bf_square.svg`,
      name: 'Microsoft Bot Framework'
    }]
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9JbWFnZVNWRy50cyJdLCJuYW1lcyI6WyJuYW1lIiwiaGVscCIsInByb2Nlc3NvciIsImNvbnRleHQiLCJQVUJMSUNfVVJMIiwicHJvY2VzcyIsImVudiIsInNlbmRBY3Rpdml0eSIsInR5cGUiLCJhdHRhY2htZW50cyIsImNvbnRlbnRUeXBlIiwiY29udGVudFVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsc0JBQWI7OztBQUVBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZCxTQUFPO0FBQ0wsaUJBQWE7QUFEUixHQUFQO0FBR0Q7O0FBRUQsZUFBZUMsU0FBZixDQUF5QkMsT0FBekIsRUFBK0M7QUFDN0MsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQWlCQyxPQUFPLENBQUNDLEdBQS9CO0FBRUEsUUFBTUgsT0FBTyxDQUFDSSxZQUFSLENBQXFCO0FBQ3pCQyxJQUFBQSxJQUFJLEVBQUUsU0FEbUI7QUFFekJDLElBQUFBLFdBQVcsRUFBRSxDQUFDO0FBQ1pDLE1BQUFBLFdBQVcsRUFBRSxlQUREO0FBRVpDLE1BQUFBLFVBQVUsRUFBRyxHQUFHUCxVQUFZLHNCQUZoQjtBQUdaSixNQUFBQSxJQUFJLEVBQUU7QUFITSxLQUFEO0FBRlksR0FBckIsQ0FBTjtBQVFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHVybkNvbnRleHQgfSBmcm9tICdib3RidWlsZGVyJztcblxuY29uc3QgbmFtZSA9ICdTVkcgaW1hZ2UgYXR0YWNobWVudCc7XG5cbmZ1bmN0aW9uIGhlbHAoKSB7XG4gIHJldHVybiB7XG4gICAgJ2ltYWdlLXN2Zyc6ICdTaG93IGEgU1ZHIGltYWdlIGF0dGFjaG1lbnQnXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3Nvcihjb250ZXh0OiBUdXJuQ29udGV4dCkge1xuICBjb25zdCB7IFBVQkxJQ19VUkwgfSA9IHByb2Nlc3MuZW52O1xuXG4gIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcbiAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgYXR0YWNobWVudHM6IFt7XG4gICAgICBjb250ZW50VHlwZTogJ2ltYWdlL3N2Zyt4bWwnLFxuICAgICAgY29udGVudFVybDogYCR7IFBVQkxJQ19VUkwgfWFzc2V0cy9iZl9zcXVhcmUuc3ZnYCxcbiAgICAgIG5hbWU6ICdNaWNyb3NvZnQgQm90IEZyYW1ld29yaydcbiAgICB9XVxuICB9KTtcbn1cblxuZXhwb3J0IHsgaGVscCwgbmFtZSwgcHJvY2Vzc29yIH1cbiJdfQ==