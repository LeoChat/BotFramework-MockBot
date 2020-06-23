"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'Image attachment';
exports.name = name;

function help() {
  return {
    'image': 'Show an image attachment'
  };
}

async function processor(context) {
  const {
    PUBLIC_URL
  } = process.env;
  await context.sendActivity({
    type: 'message',
    attachments: [{
      contentType: 'image/jpeg',
      contentUrl: `${PUBLIC_URL}assets/surface1.jpg`,
      name: 'Microsoft Surface'
    }]
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9JbWFnZS50cyJdLCJuYW1lcyI6WyJuYW1lIiwiaGVscCIsInByb2Nlc3NvciIsImNvbnRleHQiLCJQVUJMSUNfVVJMIiwicHJvY2VzcyIsImVudiIsInNlbmRBY3Rpdml0eSIsInR5cGUiLCJhdHRhY2htZW50cyIsImNvbnRlbnRUeXBlIiwiY29udGVudFVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsa0JBQWI7OztBQUVBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZCxTQUFPO0FBQ0wsYUFBUztBQURKLEdBQVA7QUFHRDs7QUFFRCxlQUFlQyxTQUFmLENBQXlCQyxPQUF6QixFQUErQztBQUM3QyxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBaUJDLE9BQU8sQ0FBQ0MsR0FBL0I7QUFFQSxRQUFNSCxPQUFPLENBQUNJLFlBQVIsQ0FBcUI7QUFDekJDLElBQUFBLElBQUksRUFBRSxTQURtQjtBQUV6QkMsSUFBQUEsV0FBVyxFQUFFLENBQUM7QUFDWkMsTUFBQUEsV0FBVyxFQUFFLFlBREQ7QUFFWkMsTUFBQUEsVUFBVSxFQUFHLEdBQUdQLFVBQVkscUJBRmhCO0FBR1pKLE1BQUFBLElBQUksRUFBRTtBQUhNLEtBQUQ7QUFGWSxHQUFyQixDQUFOO0FBUUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUdXJuQ29udGV4dCB9IGZyb20gJ2JvdGJ1aWxkZXInO1xuXG5jb25zdCBuYW1lID0gJ0ltYWdlIGF0dGFjaG1lbnQnO1xuXG5mdW5jdGlvbiBoZWxwKCkge1xuICByZXR1cm4ge1xuICAgICdpbWFnZSc6ICdTaG93IGFuIGltYWdlIGF0dGFjaG1lbnQnXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3Nvcihjb250ZXh0OiBUdXJuQ29udGV4dCkge1xuICBjb25zdCB7IFBVQkxJQ19VUkwgfSA9IHByb2Nlc3MuZW52O1xuXG4gIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcbiAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgYXR0YWNobWVudHM6IFt7XG4gICAgICBjb250ZW50VHlwZTogJ2ltYWdlL2pwZWcnLFxuICAgICAgY29udGVudFVybDogYCR7IFBVQkxJQ19VUkwgfWFzc2V0cy9zdXJmYWNlMS5qcGdgLFxuICAgICAgbmFtZTogJ01pY3Jvc29mdCBTdXJmYWNlJ1xuICAgIH1dXG4gIH0pO1xufVxuXG5leHBvcnQgeyBoZWxwLCBuYW1lLCBwcm9jZXNzb3IgfVxuIl19