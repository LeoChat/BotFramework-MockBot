"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'Video attachment';
exports.name = name;

function help() {
  return {
    'video': 'Show a video attachment of MP4',
    'video vimeo': 'Show a video attachment from Vimeo',
    'video youtube': 'Show a video attachment from YouTube'
  };
}

async function processor(context, _, provider) {
  const {
    PUBLIC_URL
  } = process.env;

  switch (provider) {
    case 'vimeo':
      return await context.sendActivity({
        type: 'message',
        attachments: [{
          contentType: 'video/mp4',
          contentUrl: 'https://vimeo.com/269316124',
          name: 'Microsoft Surface Hub 2 (2018)'
        }]
      });

    case 'youtube':
      return await context.sendActivity({
        type: 'message',
        attachments: [{
          contentType: 'video/mp4',
          contentUrl: 'https://www.youtube.com/watch?v=rIJRFHDr1QE',
          name: 'Vision Keynote Highlights // Microsoft Build 2019'
        }]
      });

    default:
      return await context.sendActivity({
        type: 'message',
        attachments: [{
          contentType: 'video/mp4',
          contentUrl: `${PUBLIC_URL}assets/msband.mp4`,
          name: 'Microsoft Band 2'
        }]
      });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9WaWRlby50cyJdLCJuYW1lcyI6WyJuYW1lIiwiaGVscCIsInByb2Nlc3NvciIsImNvbnRleHQiLCJfIiwicHJvdmlkZXIiLCJQVUJMSUNfVVJMIiwicHJvY2VzcyIsImVudiIsInNlbmRBY3Rpdml0eSIsInR5cGUiLCJhdHRhY2htZW50cyIsImNvbnRlbnRUeXBlIiwiY29udGVudFVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsa0JBQWI7OztBQUVBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZCxTQUFPO0FBQ0wsYUFBUyxnQ0FESjtBQUVMLG1CQUFlLG9DQUZWO0FBR0wscUJBQWlCO0FBSFosR0FBUDtBQUtEOztBQUVELGVBQWVDLFNBQWYsQ0FBeUJDLE9BQXpCLEVBQStDQyxDQUEvQyxFQUEwREMsUUFBMUQsRUFBNEU7QUFDMUUsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQWlCQyxPQUFPLENBQUNDLEdBQS9COztBQUVBLFVBQVFILFFBQVI7QUFDRSxTQUFLLE9BQUw7QUFDRSxhQUFPLE1BQU1GLE9BQU8sQ0FBQ00sWUFBUixDQUFxQjtBQUNoQ0MsUUFBQUEsSUFBSSxFQUFFLFNBRDBCO0FBRWhDQyxRQUFBQSxXQUFXLEVBQUUsQ0FBQztBQUNaQyxVQUFBQSxXQUFXLEVBQUUsV0FERDtBQUVaQyxVQUFBQSxVQUFVLEVBQUUsNkJBRkE7QUFHWmIsVUFBQUEsSUFBSSxFQUFFO0FBSE0sU0FBRDtBQUZtQixPQUFyQixDQUFiOztBQVNGLFNBQUssU0FBTDtBQUNFLGFBQU8sTUFBTUcsT0FBTyxDQUFDTSxZQUFSLENBQXFCO0FBQ2hDQyxRQUFBQSxJQUFJLEVBQUUsU0FEMEI7QUFFaENDLFFBQUFBLFdBQVcsRUFBRSxDQUFDO0FBQ1pDLFVBQUFBLFdBQVcsRUFBRSxXQUREO0FBRVpDLFVBQUFBLFVBQVUsRUFBRSw2Q0FGQTtBQUdaYixVQUFBQSxJQUFJLEVBQUU7QUFITSxTQUFEO0FBRm1CLE9BQXJCLENBQWI7O0FBU0Y7QUFDRSxhQUFPLE1BQU1HLE9BQU8sQ0FBQ00sWUFBUixDQUFxQjtBQUNoQ0MsUUFBQUEsSUFBSSxFQUFFLFNBRDBCO0FBRWhDQyxRQUFBQSxXQUFXLEVBQUUsQ0FBQztBQUNaQyxVQUFBQSxXQUFXLEVBQUUsV0FERDtBQUVaQyxVQUFBQSxVQUFVLEVBQUcsR0FBR1AsVUFBWSxtQkFGaEI7QUFHWk4sVUFBQUEsSUFBSSxFQUFFO0FBSE0sU0FBRDtBQUZtQixPQUFyQixDQUFiO0FBdEJKO0FBK0JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHVybkNvbnRleHQgfSBmcm9tICdib3RidWlsZGVyJztcblxuY29uc3QgbmFtZSA9ICdWaWRlbyBhdHRhY2htZW50JztcblxuZnVuY3Rpb24gaGVscCgpIHtcbiAgcmV0dXJuIHtcbiAgICAndmlkZW8nOiAnU2hvdyBhIHZpZGVvIGF0dGFjaG1lbnQgb2YgTVA0JyxcbiAgICAndmlkZW8gdmltZW8nOiAnU2hvdyBhIHZpZGVvIGF0dGFjaG1lbnQgZnJvbSBWaW1lbycsXG4gICAgJ3ZpZGVvIHlvdXR1YmUnOiAnU2hvdyBhIHZpZGVvIGF0dGFjaG1lbnQgZnJvbSBZb3VUdWJlJ1xuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzb3IoY29udGV4dDogVHVybkNvbnRleHQsIF86IHN0cmluZywgcHJvdmlkZXI6IHN0cmluZykge1xuICBjb25zdCB7IFBVQkxJQ19VUkwgfSA9IHByb2Nlc3MuZW52O1xuXG4gIHN3aXRjaCAocHJvdmlkZXIpIHtcbiAgICBjYXNlICd2aW1lbyc6XG4gICAgICByZXR1cm4gYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgICAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgICAgIGF0dGFjaG1lbnRzOiBbe1xuICAgICAgICAgIGNvbnRlbnRUeXBlOiAndmlkZW8vbXA0JyxcbiAgICAgICAgICBjb250ZW50VXJsOiAnaHR0cHM6Ly92aW1lby5jb20vMjY5MzE2MTI0JyxcbiAgICAgICAgICBuYW1lOiAnTWljcm9zb2Z0IFN1cmZhY2UgSHViIDIgKDIwMTgpJ1xuICAgICAgICB9XVxuICAgICAgfSk7XG5cbiAgICBjYXNlICd5b3V0dWJlJzpcbiAgICAgIHJldHVybiBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XG4gICAgICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICAgICAgYXR0YWNobWVudHM6IFt7XG4gICAgICAgICAgY29udGVudFR5cGU6ICd2aWRlby9tcDQnLFxuICAgICAgICAgIGNvbnRlbnRVcmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXJJSlJGSERyMVFFJyxcbiAgICAgICAgICBuYW1lOiAnVmlzaW9uIEtleW5vdGUgSGlnaGxpZ2h0cyAvLyBNaWNyb3NvZnQgQnVpbGQgMjAxOSdcbiAgICAgICAgfV1cbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XG4gICAgICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICAgICAgYXR0YWNobWVudHM6IFt7XG4gICAgICAgICAgY29udGVudFR5cGU6ICd2aWRlby9tcDQnLFxuICAgICAgICAgIGNvbnRlbnRVcmw6IGAkeyBQVUJMSUNfVVJMIH1hc3NldHMvbXNiYW5kLm1wNGAsXG4gICAgICAgICAgbmFtZTogJ01pY3Jvc29mdCBCYW5kIDInXG4gICAgICAgIH1dXG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgeyBoZWxwLCBuYW1lLCBwcm9jZXNzb3IgfVxuIl19