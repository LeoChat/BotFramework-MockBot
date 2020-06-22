"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'Layout';
exports.name = name;

function help() {
  return {
    'layout single': 'Show a single attachment in stacked layout',
    'layout single carousel': 'Show a single attachment in carousel layout',
    'layout double': 'Show 2 attachments in carousel layout',
    'layout carousel': 'Show 4 attachments in carousel layout',
    'layout': 'Show 4 attachments in stacked layout'
  };
}

async function processor(context, ...args) {
  const {
    PUBLIC_URL
  } = process.env;
  const arg = args.map(arg => (arg || '').trim()).filter(arg => arg).join(' ');

  switch (arg) {
    case 'single':
      await context.sendActivity({
        type: 'message',
        text: 'This command show single attachment in **default (stacked)** layout',
        attachments: [{
          contentType: 'image/jpg',
          contentUrl: `${PUBLIC_URL}assets/surface1.jpg`,
          name: 'Microsoft Surface'
        }]
      });
      break;

    case 'carousel single':
    case 'single carousel':
      await context.sendActivity({
        type: 'message',
        text: 'This command show single attachment in **carousel** layout',
        attachmentLayout: 'carousel',
        attachments: [{
          contentType: 'image/jpg',
          contentUrl: `${PUBLIC_URL}assets/surface1.jpg`,
          name: 'Microsoft Surface'
        }]
      });
      break;

    case 'double':
      await context.sendActivity({
        type: 'message',
        text: 'This command show single attachment in **carousel** layout',
        attachmentLayout: 'carousel',
        attachments: [{
          contentType: 'image/jpg',
          contentUrl: `${PUBLIC_URL}assets/surface1.jpg`,
          name: 'Microsoft Surface'
        }, {
          contentType: 'image/jpg',
          contentUrl: `${PUBLIC_URL}assets/surface2.jpg`,
          name: 'Microsoft Surface'
        }]
      });
      break;

    case 'carousel':
      await context.sendActivity({
        type: 'message',
        text: 'This command show 4 attachments in **carousel** layout',
        attachmentLayout: 'carousel',
        attachments: [{
          contentType: 'image/jpg',
          contentUrl: `${PUBLIC_URL}assets/surface1.jpg`,
          name: 'Microsoft Surface'
        }, {
          contentType: 'text/plain',
          content: '**Message with plain text**\r\nShould see asterisks.'
        }, {
          contentType: 'text/markdown',
          content: '**Message with Markdown**\r\nShould see bold text.'
        }, {
          contentType: 'text/xml',
          content: '**Message with XML**\r\nShould see asterisks and monospace fonts'
        }]
      });
      break;

    default:
      await context.sendActivity({
        type: 'message',
        text: 'This command show 4 attachments in **default (stacked)** layout',
        attachments: [{
          contentType: 'image/jpg',
          contentUrl: `${PUBLIC_URL}assets/surface1.jpg`,
          name: 'Microsoft Surface'
        }, {
          contentType: 'text/plain',
          content: '**Message with plain text**\r\nShould see asterisks.'
        }, {
          contentType: 'text/markdown',
          content: '**Message with Markdown**\r\nShould see bold text.'
        }, {
          contentType: 'text/xml',
          content: '**Message with XML**\r\nShould see asterisks and monospace fonts'
        }]
      });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9MYXlvdXQudHMiXSwibmFtZXMiOlsibmFtZSIsImhlbHAiLCJwcm9jZXNzb3IiLCJjb250ZXh0IiwiYXJncyIsIlBVQkxJQ19VUkwiLCJwcm9jZXNzIiwiZW52IiwiYXJnIiwibWFwIiwidHJpbSIsImZpbHRlciIsImpvaW4iLCJzZW5kQWN0aXZpdHkiLCJ0eXBlIiwidGV4dCIsImF0dGFjaG1lbnRzIiwiY29udGVudFR5cGUiLCJjb250ZW50VXJsIiwiYXR0YWNobWVudExheW91dCIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLFFBQWI7OztBQUVBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZCxTQUFPO0FBQ0wscUJBQWlCLDRDQURaO0FBRUwsOEJBQTBCLDZDQUZyQjtBQUdMLHFCQUFpQix1Q0FIWjtBQUlMLHVCQUFtQix1Q0FKZDtBQUtMLGNBQVU7QUFMTCxHQUFQO0FBT0Q7O0FBRUQsZUFBZUMsU0FBZixDQUF5QkMsT0FBekIsRUFBK0MsR0FBR0MsSUFBbEQsRUFBa0U7QUFDaEUsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQWlCQyxPQUFPLENBQUNDLEdBQS9CO0FBQ0EsUUFBTUMsR0FBRyxHQUFHSixJQUFJLENBQUNLLEdBQUwsQ0FBU0QsR0FBRyxJQUFJLENBQUNBLEdBQUcsSUFBSSxFQUFSLEVBQVlFLElBQVosRUFBaEIsRUFBb0NDLE1BQXBDLENBQTJDSCxHQUFHLElBQUlBLEdBQWxELEVBQXVESSxJQUF2RCxDQUE0RCxHQUE1RCxDQUFaOztBQUVBLFVBQVFKLEdBQVI7QUFDRSxTQUFLLFFBQUw7QUFDRSxZQUFNTCxPQUFPLENBQUNVLFlBQVIsQ0FBcUI7QUFDekJDLFFBQUFBLElBQUksRUFBRSxTQURtQjtBQUV6QkMsUUFBQUEsSUFBSSxFQUFFLHFFQUZtQjtBQUd6QkMsUUFBQUEsV0FBVyxFQUFFLENBQUM7QUFDWkMsVUFBQUEsV0FBVyxFQUFFLFdBREQ7QUFFWkMsVUFBQUEsVUFBVSxFQUFHLEdBQUdiLFVBQVkscUJBRmhCO0FBR1pMLFVBQUFBLElBQUksRUFBRTtBQUhNLFNBQUQ7QUFIWSxPQUFyQixDQUFOO0FBVUE7O0FBRUYsU0FBSyxpQkFBTDtBQUNBLFNBQUssaUJBQUw7QUFDRSxZQUFNRyxPQUFPLENBQUNVLFlBQVIsQ0FBcUI7QUFDekJDLFFBQUFBLElBQUksRUFBRSxTQURtQjtBQUV6QkMsUUFBQUEsSUFBSSxFQUFFLDREQUZtQjtBQUd6QkksUUFBQUEsZ0JBQWdCLEVBQUUsVUFITztBQUl6QkgsUUFBQUEsV0FBVyxFQUFFLENBQUM7QUFDWkMsVUFBQUEsV0FBVyxFQUFFLFdBREQ7QUFFWkMsVUFBQUEsVUFBVSxFQUFHLEdBQUdiLFVBQVkscUJBRmhCO0FBR1pMLFVBQUFBLElBQUksRUFBRTtBQUhNLFNBQUQ7QUFKWSxPQUFyQixDQUFOO0FBV0E7O0FBRUYsU0FBSyxRQUFMO0FBQ0UsWUFBTUcsT0FBTyxDQUFDVSxZQUFSLENBQXFCO0FBQ3pCQyxRQUFBQSxJQUFJLEVBQUUsU0FEbUI7QUFFekJDLFFBQUFBLElBQUksRUFBRSw0REFGbUI7QUFHekJJLFFBQUFBLGdCQUFnQixFQUFFLFVBSE87QUFJekJILFFBQUFBLFdBQVcsRUFBRSxDQUFDO0FBQ1pDLFVBQUFBLFdBQVcsRUFBRSxXQUREO0FBRVpDLFVBQUFBLFVBQVUsRUFBRyxHQUFHYixVQUFZLHFCQUZoQjtBQUdaTCxVQUFBQSxJQUFJLEVBQUU7QUFITSxTQUFELEVBSVY7QUFDRGlCLFVBQUFBLFdBQVcsRUFBRSxXQURaO0FBRURDLFVBQUFBLFVBQVUsRUFBRyxHQUFHYixVQUFZLHFCQUYzQjtBQUdETCxVQUFBQSxJQUFJLEVBQUU7QUFITCxTQUpVO0FBSlksT0FBckIsQ0FBTjtBQWVBOztBQUVGLFNBQUssVUFBTDtBQUNFLFlBQU1HLE9BQU8sQ0FBQ1UsWUFBUixDQUFxQjtBQUN6QkMsUUFBQUEsSUFBSSxFQUFFLFNBRG1CO0FBRXpCQyxRQUFBQSxJQUFJLEVBQUUsd0RBRm1CO0FBR3pCSSxRQUFBQSxnQkFBZ0IsRUFBRSxVQUhPO0FBSXpCSCxRQUFBQSxXQUFXLEVBQUUsQ0FBQztBQUNaQyxVQUFBQSxXQUFXLEVBQUUsV0FERDtBQUVaQyxVQUFBQSxVQUFVLEVBQUcsR0FBR2IsVUFBWSxxQkFGaEI7QUFHWkwsVUFBQUEsSUFBSSxFQUFFO0FBSE0sU0FBRCxFQUlWO0FBQ0RpQixVQUFBQSxXQUFXLEVBQUUsWUFEWjtBQUVERyxVQUFBQSxPQUFPLEVBQUU7QUFGUixTQUpVLEVBT1Y7QUFDREgsVUFBQUEsV0FBVyxFQUFFLGVBRFo7QUFFREcsVUFBQUEsT0FBTyxFQUFFO0FBRlIsU0FQVSxFQVVWO0FBQ0RILFVBQUFBLFdBQVcsRUFBRSxVQURaO0FBRURHLFVBQUFBLE9BQU8sRUFBRTtBQUZSLFNBVlU7QUFKWSxPQUFyQixDQUFOO0FBb0JBOztBQUVGO0FBQ0UsWUFBTWpCLE9BQU8sQ0FBQ1UsWUFBUixDQUFxQjtBQUN6QkMsUUFBQUEsSUFBSSxFQUFFLFNBRG1CO0FBRXpCQyxRQUFBQSxJQUFJLEVBQUUsaUVBRm1CO0FBR3pCQyxRQUFBQSxXQUFXLEVBQUUsQ0FBQztBQUNaQyxVQUFBQSxXQUFXLEVBQUUsV0FERDtBQUVaQyxVQUFBQSxVQUFVLEVBQUcsR0FBR2IsVUFBWSxxQkFGaEI7QUFHWkwsVUFBQUEsSUFBSSxFQUFFO0FBSE0sU0FBRCxFQUlWO0FBQ0RpQixVQUFBQSxXQUFXLEVBQUUsWUFEWjtBQUVERyxVQUFBQSxPQUFPLEVBQUU7QUFGUixTQUpVLEVBT1Y7QUFDREgsVUFBQUEsV0FBVyxFQUFFLGVBRFo7QUFFREcsVUFBQUEsT0FBTyxFQUFFO0FBRlIsU0FQVSxFQVVWO0FBQ0RILFVBQUFBLFdBQVcsRUFBRSxVQURaO0FBRURHLFVBQUFBLE9BQU8sRUFBRTtBQUZSLFNBVlU7QUFIWSxPQUFyQixDQUFOO0FBdkVKO0FBMEZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHVybkNvbnRleHQgfSBmcm9tICdib3RidWlsZGVyJztcblxuY29uc3QgbmFtZSA9ICdMYXlvdXQnO1xuXG5mdW5jdGlvbiBoZWxwKCkge1xuICByZXR1cm4ge1xuICAgICdsYXlvdXQgc2luZ2xlJzogJ1Nob3cgYSBzaW5nbGUgYXR0YWNobWVudCBpbiBzdGFja2VkIGxheW91dCcsXG4gICAgJ2xheW91dCBzaW5nbGUgY2Fyb3VzZWwnOiAnU2hvdyBhIHNpbmdsZSBhdHRhY2htZW50IGluIGNhcm91c2VsIGxheW91dCcsXG4gICAgJ2xheW91dCBkb3VibGUnOiAnU2hvdyAyIGF0dGFjaG1lbnRzIGluIGNhcm91c2VsIGxheW91dCcsXG4gICAgJ2xheW91dCBjYXJvdXNlbCc6ICdTaG93IDQgYXR0YWNobWVudHMgaW4gY2Fyb3VzZWwgbGF5b3V0JyxcbiAgICAnbGF5b3V0JzogJ1Nob3cgNCBhdHRhY2htZW50cyBpbiBzdGFja2VkIGxheW91dCdcbiAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc29yKGNvbnRleHQ6IFR1cm5Db250ZXh0LCAuLi5hcmdzOiBzdHJpbmdbXSkge1xuICBjb25zdCB7IFBVQkxJQ19VUkwgfSA9IHByb2Nlc3MuZW52O1xuICBjb25zdCBhcmcgPSBhcmdzLm1hcChhcmcgPT4gKGFyZyB8fCAnJykudHJpbSgpKS5maWx0ZXIoYXJnID0+IGFyZykuam9pbignICcpO1xuXG4gIHN3aXRjaCAoYXJnKSB7XG4gICAgY2FzZSAnc2luZ2xlJzpcbiAgICAgIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcbiAgICAgICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgICAgICB0ZXh0OiAnVGhpcyBjb21tYW5kIHNob3cgc2luZ2xlIGF0dGFjaG1lbnQgaW4gKipkZWZhdWx0IChzdGFja2VkKSoqIGxheW91dCcsXG4gICAgICAgIGF0dGFjaG1lbnRzOiBbe1xuICAgICAgICAgIGNvbnRlbnRUeXBlOiAnaW1hZ2UvanBnJyxcbiAgICAgICAgICBjb250ZW50VXJsOiBgJHsgUFVCTElDX1VSTCB9YXNzZXRzL3N1cmZhY2UxLmpwZ2AsXG4gICAgICAgICAgbmFtZTogJ01pY3Jvc29mdCBTdXJmYWNlJ1xuICAgICAgICB9XVxuICAgICAgfSk7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnY2Fyb3VzZWwgc2luZ2xlJzpcbiAgICBjYXNlICdzaW5nbGUgY2Fyb3VzZWwnOlxuICAgICAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgICAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgICAgIHRleHQ6ICdUaGlzIGNvbW1hbmQgc2hvdyBzaW5nbGUgYXR0YWNobWVudCBpbiAqKmNhcm91c2VsKiogbGF5b3V0JyxcbiAgICAgICAgYXR0YWNobWVudExheW91dDogJ2Nhcm91c2VsJyxcbiAgICAgICAgYXR0YWNobWVudHM6IFt7XG4gICAgICAgICAgY29udGVudFR5cGU6ICdpbWFnZS9qcGcnLFxuICAgICAgICAgIGNvbnRlbnRVcmw6IGAkeyBQVUJMSUNfVVJMIH1hc3NldHMvc3VyZmFjZTEuanBnYCxcbiAgICAgICAgICBuYW1lOiAnTWljcm9zb2Z0IFN1cmZhY2UnXG4gICAgICAgIH1dXG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdkb3VibGUnOlxuICAgICAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgICAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgICAgIHRleHQ6ICdUaGlzIGNvbW1hbmQgc2hvdyBzaW5nbGUgYXR0YWNobWVudCBpbiAqKmNhcm91c2VsKiogbGF5b3V0JyxcbiAgICAgICAgYXR0YWNobWVudExheW91dDogJ2Nhcm91c2VsJyxcbiAgICAgICAgYXR0YWNobWVudHM6IFt7XG4gICAgICAgICAgY29udGVudFR5cGU6ICdpbWFnZS9qcGcnLFxuICAgICAgICAgIGNvbnRlbnRVcmw6IGAkeyBQVUJMSUNfVVJMIH1hc3NldHMvc3VyZmFjZTEuanBnYCxcbiAgICAgICAgICBuYW1lOiAnTWljcm9zb2Z0IFN1cmZhY2UnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBjb250ZW50VHlwZTogJ2ltYWdlL2pwZycsXG4gICAgICAgICAgY29udGVudFVybDogYCR7IFBVQkxJQ19VUkwgfWFzc2V0cy9zdXJmYWNlMi5qcGdgLFxuICAgICAgICAgIG5hbWU6ICdNaWNyb3NvZnQgU3VyZmFjZSdcbiAgICAgICAgfV1cbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2Nhcm91c2VsJzpcbiAgICAgIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcbiAgICAgICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgICAgICB0ZXh0OiAnVGhpcyBjb21tYW5kIHNob3cgNCBhdHRhY2htZW50cyBpbiAqKmNhcm91c2VsKiogbGF5b3V0JyxcbiAgICAgICAgYXR0YWNobWVudExheW91dDogJ2Nhcm91c2VsJyxcbiAgICAgICAgYXR0YWNobWVudHM6IFt7XG4gICAgICAgICAgY29udGVudFR5cGU6ICdpbWFnZS9qcGcnLFxuICAgICAgICAgIGNvbnRlbnRVcmw6IGAkeyBQVUJMSUNfVVJMIH1hc3NldHMvc3VyZmFjZTEuanBnYCxcbiAgICAgICAgICBuYW1lOiAnTWljcm9zb2Z0IFN1cmZhY2UnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBjb250ZW50VHlwZTogJ3RleHQvcGxhaW4nLFxuICAgICAgICAgIGNvbnRlbnQ6ICcqKk1lc3NhZ2Ugd2l0aCBwbGFpbiB0ZXh0KipcXHJcXG5TaG91bGQgc2VlIGFzdGVyaXNrcy4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBjb250ZW50VHlwZTogJ3RleHQvbWFya2Rvd24nLFxuICAgICAgICAgIGNvbnRlbnQ6ICcqKk1lc3NhZ2Ugd2l0aCBNYXJrZG93bioqXFxyXFxuU2hvdWxkIHNlZSBib2xkIHRleHQuJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgY29udGVudFR5cGU6ICd0ZXh0L3htbCcsXG4gICAgICAgICAgY29udGVudDogJyoqTWVzc2FnZSB3aXRoIFhNTCoqXFxyXFxuU2hvdWxkIHNlZSBhc3Rlcmlza3MgYW5kIG1vbm9zcGFjZSBmb250cydcbiAgICAgICAgfV1cbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XG4gICAgICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICAgICAgdGV4dDogJ1RoaXMgY29tbWFuZCBzaG93IDQgYXR0YWNobWVudHMgaW4gKipkZWZhdWx0IChzdGFja2VkKSoqIGxheW91dCcsXG4gICAgICAgIGF0dGFjaG1lbnRzOiBbe1xuICAgICAgICAgIGNvbnRlbnRUeXBlOiAnaW1hZ2UvanBnJyxcbiAgICAgICAgICBjb250ZW50VXJsOiBgJHsgUFVCTElDX1VSTCB9YXNzZXRzL3N1cmZhY2UxLmpwZ2AsXG4gICAgICAgICAgbmFtZTogJ01pY3Jvc29mdCBTdXJmYWNlJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgY29udGVudFR5cGU6ICd0ZXh0L3BsYWluJyxcbiAgICAgICAgICBjb250ZW50OiAnKipNZXNzYWdlIHdpdGggcGxhaW4gdGV4dCoqXFxyXFxuU2hvdWxkIHNlZSBhc3Rlcmlza3MuJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgY29udGVudFR5cGU6ICd0ZXh0L21hcmtkb3duJyxcbiAgICAgICAgICBjb250ZW50OiAnKipNZXNzYWdlIHdpdGggTWFya2Rvd24qKlxcclxcblNob3VsZCBzZWUgYm9sZCB0ZXh0LidcbiAgICAgICAgfSwge1xuICAgICAgICAgIGNvbnRlbnRUeXBlOiAndGV4dC94bWwnLFxuICAgICAgICAgIGNvbnRlbnQ6ICcqKk1lc3NhZ2Ugd2l0aCBYTUwqKlxcclxcblNob3VsZCBzZWUgYXN0ZXJpc2tzIGFuZCBtb25vc3BhY2UgZm9udHMnXG4gICAgICAgIH1dXG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgeyBoZWxwLCBuYW1lLCBwcm9jZXNzb3IgfVxuIl19