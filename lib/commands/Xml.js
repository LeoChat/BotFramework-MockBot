"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'XML message';
exports.name = name;

function help() {
  return {
    'xml': 'Show a XML message without rendering Markdown'
  };
}

async function processor(context) {
  await context.sendActivity({
    type: 'message',
    textFormat: 'xml',
    text: '# markdown h1 <h1>xml h1</h1>\r\n *markdown italic* <i>xml italic</i>\r\n **markdown bold** <b>xml bold</b>\r\n ~~markdown strikethrough~~ <s>xml strikethrough</s>'
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9YbWwudHMiXSwibmFtZXMiOlsibmFtZSIsImhlbHAiLCJwcm9jZXNzb3IiLCJjb250ZXh0Iiwic2VuZEFjdGl2aXR5IiwidHlwZSIsInRleHRGb3JtYXQiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU1BLElBQUksR0FBRyxhQUFiOzs7QUFFQSxTQUFTQyxJQUFULEdBQWdCO0FBQ2QsU0FBTztBQUNMLFdBQU87QUFERixHQUFQO0FBR0Q7O0FBRUQsZUFBZUMsU0FBZixDQUF5QkMsT0FBekIsRUFBK0M7QUFDN0MsUUFBTUEsT0FBTyxDQUFDQyxZQUFSLENBQXFCO0FBQ3pCQyxJQUFBQSxJQUFJLEVBQUUsU0FEbUI7QUFFekJDLElBQUFBLFVBQVUsRUFBRSxLQUZhO0FBR3pCQyxJQUFBQSxJQUFJLEVBQUU7QUFIbUIsR0FBckIsQ0FBTjtBQUtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHVybkNvbnRleHQgfSBmcm9tICdib3RidWlsZGVyJztcblxuY29uc3QgbmFtZSA9ICdYTUwgbWVzc2FnZSc7XG5cbmZ1bmN0aW9uIGhlbHAoKSB7XG4gIHJldHVybiB7XG4gICAgJ3htbCc6ICdTaG93IGEgWE1MIG1lc3NhZ2Ugd2l0aG91dCByZW5kZXJpbmcgTWFya2Rvd24nXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3Nvcihjb250ZXh0OiBUdXJuQ29udGV4dCkge1xuICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XG4gICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgIHRleHRGb3JtYXQ6ICd4bWwnLFxuICAgIHRleHQ6ICcjIG1hcmtkb3duIGgxIDxoMT54bWwgaDE8L2gxPlxcclxcbiAqbWFya2Rvd24gaXRhbGljKiA8aT54bWwgaXRhbGljPC9pPlxcclxcbiAqKm1hcmtkb3duIGJvbGQqKiA8Yj54bWwgYm9sZDwvYj5cXHJcXG4gfn5tYXJrZG93biBzdHJpa2V0aHJvdWdofn4gPHM+eG1sIHN0cmlrZXRocm91Z2g8L3M+J1xuICB9KTtcbn1cblxuZXhwb3J0IHsgaGVscCwgbmFtZSwgcHJvY2Vzc29yIH1cbiJdfQ==