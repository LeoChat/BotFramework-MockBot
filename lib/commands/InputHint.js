"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;

var _botbuilder = require("botbuilder");

const name = 'Input hint';
exports.name = name;

function help() {
  return {
    'input-hint accepting': 'Send an activity with input hint set to "accepting input"',
    'input-hint expecting': 'Send an activity with input hint set to "expecting input"',
    'input-hint ignoring': 'Send an activity with input hint set to "ignoring input"'
  };
}

async function sendInputHint(reference, inputHint) {
  const adapter = new _botbuilder.BotFrameworkAdapter({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
  });
  await adapter.continueConversation(reference, async context => {
    switch ((inputHint || '').trim().substr(0, 1)) {
      case 'a':
        await context.sendActivity({
          inputHint: 'acceptingInput',
          text: 'This activity is accepting input.',
          type: 'message'
        });
        break;

      case 'e':
        await context.sendActivity({
          inputHint: 'expectingInput',
          text: 'This activity is expecting input.\n\nIt should start the microphone if it was from a microphone.',
          type: 'message'
        });
        break;

      default:
        await context.sendActivity({
          inputHint: 'ignoringInput',
          text: 'This activity is ignoring input.\n\nIt should not start the microphone.',
          type: 'message'
        });
        break;
    }
  });
}

