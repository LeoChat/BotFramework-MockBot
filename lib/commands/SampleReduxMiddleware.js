"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const SUGGESTED_ACTIONS = {
  suggestedActions: {
    actions: [{
      type: 'imBack',
      title: 'Red',
      value: 'sample:redux-middleware red'
    }, {
      type: 'imBack',
      title: 'Green',
      value: 'sample:redux-middleware green'
    }, {
      type: 'imBack',
      title: 'Blue',
      value: 'sample:redux-middleware blue'
    }, {
      type: 'imBack',
      title: 'Translucent',
      value: 'sample:redux-middleware transparent'
    }],
    to: []
  }
};
const name = 'Demo for Redux middleware sample';
exports.name = name;

function help() {
  return {
    'sample:redux-middleware': 'Demo for Redux middleware sample'
  };
}

async function processor(context, color = '') {
  color = color.trim();

  if (color) {
    const action = {
      type: 'SET_BACKGROUND_COLOR',
      payload: {
        color
      }
    };
    context.sendActivity(_objectSpread({
      type: 'message',
      text: `Will send Redux action in another "message" activity.\n\n\`\`\`\n${JSON.stringify(action, null, 2)}\n\`\`\`\n\nFeel free to let me know if you changed your mind.`
    }, SUGGESTED_ACTIONS));
    context.sendActivity({
      type: 'event',
      name: 'redux action',
      value: action
    });
  } else {
    context.sendActivity(_objectSpread({
      type: 'message',
      text: `Choose one of the background color`
    }, SUGGESTED_ACTIONS));
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9TYW1wbGVSZWR1eE1pZGRsZXdhcmUudHMiXSwibmFtZXMiOlsiU1VHR0VTVEVEX0FDVElPTlMiLCJzdWdnZXN0ZWRBY3Rpb25zIiwiYWN0aW9ucyIsInR5cGUiLCJ0aXRsZSIsInZhbHVlIiwidG8iLCJuYW1lIiwiaGVscCIsInByb2Nlc3NvciIsImNvbnRleHQiLCJjb2xvciIsInRyaW0iLCJhY3Rpb24iLCJwYXlsb2FkIiwic2VuZEFjdGl2aXR5IiwidGV4dCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE1BQU1BLGlCQUFpQixHQUFHO0FBQ3hCQyxFQUFBQSxnQkFBZ0IsRUFBRTtBQUNoQkMsSUFBQUEsT0FBTyxFQUFFLENBQUM7QUFDUkMsTUFBQUEsSUFBSSxFQUFFLFFBREU7QUFFUkMsTUFBQUEsS0FBSyxFQUFFLEtBRkM7QUFHUkMsTUFBQUEsS0FBSyxFQUFFO0FBSEMsS0FBRCxFQUlOO0FBQ0RGLE1BQUFBLElBQUksRUFBRSxRQURMO0FBRURDLE1BQUFBLEtBQUssRUFBRSxPQUZOO0FBR0RDLE1BQUFBLEtBQUssRUFBRTtBQUhOLEtBSk0sRUFRTjtBQUNERixNQUFBQSxJQUFJLEVBQUUsUUFETDtBQUVEQyxNQUFBQSxLQUFLLEVBQUUsTUFGTjtBQUdEQyxNQUFBQSxLQUFLLEVBQUU7QUFITixLQVJNLEVBWU47QUFDREYsTUFBQUEsSUFBSSxFQUFFLFFBREw7QUFFREMsTUFBQUEsS0FBSyxFQUFFLGFBRk47QUFHREMsTUFBQUEsS0FBSyxFQUFFO0FBSE4sS0FaTSxDQURPO0FBa0JoQkMsSUFBQUEsRUFBRSxFQUFFO0FBbEJZO0FBRE0sQ0FBMUI7QUF1QkEsTUFBTUMsSUFBSSxHQUFHLGtDQUFiOzs7QUFFQSxTQUFTQyxJQUFULEdBQWdCO0FBQ2QsU0FBTztBQUNMLCtCQUEyQjtBQUR0QixHQUFQO0FBR0Q7O0FBRUQsZUFBZUMsU0FBZixDQUF5QkMsT0FBekIsRUFBK0NDLEtBQWEsR0FBRyxFQUEvRCxFQUFtRTtBQUNqRUEsRUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUNDLElBQU4sRUFBUjs7QUFFQSxNQUFJRCxLQUFKLEVBQVc7QUFDVCxVQUFNRSxNQUFNLEdBQUc7QUFDYlYsTUFBQUEsSUFBSSxFQUFFLHNCQURPO0FBRWJXLE1BQUFBLE9BQU8sRUFBRTtBQUFFSCxRQUFBQTtBQUFGO0FBRkksS0FBZjtBQUtBRCxJQUFBQSxPQUFPLENBQUNLLFlBQVI7QUFDRVosTUFBQUEsSUFBSSxFQUFFLFNBRFI7QUFFRWEsTUFBQUEsSUFBSSxFQUFHLG9FQUFvRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVMLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsQ0FBN0IsQ0FBaUM7QUFGOUcsT0FHS2IsaUJBSEw7QUFNQVUsSUFBQUEsT0FBTyxDQUFDSyxZQUFSLENBQXFCO0FBQ25CWixNQUFBQSxJQUFJLEVBQUUsT0FEYTtBQUVuQkksTUFBQUEsSUFBSSxFQUFFLGNBRmE7QUFHbkJGLE1BQUFBLEtBQUssRUFBRVE7QUFIWSxLQUFyQjtBQUtELEdBakJELE1BaUJPO0FBQ0xILElBQUFBLE9BQU8sQ0FBQ0ssWUFBUjtBQUNFWixNQUFBQSxJQUFJLEVBQUUsU0FEUjtBQUVFYSxNQUFBQSxJQUFJLEVBQUc7QUFGVCxPQUdLaEIsaUJBSEw7QUFLRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHVybkNvbnRleHQgfSBmcm9tICdib3RidWlsZGVyJztcblxuY29uc3QgU1VHR0VTVEVEX0FDVElPTlMgPSB7XG4gIHN1Z2dlc3RlZEFjdGlvbnM6IHtcbiAgICBhY3Rpb25zOiBbe1xuICAgICAgdHlwZTogJ2ltQmFjaycsXG4gICAgICB0aXRsZTogJ1JlZCcsXG4gICAgICB2YWx1ZTogJ3NhbXBsZTpyZWR1eC1taWRkbGV3YXJlIHJlZCdcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaW1CYWNrJyxcbiAgICAgIHRpdGxlOiAnR3JlZW4nLFxuICAgICAgdmFsdWU6ICdzYW1wbGU6cmVkdXgtbWlkZGxld2FyZSBncmVlbidcbiAgICB9LCB7XG4gICAgICB0eXBlOiAnaW1CYWNrJyxcbiAgICAgIHRpdGxlOiAnQmx1ZScsXG4gICAgICB2YWx1ZTogJ3NhbXBsZTpyZWR1eC1taWRkbGV3YXJlIGJsdWUnXG4gICAgfSwge1xuICAgICAgdHlwZTogJ2ltQmFjaycsXG4gICAgICB0aXRsZTogJ1RyYW5zbHVjZW50JyxcbiAgICAgIHZhbHVlOiAnc2FtcGxlOnJlZHV4LW1pZGRsZXdhcmUgdHJhbnNwYXJlbnQnXG4gICAgfV0sXG4gICAgdG86IFtdXG4gIH1cbn07XG5cbmNvbnN0IG5hbWUgPSAnRGVtbyBmb3IgUmVkdXggbWlkZGxld2FyZSBzYW1wbGUnO1xuXG5mdW5jdGlvbiBoZWxwKCkge1xuICByZXR1cm4ge1xuICAgICdzYW1wbGU6cmVkdXgtbWlkZGxld2FyZSc6ICdEZW1vIGZvciBSZWR1eCBtaWRkbGV3YXJlIHNhbXBsZSdcbiAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc29yKGNvbnRleHQ6IFR1cm5Db250ZXh0LCBjb2xvcjogc3RyaW5nID0gJycpIHtcbiAgY29sb3IgPSBjb2xvci50cmltKCk7XG5cbiAgaWYgKGNvbG9yKSB7XG4gICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgdHlwZTogJ1NFVF9CQUNLR1JPVU5EX0NPTE9SJyxcbiAgICAgIHBheWxvYWQ6IHsgY29sb3IgfVxuICAgIH07XG5cbiAgICBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XG4gICAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgICB0ZXh0OiBgV2lsbCBzZW5kIFJlZHV4IGFjdGlvbiBpbiBhbm90aGVyIFwibWVzc2FnZVwiIGFjdGl2aXR5LlxcblxcblxcYFxcYFxcYFxcbiR7IEpTT04uc3RyaW5naWZ5KGFjdGlvbiwgbnVsbCwgMikgfVxcblxcYFxcYFxcYFxcblxcbkZlZWwgZnJlZSB0byBsZXQgbWUga25vdyBpZiB5b3UgY2hhbmdlZCB5b3VyIG1pbmQuYCxcbiAgICAgIC4uLlNVR0dFU1RFRF9BQ1RJT05TXG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XG4gICAgICB0eXBlOiAnZXZlbnQnLFxuICAgICAgbmFtZTogJ3JlZHV4IGFjdGlvbicsXG4gICAgICB2YWx1ZTogYWN0aW9uXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgICAgdGV4dDogYENob29zZSBvbmUgb2YgdGhlIGJhY2tncm91bmQgY29sb3JgLFxuICAgICAgLi4uU1VHR0VTVEVEX0FDVElPTlNcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgeyBoZWxwLCBuYW1lLCBwcm9jZXNzb3IgfVxuIl19