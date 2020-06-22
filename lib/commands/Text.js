"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'Plain text message';
exports.name = name;

function help() {
  return {
    'text': 'Show a plain text message without rendering Markdown'
  };
}

async function processor(context) {
  await context.sendActivity({
    text: '** Plain text **\r\n\r\nLine 1\r\nLine 2\r\nLine 3',
    textFormat: 'plain',
    type: 'message'
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9UZXh0LnRzIl0sIm5hbWVzIjpbIm5hbWUiLCJoZWxwIiwicHJvY2Vzc29yIiwiY29udGV4dCIsInNlbmRBY3Rpdml0eSIsInRleHQiLCJ0ZXh0Rm9ybWF0IiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsb0JBQWI7OztBQUVBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZCxTQUFPO0FBQ0wsWUFBUTtBQURILEdBQVA7QUFHRDs7QUFFRCxlQUFlQyxTQUFmLENBQXlCQyxPQUF6QixFQUErQztBQUM3QyxRQUFNQSxPQUFPLENBQUNDLFlBQVIsQ0FBcUI7QUFDekJDLElBQUFBLElBQUksRUFBRSxvREFEbUI7QUFFekJDLElBQUFBLFVBQVUsRUFBRSxPQUZhO0FBR3pCQyxJQUFBQSxJQUFJLEVBQUU7QUFIbUIsR0FBckIsQ0FBTjtBQUtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHVybkNvbnRleHQgfSBmcm9tICdib3RidWlsZGVyJztcblxuY29uc3QgbmFtZSA9ICdQbGFpbiB0ZXh0IG1lc3NhZ2UnO1xuXG5mdW5jdGlvbiBoZWxwKCkge1xuICByZXR1cm4ge1xuICAgICd0ZXh0JzogJ1Nob3cgYSBwbGFpbiB0ZXh0IG1lc3NhZ2Ugd2l0aG91dCByZW5kZXJpbmcgTWFya2Rvd24nXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3Nvcihjb250ZXh0OiBUdXJuQ29udGV4dCkge1xuICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XG4gICAgdGV4dDogJyoqIFBsYWluIHRleHQgKipcXHJcXG5cXHJcXG5MaW5lIDFcXHJcXG5MaW5lIDJcXHJcXG5MaW5lIDMnLFxuICAgIHRleHRGb3JtYXQ6ICdwbGFpbicsXG4gICAgdHlwZTogJ21lc3NhZ2UnXG4gIH0pO1xufVxuXG5leHBvcnQgeyBoZWxwLCBuYW1lLCBwcm9jZXNzb3IgfVxuIl19