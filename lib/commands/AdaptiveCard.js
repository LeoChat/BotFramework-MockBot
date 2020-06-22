"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;

var _ActionStyles = _interopRequireDefault(require("./Cards/ActionStyles"));

var _BingSports = _interopRequireDefault(require("./Cards/BingSports"));

var _Breakfast = _interopRequireDefault(require("./Cards/Breakfast"));

var _Broken = _interopRequireDefault(require("./Cards/Broken"));

var _CalendarReminder = _interopRequireDefault(require("./Cards/CalendarReminder"));

var _FlightTracking = _interopRequireDefault(require("./Cards/FlightTracking"));

var _FlightUpdate = _interopRequireDefault(require("./Cards/FlightUpdate"));

var _ArabicGreeting = _interopRequireDefault(require("./Cards/ArabicGreeting"));

var _Inputs = _interopRequireDefault(require("./Cards/Inputs"));

var _Markdown = _interopRequireDefault(require("./Cards/Markdown"));

var _OrderedList = _interopRequireDefault(require("./Cards/OrderedList"));

var _Restaurant = _interopRequireDefault(require("./Cards/Restaurant"));

var _Review = _interopRequireDefault(require("./Cards/Review"));

var _RichMessage = _interopRequireDefault(require("./Cards/RichMessage"));

var _Simple = _interopRequireDefault(require("./Cards/Simple"));

var _SportsClub = _interopRequireDefault(require("./Cards/SportsClub"));

var _UnorderedList = _interopRequireDefault(require("./Cards/UnorderedList"));

