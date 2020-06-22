"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'File attachments';
exports.name = name;

function help() {
  return {
    'file': 'Show a message with a text file and Word document attachments'
  };
}

async function processor(context) {
  const {
    PUBLIC_URL
  } = process.env;
  await context.sendActivity({
    type: 'message',
    text: 'The reports are ready, see attached.',
    attachments: [{
      contentType: 'application/octet-stream',
      contentUrl: `${PUBLIC_URL}assets/test.txt`,
      name: 'Plain text'
    }, {
      contentType: 'application/octet-stream',
      contentUrl: `${PUBLIC_URL}assets/test.docx`,
      name: 'Word document'
    }]
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9GaWxlLnRzIl0sIm5hbWVzIjpbIm5hbWUiLCJoZWxwIiwicHJvY2Vzc29yIiwiY29udGV4dCIsIlBVQkxJQ19VUkwiLCJwcm9jZXNzIiwiZW52Iiwic2VuZEFjdGl2aXR5IiwidHlwZSIsInRleHQiLCJhdHRhY2htZW50cyIsImNvbnRlbnRUeXBlIiwiY29udGVudFVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsa0JBQWI7OztBQUVBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZCxTQUFPO0FBQ0wsWUFBUTtBQURILEdBQVA7QUFHRDs7QUFFRCxlQUFlQyxTQUFmLENBQXlCQyxPQUF6QixFQUErQztBQUM3QyxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBaUJDLE9BQU8sQ0FBQ0MsR0FBL0I7QUFFQSxRQUFNSCxPQUFPLENBQUNJLFlBQVIsQ0FBcUI7QUFDekJDLElBQUFBLElBQUksRUFBRSxTQURtQjtBQUV6QkMsSUFBQUEsSUFBSSxFQUFFLHNDQUZtQjtBQUd6QkMsSUFBQUEsV0FBVyxFQUFFLENBQUM7QUFDWkMsTUFBQUEsV0FBVyxFQUFFLDBCQUREO0FBRVpDLE1BQUFBLFVBQVUsRUFBRyxHQUFHUixVQUFZLGlCQUZoQjtBQUdaSixNQUFBQSxJQUFJLEVBQUU7QUFITSxLQUFELEVBSVY7QUFDRFcsTUFBQUEsV0FBVyxFQUFFLDBCQURaO0FBRURDLE1BQUFBLFVBQVUsRUFBRyxHQUFHUixVQUFZLGtCQUYzQjtBQUdESixNQUFBQSxJQUFJLEVBQUU7QUFITCxLQUpVO0FBSFksR0FBckIsQ0FBTjtBQWFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHVybkNvbnRleHQgfSBmcm9tICdib3RidWlsZGVyJztcblxuY29uc3QgbmFtZSA9ICdGaWxlIGF0dGFjaG1lbnRzJztcblxuZnVuY3Rpb24gaGVscCgpIHtcbiAgcmV0dXJuIHtcbiAgICAnZmlsZSc6ICdTaG93IGEgbWVzc2FnZSB3aXRoIGEgdGV4dCBmaWxlIGFuZCBXb3JkIGRvY3VtZW50IGF0dGFjaG1lbnRzJ1xuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzb3IoY29udGV4dDogVHVybkNvbnRleHQpIHtcbiAgY29uc3QgeyBQVUJMSUNfVVJMIH0gPSBwcm9jZXNzLmVudjtcblxuICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XG4gICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgIHRleHQ6ICdUaGUgcmVwb3J0cyBhcmUgcmVhZHksIHNlZSBhdHRhY2hlZC4nLFxuICAgIGF0dGFjaG1lbnRzOiBbe1xuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxuICAgICAgY29udGVudFVybDogYCR7IFBVQkxJQ19VUkwgfWFzc2V0cy90ZXN0LnR4dGAsXG4gICAgICBuYW1lOiAnUGxhaW4gdGV4dCdcbiAgICB9LCB7XG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsXG4gICAgICBjb250ZW50VXJsOiBgJHsgUFVCTElDX1VSTCB9YXNzZXRzL3Rlc3QuZG9jeGAsXG4gICAgICBuYW1lOiAnV29yZCBkb2N1bWVudCdcbiAgICB9XVxuICB9KTtcbn1cblxuZXhwb3J0IHsgaGVscCwgbmFtZSwgcHJvY2Vzc29yIH1cbiJdfQ==