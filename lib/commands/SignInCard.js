"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'Sign-in card';
exports.name = name;

function help() {
  return {
    'signin': 'Show a signin card'
  };
}

async function processor(context) {
  await context.sendActivity({
    type: 'message',
    attachments: [{
      contentType: 'application/vnd.microsoft.card.signin',
      content: {
        text: 'Login to signin sample',
        buttons: [{
          type: 'signin',
          title: 'Signin',
          value: 'https://login.live.com/'
        }]
      }
    }]
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9TaWduSW5DYXJkLnRzIl0sIm5hbWVzIjpbIm5hbWUiLCJoZWxwIiwicHJvY2Vzc29yIiwiY29udGV4dCIsInNlbmRBY3Rpdml0eSIsInR5cGUiLCJhdHRhY2htZW50cyIsImNvbnRlbnRUeXBlIiwiY29udGVudCIsInRleHQiLCJidXR0b25zIiwidGl0bGUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsY0FBYjs7O0FBRUEsU0FBU0MsSUFBVCxHQUFnQjtBQUNkLFNBQU87QUFDTCxjQUFVO0FBREwsR0FBUDtBQUdEOztBQUVELGVBQWVDLFNBQWYsQ0FBeUJDLE9BQXpCLEVBQStDO0FBQzdDLFFBQU1BLE9BQU8sQ0FBQ0MsWUFBUixDQUFxQjtBQUN6QkMsSUFBQUEsSUFBSSxFQUFFLFNBRG1CO0FBRXpCQyxJQUFBQSxXQUFXLEVBQUUsQ0FBQztBQUNaQyxNQUFBQSxXQUFXLEVBQUUsdUNBREQ7QUFFWkMsTUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFFBQUFBLElBQUksRUFBRSx3QkFEQztBQUVQQyxRQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUNSTCxVQUFBQSxJQUFJLEVBQUUsUUFERTtBQUVSTSxVQUFBQSxLQUFLLEVBQUUsUUFGQztBQUdSQyxVQUFBQSxLQUFLLEVBQUU7QUFIQyxTQUFEO0FBRkY7QUFGRyxLQUFEO0FBRlksR0FBckIsQ0FBTjtBQWNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHVybkNvbnRleHQgfSBmcm9tICdib3RidWlsZGVyJztcblxuY29uc3QgbmFtZSA9ICdTaWduLWluIGNhcmQnO1xuXG5mdW5jdGlvbiBoZWxwKCkge1xuICByZXR1cm4ge1xuICAgICdzaWduaW4nOiAnU2hvdyBhIHNpZ25pbiBjYXJkJ1xuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzb3IoY29udGV4dDogVHVybkNvbnRleHQpIHtcbiAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICBhdHRhY2htZW50czogW3tcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5jYXJkLnNpZ25pbicsXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHRleHQ6ICdMb2dpbiB0byBzaWduaW4gc2FtcGxlJyxcbiAgICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgICB0eXBlOiAnc2lnbmluJyxcbiAgICAgICAgICB0aXRsZTogJ1NpZ25pbicsXG4gICAgICAgICAgdmFsdWU6ICdodHRwczovL2xvZ2luLmxpdmUuY29tLydcbiAgICAgICAgfV1cbiAgICAgIH1cbiAgICB9XVxuICB9KTtcbn1cblxuZXhwb3J0IHsgaGVscCwgbmFtZSwgcHJvY2Vzc29yIH1cbiJdfQ==