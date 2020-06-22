"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'Speech';
exports.name = name;

function help() {
  return {
    'speech': 'Speak in different language',
    'tell me a story': 'Tell me a story'
  };
}

async function processor(context) {
  await context.sendActivities([{
    locale: 'en-US',
    text: 'Pooh is very social. After Christopher Robin, his closest friend is Piglet.',
    type: 'message'
  }, {
    locale: 'zh-HK',
    text: '一天，悶悶不樂的愛麗絲跟姊姊同坐於河畔。',
    type: 'message'
  }, {
    locale: 'en-US',
    speak: `<speak
  version="1.0"
  xmlns="https://www.w3.org/2001/10/synthesis"
  xmlns:mstts="https://www.w3.org/2001/mstts"
  xml:lang="en-US"
>
  <voice name="en-US-JessaNeural">
    <mstts:express-as type="cheerful">That'd be just amazing!</mstts:express-as>
  </voice>
  <voice name="ja-JP-Ayumi-Apollo">
    <prosody pitch="+150%">素晴らしい!</prosody>
  </voice>
</speak>`,
    text: 'That\'d be just amazing! 素晴らしい!',
    type: 'message'
  }]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9TcGVlY2gudHMiXSwibmFtZXMiOlsibmFtZSIsImhlbHAiLCJwcm9jZXNzb3IiLCJjb250ZXh0Iiwic2VuZEFjdGl2aXRpZXMiLCJsb2NhbGUiLCJ0ZXh0IiwidHlwZSIsInNwZWFrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU1BLElBQUksR0FBRyxRQUFiOzs7QUFFQSxTQUFTQyxJQUFULEdBQWdCO0FBQ2QsU0FBTztBQUNMLGNBQVUsNkJBREw7QUFFTCx1QkFBbUI7QUFGZCxHQUFQO0FBSUQ7O0FBRUQsZUFBZUMsU0FBZixDQUF5QkMsT0FBekIsRUFBK0M7QUFDN0MsUUFBTUEsT0FBTyxDQUFDQyxjQUFSLENBQXVCLENBQUM7QUFDNUJDLElBQUFBLE1BQU0sRUFBRSxPQURvQjtBQUU1QkMsSUFBQUEsSUFBSSxFQUFFLDZFQUZzQjtBQUc1QkMsSUFBQUEsSUFBSSxFQUFFO0FBSHNCLEdBQUQsRUFJMUI7QUFDREYsSUFBQUEsTUFBTSxFQUFFLE9BRFA7QUFFREMsSUFBQUEsSUFBSSxFQUFFLHNCQUZMO0FBR0RDLElBQUFBLElBQUksRUFBRTtBQUhMLEdBSjBCLEVBUTFCO0FBQ0RGLElBQUFBLE1BQU0sRUFBRSxPQURQO0FBRURHLElBQUFBLEtBQUssRUFBRzs7Ozs7Ozs7Ozs7O1NBRlA7QUFlREYsSUFBQUEsSUFBSSxFQUFFLGlDQWZMO0FBZ0JEQyxJQUFBQSxJQUFJLEVBQUU7QUFoQkwsR0FSMEIsQ0FBdkIsQ0FBTjtBQTBCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR1cm5Db250ZXh0IH0gZnJvbSAnYm90YnVpbGRlcic7XG5cbmNvbnN0IG5hbWUgPSAnU3BlZWNoJztcblxuZnVuY3Rpb24gaGVscCgpIHtcbiAgcmV0dXJuIHtcbiAgICAnc3BlZWNoJzogJ1NwZWFrIGluIGRpZmZlcmVudCBsYW5ndWFnZScsXG4gICAgJ3RlbGwgbWUgYSBzdG9yeSc6ICdUZWxsIG1lIGEgc3RvcnknXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3Nvcihjb250ZXh0OiBUdXJuQ29udGV4dCkge1xuICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0aWVzKFt7XG4gICAgbG9jYWxlOiAnZW4tVVMnLFxuICAgIHRleHQ6ICdQb29oIGlzIHZlcnkgc29jaWFsLiBBZnRlciBDaHJpc3RvcGhlciBSb2JpbiwgaGlzIGNsb3Nlc3QgZnJpZW5kIGlzIFBpZ2xldC4nLFxuICAgIHR5cGU6ICdtZXNzYWdlJ1xuICB9LCB7XG4gICAgbG9jYWxlOiAnemgtSEsnLFxuICAgIHRleHQ6ICfkuIDlpKnvvIzmgrbmgrbkuI3mqILnmoTmhJvpupfntbLot5/lp4rlp4rlkIzlnZDmlrzmsrPnlZTjgIInLFxuICAgIHR5cGU6ICdtZXNzYWdlJ1xuICB9LCB7XG4gICAgbG9jYWxlOiAnZW4tVVMnLFxuICAgIHNwZWFrOiBgPHNwZWFrXG4gIHZlcnNpb249XCIxLjBcIlxuICB4bWxucz1cImh0dHBzOi8vd3d3LnczLm9yZy8yMDAxLzEwL3N5bnRoZXNpc1wiXG4gIHhtbG5zOm1zdHRzPVwiaHR0cHM6Ly93d3cudzMub3JnLzIwMDEvbXN0dHNcIlxuICB4bWw6bGFuZz1cImVuLVVTXCJcbj5cbiAgPHZvaWNlIG5hbWU9XCJlbi1VUy1KZXNzYU5ldXJhbFwiPlxuICAgIDxtc3R0czpleHByZXNzLWFzIHR5cGU9XCJjaGVlcmZ1bFwiPlRoYXQnZCBiZSBqdXN0IGFtYXppbmchPC9tc3R0czpleHByZXNzLWFzPlxuICA8L3ZvaWNlPlxuICA8dm9pY2UgbmFtZT1cImphLUpQLUF5dW1pLUFwb2xsb1wiPlxuICAgIDxwcm9zb2R5IHBpdGNoPVwiKzE1MCVcIj7ntKDmmbTjgonjgZfjgYQhPC9wcm9zb2R5PlxuICA8L3ZvaWNlPlxuPC9zcGVhaz5gLFxuICAgIHRleHQ6ICdUaGF0XFwnZCBiZSBqdXN0IGFtYXppbmchIOe0oOaZtOOCieOBl+OBhCEnLFxuICAgIHR5cGU6ICdtZXNzYWdlJ1xuICB9XSk7XG59XG5cbmV4cG9ydCB7IGhlbHAsIG5hbWUsIHByb2Nlc3NvciB9XG4iXX0=