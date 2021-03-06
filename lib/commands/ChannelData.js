"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'Channel data';
exports.name = name;

function help() {
  return {
    'channel-data': 'Dump channel data from the activity sent by the user'
  };
}

async function processor(context) {
  await context.sendActivity({
    type: 'message',
    text: 'Dump of the channel data from the activity sent by the user.',
    attachments: [{
      content: `\`\`\`\n${JSON.stringify(context.activity.channelData, null, 2)}\n\`\`\``,
      contentType: 'text/markdown'
    }]
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9DaGFubmVsRGF0YS50cyJdLCJuYW1lcyI6WyJuYW1lIiwiaGVscCIsInByb2Nlc3NvciIsImNvbnRleHQiLCJzZW5kQWN0aXZpdHkiLCJ0eXBlIiwidGV4dCIsImF0dGFjaG1lbnRzIiwiY29udGVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJhY3Rpdml0eSIsImNoYW5uZWxEYXRhIiwiY29udGVudFR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLGNBQWI7OztBQUVBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZCxTQUFPO0FBQ0wsb0JBQWdCO0FBRFgsR0FBUDtBQUdEOztBQUVELGVBQWVDLFNBQWYsQ0FBeUJDLE9BQXpCLEVBQStDO0FBQzdDLFFBQU1BLE9BQU8sQ0FBQ0MsWUFBUixDQUFxQjtBQUN6QkMsSUFBQUEsSUFBSSxFQUFFLFNBRG1CO0FBRXpCQyxJQUFBQSxJQUFJLEVBQUUsOERBRm1CO0FBR3pCQyxJQUFBQSxXQUFXLEVBQUUsQ0FBQztBQUNaQyxNQUFBQSxPQUFPLEVBQUcsV0FBV0MsSUFBSSxDQUFDQyxTQUFMLENBQWVQLE9BQU8sQ0FBQ1EsUUFBUixDQUFpQkMsV0FBaEMsRUFBNkMsSUFBN0MsRUFBbUQsQ0FBbkQsQ0FBdUQsVUFEaEU7QUFFWkMsTUFBQUEsV0FBVyxFQUFFO0FBRkQsS0FBRDtBQUhZLEdBQXJCLENBQU47QUFRRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR1cm5Db250ZXh0IH0gZnJvbSAnYm90YnVpbGRlcic7XG5cbmNvbnN0IG5hbWUgPSAnQ2hhbm5lbCBkYXRhJztcblxuZnVuY3Rpb24gaGVscCgpIHtcbiAgcmV0dXJuIHtcbiAgICAnY2hhbm5lbC1kYXRhJzogJ0R1bXAgY2hhbm5lbCBkYXRhIGZyb20gdGhlIGFjdGl2aXR5IHNlbnQgYnkgdGhlIHVzZXInXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3Nvcihjb250ZXh0OiBUdXJuQ29udGV4dCkge1xuICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XG4gICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgIHRleHQ6ICdEdW1wIG9mIHRoZSBjaGFubmVsIGRhdGEgZnJvbSB0aGUgYWN0aXZpdHkgc2VudCBieSB0aGUgdXNlci4nLFxuICAgIGF0dGFjaG1lbnRzOiBbe1xuICAgICAgY29udGVudDogYFxcYFxcYFxcYFxcbiR7IEpTT04uc3RyaW5naWZ5KGNvbnRleHQuYWN0aXZpdHkuY2hhbm5lbERhdGEsIG51bGwsIDIpIH1cXG5cXGBcXGBcXGBgLFxuICAgICAgY29udGVudFR5cGU6ICd0ZXh0L21hcmtkb3duJ1xuICAgIH1dXG4gIH0pO1xufVxuXG5leHBvcnQgeyBoZWxwLCBuYW1lLCBwcm9jZXNzb3IgfVxuIl19