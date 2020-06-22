"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = arg => {
  switch (arg) {
    case '1':
    case 'lang':
      return {
        "$schema": "https://microsoft.github.io/AdaptiveCards/schemas/adaptive-card.json",
        "type": "AdaptiveCard",
        "lang": "invalid"
      };

    default:
      return {
        "$schema": "https://microsoft.github.io/AdaptiveCards/schemas/adaptive-card.json",
        "type": "AdaptiveCard",
        "version": 'unknown',
        "body": [{
          "type": "TextBlock",
          "text": "This is the first line"
        }]
      };
  }
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9DYXJkcy9Ccm9rZW4udHMiXSwibmFtZXMiOlsiYXJnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O2VBQWdCQSxHQUFELElBQWtCO0FBQy9CLFVBQVFBLEdBQVI7QUFDRSxTQUFLLEdBQUw7QUFDQSxTQUFLLE1BQUw7QUFDRSxhQUFPO0FBQ0wsbUJBQVUsc0VBREw7QUFFTCxnQkFBUSxjQUZIO0FBR0wsZ0JBQVE7QUFISCxPQUFQOztBQU1GO0FBQ0UsYUFBTztBQUNMLG1CQUFVLHNFQURMO0FBRUwsZ0JBQVEsY0FGSDtBQUdMLG1CQUFXLFNBSE47QUFJTCxnQkFBUSxDQUNOO0FBQ0Usa0JBQVEsV0FEVjtBQUVFLGtCQUFRO0FBRlYsU0FETTtBQUpILE9BQVA7QUFWSjtBQXNCRCxDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKGFyZz86IHN0cmluZykgPT4ge1xuICBzd2l0Y2ggKGFyZykge1xuICAgIGNhc2UgJzEnOlxuICAgIGNhc2UgJ2xhbmcnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgXCIkc2NoZW1hXCI6XCJodHRwczovL21pY3Jvc29mdC5naXRodWIuaW8vQWRhcHRpdmVDYXJkcy9zY2hlbWFzL2FkYXB0aXZlLWNhcmQuanNvblwiLFxuICAgICAgICBcInR5cGVcIjogXCJBZGFwdGl2ZUNhcmRcIixcbiAgICAgICAgXCJsYW5nXCI6IFwiaW52YWxpZFwiXG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwiJHNjaGVtYVwiOlwiaHR0cHM6Ly9taWNyb3NvZnQuZ2l0aHViLmlvL0FkYXB0aXZlQ2FyZHMvc2NoZW1hcy9hZGFwdGl2ZS1jYXJkLmpzb25cIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiQWRhcHRpdmVDYXJkXCIsXG4gICAgICAgIFwidmVyc2lvblwiOiAndW5rbm93bicsXG4gICAgICAgIFwiYm9keVwiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCJUaGlzIGlzIHRoZSBmaXJzdCBsaW5lXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH07XG4gIH1cbn1cbiJdfQ==