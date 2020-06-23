"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'Receipt card';
exports.name = name;

function help() {
  return {
    'receiptcard': 'Show a receipt card'
  };
}

async function processor(context) {
  const {
    PUBLIC_URL
  } = process.env;
  await context.sendActivity({
    type: 'message',
    text: '',
    attachmentLayout: 'carousel',
    attachments: [{
      contentType: 'application/vnd.microsoft.card.receipt',
      content: {
        title: 'Surface Pro 4',
        subtitle: 'This is the subtitle',
        items: [{
          title: 'Surface Pro 4',
          subtitle: 'Surface Pro 4 is a powerful, versatile, lightweight laptop.',
          text: 'Surface does more. Just like you. For one device that does everything, you need more than a mobile OS.',
          image: {
            url: `${PUBLIC_URL}assets/surface1.jpg`,
            alt: 'Microsoft Surface Alt',
            tap: {
              type: 'openUrl',
              title: 'Tapped it!',
              value: `${PUBLIC_URL}testurl1.html`
            }
          },
          price: '$XXX'
        }, {
          title: 'Surface Pro 4 (2) - No subtitle, No text.',
          image: {
            url: `${PUBLIC_URL}assets/surface2.jpg`,
            alt: 'Microsoft Surface Alt',
            tap: {
              type: 'call',
              title: 'Call back!',
              value: '1234567890'
            }
          },
          price: '$XXX'
        }, {
          title: 'Surface Pro 4 (3) - No subtitle, No text, No image',
          price: '$XXX'
        }],
        facts: [{
          key: 'Order Number',
          value: 'Value 1'
        }, {
          key: 'Expected Delivery Time',
          value: 'Value 2'
        }, {
          key: 'Payment Method',
          value: 'Value 3'
        }, {
          key: 'Delivery Address',
          value: 'Value 4'
        }],
        vat: '0.01',
        total: '0.10',
        tax: 'XXX.XX',
        buttons: [{
          type: 'imBack',
          title: 'imBack Button',
          value: 'imBack Action'
        }, {
          type: 'postBack',
          title: 'postBack Button',
          value: 'postBack Action'
        }],
        tap: {
          type: 'openUrl',
          title: 'Tapped it!',
          value: `${PUBLIC_URL}testurl2.html`
        }
      }
    }]
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9SZWNlaXB0Q2FyZC50cyJdLCJuYW1lcyI6WyJuYW1lIiwiaGVscCIsInByb2Nlc3NvciIsImNvbnRleHQiLCJQVUJMSUNfVVJMIiwicHJvY2VzcyIsImVudiIsInNlbmRBY3Rpdml0eSIsInR5cGUiLCJ0ZXh0IiwiYXR0YWNobWVudExheW91dCIsImF0dGFjaG1lbnRzIiwiY29udGVudFR5cGUiLCJjb250ZW50IiwidGl0bGUiLCJzdWJ0aXRsZSIsIml0ZW1zIiwiaW1hZ2UiLCJ1cmwiLCJhbHQiLCJ0YXAiLCJ2YWx1ZSIsInByaWNlIiwiZmFjdHMiLCJrZXkiLCJ2YXQiLCJ0b3RhbCIsInRheCIsImJ1dHRvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLGNBQWI7OztBQUVBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZCxTQUFPO0FBQ0wsbUJBQWU7QUFEVixHQUFQO0FBR0Q7O0FBRUQsZUFBZUMsU0FBZixDQUF5QkMsT0FBekIsRUFBK0M7QUFDN0MsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQWlCQyxPQUFPLENBQUNDLEdBQS9CO0FBRUEsUUFBTUgsT0FBTyxDQUFDSSxZQUFSLENBQXFCO0FBQ3pCQyxJQUFBQSxJQUFJLEVBQUUsU0FEbUI7QUFFekJDLElBQUFBLElBQUksRUFBRSxFQUZtQjtBQUd6QkMsSUFBQUEsZ0JBQWdCLEVBQUUsVUFITztBQUl6QkMsSUFBQUEsV0FBVyxFQUFFLENBQUM7QUFDWkMsTUFBQUEsV0FBVyxFQUFFLHdDQUREO0FBRVpDLE1BQUFBLE9BQU8sRUFBRTtBQUNQQyxRQUFBQSxLQUFLLEVBQUUsZUFEQTtBQUVQQyxRQUFBQSxRQUFRLEVBQUUsc0JBRkg7QUFHUEMsUUFBQUEsS0FBSyxFQUFFLENBQUM7QUFDTkYsVUFBQUEsS0FBSyxFQUFFLGVBREQ7QUFFTkMsVUFBQUEsUUFBUSxFQUFFLDZEQUZKO0FBR05OLFVBQUFBLElBQUksRUFBRSx3R0FIQTtBQUlOUSxVQUFBQSxLQUFLLEVBQUU7QUFDTEMsWUFBQUEsR0FBRyxFQUFHLEdBQUdkLFVBQVkscUJBRGhCO0FBRUxlLFlBQUFBLEdBQUcsRUFBRSx1QkFGQTtBQUdMQyxZQUFBQSxHQUFHLEVBQUU7QUFDSFosY0FBQUEsSUFBSSxFQUFFLFNBREg7QUFFSE0sY0FBQUEsS0FBSyxFQUFFLFlBRko7QUFHSE8sY0FBQUEsS0FBSyxFQUFHLEdBQUdqQixVQUFZO0FBSHBCO0FBSEEsV0FKRDtBQWFOa0IsVUFBQUEsS0FBSyxFQUFFO0FBYkQsU0FBRCxFQWNKO0FBQ0RSLFVBQUFBLEtBQUssRUFBRSwyQ0FETjtBQUVERyxVQUFBQSxLQUFLLEVBQUU7QUFDTEMsWUFBQUEsR0FBRyxFQUFHLEdBQUdkLFVBQVkscUJBRGhCO0FBRUxlLFlBQUFBLEdBQUcsRUFBRSx1QkFGQTtBQUdMQyxZQUFBQSxHQUFHLEVBQUU7QUFDSFosY0FBQUEsSUFBSSxFQUFFLE1BREg7QUFFSE0sY0FBQUEsS0FBSyxFQUFFLFlBRko7QUFHSE8sY0FBQUEsS0FBSyxFQUFFO0FBSEo7QUFIQSxXQUZOO0FBV0RDLFVBQUFBLEtBQUssRUFBRTtBQVhOLFNBZEksRUEwQko7QUFDRFIsVUFBQUEsS0FBSyxFQUFFLG9EQUROO0FBRURRLFVBQUFBLEtBQUssRUFBRTtBQUZOLFNBMUJJLENBSEE7QUFpQ1BDLFFBQUFBLEtBQUssRUFBRSxDQUFDO0FBQ05DLFVBQUFBLEdBQUcsRUFBRSxjQURDO0FBRU5ILFVBQUFBLEtBQUssRUFBRTtBQUZELFNBQUQsRUFHSjtBQUNERyxVQUFBQSxHQUFHLEVBQUUsd0JBREo7QUFFREgsVUFBQUEsS0FBSyxFQUFFO0FBRk4sU0FISSxFQU1KO0FBQ0RHLFVBQUFBLEdBQUcsRUFBRSxnQkFESjtBQUVESCxVQUFBQSxLQUFLLEVBQUU7QUFGTixTQU5JLEVBU0o7QUFDREcsVUFBQUEsR0FBRyxFQUFFLGtCQURKO0FBRURILFVBQUFBLEtBQUssRUFBRTtBQUZOLFNBVEksQ0FqQ0E7QUE4Q1BJLFFBQUFBLEdBQUcsRUFBRSxNQTlDRTtBQStDUEMsUUFBQUEsS0FBSyxFQUFFLE1BL0NBO0FBZ0RQQyxRQUFBQSxHQUFHLEVBQUUsUUFoREU7QUFpRFBDLFFBQUFBLE9BQU8sRUFBRSxDQUFDO0FBQ1JwQixVQUFBQSxJQUFJLEVBQUUsUUFERTtBQUVSTSxVQUFBQSxLQUFLLEVBQUUsZUFGQztBQUdSTyxVQUFBQSxLQUFLLEVBQUU7QUFIQyxTQUFELEVBSU47QUFDRGIsVUFBQUEsSUFBSSxFQUFFLFVBREw7QUFFRE0sVUFBQUEsS0FBSyxFQUFFLGlCQUZOO0FBR0RPLFVBQUFBLEtBQUssRUFBRTtBQUhOLFNBSk0sQ0FqREY7QUEwRFBELFFBQUFBLEdBQUcsRUFBRTtBQUNIWixVQUFBQSxJQUFJLEVBQUUsU0FESDtBQUVITSxVQUFBQSxLQUFLLEVBQUUsWUFGSjtBQUdITyxVQUFBQSxLQUFLLEVBQUcsR0FBR2pCLFVBQVk7QUFIcEI7QUExREU7QUFGRyxLQUFEO0FBSlksR0FBckIsQ0FBTjtBQXdFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR1cm5Db250ZXh0IH0gZnJvbSAnYm90YnVpbGRlcic7XG5cbmNvbnN0IG5hbWUgPSAnUmVjZWlwdCBjYXJkJztcblxuZnVuY3Rpb24gaGVscCgpIHtcbiAgcmV0dXJuIHtcbiAgICAncmVjZWlwdGNhcmQnOiAnU2hvdyBhIHJlY2VpcHQgY2FyZCdcbiAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc29yKGNvbnRleHQ6IFR1cm5Db250ZXh0KSB7XG4gIGNvbnN0IHsgUFVCTElDX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XG5cbiAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICB0ZXh0OiAnJyxcbiAgICBhdHRhY2htZW50TGF5b3V0OiAnY2Fyb3VzZWwnLFxuICAgIGF0dGFjaG1lbnRzOiBbe1xuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi92bmQubWljcm9zb2Z0LmNhcmQucmVjZWlwdCcsXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHRpdGxlOiAnU3VyZmFjZSBQcm8gNCcsXG4gICAgICAgIHN1YnRpdGxlOiAnVGhpcyBpcyB0aGUgc3VidGl0bGUnLFxuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICB0aXRsZTogJ1N1cmZhY2UgUHJvIDQnLFxuICAgICAgICAgIHN1YnRpdGxlOiAnU3VyZmFjZSBQcm8gNCBpcyBhIHBvd2VyZnVsLCB2ZXJzYXRpbGUsIGxpZ2h0d2VpZ2h0IGxhcHRvcC4nLFxuICAgICAgICAgIHRleHQ6ICdTdXJmYWNlIGRvZXMgbW9yZS4gSnVzdCBsaWtlIHlvdS4gRm9yIG9uZSBkZXZpY2UgdGhhdCBkb2VzIGV2ZXJ5dGhpbmcsIHlvdSBuZWVkIG1vcmUgdGhhbiBhIG1vYmlsZSBPUy4nLFxuICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICB1cmw6IGAkeyBQVUJMSUNfVVJMIH1hc3NldHMvc3VyZmFjZTEuanBnYCxcbiAgICAgICAgICAgIGFsdDogJ01pY3Jvc29mdCBTdXJmYWNlIEFsdCcsXG4gICAgICAgICAgICB0YXA6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ29wZW5VcmwnLFxuICAgICAgICAgICAgICB0aXRsZTogJ1RhcHBlZCBpdCEnLFxuICAgICAgICAgICAgICB2YWx1ZTogYCR7IFBVQkxJQ19VUkwgfXRlc3R1cmwxLmh0bWxgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmljZTogJyRYWFgnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB0aXRsZTogJ1N1cmZhY2UgUHJvIDQgKDIpIC0gTm8gc3VidGl0bGUsIE5vIHRleHQuJyxcbiAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgdXJsOiBgJHsgUFVCTElDX1VSTCB9YXNzZXRzL3N1cmZhY2UyLmpwZ2AsXG4gICAgICAgICAgICBhbHQ6ICdNaWNyb3NvZnQgU3VyZmFjZSBBbHQnLFxuICAgICAgICAgICAgdGFwOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdjYWxsJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdDYWxsIGJhY2shJyxcbiAgICAgICAgICAgICAgdmFsdWU6ICcxMjM0NTY3ODkwJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJpY2U6ICckWFhYJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdGl0bGU6ICdTdXJmYWNlIFBybyA0ICgzKSAtIE5vIHN1YnRpdGxlLCBObyB0ZXh0LCBObyBpbWFnZScsXG4gICAgICAgICAgcHJpY2U6ICckWFhYJ1xuICAgICAgICB9XSxcbiAgICAgICAgZmFjdHM6IFt7XG4gICAgICAgICAga2V5OiAnT3JkZXIgTnVtYmVyJyxcbiAgICAgICAgICB2YWx1ZTogJ1ZhbHVlIDEnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdFeHBlY3RlZCBEZWxpdmVyeSBUaW1lJyxcbiAgICAgICAgICB2YWx1ZTogJ1ZhbHVlIDInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdQYXltZW50IE1ldGhvZCcsXG4gICAgICAgICAgdmFsdWU6ICdWYWx1ZSAzJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAga2V5OiAnRGVsaXZlcnkgQWRkcmVzcycsXG4gICAgICAgICAgdmFsdWU6ICdWYWx1ZSA0J1xuICAgICAgICB9XSxcbiAgICAgICAgdmF0OiAnMC4wMScsXG4gICAgICAgIHRvdGFsOiAnMC4xMCcsXG4gICAgICAgIHRheDogJ1hYWC5YWCcsXG4gICAgICAgIGJ1dHRvbnM6IFt7XG4gICAgICAgICAgdHlwZTogJ2ltQmFjaycsXG4gICAgICAgICAgdGl0bGU6ICdpbUJhY2sgQnV0dG9uJyxcbiAgICAgICAgICB2YWx1ZTogJ2ltQmFjayBBY3Rpb24nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB0eXBlOiAncG9zdEJhY2snLFxuICAgICAgICAgIHRpdGxlOiAncG9zdEJhY2sgQnV0dG9uJyxcbiAgICAgICAgICB2YWx1ZTogJ3Bvc3RCYWNrIEFjdGlvbidcbiAgICAgICAgfV0sXG4gICAgICAgIHRhcDoge1xuICAgICAgICAgIHR5cGU6ICdvcGVuVXJsJyxcbiAgICAgICAgICB0aXRsZTogJ1RhcHBlZCBpdCEnLFxuICAgICAgICAgIHZhbHVlOiBgJHsgUFVCTElDX1VSTCB9dGVzdHVybDIuaHRtbGBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dXG4gIH0pO1xufVxuXG5leHBvcnQgeyBoZWxwLCBuYW1lLCBwcm9jZXNzb3IgfVxuIl19