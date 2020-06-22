"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'Audio attachment';
exports.name = name;

function help() {
  return {
    'audio': 'Show an audio attachment'
  };
}

async function processor(context) {
  const {
    PUBLIC_URL
  } = process.env;
  await context.sendActivity({
    type: 'message',
    text: '',
    attachments: [{
      contentType: 'audio/mpeg',
      contentUrl: `${PUBLIC_URL}assets/bftest.mp3`,
      name: 'BotFramework Test'
    }]
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9BdWRpby50cyJdLCJuYW1lcyI6WyJuYW1lIiwiaGVscCIsInByb2Nlc3NvciIsImNvbnRleHQiLCJQVUJMSUNfVVJMIiwicHJvY2VzcyIsImVudiIsInNlbmRBY3Rpdml0eSIsInR5cGUiLCJ0ZXh0IiwiYXR0YWNobWVudHMiLCJjb250ZW50VHlwZSIsImNvbnRlbnRVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLGtCQUFiOzs7QUFFQSxTQUFTQyxJQUFULEdBQWdCO0FBQ2QsU0FBTztBQUNMLGFBQVM7QUFESixHQUFQO0FBR0Q7O0FBRUQsZUFBZUMsU0FBZixDQUF5QkMsT0FBekIsRUFBK0M7QUFDN0MsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQWlCQyxPQUFPLENBQUNDLEdBQS9CO0FBRUEsUUFBTUgsT0FBTyxDQUFDSSxZQUFSLENBQXFCO0FBQ3pCQyxJQUFBQSxJQUFJLEVBQUUsU0FEbUI7QUFFekJDLElBQUFBLElBQUksRUFBRSxFQUZtQjtBQUd6QkMsSUFBQUEsV0FBVyxFQUFFLENBQUM7QUFDWkMsTUFBQUEsV0FBVyxFQUFFLFlBREQ7QUFFWkMsTUFBQUEsVUFBVSxFQUFHLEdBQUdSLFVBQVksbUJBRmhCO0FBR1pKLE1BQUFBLElBQUksRUFBRTtBQUhNLEtBQUQ7QUFIWSxHQUFyQixDQUFOO0FBU0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUdXJuQ29udGV4dCB9IGZyb20gJ2JvdGJ1aWxkZXInO1xuXG5jb25zdCBuYW1lID0gJ0F1ZGlvIGF0dGFjaG1lbnQnO1xuXG5mdW5jdGlvbiBoZWxwKCkge1xuICByZXR1cm4ge1xuICAgICdhdWRpbyc6ICdTaG93IGFuIGF1ZGlvIGF0dGFjaG1lbnQnXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3Nvcihjb250ZXh0OiBUdXJuQ29udGV4dCkge1xuICBjb25zdCB7IFBVQkxJQ19VUkwgfSA9IHByb2Nlc3MuZW52O1xuXG4gIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcbiAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgdGV4dDogJycsXG4gICAgYXR0YWNobWVudHM6IFt7XG4gICAgICBjb250ZW50VHlwZTogJ2F1ZGlvL21wZWcnLFxuICAgICAgY29udGVudFVybDogYCR7IFBVQkxJQ19VUkwgfWFzc2V0cy9iZnRlc3QubXAzYCxcbiAgICAgIG5hbWU6ICdCb3RGcmFtZXdvcmsgVGVzdCdcbiAgICB9XVxuICB9KTtcbn1cblxuZXhwb3J0IHsgaGVscCwgbmFtZSwgcHJvY2Vzc29yIH1cbiJdfQ==