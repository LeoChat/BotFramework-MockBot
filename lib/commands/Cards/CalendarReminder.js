"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// http://adaptivecards.io/samples/CalendarReminder.html
var _default = () => ({
  "$schema": "https://microsoft.github.io/AdaptiveCards/schemas/adaptive-card.json",
  "type": "AdaptiveCard",
  "version": "1.0",
  "speak": "<s>Your  meeting about \"Adaptive Card design session\"<break strength='weak'/> is starting at 12:30pm</s><s>Do you want to snooze <break strength='weak'/> or do you want to send a late notification to the attendees?</s>",
  "body": [{
    "type": "TextBlock",
    "text": "Adaptive Card design session",
    "size": "large",
    "weight": "bolder"
  }, {
    "type": "TextBlock",
    "text": "Conf Room 112/3377 (10)"
  }, {
    "type": "TextBlock",
    "text": "12:30 PM - 1:30 PM"
  }, {
    "type": "TextBlock",
    "text": "Snooze for"
  }, {
    "type": "Input.ChoiceSet",
    "id": "snooze",
    "style": "compact",
    "choices": [{
      "title": "5 minutes",
      "value": "5",
      "isSelected": true
    }, {
      "title": "15 minutes",
      "value": "15"
    }, {
      "title": "30 minutes",
      "value": "30"
    }]
  }],
  "actions": [{
    "type": "Action.Http",
    "method": "POST",
    "url": "http://foo.com",
    "title": "Snooze"
  }, {
    "type": "Action.Http",
    "method": "POST",
    "url": "http://foo.com",
    "title": "I'll be late"
  }, {
    "type": "Action.Http",
    "method": "POST",
    "url": "http://foo.com",
    "title": "Dismiss"
  }]
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9DYXJkcy9DYWxlbmRhclJlbWluZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtlQUVlLE9BQU87QUFDckIsYUFBVyxzRUFEVTtBQUVyQixVQUFRLGNBRmE7QUFHckIsYUFBVyxLQUhVO0FBSXJCLFdBQVMsOE5BSlk7QUFLckIsVUFBUSxDQUNQO0FBQ0MsWUFBUSxXQURUO0FBRUMsWUFBUSw4QkFGVDtBQUdDLFlBQVEsT0FIVDtBQUlDLGNBQVU7QUFKWCxHQURPLEVBT1A7QUFDQyxZQUFRLFdBRFQ7QUFFQyxZQUFRO0FBRlQsR0FQTyxFQVdQO0FBQ0MsWUFBUSxXQURUO0FBRUMsWUFBUTtBQUZULEdBWE8sRUFlUDtBQUNDLFlBQVEsV0FEVDtBQUVDLFlBQVE7QUFGVCxHQWZPLEVBbUJQO0FBQ0MsWUFBUSxpQkFEVDtBQUVDLFVBQU0sUUFGUDtBQUdDLGFBQVEsU0FIVDtBQUlDLGVBQVcsQ0FDVjtBQUNDLGVBQVMsV0FEVjtBQUVDLGVBQVMsR0FGVjtBQUdDLG9CQUFjO0FBSGYsS0FEVSxFQU1WO0FBQ0MsZUFBUyxZQURWO0FBRUMsZUFBUztBQUZWLEtBTlUsRUFVVjtBQUNDLGVBQVMsWUFEVjtBQUVDLGVBQVM7QUFGVixLQVZVO0FBSlosR0FuQk8sQ0FMYTtBQTZDckIsYUFBVyxDQUNWO0FBQ0MsWUFBUSxhQURUO0FBRUMsY0FBVSxNQUZYO0FBR0MsV0FBTyxnQkFIUjtBQUlDLGFBQVM7QUFKVixHQURVLEVBT1Y7QUFDQyxZQUFRLGFBRFQ7QUFFQyxjQUFVLE1BRlg7QUFHQyxXQUFPLGdCQUhSO0FBSUMsYUFBUztBQUpWLEdBUFUsRUFhVjtBQUNDLFlBQVEsYUFEVDtBQUVDLGNBQVUsTUFGWDtBQUdDLFdBQU8sZ0JBSFI7QUFJQyxhQUFTO0FBSlYsR0FiVTtBQTdDVSxDQUFQLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwOi8vYWRhcHRpdmVjYXJkcy5pby9zYW1wbGVzL0NhbGVuZGFyUmVtaW5kZXIuaHRtbFxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoe1xuXHRcIiRzY2hlbWFcIjogXCJodHRwczovL21pY3Jvc29mdC5naXRodWIuaW8vQWRhcHRpdmVDYXJkcy9zY2hlbWFzL2FkYXB0aXZlLWNhcmQuanNvblwiLFxuXHRcInR5cGVcIjogXCJBZGFwdGl2ZUNhcmRcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMS4wXCIsXG5cdFwic3BlYWtcIjogXCI8cz5Zb3VyICBtZWV0aW5nIGFib3V0IFxcXCJBZGFwdGl2ZSBDYXJkIGRlc2lnbiBzZXNzaW9uXFxcIjxicmVhayBzdHJlbmd0aD0nd2VhaycvPiBpcyBzdGFydGluZyBhdCAxMjozMHBtPC9zPjxzPkRvIHlvdSB3YW50IHRvIHNub296ZSA8YnJlYWsgc3RyZW5ndGg9J3dlYWsnLz4gb3IgZG8geW91IHdhbnQgdG8gc2VuZCBhIGxhdGUgbm90aWZpY2F0aW9uIHRvIHRoZSBhdHRlbmRlZXM/PC9zPlwiLFxuXHRcImJvZHlcIjogW1xuXHRcdHtcblx0XHRcdFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxuXHRcdFx0XCJ0ZXh0XCI6IFwiQWRhcHRpdmUgQ2FyZCBkZXNpZ24gc2Vzc2lvblwiLFxuXHRcdFx0XCJzaXplXCI6IFwibGFyZ2VcIixcblx0XHRcdFwid2VpZ2h0XCI6IFwiYm9sZGVyXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxuXHRcdFx0XCJ0ZXh0XCI6IFwiQ29uZiBSb29tIDExMi8zMzc3ICgxMClcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXG5cdFx0XHRcInRleHRcIjogXCIxMjozMCBQTSAtIDE6MzAgUE1cIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXG5cdFx0XHRcInRleHRcIjogXCJTbm9vemUgZm9yXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwidHlwZVwiOiBcIklucHV0LkNob2ljZVNldFwiLFxuXHRcdFx0XCJpZFwiOiBcInNub296ZVwiLFxuXHRcdFx0XCJzdHlsZVwiOlwiY29tcGFjdFwiLFxuXHRcdFx0XCJjaG9pY2VzXCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCI1IG1pbnV0ZXNcIixcblx0XHRcdFx0XHRcInZhbHVlXCI6IFwiNVwiLFxuXHRcdFx0XHRcdFwiaXNTZWxlY3RlZFwiOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiMTUgbWludXRlc1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogXCIxNVwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiMzAgbWludXRlc1wiLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogXCIzMFwiXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiYWN0aW9uc1wiOiBbXG5cdFx0e1xuXHRcdFx0XCJ0eXBlXCI6IFwiQWN0aW9uLkh0dHBcIixcblx0XHRcdFwibWV0aG9kXCI6IFwiUE9TVFwiLFxuXHRcdFx0XCJ1cmxcIjogXCJodHRwOi8vZm9vLmNvbVwiLFxuXHRcdFx0XCJ0aXRsZVwiOiBcIlNub296ZVwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcInR5cGVcIjogXCJBY3Rpb24uSHR0cFwiLFxuXHRcdFx0XCJtZXRob2RcIjogXCJQT1NUXCIsXG5cdFx0XHRcInVybFwiOiBcImh0dHA6Ly9mb28uY29tXCIsXG5cdFx0XHRcInRpdGxlXCI6IFwiSSdsbCBiZSBsYXRlXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdFwidHlwZVwiOiBcIkFjdGlvbi5IdHRwXCIsXG5cdFx0XHRcIm1ldGhvZFwiOiBcIlBPU1RcIixcblx0XHRcdFwidXJsXCI6IFwiaHR0cDovL2Zvby5jb21cIixcblx0XHRcdFwidGl0bGVcIjogXCJEaXNtaXNzXCJcblx0XHR9XG5cdF1cbn0pXG4iXX0=