async function processor(context, ...inputHints) {
  (async function (reference) {
    // This loop is intentionally executed in a serial manner (instead of using Promise.all for parallelism)
    while (inputHints.length) {
      const inputHint = inputHints.shift();
      inputHint && (await sendInputHint(reference, inputHint));
    }
  })(_botbuilder.TurnContext.getConversationReference(context.activity));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9JbnB1dEhpbnQudHMiXSwibmFtZXMiOlsibmFtZSIsImhlbHAiLCJzZW5kSW5wdXRIaW50IiwicmVmZXJlbmNlIiwiaW5wdXRIaW50IiwiYWRhcHRlciIsIkJvdEZyYW1ld29ya0FkYXB0ZXIiLCJhcHBJZCIsInByb2Nlc3MiLCJlbnYiLCJNSUNST1NPRlRfQVBQX0lEIiwiYXBwUGFzc3dvcmQiLCJNSUNST1NPRlRfQVBQX1BBU1NXT1JEIiwiY29udGludWVDb252ZXJzYXRpb24iLCJjb250ZXh0IiwidHJpbSIsInN1YnN0ciIsInNlbmRBY3Rpdml0eSIsInRleHQiLCJ0eXBlIiwicHJvY2Vzc29yIiwiaW5wdXRIaW50cyIsImxlbmd0aCIsInNoaWZ0IiwiVHVybkNvbnRleHQiLCJnZXRDb252ZXJzYXRpb25SZWZlcmVuY2UiLCJhY3Rpdml0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBR0EsTUFBTUEsSUFBSSxHQUFHLFlBQWI7OztBQUVBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZCxTQUFPO0FBQ0wsNEJBQXdCLDJEQURuQjtBQUVMLDRCQUF3QiwyREFGbkI7QUFHTCwyQkFBdUI7QUFIbEIsR0FBUDtBQUtEOztBQUVELGVBQWVDLGFBQWYsQ0FBNkJDLFNBQTdCLEVBQXdDQyxTQUF4QyxFQUFtRDtBQUNqRCxRQUFNQyxPQUFPLEdBQUcsSUFBSUMsK0JBQUosQ0FBd0I7QUFDdENDLElBQUFBLEtBQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQURtQjtBQUV0Q0MsSUFBQUEsV0FBVyxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUc7QUFGYSxHQUF4QixDQUFoQjtBQUtBLFFBQU1QLE9BQU8sQ0FBQ1Esb0JBQVIsQ0FBNkJWLFNBQTdCLEVBQXdDLE1BQU1XLE9BQU4sSUFBaUI7QUFDN0QsWUFBUSxDQUFDVixTQUFTLElBQUksRUFBZCxFQUFrQlcsSUFBbEIsR0FBeUJDLE1BQXpCLENBQWdDLENBQWhDLEVBQW1DLENBQW5DLENBQVI7QUFDRSxXQUFLLEdBQUw7QUFDRSxjQUFNRixPQUFPLENBQUNHLFlBQVIsQ0FBcUI7QUFDekJiLFVBQUFBLFNBQVMsRUFBRSxnQkFEYztBQUV6QmMsVUFBQUEsSUFBSSxFQUFFLG1DQUZtQjtBQUd6QkMsVUFBQUEsSUFBSSxFQUFFO0FBSG1CLFNBQXJCLENBQU47QUFNQTs7QUFFRixXQUFLLEdBQUw7QUFDRSxjQUFNTCxPQUFPLENBQUNHLFlBQVIsQ0FBcUI7QUFDekJiLFVBQUFBLFNBQVMsRUFBRSxnQkFEYztBQUV6QmMsVUFBQUEsSUFBSSxFQUFFLGtHQUZtQjtBQUd6QkMsVUFBQUEsSUFBSSxFQUFFO0FBSG1CLFNBQXJCLENBQU47QUFNQTs7QUFFRjtBQUNFLGNBQU1MLE9BQU8sQ0FBQ0csWUFBUixDQUFxQjtBQUN6QmIsVUFBQUEsU0FBUyxFQUFFLGVBRGM7QUFFekJjLFVBQUFBLElBQUksRUFBRSx5RUFGbUI7QUFHekJDLFVBQUFBLElBQUksRUFBRTtBQUhtQixTQUFyQixDQUFOO0FBTUE7QUExQko7QUE0QkQsR0E3QkssQ0FBTjtBQThCRDs7QUFFRCxlQUFlQyxTQUFmLENBQXlCTixPQUF6QixFQUErQyxHQUFHTyxVQUFsRCxFQUF3RTtBQUN0RSxHQUFDLGdCQUFnQmxCLFNBQWhCLEVBQTJCO0FBQzFCO0FBQ0EsV0FBT2tCLFVBQVUsQ0FBQ0MsTUFBbEIsRUFBMEI7QUFDeEIsWUFBTWxCLFNBQVMsR0FBR2lCLFVBQVUsQ0FBQ0UsS0FBWCxFQUFsQjtBQUVBbkIsTUFBQUEsU0FBUyxLQUFJLE1BQU1GLGFBQWEsQ0FBQ0MsU0FBRCxFQUFZQyxTQUFaLENBQXZCLENBQVQ7QUFDRDtBQUNGLEdBUEQsRUFPR29CLHdCQUFZQyx3QkFBWixDQUFxQ1gsT0FBTyxDQUFDWSxRQUE3QyxDQVBIO0FBUUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3RGcmFtZXdvcmtBZGFwdGVyIH0gZnJvbSAnYm90YnVpbGRlcic7XG5pbXBvcnQgeyBUdXJuQ29udGV4dCB9IGZyb20gJ2JvdGJ1aWxkZXInO1xuXG5jb25zdCBuYW1lID0gJ0lucHV0IGhpbnQnO1xuXG5mdW5jdGlvbiBoZWxwKCkge1xuICByZXR1cm4ge1xuICAgICdpbnB1dC1oaW50IGFjY2VwdGluZyc6ICdTZW5kIGFuIGFjdGl2aXR5IHdpdGggaW5wdXQgaGludCBzZXQgdG8gXCJhY2NlcHRpbmcgaW5wdXRcIicsXG4gICAgJ2lucHV0LWhpbnQgZXhwZWN0aW5nJzogJ1NlbmQgYW4gYWN0aXZpdHkgd2l0aCBpbnB1dCBoaW50IHNldCB0byBcImV4cGVjdGluZyBpbnB1dFwiJyxcbiAgICAnaW5wdXQtaGludCBpZ25vcmluZyc6ICdTZW5kIGFuIGFjdGl2aXR5IHdpdGggaW5wdXQgaGludCBzZXQgdG8gXCJpZ25vcmluZyBpbnB1dFwiJ1xuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZW5kSW5wdXRIaW50KHJlZmVyZW5jZSwgaW5wdXRIaW50KSB7XG4gIGNvbnN0IGFkYXB0ZXIgPSBuZXcgQm90RnJhbWV3b3JrQWRhcHRlcih7XG4gICAgYXBwSWQ6IHByb2Nlc3MuZW52Lk1JQ1JPU09GVF9BUFBfSUQsXG4gICAgYXBwUGFzc3dvcmQ6IHByb2Nlc3MuZW52Lk1JQ1JPU09GVF9BUFBfUEFTU1dPUkRcbiAgfSk7XG5cbiAgYXdhaXQgYWRhcHRlci5jb250aW51ZUNvbnZlcnNhdGlvbihyZWZlcmVuY2UsIGFzeW5jIGNvbnRleHQgPT4ge1xuICAgIHN3aXRjaCAoKGlucHV0SGludCB8fCAnJykudHJpbSgpLnN1YnN0cigwLCAxKSkge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICAgIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcbiAgICAgICAgICBpbnB1dEhpbnQ6ICdhY2NlcHRpbmdJbnB1dCcsXG4gICAgICAgICAgdGV4dDogJ1RoaXMgYWN0aXZpdHkgaXMgYWNjZXB0aW5nIGlucHV0LicsXG4gICAgICAgICAgdHlwZTogJ21lc3NhZ2UnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgICAgICAgIGlucHV0SGludDogJ2V4cGVjdGluZ0lucHV0JyxcbiAgICAgICAgICB0ZXh0OiAnVGhpcyBhY3Rpdml0eSBpcyBleHBlY3RpbmcgaW5wdXQuXFxuXFxuSXQgc2hvdWxkIHN0YXJ0IHRoZSBtaWNyb3Bob25lIGlmIGl0IHdhcyBmcm9tIGEgbWljcm9waG9uZS4nLFxuICAgICAgICAgIHR5cGU6ICdtZXNzYWdlJ1xuICAgICAgICB9KTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgICAgICAgIGlucHV0SGludDogJ2lnbm9yaW5nSW5wdXQnLFxuICAgICAgICAgIHRleHQ6ICdUaGlzIGFjdGl2aXR5IGlzIGlnbm9yaW5nIGlucHV0Llxcblxcbkl0IHNob3VsZCBub3Qgc3RhcnQgdGhlIG1pY3JvcGhvbmUuJyxcbiAgICAgICAgICB0eXBlOiAnbWVzc2FnZSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc29yKGNvbnRleHQ6IFR1cm5Db250ZXh0LCAuLi5pbnB1dEhpbnRzOiBzdHJpbmdbXSkge1xuICAoYXN5bmMgZnVuY3Rpb24gKHJlZmVyZW5jZSkge1xuICAgIC8vIFRoaXMgbG9vcCBpcyBpbnRlbnRpb25hbGx5IGV4ZWN1dGVkIGluIGEgc2VyaWFsIG1hbm5lciAoaW5zdGVhZCBvZiB1c2luZyBQcm9taXNlLmFsbCBmb3IgcGFyYWxsZWxpc20pXG4gICAgd2hpbGUgKGlucHV0SGludHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBpbnB1dEhpbnQgPSBpbnB1dEhpbnRzLnNoaWZ0KCk7XG5cbiAgICAgIGlucHV0SGludCAmJiBhd2FpdCBzZW5kSW5wdXRIaW50KHJlZmVyZW5jZSwgaW5wdXRIaW50KTtcbiAgICB9XG4gIH0pKFR1cm5Db250ZXh0LmdldENvbnZlcnNhdGlvblJlZmVyZW5jZShjb250ZXh0LmFjdGl2aXR5KSk7XG59XG5cbmV4cG9ydCB7IGhlbHAsIG5hbWUsIHByb2Nlc3NvciB9XG4iXX0=