var _Weather = _interopRequireDefault(require("./Cards/Weather"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCardJSON(name = '') {
  switch (name.trim().toLowerCase()) {
    case 'actionstyles':
      return (0, _ActionStyles.default)();

    case 'bingsports':
    case 'sports':
      return (0, _BingSports.default)();

    case 'breakfast':
      return (0, _Breakfast.default)();

    case 'broken':
      return (0, _Broken.default)();

    case 'broken:1':
    case 'broken:lang':
      return (0, _Broken.default)('1');

    case 'calendarreminder':
    case 'calendar':
    case 'reminder':
      return (0, _CalendarReminder.default)();

    case 'flight':
    case 'flightupdate':
      return (0, _FlightUpdate.default)();

    case 'flighttracking':
      return (0, _FlightTracking.default)();

    case 'arabicgreeting':
    case 'rtlgreeting':
    case 'رحب بالقارئ':
      return (0, _ArabicGreeting.default)();

    case 'inputs':
      return (0, _Inputs.default)();

    case 'markdown':
      return (0, _Markdown.default)();

    case 'ol':
      return (0, _OrderedList.default)();

    case 'restaurant':
      return (0, _Restaurant.default)();

    case 'review':
      return (0, _Review.default)();

    case 'richmessage':
      return (0, _RichMessage.default)();

    case 'simple':
      return (0, _Simple.default)();

    case 'sportsclub':
      return (0, _SportsClub.default)();

    case 'ul':
      return (0, _UnorderedList.default)();

    case 'weather':
      return (0, _Weather.default)();
  }
}

const name = 'Adaptive Card';
exports.name = name;

function help() {
  return {
    'card bingsports': 'Show Bing sports using Adaptive Card',
    'card breakfast': 'Show breakfast review using Adaptive Card',
    'card broken:lang': 'Show an Adaptive Card that is broken because of invalid language identifier',
    'card broken': 'Show an Adaptive Card that is broken because of invalid version',
    'card flight': 'Show flight update using Adaptive Card',
    'card flighttracking': 'Show flight tracking using Adaptive Card',
    'card arabicgreeting': 'Show a greeting in Arabic (for RTL)',
    'card inputs': 'Show an Adaptive Card with all types of inputs',
    'card ol': 'Show an ordered list with Markdown',
    'card markdown': 'Show Markdown using Adaptive Card',
    'card reminder': 'Show a reminder using Adaptive Card',
    'card restaurant': 'Show restaurant information using Adaptive Card',
    'card review': 'Show review using Adaptive Card',
    'card richmessage': 'Show a rich message using Adaptive Card',
    'card simple': 'Show a simple Adaptive Card',
    'card sportsclub': 'Show a comprehensive sports club POI using Adaptive Card',
    'card ul': 'Show an unordered list with Markdown',
    'card weather': 'Show weather forecast using Adaptive Card'
  };
}

async function processor(context, ...names) {
  if (/^what/iu.test(names[0])) {
    await context.sendActivity({
      type: 'message',
      speak: 'Here is the forecast for this week.',
      attachmentLayout: 'carousel',
      attachments: [{
        contentType: 'application/vnd.microsoft.card.adaptive',
        content: (0, _Weather.default)()
      }, {
        contentType: 'application/vnd.microsoft.card.adaptive',
        content: (0, _FlightUpdate.default)()
      }, {
        contentType: 'application/vnd.microsoft.card.adaptive',
        content: (0, _RichMessage.default)()
      }]
    });
    return;
  }

  if (/^arabic greeting|^arabicgreeting|رحب بالقارئ/iu.test(context.activity.text)) {
    const content = getCardJSON('arabicgreeting');
    await context.sendActivity({
      type: 'message',
      attachments: [{
        contentType: 'application/vnd.microsoft.card.adaptive',
        content
      }]
    });
    return;
  }

  const contents = names.filter(name => name).map(name => getCardJSON(name));

  if (contents && contents.length) {
    let text = `Showing ${names.filter(name => name).join(', ')}`;
    await context.sendActivity({
      type: 'message',
      text,
      attachmentLayout: 'carousel',
      attachments: contents.map(content => ({
        contentType: 'application/vnd.microsoft.card.adaptive',
        content
      }))
    });
  } else {
    await context.sendActivity({
      type: 'message',
      text: `No card named '${name}'`
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9BZGFwdGl2ZUNhcmQudHMiXSwibmFtZXMiOlsiZ2V0Q2FyZEpTT04iLCJuYW1lIiwidHJpbSIsInRvTG93ZXJDYXNlIiwiaGVscCIsInByb2Nlc3NvciIsImNvbnRleHQiLCJuYW1lcyIsInRlc3QiLCJzZW5kQWN0aXZpdHkiLCJ0eXBlIiwic3BlYWsiLCJhdHRhY2htZW50TGF5b3V0IiwiYXR0YWNobWVudHMiLCJjb250ZW50VHlwZSIsImNvbnRlbnQiLCJhY3Rpdml0eSIsInRleHQiLCJjb250ZW50cyIsImZpbHRlciIsIm1hcCIsImxlbmd0aCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsSUFBWSxHQUFHLEVBQXBDLEVBQTZDO0FBQzNDLFVBQVFBLElBQUksQ0FBQ0MsSUFBTCxHQUFZQyxXQUFaLEVBQVI7QUFDRSxTQUFLLGNBQUw7QUFDRSxhQUFPLDRCQUFQOztBQUVGLFNBQUssWUFBTDtBQUNBLFNBQUssUUFBTDtBQUNFLGFBQU8sMEJBQVA7O0FBRUYsU0FBSyxXQUFMO0FBQ0UsYUFBTyx5QkFBUDs7QUFFRixTQUFLLFFBQUw7QUFDRSxhQUFPLHNCQUFQOztBQUVGLFNBQUssVUFBTDtBQUNBLFNBQUssYUFBTDtBQUNFLGFBQU8scUJBQU8sR0FBUCxDQUFQOztBQUVGLFNBQUssa0JBQUw7QUFDQSxTQUFLLFVBQUw7QUFDQSxTQUFLLFVBQUw7QUFDRSxhQUFPLGdDQUFQOztBQUVGLFNBQUssUUFBTDtBQUNBLFNBQUssY0FBTDtBQUNFLGFBQU8sNEJBQVA7O0FBRUYsU0FBSyxnQkFBTDtBQUNFLGFBQU8sOEJBQVA7O0FBRUYsU0FBSyxnQkFBTDtBQUNBLFNBQUssYUFBTDtB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RUEsVUFBTWhCLE9BQU8sQ0FBQ0csWUFBUixDQUFxQjtBQUN6QkMsTUFBQUEsSUFBSSxFQUFFLFNBRG1CO0FBRXpCTyxNQUFBQSxJQUZ5QjtBQUd6QkwsTUFBQUEsZ0JBQWdCLEVBQUUsVUFITztBQUl6QkMsTUFBQUEsV0FBVyxFQUFFSyxRQUFRLENBQUNFLEdBQVQsQ0FBYUwsT0FBTyxLQUFLO0FBQ3BDRCxRQUFBQSxXQUFXLEVBQUUseUNBRHVCO0FBRXBDQyxRQUFBQTtBQUZvQyxPQUFMLENBQXBCO0FBSlksS0FBckIsQ0FBTjtBQVNELEdBWkQsTUFZTztBQUNMLFVBQU1ULE9BQU8sQ0FBQ0csWUFBUixDQUFxQjtBQUN6QkMsTUFBQUEsSUFBSSxFQUFFLFNBRG1CO0FBRXpCTyxNQUFBQSxJQUFJLEVBQUcsa0JBQWtCaEIsSUFBTTtBQUZOLEtBQXJCLENBQU47QUFJRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHVybkNvbnRleHQgfSBmcm9tICdib3RidWlsZGVyJztcblxuaW1wb3J0IEFjdGlvblN0eWxlcyBmcm9tICcuL0NhcmRzL0FjdGlvblN0eWxlcyc7XG5pbXBvcnQgQmluZ1Nwb3J0cyBmcm9tICcuL0NhcmRzL0JpbmdTcG9ydHMnO1xuaW1wb3J0IEJyZWFrZmFzdCBmcm9tICcuL0NhcmRzL0JyZWFrZmFzdCc7XG5pbXBvcnQgQnJva2VuIGZyb20gJy4vQ2FyZHMvQnJva2VuJztcbmltcG9ydCBDYWxlbmRhclJlbWluZGVyIGZyb20gJy4vQ2FyZHMvQ2FsZW5kYXJSZW1pbmRlcic7XG5pbXBvcnQgRmxpZ2h0VHJhY2tpbmcgZnJvbSAnLi9DYXJkcy9GbGlnaHRUcmFja2luZyc7XG5pbXBvcnQgRmxpZ2h0VXBkYXRlIGZyb20gJy4vQ2FyZHMvRmxpZ2h0VXBkYXRlJztcbmltcG9ydCBBcmFiaWNHcmVldGluZyBmcm9tICcuL0NhcmRzL0FyYWJpY0dyZWV0aW5nJztcbmltcG9ydCBJbnB1dHMgZnJvbSAnLi9DYXJkcy9JbnB1dHMnO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJy4vQ2FyZHMvTWFya2Rvd24nO1xuaW1wb3J0IE9yZGVyZWRMaXN0IGZyb20gJy4vQ2FyZHMvT3JkZXJlZExpc3QnO1xuaW1wb3J0IFJlc3RhdXJhbnQgZnJvbSAnLi9DYXJkcy9SZXN0YXVyYW50JztcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9DYXJkcy9SZXZpZXcnO1xuaW1wb3J0IFJpY2hNZXNzYWdlIGZyb20gJy4vQ2FyZHMvUmljaE1lc3NhZ2UnO1xuaW1wb3J0IFNpbXBsZSBmcm9tICcuL0NhcmRzL1NpbXBsZSc7XG5pbXBvcnQgU3BvcnRzQ2x1YiBmcm9tICcuL0NhcmRzL1Nwb3J0c0NsdWInO1xuaW1wb3J0IFVub3JkZXJlZExpc3QgZnJvbSAnLi9DYXJkcy9Vbm9yZGVyZWRMaXN0JztcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4vQ2FyZHMvV2VhdGhlcic7XG5cbmZ1bmN0aW9uIGdldENhcmRKU09OKG5hbWU6IHN0cmluZyA9ICcnKTogYW55IHtcbiAgc3dpdGNoIChuYW1lLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnYWN0aW9uc3R5bGVzJzpcbiAgICAgIHJldHVybiBBY3Rpb25TdHlsZXMoKTtcblxuICAgIGNhc2UgJ2JpbmdzcG9ydHMnOlxuICAgIGNhc2UgJ3Nwb3J0cyc6XG4gICAgICByZXR1cm4gQmluZ1Nwb3J0cygpO1xuXG4gICAgY2FzZSAnYnJlYWtmYXN0JzpcbiAgICAgIHJldHVybiBCcmVha2Zhc3QoKTtcblxuICAgIGNhc2UgJ2Jyb2tlbic6XG4gICAgICByZXR1cm4gQnJva2VuKCk7XG5cbiAgICBjYXNlICdicm9rZW46MSc6XG4gICAgY2FzZSAnYnJva2VuOmxhbmcnOlxuICAgICAgcmV0dXJuIEJyb2tlbignMScpO1xuXG4gICAgY2FzZSAnY2FsZW5kYXJyZW1pbmRlcic6XG4gICAgY2FzZSAnY2FsZW5kYXInOlxuICAgIGNhc2UgJ3JlbWluZGVyJzpcbiAgICAgIHJldHVybiBDYWxlbmRhclJlbWluZGVyKCk7XG5cbiAgICBjYXNlICdmbGlnaHQnOlxuICAgIGNhc2UgJ2ZsaWdodHVwZGF0ZSc6XG4gICAgICByZXR1cm4gRmxpZ2h0VXBkYXRlKCk7XG5cbiAgICBjYXNlICdmbGlnaHR0cmFja2luZyc6XG4gICAgICByZXR1cm4gRmxpZ2h0VHJhY2tpbmcoKTtcblxuICAgIGNhc2UgJ2FyYWJpY2dyZWV0aW5nJzpcbiAgICBjYXNlICdydGxncmVldGluZyc6XG4gICAgY2FzZSAn2LHYrdioINio2KfZhNmC2KfYsdimJzpcbiAgICAgIHJldHVybiBBcmFiaWNHcmVldGluZygpO1xuXG4gICAgY2FzZSAnaW5wdXRzJzpcbiAgICAgIHJldHVybiBJbnB1dHMoKTtcblxuICAgIGNhc2UgJ21hcmtkb3duJzpcbiAgICAgIHJldHVybiBNYXJrZG93bigpO1xuXG4gICAgY2FzZSAnb2wnOlxuICAgICAgcmV0dXJuIE9yZGVyZWRMaXN0KCk7XG5cbiAgICBjYXNlICdyZXN0YXVyYW50JzpcbiAgICAgIHJldHVybiBSZXN0YXVyYW50KCk7XG5cbiAgICBjYXNlICdyZXZpZXcnOlxuICAgICAgcmV0dXJuIFJldmlldygpO1xuXG4gICAgY2FzZSAncmljaG1lc3NhZ2UnOlxuICAgICAgcmV0dXJuIFJpY2hNZXNzYWdlKCk7XG5cbiAgICBjYXNlICdzaW1wbGUnOlxuICAgICAgcmV0dXJuIFNpbXBsZSgpO1xuXG4gICAgY2FzZSAnc3BvcnRzY2x1Yic6XG4gICAgICByZXR1cm4gU3BvcnRzQ2x1YigpO1xuXG4gICAgY2FzZSAndWwnOlxuICAgICAgcmV0dXJuIFVub3JkZXJlZExpc3QoKTtcblxuICAgIGNhc2UgJ3dlYXRoZXInOlxuICAgICAgcmV0dXJuIFdlYXRoZXIoKTtcbiAgfVxufVxuXG5jb25zdCBuYW1lID0gJ0FkYXB0aXZlIENhcmQnO1xuXG5mdW5jdGlvbiBoZWxwKCkge1xuICByZXR1cm4ge1xuICAgICdjYXJkIGJpbmdzcG9ydHMnOiAnU2hvdyBCaW5nIHNwb3J0cyB1c2luZyBBZGFwdGl2ZSBDYXJkJyxcbiAgICAnY2FyZCBicmVha2Zhc3QnOiAnU2hvdyBicmVha2Zhc3QgcmV2aWV3IHVzaW5nIEFkYXB0aXZlIENhcmQnLFxuICAgICdjYXJkIGJyb2tlbjpsYW5nJzogJ1Nob3cgYW4gQWRhcHRpdmUgQ2FyZCB0aGF0IGlzIGJyb2tlbiBiZWNhdXNlIG9mIGludmFsaWQgbGFuZ3VhZ2UgaWRlbnRpZmllcicsXG4gICAgJ2NhcmQgYnJva2VuJzogJ1Nob3cgYW4gQWRhcHRpdmUgQ2FyZCB0aGF0IGlzIGJyb2tlbiBiZWNhdXNlIG9mIGludmFsaWQgdmVyc2lvbicsXG4gICAgJ2NhcmQgZmxpZ2h0JzogJ1Nob3cgZmxpZ2h0IHVwZGF0ZSB1c2luZyBBZGFwdGl2ZSBDYXJkJyxcbiAgICAnY2FyZCBmbGlnaHR0cmFja2luZyc6ICdTaG93IGZsaWdodCB0cmFja2luZyB1c2luZyBBZGFwdGl2ZSBDYXJkJyxcbiAgICAnY2FyZCBhcmFiaWNncmVldGluZyc6ICdTaG93IGEgZ3JlZXRpbmcgaW4gQXJhYmljIChmb3IgUlRMKScsXG4gICAgJ2NhcmQgaW5wdXRzJzogJ1Nob3cgYW4gQWRhcHRpdmUgQ2FyZCB3aXRoIGFsbCB0eXBlcyBvZiBpbnB1dHMnLFxuICAgICdjYXJkIG9sJzogJ1Nob3cgYW4gb3JkZXJlZCBsaXN0IHdpdGggTWFya2Rvd24nLFxuICAgICdjYXJkIG1hcmtkb3duJzogJ1Nob3cgTWFya2Rvd24gdXNpbmcgQWRhcHRpdmUgQ2FyZCcsXG4gICAgJ2NhcmQgcmVtaW5kZXInOiAnU2hvdyBhIHJlbWluZGVyIHVzaW5nIEFkYXB0aXZlIENhcmQnLFxuICAgICdjYXJkIHJlc3RhdXJhbnQnOiAnU2hvdyByZXN0YXVyYW50IGluZm9ybWF0aW9uIHVzaW5nIEFkYXB0aXZlIENhcmQnLFxuICAgICdjYXJkIHJldmlldyc6ICdTaG93IHJldmlldyB1c2luZyBBZGFwdGl2ZSBDYXJkJyxcbiAgICAnY2FyZCByaWNobWVzc2FnZSc6ICdTaG93IGEgcmljaCBtZXNzYWdlIHVzaW5nIEFkYXB0aXZlIENhcmQnLFxuICAgICdjYXJkIHNpbXBsZSc6ICdTaG93IGEgc2ltcGxlIEFkYXB0aXZlIENhcmQnLFxuICAgICdjYXJkIHNwb3J0c2NsdWInOiAnU2hvdyBhIGNvbXByZWhlbnNpdmUgc3BvcnRzIGNsdWIgUE9JIHVzaW5nIEFkYXB0aXZlIENhcmQnLFxuICAgICdjYXJkIHVsJzogJ1Nob3cgYW4gdW5vcmRlcmVkIGxpc3Qgd2l0aCBNYXJrZG93bicsXG4gICAgJ2NhcmQgd2VhdGhlcic6ICdTaG93IHdlYXRoZXIgZm9yZWNhc3QgdXNpbmcgQWRhcHRpdmUgQ2FyZCdcbiAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc29yKGNvbnRleHQ6IFR1cm5Db250ZXh0LCAuLi5uYW1lczogc3RyaW5nW10pIHtcbiAgaWYgKC9ed2hhdC9pdS50ZXN0KG5hbWVzWzBdKSkge1xuICAgIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcbiAgICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICAgIHNwZWFrOiAnSGVyZSBpcyB0aGUgZm9yZWNhc3QgZm9yIHRoaXMgd2Vlay4nLFxuICAgICAgYXR0YWNobWVudExheW91dDogJ2Nhcm91c2VsJyxcbiAgICAgIGF0dGFjaG1lbnRzOiBbe1xuICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5jYXJkLmFkYXB0aXZlJyxcbiAgICAgICAgICBjb250ZW50OiBXZWF0aGVyKClcbiAgICAgICAgfSwge1xuICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5jYXJkLmFkYXB0aXZlJyxcbiAgICAgICAgICBjb250ZW50OiBGbGlnaHRVcGRhdGUoKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi92bmQubWljcm9zb2Z0LmNhcmQuYWRhcHRpdmUnLFxuICAgICAgICAgIGNvbnRlbnQ6IFJpY2hNZXNzYWdlKClcbiAgICAgICAgfV1cbiAgICB9KTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICgvXmFyYWJpYyBncmVldGluZ3xeYXJhYmljZ3JlZXRpbmd82LHYrdioINio2KfZhNmC2KfYsdimL2l1LnRlc3QoY29udGV4dC5hY3Rpdml0eS50ZXh0KSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBnZXRDYXJkSlNPTignYXJhYmljZ3JlZXRpbmcnKTtcblxuICAgIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcbiAgICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICAgIGF0dGFjaG1lbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQuY2FyZC5hZGFwdGl2ZScsXG4gICAgICAgICAgY29udGVudFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjb250ZW50cyA9IG5hbWVzLmZpbHRlcihuYW1lID0+IG5hbWUpLm1hcChuYW1lID0+IGdldENhcmRKU09OKG5hbWUpKTtcblxuICBpZiAoY29udGVudHMgJiYgY29udGVudHMubGVuZ3RoKSB7XG4gICAgbGV0IHRleHQgPSBgU2hvd2luZyAkeyBuYW1lcy5maWx0ZXIobmFtZSA9PiBuYW1lKS5qb2luKCcsICcpIH1gO1xuXG4gICAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgICAgdGV4dCxcbiAgICAgIGF0dGFjaG1lbnRMYXlvdXQ6ICdjYXJvdXNlbCcsXG4gICAgICBhdHRhY2htZW50czogY29udGVudHMubWFwKGNvbnRlbnQgPT4gKHtcbiAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi92bmQubWljcm9zb2Z0LmNhcmQuYWRhcHRpdmUnLFxuICAgICAgICBjb250ZW50XG4gICAgICB9KSlcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XG4gICAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgICB0ZXh0OiBgTm8gY2FyZCBuYW1lZCAnJHsgbmFtZSB9J2BcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgeyBoZWxwLCBuYW1lLCBwcm9jZXNzb3IgfVxuIl19