"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'Suggested actions';
exports.name = name;

function help() {
  return {
    'card-actions': 'Show a suggested action with different card actions'
  };
}

async function processor(context, arg) {
  await context.sendActivity({
    type: 'message',
    textFormat: 'plain',
    text: 'Please select one of the card actions below',
    suggestedActions: {
      actions: [{
        title: '"openUrl"',
        type: 'openUrl',
        value: 'https://microsoft.com/'
      }],
      // TODO: Should we fill in the "to"?
      to: []
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9DYXJkQWN0aW9ucy50cyJdLCJuYW1lcyI6WyJuYW1lIiwiaGVscCIsInByb2Nlc3NvciIsImNvbnRleHQiLCJhcmciLCJzZW5kQWN0aXZpdHkiLCJ0eXBlIiwidGV4dEZvcm1hdCIsInRleHQiLCJzdWdnZXN0ZWRBY3Rpb25zIiwiYWN0aW9ucyIsInRpdGxlIiwidmFsdWUiLCJ0byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsbUJBQWI7OztBQUVBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZCxTQUFPO0FBQ0wsb0JBQWdCO0FBRFgsR0FBUDtBQUdEOztBQUVELGVBQWVDLFNBQWYsQ0FBeUJDLE9BQXpCLEVBQStDQyxHQUEvQyxFQUE0RDtBQUMxRCxRQUFNRCxPQUFPLENBQUNFLFlBQVIsQ0FBcUI7QUFDekJDLElBQUFBLElBQUksRUFBRSxTQURtQjtBQUV6QkMsSUFBQUEsVUFBVSxFQUFFLE9BRmE7QUFHekJDLElBQUFBLElBQUksRUFBRSw2Q0FIbUI7QUFJekJDLElBQUFBLGdCQUFnQixFQUFFO0FBQ2hCQyxNQUFBQSxPQUFPLEVBQUUsQ0FDUDtBQUNFQyxRQUFBQSxLQUFLLEVBQUUsV0FEVDtBQUVFTCxRQUFBQSxJQUFJLEVBQUUsU0FGUjtBQUdFTSxRQUFBQSxLQUFLLEVBQUU7QUFIVCxPQURPLENBRE87QUFRaEI7QUFDQUMsTUFBQUEsRUFBRSxFQUFFO0FBVFk7QUFKTyxHQUFyQixDQUFOO0FBZ0JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHVybkNvbnRleHQgfSBmcm9tICdib3RidWlsZGVyJztcblxuY29uc3QgbmFtZSA9ICdTdWdnZXN0ZWQgYWN0aW9ucyc7XG5cbmZ1bmN0aW9uIGhlbHAoKSB7XG4gIHJldHVybiB7XG4gICAgJ2NhcmQtYWN0aW9ucyc6ICdTaG93IGEgc3VnZ2VzdGVkIGFjdGlvbiB3aXRoIGRpZmZlcmVudCBjYXJkIGFjdGlvbnMnXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3Nvcihjb250ZXh0OiBUdXJuQ29udGV4dCwgYXJnOiBzdHJpbmcpIHtcbiAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICB0ZXh0Rm9ybWF0OiAncGxhaW4nLFxuICAgIHRleHQ6ICdQbGVhc2Ugc2VsZWN0IG9uZSBvZiB0aGUgY2FyZCBhY3Rpb25zIGJlbG93JyxcbiAgICBzdWdnZXN0ZWRBY3Rpb25zOiB7XG4gICAgICBhY3Rpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ1wib3BlblVybFwiJyxcbiAgICAgICAgICB0eXBlOiAnb3BlblVybCcsXG4gICAgICAgICAgdmFsdWU6ICdodHRwczovL21pY3Jvc29mdC5jb20vJyxcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIC8vIFRPRE86IFNob3VsZCB3ZSBmaWxsIGluIHRoZSBcInRvXCI/XG4gICAgICB0bzogW11cbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBoZWxwLCBuYW1lLCBwcm9jZXNzb3IgfVxuIl19