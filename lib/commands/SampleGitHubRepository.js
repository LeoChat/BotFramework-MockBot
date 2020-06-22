"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'Demo for GitHub repository sample';
exports.name = name;

function help() {
  return {
    'sample:github-repository': 'Demo for GitHub repository sample'
  };
}

async function processor(context, name, value) {
  context.sendActivity({
    type: 'message',
    attachmentLayout: 'carousel',
    attachments: [{
      content: {
        owner: 'Microsoft',
        repo: 'BotFramework-WebChat'
      },
      contentType: 'application/vnd.microsoft.botframework.samples.github-repository'
    }, {
      content: {
        owner: 'Microsoft',
        repo: 'BotFramework-Emulator'
      },
      contentType: 'application/vnd.microsoft.botframework.samples.github-repository'
    }, {
      content: {
        owner: 'Microsoft',
        repo: 'BotFramework-DirectLineJS'
      },
      contentType: 'application/vnd.microsoft.botframework.samples.github-repository'
    }]
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9TYW1wbGVHaXRIdWJSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbIm5hbWUiLCJoZWxwIiwicHJvY2Vzc29yIiwiY29udGV4dCIsInZhbHVlIiwic2VuZEFjdGl2aXR5IiwidHlwZSIsImF0dGFjaG1lbnRMYXlvdXQiLCJhdHRhY2htZW50cyIsImNvbnRlbnQiLCJvd25lciIsInJlcG8iLCJjb250ZW50VHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsbUNBQWI7OztBQUVBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZCxTQUFPO0FBQ0wsZ0NBQTRCO0FBRHZCLEdBQVA7QUFHRDs7QUFFRCxlQUFlQyxTQUFmLENBQXlCQyxPQUF6QixFQUErQ0gsSUFBL0MsRUFBNkRJLEtBQTdELEVBQTRFO0FBQzFFRCxFQUFBQSxPQUFPLENBQUNFLFlBQVIsQ0FBcUI7QUFDbkJDLElBQUFBLElBQUksRUFBRSxTQURhO0FBRW5CQyxJQUFBQSxnQkFBZ0IsRUFBRSxVQUZDO0FBR25CQyxJQUFBQSxXQUFXLEVBQUUsQ0FBQztBQUNaQyxNQUFBQSxPQUFPLEVBQUU7QUFDUEMsUUFBQUEsS0FBSyxFQUFFLFdBREE7QUFFUEMsUUFBQUEsSUFBSSxFQUFFO0FBRkMsT0FERztBQUtaQyxNQUFBQSxXQUFXLEVBQUU7QUFMRCxLQUFELEVBTVY7QUFDREgsTUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFFBQUFBLEtBQUssRUFBRSxXQURBO0FBRVBDLFFBQUFBLElBQUksRUFBRTtBQUZDLE9BRFI7QUFLREMsTUFBQUEsV0FBVyxFQUFFO0FBTFosS0FOVSxFQVlWO0FBQ0RILE1BQUFBLE9BQU8sRUFBRTtBQUNQQyxRQUFBQSxLQUFLLEVBQUUsV0FEQTtBQUVQQyxRQUFBQSxJQUFJLEVBQUU7QUFGQyxPQURSO0FBS0RDLE1BQUFBLFdBQVcsRUFBRTtBQUxaLEtBWlU7QUFITSxHQUFyQjtBQXVCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR1cm5Db250ZXh0IH0gZnJvbSAnYm90YnVpbGRlcic7XG5cbmNvbnN0IG5hbWUgPSAnRGVtbyBmb3IgR2l0SHViIHJlcG9zaXRvcnkgc2FtcGxlJztcblxuZnVuY3Rpb24gaGVscCgpIHtcbiAgcmV0dXJuIHtcbiAgICAnc2FtcGxlOmdpdGh1Yi1yZXBvc2l0b3J5JzogJ0RlbW8gZm9yIEdpdEh1YiByZXBvc2l0b3J5IHNhbXBsZSdcbiAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc29yKGNvbnRleHQ6IFR1cm5Db250ZXh0LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICBhdHRhY2htZW50TGF5b3V0OiAnY2Fyb3VzZWwnLFxuICAgIGF0dGFjaG1lbnRzOiBbe1xuICAgICAgY29udGVudDoge1xuICAgICAgICBvd25lcjogJ01pY3Jvc29mdCcsXG4gICAgICAgIHJlcG86ICdCb3RGcmFtZXdvcmstV2ViQ2hhdCdcbiAgICAgIH0sXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQuYm90ZnJhbWV3b3JrLnNhbXBsZXMuZ2l0aHViLXJlcG9zaXRvcnknXG4gICAgfSwge1xuICAgICAgY29udGVudDoge1xuICAgICAgICBvd25lcjogJ01pY3Jvc29mdCcsXG4gICAgICAgIHJlcG86ICdCb3RGcmFtZXdvcmstRW11bGF0b3InXG4gICAgICB9LFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi92bmQubWljcm9zb2Z0LmJvdGZyYW1ld29yay5zYW1wbGVzLmdpdGh1Yi1yZXBvc2l0b3J5J1xuICAgIH0sIHtcbiAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgb3duZXI6ICdNaWNyb3NvZnQnLFxuICAgICAgICByZXBvOiAnQm90RnJhbWV3b3JrLURpcmVjdExpbmVKUydcbiAgICAgIH0sXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQuYm90ZnJhbWV3b3JrLnNhbXBsZXMuZ2l0aHViLXJlcG9zaXRvcnknXG4gICAgfV1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IGhlbHAsIG5hbWUsIHByb2Nlc3NvciB9XG4iXX0=