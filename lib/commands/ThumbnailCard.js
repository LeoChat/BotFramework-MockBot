"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = exports.mode = void 0;
const name = 'Hero card';
exports.name = name;
const mode = 'line';
exports.mode = mode;

function help() {
  return {
    'thumbnailcard': 'Show a thumbnail card',
    'thumbnailcard long title': 'Show a thumbnail card with a long title'
  };
}

async function processor(context, args) {
  const {
    PUBLIC_URL
  } = process.env;

  switch (args.trim().toLowerCase()) {
    case 'thumbnailcard long title':
      await context.sendActivity({
        type: 'message',
        text: '',
        attachmentLayout: 'carousel',
        attachments: [{
          contentType: 'application/vnd.microsoft.card.thumbnail',
          content: {
            buttons: [],
            images: [{
              alt: 'Microsoft Surface Alt',
              url: `${PUBLIC_URL}assets/surface1.jpg`
            }],
            title: 'This is a ThumbnailCard with a really, really long title that is intended to test the richCardsWrapTitle style option.'
          }
        }]
      });
      break;

    default:
      await context.sendActivity({
        type: 'message',
        text: '',
        attachmentLayout: 'carousel',
        attachments: [{
          contentType: 'application/vnd.microsoft.card.thumbnail',
          content: {
            buttons: [],
            images: [{
              alt: 'Microsoft Surface Alt',
              url: `${PUBLIC_URL}assets/surface1.jpg`
            }],
            title: 'Microsoft Surface Pro'
          }
        }]
      });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9UaHVtYm5haWxDYXJkLnRzIl0sIm5hbWVzIjpbIm5hbWUiLCJtb2RlIiwiaGVscCIsInByb2Nlc3NvciIsImNvbnRleHQiLCJhcmdzIiwiUFVCTElDX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJzZW5kQWN0aXZpdHkiLCJ0eXBlIiwidGV4dCIsImF0dGFjaG1lbnRMYXlvdXQiLCJhdHRhY2htZW50cyIsImNvbnRlbnRUeXBlIiwiY29udGVudCIsImJ1dHRvbnMiLCJpbWFnZXMiLCJhbHQiLCJ1cmwiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsV0FBYjs7QUFDQSxNQUFNQyxJQUFJLEdBQUcsTUFBYjs7O0FBRUEsU0FBU0MsSUFBVCxHQUFnQjtBQUNkLFNBQU87QUFDTCxxQkFBaUIsdUJBRFo7QUFFTCxnQ0FBNEI7QUFGdkIsR0FBUDtBQUtEOztBQUVELGVBQWVDLFNBQWYsQ0FBeUJDLE9BQXpCLEVBQStDQyxJQUEvQyxFQUE2RDtBQUMzRCxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBaUJDLE9BQU8sQ0FBQ0MsR0FBL0I7O0FBRUEsVUFBUUgsSUFBSSxDQUFDSSxJQUFMLEdBQVlDLFdBQVosRUFBUjtBQUNFLFNBQUssMEJBQUw7QUFDRSxZQUFNTixPQUFPLENBQUNPLFlBQVIsQ0FBcUI7QUFDekJDLFFBQUFBLElBQUksRUFBRSxTQURtQjtBQUV6QkMsUUFBQUEsSUFBSSxFQUFFLEVBRm1CO0FBR3pCQyxRQUFBQSxnQkFBZ0IsRUFBRSxVQUhPO0FBSXpCQyxRQUFBQSxXQUFXLEVBQUUsQ0FBQztBQUNaQyxVQUFBQSxXQUFXLEVBQUUsMENBREQ7QUFFWkMsVUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFlBQUFBLE9BQU8sRUFBRSxFQURGO0FBRVBDLFlBQUFBLE1BQU0sRUFBRSxDQUFDO0FBQ1BDLGNBQUFBLEdBQUcsRUFBRSx1QkFERTtBQUVQQyxjQUFBQSxHQUFHLEVBQUcsR0FBR2YsVUFBWTtBQUZkLGFBQUQsQ0FGRDtBQU1QZ0IsWUFBQUEsS0FBSyxFQUFFO0FBTkE7QUFGRyxTQUFEO0FBSlksT0FBckIsQ0FBTjtBQWdCQTs7QUFDRjtBQUNFLFlBQU1sQixPQUFPLENBQUNPLFlBQVIsQ0FBcUI7QUFDekJDLFFBQUFBLElBQUksRUFBRSxTQURtQjtBQUV6QkMsUUFBQUEsSUFBSSxFQUFFLEVBRm1CO0FBR3pCQyxRQUFBQSxnQkFBZ0IsRUFBRSxVQUhPO0FBSXpCQyxRQUFBQSxXQUFXLEVBQUUsQ0FBQztBQUNaQyxVQUFBQSxXQUFXLEVBQUUsMENBREQ7QUFFWkMsVUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFlBQUFBLE9BQU8sRUFBRSxFQURGO0FBRVBDLFlBQUFBLE1BQU0sRUFBRSxDQUFDO0FBQ1BDLGNBQUFBLEdBQUcsRUFBRSx1QkFERTtBQUVQQyxjQUFBQSxHQUFHLEVBQUcsR0FBR2YsVUFBWTtBQUZkLGFBQUQsQ0FGRDtBQU1QZ0IsWUFBQUEsS0FBSyxFQUFFO0FBTkE7QUFGRyxTQUFEO0FBSlksT0FBckIsQ0FBTjtBQXBCSjtBQXFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR1cm5Db250ZXh0IH0gZnJvbSAnYm90YnVpbGRlcic7XG5cbmNvbnN0IG5hbWUgPSAnSGVybyBjYXJkJztcbmNvbnN0IG1vZGUgPSAnbGluZSc7XG5cbmZ1bmN0aW9uIGhlbHAoKSB7XG4gIHJldHVybiB7XG4gICAgJ3RodW1ibmFpbGNhcmQnOiAnU2hvdyBhIHRodW1ibmFpbCBjYXJkJyxcbiAgICAndGh1bWJuYWlsY2FyZCBsb25nIHRpdGxlJzogJ1Nob3cgYSB0aHVtYm5haWwgY2FyZCB3aXRoIGEgbG9uZyB0aXRsZSdcblxuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzb3IoY29udGV4dDogVHVybkNvbnRleHQsIGFyZ3M6IHN0cmluZykge1xuICBjb25zdCB7IFBVQkxJQ19VUkwgfSA9IHByb2Nlc3MuZW52O1xuXG4gIHN3aXRjaCAoYXJncy50cmltKCkudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ3RodW1ibmFpbGNhcmQgbG9uZyB0aXRsZSc6XG4gICAgICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XG4gICAgICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICAgICAgdGV4dDogJycsXG4gICAgICAgIGF0dGFjaG1lbnRMYXlvdXQ6ICdjYXJvdXNlbCcsXG4gICAgICAgIGF0dGFjaG1lbnRzOiBbe1xuICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5jYXJkLnRodW1ibmFpbCcsXG4gICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgYnV0dG9uczogW10sXG4gICAgICAgICAgICBpbWFnZXM6IFt7XG4gICAgICAgICAgICAgIGFsdDogJ01pY3Jvc29mdCBTdXJmYWNlIEFsdCcsXG4gICAgICAgICAgICAgIHVybDogYCR7IFBVQkxJQ19VUkwgfWFzc2V0cy9zdXJmYWNlMS5qcGdgLFxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB0aXRsZTogJ1RoaXMgaXMgYSBUaHVtYm5haWxDYXJkIHdpdGggYSByZWFsbHksIHJlYWxseSBsb25nIHRpdGxlIHRoYXQgaXMgaW50ZW5kZWQgdG8gdGVzdCB0aGUgcmljaENhcmRzV3JhcFRpdGxlIHN0eWxlIG9wdGlvbi4nLFxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XG4gICAgICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICAgICAgdGV4dDogJycsXG4gICAgICAgIGF0dGFjaG1lbnRMYXlvdXQ6ICdjYXJvdXNlbCcsXG4gICAgICAgIGF0dGFjaG1lbnRzOiBbe1xuICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5jYXJkLnRodW1ibmFpbCcsXG4gICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgYnV0dG9uczogW10sXG4gICAgICAgICAgICBpbWFnZXM6IFt7XG4gICAgICAgICAgICAgIGFsdDogJ01pY3Jvc29mdCBTdXJmYWNlIEFsdCcsXG4gICAgICAgICAgICAgIHVybDogYCR7IFBVQkxJQ19VUkwgfWFzc2V0cy9zdXJmYWNlMS5qcGdgLFxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICB0aXRsZTogJ01pY3Jvc29mdCBTdXJmYWNlIFBybycsXG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7IGhlbHAsIG1vZGUsIG5hbWUsIHByb2Nlc3NvciB9XG4iXX0=