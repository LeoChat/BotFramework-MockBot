"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'Typing indicator';
exports.name = name;

function sleep(ms = 2000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function help() {
  return {
    'typing 1': 'Send a typing indicator without ending it',
    'typing': 'Send a typing indicator and end it with a message'
  };
}

async function processor(context, arg = '') {
  switch (arg.trim()) {
    case '1':
      await context.sendActivity({
        type: 'message',
        text: 'Typing indicator should go away after 5 seconds.'
      });
      await context.sendActivity({
        type: 'typing'
      });
      break;

    default:
      await context.sendActivity({
        type: 'message',
        text: 'I am sending typing, will send another message 2 seconds afterward.'
      });
      await context.sendActivity({
        type: 'typing'
      });
      await sleep();
      await context.sendActivity({
        type: 'message',
        text: 'This message should stop the typing indicator.'
      });
      return;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9UeXBpbmcudHMiXSwibmFtZXMiOlsibmFtZSIsInNsZWVwIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJoZWxwIiwicHJvY2Vzc29yIiwiY29udGV4dCIsImFyZyIsInRyaW0iLCJzZW5kQWN0aXZpdHkiLCJ0eXBlIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsa0JBQWI7OztBQUVBLFNBQVNDLEtBQVQsQ0FBZUMsRUFBRSxHQUFHLElBQXBCLEVBQTBCO0FBQ3hCLFNBQU8sSUFBSUMsT0FBSixDQUFZQyxPQUFPLElBQUlDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVRixFQUFWLENBQWpDLENBQVA7QUFDRDs7QUFFRCxTQUFTSSxJQUFULEdBQWdCO0FBQ2QsU0FBTztBQUNMLGdCQUFZLDJDQURQO0FBRUwsY0FBVTtBQUZMLEdBQVA7QUFJRDs7QUFFRCxlQUFlQyxTQUFmLENBQXlCQyxPQUF6QixFQUErQ0MsR0FBVyxHQUFHLEVBQTdELEVBQWlFO0FBQy9ELFVBQVFBLEdBQUcsQ0FBQ0MsSUFBSixFQUFSO0FBQ0UsU0FBSyxHQUFMO0FBQ0UsWUFBTUYsT0FBTyxDQUFDRyxZQUFSLENBQXFCO0FBQ3pCQyxRQUFBQSxJQUFJLEVBQUUsU0FEbUI7QUFFekJDLFFBQUFBLElBQUksRUFBRTtBQUZtQixPQUFyQixDQUFOO0FBS0EsWUFBTUwsT0FBTyxDQUFDRyxZQUFSLENBQXFCO0FBQUVDLFFBQUFBLElBQUksRUFBRTtBQUFSLE9BQXJCLENBQU47QUFFQTs7QUFFRjtBQUNFLFlBQU1KLE9BQU8sQ0FBQ0csWUFBUixDQUFxQjtBQUN6QkMsUUFBQUEsSUFBSSxFQUFFLFNBRG1CO0FBRXpCQyxRQUFBQSxJQUFJLEVBQUU7QUFGbUIsT0FBckIsQ0FBTjtBQUtBLFlBQU1MLE9BQU8sQ0FBQ0csWUFBUixDQUFxQjtBQUN6QkMsUUFBQUEsSUFBSSxFQUFFO0FBRG1CLE9BQXJCLENBQU47QUFJQSxZQUFNWCxLQUFLLEVBQVg7QUFFQSxZQUFNTyxPQUFPLENBQUNHLFlBQVIsQ0FBcUI7QUFDekJDLFFBQUFBLElBQUksRUFBRSxTQURtQjtBQUV6QkMsUUFBQUEsSUFBSSxFQUFFO0FBRm1CLE9BQXJCLENBQU47QUFLQTtBQTVCSjtBQThCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR1cm5Db250ZXh0IH0gZnJvbSAnYm90YnVpbGRlcic7XG5cbmNvbnN0IG5hbWUgPSAnVHlwaW5nIGluZGljYXRvcic7XG5cbmZ1bmN0aW9uIHNsZWVwKG1zID0gMjAwMCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmZ1bmN0aW9uIGhlbHAoKSB7XG4gIHJldHVybiB7XG4gICAgJ3R5cGluZyAxJzogJ1NlbmQgYSB0eXBpbmcgaW5kaWNhdG9yIHdpdGhvdXQgZW5kaW5nIGl0JyxcbiAgICAndHlwaW5nJzogJ1NlbmQgYSB0eXBpbmcgaW5kaWNhdG9yIGFuZCBlbmQgaXQgd2l0aCBhIG1lc3NhZ2UnXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3Nvcihjb250ZXh0OiBUdXJuQ29udGV4dCwgYXJnOiBzdHJpbmcgPSAnJykge1xuICBzd2l0Y2ggKGFyZy50cmltKCkpIHtcbiAgICBjYXNlICcxJzpcbiAgICAgIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcbiAgICAgICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgICAgICB0ZXh0OiAnVHlwaW5nIGluZGljYXRvciBzaG91bGQgZ28gYXdheSBhZnRlciA1IHNlY29uZHMuJ1xuICAgICAgfSk7XG5cbiAgICAgIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHsgdHlwZTogJ3R5cGluZycgfSk7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcbiAgICAgICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgICAgICB0ZXh0OiAnSSBhbSBzZW5kaW5nIHR5cGluZywgd2lsbCBzZW5kIGFub3RoZXIgbWVzc2FnZSAyIHNlY29uZHMgYWZ0ZXJ3YXJkLidcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XG4gICAgICAgIHR5cGU6ICd0eXBpbmcnXG4gICAgICB9KTtcblxuICAgICAgYXdhaXQgc2xlZXAoKTtcblxuICAgICAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgICAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgICAgIHRleHQ6ICdUaGlzIG1lc3NhZ2Ugc2hvdWxkIHN0b3AgdGhlIHR5cGluZyBpbmRpY2F0b3IuJ1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgeyBoZWxwLCBuYW1lLCBwcm9jZXNzb3IgfVxuIl19