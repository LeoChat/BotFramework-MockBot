"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// http://adaptivecards.io/samples/Inputs.html
var _default = () => ({
  "$schema": "https://microsoft.github.io/AdaptiveCards/schemas/adaptive-card.json",
  "type": "AdaptiveCard",
  "version": "1.0",
  "speak": "<s>Adaptive Card inputs example</s>",
  "body": [{
    "type": "TextBlock",
    "size": "medium",
    "weight": "bolder",
    "text": "Input.Text elements",
    "horizontalAlignment": "center"
  }, {
    "type": "Input.Text",
    "placeholder": "Name",
    "style": "text",
    "maxLength": 0,
    "id": "SimpleVal",
    "speak": "What is your name?"
  }, {
    "type": "Input.Text",
    "placeholder": "Homepage",
    "style": "url",
    "maxLength": 0,
    "id": "UrlVal",
    "speak": "What is your homepage?"
  }, {
    "type": "Input.Text",
    "placeholder": "Email",
    "style": "email",
    "maxLength": 0,
    "id": "EmailVal",
    "speak": "What is your email address?"
  }, {
    "type": "Input.Text",
    "placeholder": "Phone",
    "style": "tel",
    "maxLength": 0,
    "id": "TelVal",
    "speak": "What is your phone number?"
  }, {
    "type": "Input.Text",
    "placeholder": "Comments",
    "style": "text",
    "isMultiline": true,
    "maxLength": 0,
    "id": "MultiLineVal",
    "speak": "What comments do you have?"
  }, {
    "type": "Input.Number",
    "placeholder": "Quantity",
    "min": -5,
    "max": 5,
    "value": 1,
    "id": "NumVal",
    "speak": "How many do you want?"
  }, {
    "type": "Input.Date",
    "placeholder": "Due Date",
    "id": "DateVal",
    "speak": "What is the due date?"
  }, {
    "type": "Input.Time",
    "placeholder": "Start time",
    "id": "TimeVal",
    "speak": "What time to start?"
  }, {
    "type": "TextBlock",
    "size": "medium",
    "weight": "bolder",
    "text": "Input.ChoiceSet",
    "horizontalAlignment": "center"
  }, {
    "type": "TextBlock",
    "text": "What color do you want?"
  }, {
    "type": "Input.ChoiceSet",
    "style": "compact",
    "choices": [{
      "title": "Red",
      "value": "1",
      "isSelected": true
    }, {
      "title": "Green",
      "value": "2"
    }, {
      "title": "Blue",
      "value": "3"
    }],
    "id": "SingleSelectVal"
  }, {
    "type": "TextBlock",
    "text": "What color do you want?"
  }, {
    "type": "Input.ChoiceSet",
    "choices": [{
      "title": "Red",
      "value": "1",
      "isSelected": true
    }, {
      "title": "Green",
      "value": "2"
    }, {
      "title": "Blue",
      "value": "3"
    }],
    "id": "CompactSelectVal"
  }, {
    "type": "TextBlock",
    "text": "What colors do you want?"
  }, {
    "type": "Input.ChoiceSet",
    "isMultiSelect": true,
    "choices": [{
      "title": "Red",
      "value": "1",
      "isSelected": true
    }, {
      "title": "Green",
      "value": "2"
    }, {
      "title": "Blue",
      "value": "3",
      "isSelected": true
    }],
    "id": "MultiSelectVal"
  }, {
    "type": "TextBlock",
    "size": "medium",
    "weight": "bolder",
    "text": "Input.Toggle",
    "horizontalAlignment": "center"
  }, {
    "type": "Input.Toggle",
    "title": "isCool (True/False)",
    "valueOn": "true",
    "valueOff": "false",
    "id": "IsCool",
    "speak": "Is it cool?"
  }, {
    "type": "Input.Toggle",
    "title": "IsMale (valueOn/valueOff)",
    "valueOn": "Male",
    "valueOff": "Female",
    "id": "gender",
    "speak": "Are you male or female?"
  }],
  "actions": [{
    "type": "Action.OpenUrl",
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "title": "Open Url"
  }, {
    "type": "Action.Submit",
    "data": {
      "id": "1234567890"
    },
    "title": "Submit"
  }, {
    "type": "Action.Http",
    "method": "POST",
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "body": "This is the body with Gender={{gender.value}}",
    "title": "POST"
  }, {
    "type": "Action.ShowCard",
    "card": {
      "type": "AdaptiveCard",
      "body": [{
        "type": "TextBlock",
        "isSubtle": true,
        "text": "Seattle vs Panthers"
      }, {
        "type": "ColumnSet",
        "columns": [{
          "type": "Column",
          "size": "auto",
          "items": [{
            "type": "Image",
            "size": "small",
            "url": "https://www.bing.com/th?id=AR_3934aff63dd6ff941034090a4b9d12e1&w=50&h=50&dpr=2&pid=AppEx",
            "horizontalAlignment": "center"
          }, {
            "type": "TextBlock",
            "weight": "bolder",
            "text": "CAR",
            "horizontalAlignment": "center"
          }]
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
            "size": "large",
            "text": "7 - 40",
            "horizontalAlignment": "center"
          }]
        }, {
          "type": "Column",
          "size": "auto",
          "items": [{
            "type": "Image",
            "size": "small",
            "url": "https://www.bing.com/th?id=AR_95e44d654968e8de2336993a1cf8a3cf&w=50&h=50&dpr=2&pid=AppEx",
            "horizontalAlignment": "center"
          }, {
            "type": "TextBlock",
            "weight": "bolder",
            "text": "SEA",
            "horizontalAlignment": "center"
          }]
        }]
      }, {
        "type": "Input.Text",
        "placeholder": "enter comment",
        "style": "text",
        "maxLength": 0,
        "id": "CommentVal"
      }],
      "actions": [{
        "type": "Action.Submit",
        "title": "OK"
      }],
      "speak": "The Seattle Seahawks beat the Carolina Panters 40-7"
    },
    "title": "Show Card"
  }]
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9DYXJkcy9JbnB1dHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO2VBRWUsT0FBTztBQUNwQixhQUFXLHNFQURTO0FBRXBCLFVBQVEsY0FGWTtBQUdwQixhQUFXLEtBSFM7QUFJcEIsV0FBUyxxQ0FKVztBQUtwQixVQUFRLENBQ047QUFDRSxZQUFRLFdBRFY7QUFFRSxZQUFRLFFBRlY7QUFHRSxjQUFVLFFBSFo7QUFJRSxZQUFRLHFCQUpWO0FBS0UsMkJBQXVCO0FBTHpCLEdBRE0sRUFRTjtBQUNFLFlBQVEsWUFEVjtBQUVFLG1CQUFlLE1BRmpCO0FBR0UsYUFBUyxNQUhYO0FBSUUsaUJBQWEsQ0FKZjtBQUtFLFVBQU0sV0FMUjtBQU1FLGFBQVM7QUFOWCxHQVJNLEVBZ0JOO0FBQ0UsWUFBUSxZQURWO0FBRUUsbUJBQWUsVUFGakI7QUFHRSxhQUFTLEtBSFg7QUFJRSxpQkFBYSxDQUpmO0FBS0UsVUFBTSxRQUxSO0FBTUUsYUFBUztBQU5YLEdBaEJNLEVBd0JOO0FBQ0UsWUFBUSxZQURWO0FBRUUsbUJBQWUsT0FGakI7QUFHRSxhQUFTLE9BSFg7QUFJRSxpQkFBYSxDQUpmO0FBS0UsVUFBTSxVQUxSO0FBTUUsYUFBUztBQU5YLEdBeEJNLEVBZ0NOO0FBQ0UsWUFBUSxZQURWO0FBRUUsbUJBQWUsT0FGakI7QUFHRSxhQUFTLEtBSFg7QUFJRSxpQkFBYSxDQUpmO0FBS0UsVUFBTSxRQUxSO0FBTUUsYUFBUztBQU5YLEdBaENNLEVBd0NOO0FBQ0UsWUFBUSxZQURWO0FBRUUsbUJBQWUsVUFGakI7QUFHRSxhQUFTLE1BSFg7QUFJRSxtQkFBZSxJQUpqQjtBQUtFLGlCQUFhLENBTGY7QUFNRSxVQUFNLGNBTlI7QUFPRSxhQUFTO0FBUFgsR0F4Q00sRUFpRE47QUFDRSxZQUFRLGNBRFY7QUFFRSxtQkFBZSxVQUZqQjtBQUdFLFdBQU8sQ0FBQyxDQUhWO0FBSUUsV0FBTyxDQUpUO0FBS0UsYUFBUyxD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b3J0IGRlZmF1bHQgKCkgPT4gKHtcbiAgXCIkc2NoZW1hXCI6IFwiaHR0cHM6Ly9taWNyb3NvZnQuZ2l0aHViLmlvL0FkYXB0aXZlQ2FyZHMvc2NoZW1hcy9hZGFwdGl2ZS1jYXJkLmpzb25cIixcbiAgXCJ0eXBlXCI6IFwiQWRhcHRpdmVDYXJkXCIsXG4gIFwidmVyc2lvblwiOiBcIjEuMFwiLFxuICBcInNwZWFrXCI6IFwiPHM+QWRhcHRpdmUgQ2FyZCBpbnB1dHMgZXhhbXBsZTwvcz5cIixcbiAgXCJib2R5XCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcbiAgICAgIFwic2l6ZVwiOiBcIm1lZGl1bVwiLFxuICAgICAgXCJ3ZWlnaHRcIjogXCJib2xkZXJcIixcbiAgICAgIFwidGV4dFwiOiBcIklucHV0LlRleHQgZWxlbWVudHNcIixcbiAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJJbnB1dC5UZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiTmFtZVwiLFxuICAgICAgXCJzdHlsZVwiOiBcInRleHRcIixcbiAgICAgIFwibWF4TGVuZ3RoXCI6IDAsXG4gICAgICBcImlkXCI6IFwiU2ltcGxlVmFsXCIsXG4gICAgICBcInNwZWFrXCI6IFwiV2hhdCBpcyB5b3VyIG5hbWU/XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIklucHV0LlRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJIb21lcGFnZVwiLFxuICAgICAgXCJzdHlsZVwiOiBcInVybFwiLFxuICAgICAgXCJtYXhMZW5ndGhcIjogMCxcbiAgICAgIFwiaWRcIjogXCJVcmxWYWxcIixcbiAgICAgIFwic3BlYWtcIjogXCJXaGF0IGlzIHlvdXIgaG9tZXBhZ2U/XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIklucHV0LlRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJFbWFpbFwiLFxuICAgICAgXCJzdHlsZVwiOiBcImVtYWlsXCIsXG4gICAgICBcIm1heExlbmd0aFwiOiAwLFxuICAgICAgXCJpZFwiOiBcIkVtYWlsVmFsXCIsXG4gICAgICBcInNwZWFrXCI6IFwiV2hhdCBpcyB5b3VyIGVtYWlsIGFkZHJlc3M/XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIklucHV0LlRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJQaG9uZVwiLFxuICAgICAgXCJzdHlsZVwiOiBcInRlbFwiLFxuICAgICAgXCJtYXhMZW5ndGhcIjogMCxcbiAgICAgIFwiaWRcIjogXCJUZWxWYWxcIixcbiAgICAgIFwic3BlYWtcIjogXCJXaGF0IGlzIHlvdXIgcGhvbmUgbnVtYmVyP1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJJbnB1dC5UZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiQ29tbWVudHNcIixcbiAgICAgIFwic3R5bGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImlzTXVsdGlsaW5lXCI6IHRydWUsXG4gICAgICBcIm1heExlbmd0aFwiOiAwLFxuICAgICAgXCJpZFwiOiBcIk11bHRpTGluZVZhbFwiLFxuICAgICAgXCJzcGVha1wiOiBcIldoYXQgY29tbWVudHMgZG8geW91IGhhdmU/XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIklucHV0Lk51bWJlclwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlF1YW50aXR5XCIsXG4gICAgICBcIm1pblwiOiAtNSxcbiAgICAgIFwibWF4XCI6IDUsXG4gICAgICBcInZhbHVlXCI6IDEsXG4gICAgICBcImlkXCI6IFwiTnVtVmFsXCIsXG4gICAgICBcInNwZWFrXCI6IFwiSG93IG1hbnkgZG8geW91IHdhbnQ/XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIklucHV0LkRhdGVcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJEdWUgRGF0ZVwiLFxuICAgICAgXCJpZFwiOiBcIkRhdGVWYWxcIixcbiAgICAgIFwic3BlYWtcIjogXCJXaGF0IGlzIHRoZSBkdWUgZGF0ZT9cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiSW5wdXQuVGltZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlN0YXJ0IHRpbWVcIixcbiAgICAgIFwiaWRcIjogXCJUaW1lVmFsXCIsXG4gICAgICBcInNwZWFrXCI6IFwiV2hhdCB0aW1lIHRvIHN0YXJ0P1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcbiAgICAgIFwic2l6ZVwiOiBcIm1lZGl1bVwiLFxuICAgICAgXCJ3ZWlnaHRcIjogXCJib2xkZXJcIixcbiAgICAgIFwidGV4dFwiOiBcIklucHV0LkNob2ljZVNldFwiLFxuICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxuICAgICAgXCJ0ZXh0XCI6IFwiV2hhdCBjb2xvciBkbyB5b3Ugd2FudD9cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiSW5wdXQuQ2hvaWNlU2V0XCIsXG4gICAgICBcInN0eWxlXCI6IFwiY29tcGFjdFwiLFxuICAgICAgXCJjaG9pY2VzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJSZWRcIixcbiAgICAgICAgICBcInZhbHVlXCI6IFwiMVwiLFxuICAgICAgICAgIFwiaXNTZWxlY3RlZFwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiR3JlZW5cIixcbiAgICAgICAgICBcInZhbHVlXCI6IFwiMlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiQmx1ZVwiLFxuICAgICAgICAgIFwidmFsdWVcIjogXCIzXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaWRcIjogXCJTaW5nbGVTZWxlY3RWYWxcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXG4gICAgICBcInRleHRcIjogXCJXaGF0IGNvbG9yIGRvIHlvdSB3YW50P1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJJbnB1dC5DaG9pY2VTZXRcIixcbiAgICAgIFwiY2hvaWNlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiUmVkXCIsXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcIjFcIixcbiAgICAgICAgICBcImlzU2VsZWN0ZWRcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIkdyZWVuXCIsXG4gICAgICAgICAgXCJ2YWx1ZVwiOiBcIjJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcIkJsdWVcIixcbiAgICAgICAgICBcInZhbHVlXCI6IFwiM1wiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImlkXCI6IFwiQ29tcGFjdFNlbGVjdFZhbFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcbiAgICAgIFwidGV4dFwiOiBcIldoYXQgY29sb3JzIGRvIHlvdSB3YW50P1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJJbnB1dC5DaG9pY2VTZXRcIixcbiAgICAgIFwiaXNNdWx0aVNlbGVjdFwiOiB0cnVlLFxuICAgICAgXCJjaG9pY2VzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJSZWRcIixcbiAgICAgICAgICBcInZhbHVlXCI6IFwiMVwiLFxuICAgICAgICAgIFwiaXNTZWxlY3RlZFwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiR3JlZW5cIixcbiAgICAgICAgICBcInZhbHVlXCI6IFwiMlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRpdGxlXCI6IFwiQmx1ZVwiLFxuICAgICAgICAgIFwidmFsdWVcIjogXCIzXCIsXG4gICAgICAgICAgXCJpc1NlbGVjdGVkXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaWRcIjogXCJNdWx0aVNlbGVjdFZhbFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcbiAgICAgIFwic2l6ZVwiOiBcIm1lZGl1bVwiLFxuICAgICAgXCJ3ZWlnaHRcIjogXCJib2xkZXJcIixcbiAgICAgIFwidGV4dFwiOiBcIklucHV0LlRvZ2dsZVwiLFxuICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIklucHV0LlRvZ2dsZVwiLFxuICAgICAgXCJ0aXRsZVwiOiBcImlzQ29vbCAoVHJ1ZS9GYWxzZSlcIixcbiAgICAgIFwidmFsdWVPblwiOiBcInRydWVcIixcbiAgICAgIFwidmFsdWVPZmZcIjogXCJmYWxzZVwiLFxuICAgICAgXCJpZFwiOiBcIklzQ29vbFwiLFxuICAgICAgXCJzcGVha1wiOiBcIklzIGl0IGNvb2w/XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIklucHV0LlRvZ2dsZVwiLFxuICAgICAgXCJ0aXRsZVwiOiBcIklzTWFsZSAodmFsdWVPbi92YWx1ZU9mZilcIixcbiAgICAgIFwidmFsdWVPblwiOiBcIk1hbGVcIixcbiAgICAgIFwidmFsdWVPZmZcIjogXCJGZW1hbGVcIixcbiAgICAgIFwiaWRcIjogXCJnZW5kZXJcIixcbiAgICAgIFwic3BlYWtcIjogXCJBcmUgeW91IG1hbGUgb3IgZmVtYWxlP1wiXG4gICAgfVxuICBdLFxuICBcImFjdGlvbnNcIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIkFjdGlvbi5PcGVuVXJsXCIsXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZFF3NHc5V2dYY1FcIixcbiAgICAgIFwidGl0bGVcIjogXCJPcGVuIFVybFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJBY3Rpb24uU3VibWl0XCIsXG4gICAgICBcImRhdGFcIjoge1xuICAgICAgICBcImlkXCI6IFwiMTIzNDU2Nzg5MFwiXG4gICAgICB9LFxuICAgICAgXCJ0aXRsZVwiOiBcIlN1Ym1pdFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJBY3Rpb24uSHR0cFwiLFxuICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZFF3NHc5V2dYY1FcIixcbiAgICAgIFwiYm9keVwiOiBcIlRoaXMgaXMgdGhlIGJvZHkgd2l0aCBHZW5kZXI9e3tnZW5kZXIudmFsdWV9fVwiLFxuICAgICAgXCJ0aXRsZVwiOiBcIlBPU1RcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiQWN0aW9uLlNob3dDYXJkXCIsXG4gICAgICBcImNhcmRcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJBZGFwdGl2ZUNhcmRcIixcbiAgICAgICAgXCJib2R5XCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcbiAgICAgICAgICAgIFwiaXNTdWJ0bGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIlNlYXR0bGUgdnMgUGFudGhlcnNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQ29sdW1uU2V0XCIsXG4gICAgICAgICAgICBcImNvbHVtbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQ29sdW1uXCIsXG4gICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJJbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCJzbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmJpbmcuY29tL3RoP2lkPUFSXzM5MzRhZmY2M2RkNmZmOTQxMDM0MDkwYTRiOWQxMmUxJnc9NTAmaD01MCZkcHI9MiZwaWQ9QXBwRXhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcImJvbGRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJDQVJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJDb2x1bW5cIixcbiAgICAgICAgICAgICAgICBcInNpemVcIjogXCJzdHJldGNoXCIsXG4gICAgICAgICAgICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJEZWMgNFwiLFxuICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkZpbmFsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwibGFyZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiNyAtIDQwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQ29sdW1uXCIsXG4gICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJJbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInNpemVcIjogXCJzbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmJpbmcuY29tL3RoP2lkPUFSXzk1ZTQ0ZDY1NDk2OGU4ZGUyMzM2OTkzYTFjZjhhM2NmJnc9NTAmaD01MCZkcHI9MiZwaWQ9QXBwRXhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICBcIndlaWdodFwiOiBcImJvbGRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJTRUFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIklucHV0LlRleHRcIixcbiAgICAgICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJlbnRlciBjb21tZW50XCIsXG4gICAgICAgICAgICBcInN0eWxlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgXCJtYXhMZW5ndGhcIjogMCxcbiAgICAgICAgICAgIFwiaWRcIjogXCJDb21tZW50VmFsXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiYWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQWN0aW9uLlN1Ym1pdFwiLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk9LXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwic3BlYWtcIjogXCJUaGUgU2VhdHRsZSBTZWFoYXdrcyBiZWF0IHRoZSBDYXJvbGluYSBQYW50ZXJzIDQwLTdcIlxuICAgICAgfSxcbiAgICAgIFwidGl0bGVcIjogXCJTaG93IENhcmRcIlxuICAgIH1cbiAgXVxufSlcbiJdfQ==