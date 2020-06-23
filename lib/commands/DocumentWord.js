"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'Word document attachment';
exports.name = name;

function help() {
  return {
    'document-word': 'Show a Word document as attachment'
  };
}

async function processor(context) {
  const {
    PUBLIC_URL
  } = process.env;
  await context.sendActivity({
    type: 'message',
    attachments: [{
      contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      contentUrl: `${PUBLIC_URL}assets/test.docx`,
      name: 'test.docx'
    }]
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9Eb2N1bWVudFdvcmQudHMiXSwibmFtZXMiOlsibmFtZSIsImhlbHAiLCJwcm9jZXNzb3IiLCJjb250ZXh0IiwiUFVCTElDX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJzZW5kQWN0aXZpdHkiLCJ0eXBlIiwiYXR0YWNobWVudHMiLCJjb250ZW50VHlwZSIsImNvbnRlbnRVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLDBCQUFiOzs7QUFFQSxTQUFTQyxJQUFULEdBQWdCO0FBQ2QsU0FBTztBQUNMLHFCQUFpQjtBQURaLEdBQVA7QUFHRDs7QUFFRCxlQUFlQyxTQUFmLENBQXlCQyxPQUF6QixFQUErQztBQUM3QyxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBaUJDLE9BQU8sQ0FBQ0MsR0FBL0I7QUFFQSxRQUFNSCxPQUFPLENBQUNJLFlBQVIsQ0FBcUI7QUFDekJDLElBQUFBLElBQUksRUFBRSxTQURtQjtBQUV6QkMsSUFBQUEsV0FBVyxFQUFFLENBQUM7QUFDWkMsTUFBQUEsV0FBVyxFQUFFLHlFQUREO0FBRVpDLE1BQUFBLFVBQVUsRUFBRyxHQUFHUCxVQUFZLGtCQUZoQjtBQUdaSixNQUFBQSxJQUFJLEVBQUU7QUFITSxLQUFEO0FBRlksR0FBckIsQ0FBTjtBQVFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHVybkNvbnRleHQgfSBmcm9tICdib3RidWlsZGVyJztcblxuY29uc3QgbmFtZSA9ICdXb3JkIGRvY3VtZW50IGF0dGFjaG1lbnQnO1xuXG5mdW5jdGlvbiBoZWxwKCkge1xuICByZXR1cm4ge1xuICAgICdkb2N1bWVudC13b3JkJzogJ1Nob3cgYSBXb3JkIGRvY3VtZW50IGFzIGF0dGFjaG1lbnQnXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3Nvcihjb250ZXh0OiBUdXJuQ29udGV4dCkge1xuICBjb25zdCB7IFBVQkxJQ19VUkwgfSA9IHByb2Nlc3MuZW52O1xuXG4gIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcbiAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgYXR0YWNobWVudHM6IFt7XG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50JyxcbiAgICAgIGNvbnRlbnRVcmw6IGAkeyBQVUJMSUNfVVJMIH1hc3NldHMvdGVzdC5kb2N4YCxcbiAgICAgIG5hbWU6ICd0ZXN0LmRvY3gnXG4gICAgfV1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IGhlbHAsIG5hbWUsIHByb2Nlc3NvciB9XG4iXX0=