"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = () => ({
  "$schema": "https://microsoft.github.io/AdaptiveCards/schemas/adaptive-card.json",
  "type": "AdaptiveCard",
  "version": "1.0",
  "speak": "The Seattle Seahawks beat the Carolina Panthers 40-7",
  "body": [{
    "type": "TextBlock",
    "text": "Seattle vs Panthers",
    "isSubtle": true
  }, {
    "type": "Container",
    "selectAction": {
      "type": "Action.OpenUrl",
      "url": "http://msn.com",
      "title": "Container action"
    },
    "items": [{
      "type": "ColumnSet",
      "columns": [{
        "type": "Column",
        "size": "auto",
        "items": [{
          "type": "Image",
          "url": "https://webchat-mockbot.azurewebsites.net/public/assets/sports-panthers.png",
          "size": "small",
          "horizontalAlignment": "center",
          "selectAction": {
            "type": "Action.OpenUrl",
            "url": "http://so.cl",
            "title": "Image action"
          }
        }, {
          "type": "TextBlock",
          "text": "CAR",
          "horizontalAlignment": "center",
          "size": "normal",
          "weight": "bolder"
        }],
        "selectAction": {
          "type": "Action.OpenUrl",
          "title": "Column action",
          "url": "http://msnbc.com"
        }
      }, {
        "type": "Column",
        "size": "stretch",
        "items": [{
          "type": "TextBlock",
          "text": "Dec 4",
          "horizontalAlignment": "center"
        }, {
          "type": "TextBlock",
          "text": "Final",
          "horizontalAlignment": "center"
        }, {
          "type": "TextBlock",
          "text": "7 - 40",
          "size": "large",
          "horizontalAlignment": "center"
        }]
      }, {
        "type": "Column",
        "size": "auto",
        "items": [{
          "type": "Image",
          "url": "https://webchat-mockbot.azurewebsites.net/public/assets/sports-seahawks.png",
          "size": "small",
          "horizontalAlignment": "center"
        }, {
          "type": "TextBlock",
          "text": "SEA",
          "horizontalAlignment": "center",
          "size": "normal",
          "weight": "bolder"
        }]
      }]
    }]
  }]
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9DYXJkcy9CaW5nU3BvcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7ZUFBZSxPQUFPO0FBQ3BCLGFBQVcsc0VBRFM7QUFFcEIsVUFBUSxjQUZZO0FBR3BCLGFBQVcsS0FIUztBQUlwQixXQUFTLHNEQUpXO0FBS3BCLFVBQVEsQ0FDTjtBQUNFLFlBQVEsV0FEVjtBQUVFLFlBQVEscUJBRlY7QUFHRSxnQkFBWTtBQUhkLEdBRE0sRUFNTjtBQUNFLFlBQVEsV0FEVjtBQUVFLG9CQUFnQjtBQUNkLGNBQVEsZ0JBRE07QUFFZCxhQUFPLGdCQUZPO0FBR2QsZUFBUztBQUhLLEtBRmxCO0FBT0UsYUFBUyxDQUNQO0FBQ0UsY0FBUSxXQURWO0FBRUUsaUJBQVcsQ0FDVDtBQUNFLGdCQUFRLFFBRFY7QUFFRSxnQkFBUSxNQUZWO0FBR0UsaUJBQVMsQ0FDUDtBQUNFLGtCQUFRLE9BRFY7QUFFRSxpQkFBTyw2RUFGVDtBQUdFLGtCQUFRLE9BSFY7QUFJRSxpQ0FBdUIsUUFKekI7QUFLRSwwQkFBZ0I7QUFDZCxvQkFBUSxnQkFETTtBQUVkLG1CQUFPLGNBRk87QUFHZCxxQkFBUztBQUhLO0FBTGxCLFNBRE8sRUFZUDtBQUNFLGtCQUFRLFdBRFY7QUFFRSxrQkFBUSxLQUZWO0FBR0UsaUNBQXVCLFFBSHpCO0FBSUUsa0JBQVEsUUFKVjtBQUtFLG9CQUFVO0FBTFosU0FaTyxDQUhYO0FBdUJFLHdCQUFnQjtBQUNkLGtCQUFRLGdCQURNO0FBRWQsbUJBQVMsZUFGSztBQUdkLGlCQUFPO0FBSE87QUF2QmxCLE9BRFMsRUE4QlQ7QUFDRSxnQkFBUSxRQURWO0FBRUUsZ0JBQVEsU0FGVjtBQUdFLGlCQUFTLENBQ1A7QUFDRSxrQkFBUSxXQURWO0FBRUUsa0JBQVEsT0FGVjtBQUdFLGlDQUF1QjtBQUh6QixTQURPLEVBTVA7QUFDRSxrQkFBUSxXQURWO0FBRUUsa0JBQVEsT0FGVjtBQUdFLGlDQUF1QjtBQUh6QixTQU5PLEVBV1A7QUFDRSxrQkFBUSxXQURWO0FBRUUsa0JBQVEsUUFGVjtBQUdFLGtCQUFRLE9BSFY7QUFJRSxpQ0FBdUI7QUFKekIsU0FYTztBQUhYLE9BOUJTLEVBb0RUO0FBQ0UsZ0JBQVEsUUFEVjtBQUVFLGdCQUFRLE1BRlY7QUFHRSxpQkFBUyxDQUNQO0FBQ0Usa0JBQVEsT0FEVjtBQUVFLGlCQUFPLDZFQUZUO0FBR0Usa0JBQVEsT0FIVjtBQUlFLGlDQUF1QjtBQUp6QixTQURPLEVBT1A7QUFDRSxrQkFBUSxXQURWO0FBRUUsa0JBQVEsS0FGVjtBQUdFLGlDQUF1QixRQUh6QjtBQUlFLGtCQUFRLFFBSlY7QUFLRSxvQkFBVTtBQUxaLFNBUE87QUFIWCxPQXBEUztBQUZiLEtBRE87QUFQWCxHQU5NO0FBTFksQ0FBUCxDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcbiAgXCIkc2NoZW1hXCI6IFwiaHR0cHM6Ly9taWNyb3NvZnQuZ2l0aHViLmlvL0FkYXB0aXZlQ2FyZHMvc2NoZW1hcy9hZGFwdGl2ZS1jYXJkLmpzb25cIixcbiAgXCJ0eXBlXCI6IFwiQWRhcHRpdmVDYXJkXCIsXG4gIFwidmVyc2lvblwiOiBcIjEuMFwiLFxuICBcInNwZWFrXCI6IFwiVGhlIFNlYXR0bGUgU2VhaGF3a3MgYmVhdCB0aGUgQ2Fyb2xpbmEgUGFudGhlcnMgNDAtN1wiLFxuICBcImJvZHlcIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxuICAgICAgXCJ0ZXh0XCI6IFwiU2VhdHRsZSB2cyBQYW50aGVyc1wiLFxuICAgICAgXCJpc1N1YnRsZVwiOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJDb250YWluZXJcIixcbiAgICAgIFwic2VsZWN0QWN0aW9uXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQWN0aW9uLk9wZW5VcmxcIixcbiAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vbXNuLmNvbVwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiQ29udGFpbmVyIGFjdGlvblwiXG4gICAgICB9LFxuICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJDb2x1bW5TZXRcIixcbiAgICAgICAgICBcImNvbHVtbnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJDb2x1bW5cIixcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJJbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3dlYmNoYXQtbW9ja2JvdC5henVyZXdlYnNpdGVzLm5ldC9wdWJsaWMvYXNzZXRzL3Nwb3J0cy1wYW50aGVycy5wbmdcIixcbiAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIFwic2VsZWN0QWN0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQWN0aW9uLk9wZW5VcmxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vc28uY2xcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkltYWdlIGFjdGlvblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcbiAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkNBUlwiLFxuICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBcInNpemVcIjogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwiYm9sZGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwic2VsZWN0QWN0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJBY3Rpb24uT3BlblVybFwiLFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJDb2x1bW4gYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwOi8vbXNuYmMuY29tXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQ29sdW1uXCIsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcInN0cmV0Y2hcIixcbiAgICAgICAgICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJEZWMgNFwiLFxuICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxuICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiRmluYWxcIixcbiAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcbiAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIjcgLSA0MFwiLFxuICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwibGFyZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJDb2x1bW5cIixcbiAgICAgICAgICAgICAgXCJzaXplXCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJJbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3dlYmNoYXQtbW9ja2JvdC5henVyZXdlYnNpdGVzLm5ldC9wdWJsaWMvYXNzZXRzL3Nwb3J0cy1zZWFoYXdrcy5wbmdcIixcbiAgICAgICAgICAgICAgICAgIFwic2l6ZVwiOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJTRUFcIixcbiAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcImJvbGRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59KVxuIl19