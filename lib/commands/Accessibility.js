"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;

var AudioProcessor = _interopRequireWildcard(require("./Audio"));

var DocumentPlain = _interopRequireWildcard(require("./DocumentPlain"));

var DocumentWord = _interopRequireWildcard(require("./DocumentWord"));

var Image = _interopRequireWildcard(require("./Image"));

var ImageSVG = _interopRequireWildcard(require("./ImageSVG"));

var Layout = _interopRequireWildcard(require("./Layout"));

var Markdown = _interopRequireWildcard(require("./Markdown"));

var SuggestedActions = _interopRequireWildcard(require("./SuggestedActionsCard"));

var Text = _interopRequireWildcard(require("./Text"));

var Video = _interopRequireWildcard(require("./Video"));

var Xml = _interopRequireWildcard(require("./Xml"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const name = 'Accessibility';
exports.name = name;

function help() {
  return {
    'accessibility': 'Show all activities related to accessibility test'
  };
}

async function processor(context) {
  await AudioProcessor.processor(context);
  await DocumentPlain.processor(context);
  await DocumentWord.processor(context);
  await Image.processor(context);
  await ImageSVG.processor(context);
  await Layout.processor(context);
  await Layout.processor(context, 'single');
  await Layout.processor(context, 'single carousel');
  await Layout.processor(context, 'double');
  await Layout.processor(context, 'carousel');
  await Markdown.processor(context);
  await Text.processor(context);
  await Video.processor(context, '', '');
  await Xml.processor(context); // Suggested actions must be the last activity

  await SuggestedActions.processor(context, '');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9BY2Nlc3NpYmlsaXR5LnRzIl0sIm5hbWVzIjpbIm5hbWUiLCJoZWxwIiwicHJvY2Vzc29yIiwiY29udGV4dCIsIkF1ZGlvUHJvY2Vzc29yIiwiRG9jdW1lbnRQbGFpbiIsIkRvY3VtZW50V29yZCIsIkltYWdlIiwiSW1hZ2VTVkciLCJMYXlvdXQiLCJNYXJrZG93biIsIlRleHQiLCJWaWRlbyIsIlhtbCIsIlN1Z2dlc3RlZEFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsZUFBYjs7O0FBRUEsU0FBU0MsSUFBVCxHQUFnQjtBQUNkLFNBQU87QUFDTCxxQkFBaUI7QUFEWixHQUFQO0FBR0Q7O0FBRUQsZUFBZUMsU0FBZixDQUF5QkMsT0FBekIsRUFBK0M7QUFDN0MsUUFBTUMsY0FBYyxDQUFDRixTQUFmLENBQXlCQyxPQUF6QixDQUFOO0FBQ0EsUUFBTUUsYUFBYSxDQUFDSCxTQUFkLENBQXdCQyxPQUF4QixDQUFOO0FBQ0EsUUFBTUcsWUFBWSxDQUFDSixTQUFiLENBQXVCQyxPQUF2QixDQUFOO0FBQ0EsUUFBTUksS0FBSyxDQUFDTCxTQUFOLENBQWdCQyxPQUFoQixDQUFOO0FBQ0EsUUFBTUssUUFBUSxDQUFDTixTQUFULENBQW1CQyxPQUFuQixDQUFOO0FBQ0EsUUFBTU0sTUFBTSxDQUFDUCxTQUFQLENBQWlCQyxPQUFqQixDQUFOO0FBQ0EsUUFBTU0sTUFBTSxDQUFDUCxTQUFQLENBQWlCQyxPQUFqQixFQUEwQixRQUExQixDQUFOO0FBQ0EsUUFBTU0sTUFBTSxDQUFDUCxTQUFQLENBQWlCQyxPQUFqQixFQUEwQixpQkFBMUIsQ0FBTjtBQUNBLFFBQU1NLE1BQU0sQ0FBQ1AsU0FBUCxDQUFpQkMsT0FBakIsRUFBMEIsUUFBMUIsQ0FBTjtBQUNBLFFBQU1NLE1BQU0sQ0FBQ1AsU0FBUCxDQUFpQkMsT0FBakIsRUFBMEIsVUFBMUIsQ0FBTjtBQUNBLFFBQU1PLFFBQVEsQ0FBQ1IsU0FBVCxDQUFtQkMsT0FBbkIsQ0FBTjtBQUNBLFFBQU1RLElBQUksQ0FBQ1QsU0FBTCxDQUFlQyxPQUFmLENBQU47QUFDQSxRQUFNUyxLQUFLLENBQUNWLFNBQU4sQ0FBZ0JDLE9BQWhCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLENBQU47QUFDQSxRQUFNVSxHQUFHLENBQUNYLFNBQUosQ0FBY0MsT0FBZCxDQUFOLENBZDZDLENBZ0I3Qzs7QUFDQSxRQUFNVyxnQkFBZ0IsQ0FBQ1osU0FBakIsQ0FBMkJDLE9BQTNCLEVBQW9DLEVBQXBDLENBQU47QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR1cm5Db250ZXh0IH0gZnJvbSAnYm90YnVpbGRlcic7XG5pbXBvcnQgKiBhcyBBdWRpb1Byb2Nlc3NvciBmcm9tICcuL0F1ZGlvJztcbmltcG9ydCAqIGFzIERvY3VtZW50UGxhaW4gZnJvbSAnLi9Eb2N1bWVudFBsYWluJztcbmltcG9ydCAqIGFzIERvY3VtZW50V29yZCBmcm9tICcuL0RvY3VtZW50V29yZCc7XG5pbXBvcnQgKiBhcyBJbWFnZSBmcm9tICcuL0ltYWdlJztcbmltcG9ydCAqIGFzIEltYWdlU1ZHIGZyb20gJy4vSW1hZ2VTVkcnO1xuaW1wb3J0ICogYXMgTGF5b3V0IGZyb20gJy4vTGF5b3V0JztcbmltcG9ydCAqIGFzIE1hcmtkb3duIGZyb20gJy4vTWFya2Rvd24nO1xuaW1wb3J0ICogYXMgU3VnZ2VzdGVkQWN0aW9ucyBmcm9tICcuL1N1Z2dlc3RlZEFjdGlvbnNDYXJkJztcbmltcG9ydCAqIGFzIFRleHQgZnJvbSAnLi9UZXh0JztcbmltcG9ydCAqIGFzIFZpZGVvIGZyb20gJy4vVmlkZW8nO1xuaW1wb3J0ICogYXMgWG1sIGZyb20gJy4vWG1sJztcblxuY29uc3QgbmFtZSA9ICdBY2Nlc3NpYmlsaXR5JztcblxuZnVuY3Rpb24gaGVscCgpIHtcbiAgcmV0dXJuIHtcbiAgICAnYWNjZXNzaWJpbGl0eSc6ICdTaG93IGFsbCBhY3Rpdml0aWVzIHJlbGF0ZWQgdG8gYWNjZXNzaWJpbGl0eSB0ZXN0J1xuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzb3IoY29udGV4dDogVHVybkNvbnRleHQpIHtcbiAgYXdhaXQgQXVkaW9Qcm9jZXNzb3IucHJvY2Vzc29yKGNvbnRleHQpO1xuICBhd2FpdCBEb2N1bWVudFBsYWluLnByb2Nlc3Nvcihjb250ZXh0KTtcbiAgYXdhaXQgRG9jdW1lbnRXb3JkLnByb2Nlc3Nvcihjb250ZXh0KTtcbiAgYXdhaXQgSW1hZ2UucHJvY2Vzc29yKGNvbnRleHQpO1xuICBhd2FpdCBJbWFnZVNWRy5wcm9jZXNzb3IoY29udGV4dCk7XG4gIGF3YWl0IExheW91dC5wcm9jZXNzb3IoY29udGV4dCk7XG4gIGF3YWl0IExheW91dC5wcm9jZXNzb3IoY29udGV4dCwgJ3NpbmdsZScpO1xuICBhd2FpdCBMYXlvdXQucHJvY2Vzc29yKGNvbnRleHQsICdzaW5nbGUgY2Fyb3VzZWwnKTtcbiAgYXdhaXQgTGF5b3V0LnByb2Nlc3Nvcihjb250ZXh0LCAnZG91YmxlJyk7XG4gIGF3YWl0IExheW91dC5wcm9jZXNzb3IoY29udGV4dCwgJ2Nhcm91c2VsJyk7XG4gIGF3YWl0IE1hcmtkb3duLnByb2Nlc3Nvcihjb250ZXh0KTtcbiAgYXdhaXQgVGV4dC5wcm9jZXNzb3IoY29udGV4dCk7XG4gIGF3YWl0IFZpZGVvLnByb2Nlc3Nvcihjb250ZXh0LCAnJywgJycpO1xuICBhd2FpdCBYbWwucHJvY2Vzc29yKGNvbnRleHQpO1xuXG4gIC8vIFN1Z2dlc3RlZCBhY3Rpb25zIG11c3QgYmUgdGhlIGxhc3QgYWN0aXZpdHlcbiAgYXdhaXQgU3VnZ2VzdGVkQWN0aW9ucy5wcm9jZXNzb3IoY29udGV4dCwgJycpO1xufVxuXG5leHBvcnQgeyBoZWxwLCBuYW1lLCBwcm9jZXNzb3IgfVxuIl19