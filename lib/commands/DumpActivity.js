"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'Debug activity';
exports.name = name;

function help() {
  return {
    'dump-activity': 'Dump activity sent by the user as a JSON'
  };
}

async function processor(context) {
  const {
    activity
  } = context;
  const {
    action,
    attachmentLayout,
    attachments,
    channelId,
    conversation,
    channelData,
    entities,
    from,
    id,
    inputHint,
    locale,
    localTimestamp,
    name,
    recipient,
    replyToId,
    serviceUrl,
    speak,
    suggestedActions,
    summary,
    text,
    textFormat,
    timestamp,
    topicName,
    type,
    value
  } = activity;
  const serializedActivity = {
    action,
    attachmentLayout,
    attachments: attachments && attachments.map(({
      content,
      contentType,
      contentUrl,
      name,
      thumbnailUrl
    }) => ({
      content,
      contentType,
      contentUrl,
      name,
      thumbnailUrl
    })),
    channelId,
    conversation,
    channelData,
    entities,
    from,
    id,
    inputHint,
    locale,
    localTimestamp,
    name,
    recipient,
    replyToId,
    serviceUrl,
    speak,
    suggestedActions: suggestedActions && {
      actions: suggestedActions.actions.map(({
        image,
        text,
        title,
        type,
        value
      }) => ({
        image,
        text,
        title,
        type,
        value
      })),
      to: suggestedActions.to
    },
    summary,
    text,
    textFormat,
    timestamp,
    topicName,
    type,
    value
  };
  await context.sendActivity({
    type: 'message',
    text: 'Partial dump of the activity sent by the user.',
    attachments: [{
      content: `\`\`\`\n${JSON.stringify(serializedActivity, null, 2)}\n\`\`\``,
      contentType: 'text/markdown'
    }]
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9EdW1wQWN0aXZpdHkudHMiXSwibmFtZXMiOlsibmFtZSIsImhlbHAiLCJwcm9jZXNzb3IiLCJjb250ZXh0IiwiYWN0aXZpdHkiLCJhY3Rpb24iLCJhdHRhY2htZW50TGF5b3V0IiwiYXR0YWNobWVudHMiLCJjaGFubmVsSWQiLCJjb252ZXJzYXRpb24iLCJjaGFubmVsRGF0YSIsImVudGl0aWVzIiwiZnJvbSIsImlkIiwiaW5wdXRIaW50IiwibG9jYWxlIiwibG9jYWxUaW1lc3RhbXAiLCJyZWNpcGllbnQiLCJyZXBseVRvSWQiLCJzZXJ2aWNlVXJsIiwic3BlYWsiLCJzdWdnZXN0ZWRBY3Rpb25zIiwic3VtbWFyeSIsInRleHQiLCJ0ZXh0Rm9ybWF0IiwidGltZXN0YW1wIiwidG9waWNOYW1lIiwidHlwZSIsInZhbHVlIiwic2VyaWFsaXplZEFjdGl2aXR5IiwibWFwIiwiY29udGVudCIsImNvbnRlbnRUeXBlIiwiY29udGVudFVybCIsInRodW1ibmFpbFVybCIsImFjdGlvbnMiLCJpbWFnZSIsInRpdGxlIiwidG8iLCJzZW5kQWN0aXZpdHkiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU1BLElBQUksR0FBRyxnQkFBYjs7O0FBRUEsU0FBU0MsSUFBVCxHQUFnQjtBQUNkLFNBQU87QUFDTCxxQkFBaUI7QUFEWixHQUFQO0FBR0Q7O0FBRUQsZUFBZUMsU0FBZixDQUF5QkMsT0FBekIsRUFBK0M7QUFDN0MsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQWVELE9BQXJCO0FBQ0EsUUFBTTtBQUNKRSxJQUFBQSxNQURJO0FBRUpDLElBQUFBLGdCQUZJO0FBR0pDLElBQUFBLFdBSEk7QUFJSkMsSUFBQUEsU0FKSTtBQUtKQyxJQUFBQSxZQUxJO0FBTUpDLElBQUFBLFdBTkk7QUFPSkMsSUFBQUEsUUFQSTtBQVFKQyxJQUFBQSxJQVJJO0FBU0pDLElBQUFBLEVBVEk7QUFVSkMsSUFBQUEsU0FWSTtBQVdKQyxJQUFBQSxNQVhJO0FBWUpDLElBQUFBLGNBWkk7QUFhSmhCLElBQUFBLElBYkk7QUFjSmlCLElBQUFBLFNBZEk7QUFlSkMsSUFBQUEsU0FmSTtBQWdCSkMsSUFBQUEsVUFoQkk7QUFpQkpDLElBQUFBLEtBakJJO0FBa0JKQyxJQUFBQSxnQkFsQkk7QUFtQkpDLElBQUFBLE9BbkJJO0FBb0JKQyxJQUFBQSxJQXBCSTtBQXFCSkMsSUFBQUEsVUFyQkk7QUFzQkpDLElBQUFBLFNBdEJJO0FBdUJKQyxJQUFBQSxTQXZCSTtBQXdCSkMsSUFBQUEsSUF4Qkk7QUF5QkpDLElBQUFBO0FBekJJLE1BMEJGeEIsUUExQko7QUE0QkEsUUFBTXlCLGtCQUFrQixHQUFHO0FBQ3pCeEIsSUFBQUEsTUFEeUI7QUFFekJDLElBQUFBLGdCQUZ5QjtBQUd6QkMsSUFBQUEsV0FBVyxFQUFFQSxXQUFXLElBQUlBLFdBQVcsQ0FBQ3VCLEdBQVosQ0FBZ0IsQ0FBQztBQUMzQ0MsTUFBQUEsT0FEMkM7QUFFM0NDLE1BQUFBLFdBRjJDO0FBRzNDQyxNQUFBQSxVQUgyQztBQUkzQ2pDLE1BQUFBLElBSjJDO0FBSzNDa0MsTUFBQUE7QUFMMkMsS0FBRCxNQU1yQztBQUNMSCxNQUFBQSxPQURLO0FBRUxDLE1BQUFBLFdBRks7QUFHTEMsTUFBQUEsVUFISztBQUlMakMsTUFBQUEsSUFKSztBQUtMa0MsTUFBQUE7QUFMSyxLQU5xQyxDQUFoQixDQUhIO0FBZ0J6QjFCLElBQUFBLFNBaEJ5QjtBQWlCekJDLElBQUFBLFlBakJ5QjtBQWtCekJDLElBQUFBLFdBbEJ5QjtBQW1CekJDLElBQUFBLFFBbkJ5QjtBQW9CekJDLElBQUFBLElBcEJ5QjtBQXFCekJDLElBQUFBLEVBckJ5QjtBQXNCekJDLElBQUFBLFNBdEJ5QjtBQXVCekJDLElBQUFBLE1BdkJ5QjtBQXdCekJDLElBQUFBLGNBeEJ5QjtBQXlCekJoQixJQUFBQSxJQXpCeUI7QUEwQnpCaUIsSUFBQUEsU0ExQnlCO0FBMkJ6QkMsSUFBQUEsU0EzQnlCO0FBNEJ6QkMsSUFBQUEsVUE1QnlCO0FBNkJ6QkMsSUFBQUEsS0E3QnlCO0FBOEJ6QkMsSUFBQUEsZ0JBQWdCLEVBQUVBLGdCQUFnQixJQUFJO0FBQ3BDYyxNQUFBQSxPQUFPLEVBQUVkLGdCQUFnQixDQUFDYyxPQUFqQixDQUF5QkwsR0FBekIsQ0FBNkIsQ0FBQztBQUNyQ00sUUFBQUEsS0FEcUM7QUFFckNiLFFBQUFBLElBRnFDO0FBR3JDYyxRQUFBQSxLQUhxQztBQUlyQ1YsUUFBQUEsSUFKcUM7QUFLckNDLFFBQUFBO0FBTHFDLE9BQUQsTUFNL0I7QUFDTFEsUUFBQUEsS0FESztBQUVMYixRQUFBQSxJQUZLO0FBR0xjLFFBQUFBLEtBSEs7QUFJTFYsUUFBQUEsSUFKSztBQUtMQyxRQUFBQTtBQUxLLE9BTitCLENBQTdCLENBRDJCO0FBY3BDVSxNQUFBQSxFQUFFLEVBQUVqQixnQkFBZ0IsQ0FBQ2lCO0FBZGUsS0E5QmI7QUE4Q3pCaEIsSUFBQUEsT0E5Q3lCO0FBK0N6QkMsSUFBQUEsSUEvQ3lCO0FBZ0R6QkMsSUFBQUEsVUFoRHlCO0FBaUR6QkMsSUFBQUEsU0FqRHlCO0FBa0R6QkMsSUFBQUEsU0FsRHlCO0FBbUR6QkMsSUFBQUEsSUFuRHlCO0FBb0R6QkMsSUFBQUE7QUFwRHlCLEdBQTNCO0FBdURBLFFBQU16QixPQUFPLENBQUNvQyxZQUFSLENBQXFCO0FBQ3pCWixJQUFBQSxJQUFJLEVBQUUsU0FEbUI7QUFFekJKLElBQUFBLElBQUksRUFBRSxnREFGbUI7QUFHekJoQixJQUFBQSxXQUFXLEVBQUUsQ0FBQztBQUNad0IsTUFBQUEsT0FBTyxFQUFHLFdBQVdTLElBQUksQ0FBQ0MsU0FBTCxDQUFlWixrQkFBZixFQUFtQyxJQUFuQyxFQUF5QyxDQUF6QyxDQUE2QyxVQUR0RDtBQUVaRyxNQUFBQSxXQUFXLEVBQUU7QUFGRCxLQUFEO0FBSFksR0FBckIsQ0FBTjtBQVFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHVybkNvbnRleHQgfSBmcm9tICdib3RidWlsZGVyJztcblxuY29uc3QgbmFtZSA9ICdEZWJ1ZyBhY3Rpdml0eSc7XG5cbmZ1bmN0aW9uIGhlbHAoKSB7XG4gIHJldHVybiB7XG4gICAgJ2R1bXAtYWN0aXZpdHknOiAnRHVtcCBhY3Rpdml0eSBzZW50IGJ5IHRoZSB1c2VyIGFzIGEgSlNPTidcbiAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc29yKGNvbnRleHQ6IFR1cm5Db250ZXh0KSB7XG4gIGNvbnN0IHsgYWN0aXZpdHkgfSA9IGNvbnRleHQ7XG4gIGNvbnN0IHtcbiAgICBhY3Rpb24sXG4gICAgYXR0YWNobWVudExheW91dCxcbiAgICBhdHRhY2htZW50cyxcbiAgICBjaGFubmVsSWQsXG4gICAgY29udmVyc2F0aW9uLFxuICAgIGNoYW5uZWxEYXRhLFxuICAgIGVudGl0aWVzLFxuICAgIGZyb20sXG4gICAgaWQsXG4gICAgaW5wdXRIaW50LFxuICAgIGxvY2FsZSxcbiAgICBsb2NhbFRpbWVzdGFtcCxcbiAgICBuYW1lLFxuICAgIHJlY2lwaWVudCxcbiAgICByZXBseVRvSWQsXG4gICAgc2VydmljZVVybCxcbiAgICBzcGVhayxcbiAgICBzdWdnZXN0ZWRBY3Rpb25zLFxuICAgIHN1bW1hcnksXG4gICAgdGV4dCxcbiAgICB0ZXh0Rm9ybWF0LFxuICAgIHRpbWVzdGFtcCxcbiAgICB0b3BpY05hbWUsXG4gICAgdHlwZSxcbiAgICB2YWx1ZVxuICB9ID0gYWN0aXZpdHk7XG5cbiAgY29uc3Qgc2VyaWFsaXplZEFjdGl2aXR5ID0ge1xuICAgIGFjdGlvbixcbiAgICBhdHRhY2htZW50TGF5b3V0LFxuICAgIGF0dGFjaG1lbnRzOiBhdHRhY2htZW50cyAmJiBhdHRhY2htZW50cy5tYXAoKHtcbiAgICAgIGNvbnRlbnQsXG4gICAgICBjb250ZW50VHlwZSxcbiAgICAgIGNvbnRlbnRVcmwsXG4gICAgICBuYW1lLFxuICAgICAgdGh1bWJuYWlsVXJsXG4gICAgfSkgPT4gKHtcbiAgICAgIGNvbnRlbnQsXG4gICAgICBjb250ZW50VHlwZSxcbiAgICAgIGNvbnRlbnRVcmwsXG4gICAgICBuYW1lLFxuICAgICAgdGh1bWJuYWlsVXJsXG4gICAgfSkpLFxuICAgIGNoYW5uZWxJZCxcbiAgICBjb252ZXJzYXRpb24sXG4gICAgY2hhbm5lbERhdGEsXG4gICAgZW50aXRpZXMsXG4gICAgZnJvbSxcbiAgICBpZCxcbiAgICBpbnB1dEhpbnQsXG4gICAgbG9jYWxlLFxuICAgIGxvY2FsVGltZXN0YW1wLFxuICAgIG5hbWUsXG4gICAgcmVjaXBpZW50LFxuICAgIHJlcGx5VG9JZCxcbiAgICBzZXJ2aWNlVXJsLFxuICAgIHNwZWFrLFxuICAgIHN1Z2dlc3RlZEFjdGlvbnM6IHN1Z2dlc3RlZEFjdGlvbnMgJiYge1xuICAgICAgYWN0aW9uczogc3VnZ2VzdGVkQWN0aW9ucy5hY3Rpb25zLm1hcCgoe1xuICAgICAgICBpbWFnZSxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSA9PiAoe1xuICAgICAgICBpbWFnZSxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSksXG4gICAgICB0bzogc3VnZ2VzdGVkQWN0aW9ucy50b1xuICAgIH0sXG4gICAgc3VtbWFyeSxcbiAgICB0ZXh0LFxuICAgIHRleHRGb3JtYXQsXG4gICAgdGltZXN0YW1wLFxuICAgIHRvcGljTmFtZSxcbiAgICB0eXBlLFxuICAgIHZhbHVlXG4gIH07XG5cbiAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICB0ZXh0OiAnUGFydGlhbCBkdW1wIG9mIHRoZSBhY3Rpdml0eSBzZW50IGJ5IHRoZSB1c2VyLicsXG4gICAgYXR0YWNobWVudHM6IFt7XG4gICAgICBjb250ZW50OiBgXFxgXFxgXFxgXFxuJHsgSlNPTi5zdHJpbmdpZnkoc2VyaWFsaXplZEFjdGl2aXR5LCBudWxsLCAyKSB9XFxuXFxgXFxgXFxgYCxcbiAgICAgIGNvbnRlbnRUeXBlOiAndGV4dC9tYXJrZG93bidcbiAgICB9XVxuICB9KTtcbn1cblxuZXhwb3J0IHsgaGVscCwgbmFtZSwgcHJvY2Vzc29yIH1cbiJdfQ==