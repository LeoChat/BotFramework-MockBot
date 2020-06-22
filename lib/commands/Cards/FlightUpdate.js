"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// http://adaptivecards.io/samples/FlightUpdate.html
var _default = () => ({
  "$schema": "https://microsoft.github.io/AdaptiveCards/schemas/adaptive-card.json",
  "type": "AdaptiveCard",
  "speak": "<s>Flight KL0605 to San Fransisco has been delayed.</s><s>It will not leave until 10:10 AM.</s>",
  "body": [{
    "type": "ColumnSet",
    "columns": [{
      "type": "Column",
      "size": "auto",
      "items": [{
        "type": "Image",
        "size": "small",
        "url": "http://adaptivecards.io/content/airplane.png"
      }]
    }, {
      "type": "Column",
      "size": "stretch",
      "items": [{
        "type": "TextBlock",
        "text": "Flight Status",
        "horizontalAlignment": "right",
        "isSubtle": true
      }, {
        "type": "TextBlock",
        "text": "DELAYED",
        "horizontalAlignment": "right",
        "size": "large",
        "color": "attention"
      }]
    }]
  }, {
    "type": "ColumnSet",
    "separation": "strong",
    "columns": [{
      "type": "Column",
      "size": "stretch",
      "items": [{
        "type": "TextBlock",
        "text": "Passengers",
        "isSubtle": true
      }, {
        "type": "TextBlock",
        "text": "Sarah Hum"
      }, {
        "type": "TextBlock",
        "text": "Jeremy Goldberg"
      }, {
        "type": "TextBlock",
        "text": "Evan Litvak"
      }]
    }, {
      "type": "Column",
      "size": "auto",
      "items": [{
        "type": "TextBlock",
        "text": "Seat",
        "horizontalAlignment": "right",
        "isSubtle": true
      }, {
        "type": "TextBlock",
        "text": "14A",
        "horizontalAlignment": "right"
      }, {
        "type": "TextBlock",
        "text": "14B",
        "horizontalAlignment": "right"
      }, {
        "type": "TextBlock",
        "text": "14C",
        "horizontalAlignment": "right"
      }]
    }]
  }, {
    "type": "ColumnSet",
    "separation": "strong",
    "columns": [{
      "type": "Column",
      "size": 1,
      "items": [{
        "type": "TextBlock",
        "text": "Flight",
        "isSubtle": true
      }, {
        "type": "TextBlock",
        "text": "KL0605"
      }]
    }, {
      "type": "Column",
      "size": "auto",
      "items": [{
        "type": "TextBlock",
        "text": "Departs",
        "isSubtle": true,
        "horizontalAlignment": "center"
      }, {
        "type": "TextBlock",
        "text": "10:10 AM",
        "color": "attention",
        "weight": "bolder",
        "horizontalAlignment": "center"
      }]
    }, {
      "type": "Column",
      "size": 1,
      "items": [{
        "type": "TextBlock",
        "text": "Arrives",
        "isSubtle": true,
        "horizontalAlignment": "right"
      }, {
        "type": "TextBlock",
        "text": "12:00 AM",
        "color": "attention",
        "horizontalAlignment": "right",
        "weight": "bolder"
      }]
    }]
  }, {
    "type": "ColumnSet",
    "separation": "strong",
    "columns": [{
      "type": "Column",
      "size": 1,
      "items": [{
        "type": "TextBlock",
        "text": "Amsterdam",
        "isSubtle": true
      }, {
        "type": "TextBlock",
        "text": "AMS",
        "size": "extraLarge",
        "color": "accent"
      }]
    }, {
      "type": "Column",
      "size": "auto",
      "items": [{
        "type": "TextBlock",
        "text": " "
      }, {
        "type": "Image",
        "url": "http://adaptivecards.io/content/airplane.png",
        "size": "small"
      }]
    }, {
      "type": "Column",
      "size": 1,
      "items": [{
        "type": "TextBlock",
        "text": "San Francisco",
        "isSubtle": true,
        "horizontalAlignment": "right"
      }, {
        "type": "TextBlock",
        "text": "SFO",
        "horizontalAlignment": "right",
        "size": "extraLarge",
        "color": "accent"
      }]
    }]
  }]
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9DYXJkcy9GbGlnaHRVcGRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO2VBRWUsT0FBTztBQUNyQixhQUFXLHNFQURVO0FBRXJCLFVBQVEsY0FGYTtBQUdyQixXQUFTLGlHQUhZO0FBSXJCLFVBQVEsQ0FDUDtBQUNDLFlBQVEsV0FEVDtBQUVDLGVBQVcsQ0FDVjtBQUNDLGNBQVEsUUFEVDtBQUVDLGNBQVEsTUFGVDtBQUdDLGVBQVMsQ0FDUjtBQUNDLGdCQUFRLE9BRFQ7QUFFQyxnQkFBUSxPQUZUO0FBR0MsZUFBTztBQUhSLE9BRFE7QUFIVixLQURVLEVBWVY7QUFDQyxjQUFRLFFBRFQ7QUFFQyxjQUFRLFNBRlQ7QUFHQyxlQUFTLENBQ1I7QUFDQyxnQkFBUSxXQURUO0FBRUMsZ0JBQVEsZUFGVDtBQUdDLCtCQUF1QixPQUh4QjtBQUlDLG9CQUFZO0FBSmIsT0FEUSxFQU9SO0FBQ0MsZ0JBQVEsV0FEVDtBQUVDLGdCQUFRLFNBRlQ7QUFHQywrQkFBdUIsT0FIeEI7QUFJQyxnQkFBUSxPQUpUO0FBS0MsaUJBQVM7QUFMVixPQVBRO0FBSFYsS0FaVTtBQUZaLEdBRE8sRUFvQ1A7QUFDQyxZQUFRLFdBRFQ7QUFFQyxrQkFBYyxRQUZmO0FBR0MsZUFBVyxDQUNWO0FBQ0MsY0FBUSxRQURUO0FBRUMsY0FBUSxTQUZUO0FBR0MsZUFBUyxDQUNSO0FBQ0MsZ0JBQVEsV0FEVDtBQUVDLGdCQUFRLFlBRlQ7QUFHQyxvQkFBWTtBQUhiLE9BRFEsRUFNUjtBQUNDLGdCQUFRLFdBRFQ7QUFFQyxnQkFBUTtBQUZULE9BTlEsRUFVUjtBQUNDLGdCQUFRLFdBRFQ7QUFFQyxnQkFBUTtBQUZULE9BVlEsRUFjUjtBQUNDLGdCQUFRLFdBRFQ7QUFFQyxnQkFBUTtBQUZULE9BZFE7QUFIVixLQURVLEVBd0JWO0FBQ0MsY0FBUSxRQURUO0FBRUMsY0FBUSxNQUZUO0FBR0MsZUFBUyxDQUNSO0FBQ0MsZ0JBQVEsV0FEVDtBQUVDLGdCQUFRLE1BRlQ7QUFHQywrQkFBdUIsT0FIeEI7QUFJQyxvQkFBWTtBQUpiLE9BRFEsRUFPUjtBQUNDLGdCQUFRLFdBRFQ7QUFFQyxnQkFBUSxLQUZUO0FBR0MsK0JBQXVCO0FBSHhCLE9BUFEsRUFZUjtBQUNDLGdCQUFRLFdBRFQ7QUFFQyxnQkFBUSxLQUZUO0FBR0MsK0JBQXVCO0FBSHhCLE9BWlEsRUFpQlI7QUFDQyxnQkFBUSxXQURUO0FBRUMsZ0JBQVEsS0FGVDtBQUdDLCtCQUF1QjtBQUh4QixPQWpCUTtBQUhWLEtBeEJVO0FBSFosR0FwQ08sRUE0RlA7QUFDQyxZQUFRLFdBRFQ7QUFFQyxrQkFBYyxRQUZmO0FBR0MsZUFBVyxDQUNWO0FBQ0MsY0FBUSxRQURUO0FBRUMsY0FBUSxDQUZUO0FBR0MsZUFBUyxDQUNSO0FBQ0MsZ0JBQVEsV0FEVDtBQUVDLGdCQUFRLFFBRlQ7QUFHQyxvQkFBWTtBQUhiLE9BRFEsRUFNUjtBQUNDLGdCQUFRLFdBRFQ7QUFFQyxnQkFBUTtBQUZULE9BTlE7QUFIVixLQURVLEVBZ0JWO0FBQ0MsY0FBUSxRQURUO0FBRUMsY0FBUSxNQUZUO0FBR0MsZUFBUyxDQUNSO0FBQ0MsZ0JBQVEsV0FEVDtBQUVDLGdCQUFRLFNBRlQ7QUFHQyxvQkFBWSxJQUhiO0FBSUMsK0JBQXVCO0FBSnhCLE9BRFEsRUFPUjtBQUNDLGdCQUFRLFdBRFQ7QUFFQyxnQkFBUSxVQUZUO0FBR0MsaUJBQVMsV0FIVjtBQUlDLGtCQUFVLFFBSlg7QUFLQywrQkFBdUI7QUFMeEIsT0FQUTtBQUhWLEtBaEJVLEVBbUNWO0FBQ0MsY0FBUSxRQURUO0FBRUMsY0FBUSxDQUZUO0FBR0MsZUFBUyxDQUNSO0FBQ0MsZ0JBQVEsV0FEVDtBQUVDLGdCQUFRLFNBRlQ7QUFHQyxvQkFBWSxJQUhiO0FBSUMsK0JBQXVCO0FBSnhCLE9BRFEsRUFPUjtBQUNDLGdCQUFRLFdBRFQ7QUFFQyxnQkFBUSxVQUZUO0FBR0MsaUJBQVMsV0FIVjtBQUlDLCtCQUF1QixPQUp4QjtBQUtDLGtCQUFVO0FBTFgsT0FQUTtBQUhWLEtBbkNVO0FBSFosR0E1Rk8sRUF1SlA7QUFDQyxZQUFRLFdBRFQ7QUFFQyxrQkFBYyxRQUZmO0FBR0MsZUFBVyxDQUNWO0FBQ0MsY0FBUSxRQURUO0FBRUMsY0FBUSxDQUZUO0FBR0MsZUFBUyxDQUNSO0FBQ0MsZ0JBQVEsV0FEVDtBQUVDLGdCQUFRLFdBRlQ7QUFHQyxvQkFBWTtBQUhiLE9BRFEsRUFNUjtBQUNDLGdCQUFRLFdBRFQ7QUFFQyxnQkFBUSxLQUZUO0FBR0MsZ0JBQVEsWUFIVDtBQUlDLGlCQUFTO0FBSlYsT0FOUTtBQUhWLEtBRFUsRUFrQlY7QUFDQyxjQUFRLFFBRFQ7QUFFQyxjQUFRLE1BRlQ7QUFHQyxlQUFTLENBQ1I7QUFDQyxnQkFBUSxXQURUO0FBRUMsZ0JBQVE7QUFGVCxPQURRLEVBS1I7QUFDQyxnQkFBTyxPQURSO0FBRUMsZUFBTyw4Q0FGUjtBQUdDLGdCQUFRO0FBSFQsT0FMUTtBQUhWLEtBbEJVLEVBaUNWO0FBQ0MsY0FBUSxRQURUO0FBRUMsY0FBUSxDQUZUO0FBR0MsZUFBUyxDQUNSO0FBQ0MsZ0JBQVEsV0FEVDtBQUVDLGdCQUFRLGVBRlQ7QUFHQyxvQkFBWSxJQUhiO0FBSUMsK0JBQXVCO0FBSnhCLE9BRFEsRUFPUjtBQUNDLGdCQUFRLFdBRFQ7QUFFQyxnQkFBUSxLQUZUO0FBR0MsK0JBQXVCLE9BSHhCO0FBSUMsZ0JBQVEsWUFKVDtBQUtDLGlCQUFTO0FBTFYsT0FQUTtBQUhWLEtBakNVO0FBSFosR0F2Sk87QUFKYSxDQUFQLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwOi8vYWRhcHRpdmVjYXJkcy5pby9zYW1wbGVzL0ZsaWdodFVwZGF0ZS5odG1sXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+ICh7XG5cdFwiJHNjaGVtYVwiOiBcImh0dHBzOi8vbWljcm9zb2Z0LmdpdGh1Yi5pby9BZGFwdGl2ZUNhcmRzL3NjaGVtYXMvYWRhcHRpdmUtY2FyZC5qc29uXCIsXG5cdFwidHlwZVwiOiBcIkFkYXB0aXZlQ2FyZFwiLFxuXHRcInNwZWFrXCI6IFwiPHM+RmxpZ2h0IEtMMDYwNSB0byBTYW4gRnJhbnNpc2NvIGhhcyBiZWVuIGRlbGF5ZWQuPC9zPjxzPkl0IHdpbGwgbm90IGxlYXZlIHVudGlsIDEwOjEwIEFNLjwvcz5cIixcblx0XCJib2R5XCI6IFtcblx0XHR7XG5cdFx0XHRcInR5cGVcIjogXCJDb2x1bW5TZXRcIixcblx0XHRcdFwiY29sdW1uc1wiOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInR5cGVcIjogXCJDb2x1bW5cIixcblx0XHRcdFx0XHRcInNpemVcIjogXCJhdXRvXCIsXG5cdFx0XHRcdFx0XCJpdGVtc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcIkltYWdlXCIsXG5cdFx0XHRcdFx0XHRcdFwic2l6ZVwiOiBcInNtYWxsXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsXCI6IFwiaHR0cDovL2FkYXB0aXZlY2FyZHMuaW8vY29udGVudC9haXJwbGFuZS5wbmdcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcIkNvbHVtblwiLFxuXHRcdFx0XHRcdFwic2l6ZVwiOiBcInN0cmV0Y2hcIixcblx0XHRcdFx0XHRcIml0ZW1zXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXG5cdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIkZsaWdodCBTdGF0dXNcIixcblx0XHRcdFx0XHRcdFx0XCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwicmlnaHRcIixcblx0XHRcdFx0XHRcdFx0XCJpc1N1YnRsZVwiOiB0cnVlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiREVMQVlFRFwiLFxuXHRcdFx0XHRcdFx0XHRcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJyaWdodFwiLFxuXHRcdFx0XHRcdFx0XHRcInNpemVcIjogXCJsYXJnZVwiLFxuXHRcdFx0XHRcdFx0XHRcImNvbG9yXCI6IFwiYXR0ZW50aW9uXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdFwidHlwZVwiOiBcIkNvbHVtblNldFwiLFxuXHRcdFx0XCJzZXBhcmF0aW9uXCI6IFwic3Ryb25nXCIsXG5cdFx0XHRcImNvbHVtbnNcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiQ29sdW1uXCIsXG5cdFx0XHRcdFx0XCJzaXplXCI6IFwic3RyZXRjaFwiLFxuXHRcdFx0XHRcdFwiaXRlbXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiUGFzc2VuZ2Vyc1wiLFxuXHRcdFx0XHRcdFx0XHRcImlzU3VidGxlXCI6IHRydWVcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxuXHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCJTYXJhaCBIdW1cIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXG5cdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIkplcmVteSBHb2xkYmVyZ1wiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiRXZhbiBMaXR2YWtcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcIkNvbHVtblwiLFxuXHRcdFx0XHRcdFwic2l6ZVwiOiBcImF1dG9cIixcblx0XHRcdFx0XHRcIml0ZW1zXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXG5cdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIlNlYXRcIixcblx0XHRcdFx0XHRcdFx0XCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwicmlnaHRcIixcblx0XHRcdFx0XHRcdFx0XCJpc1N1YnRsZVwiOiB0cnVlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiMTRBXCIsXG5cdFx0XHRcdFx0XHRcdFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcInJpZ2h0XCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxuXHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCIxNEJcIixcblx0XHRcdFx0XHRcdFx0XCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwicmlnaHRcIlxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXG5cdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIjE0Q1wiLFxuXHRcdFx0XHRcdFx0XHRcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJyaWdodFwiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcInR5cGVcIjogXCJDb2x1bW5TZXRcIixcblx0XHRcdFwic2VwYXJhdGlvblwiOiBcInN0cm9uZ1wiLFxuXHRcdFx0XCJjb2x1bW5zXCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcIkNvbHVtblwiLFxuXHRcdFx0XHRcdFwic2l6ZVwiOiAxLFxuXHRcdFx0XHRcdFwiaXRlbXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiRmxpZ2h0XCIsXG5cdFx0XHRcdFx0XHRcdFwiaXNTdWJ0bGVcIjogdHJ1ZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXG5cdFx0XHRcdFx0XHRcdFwidGV4dFwiOiBcIktMMDYwNVwiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiQ29sdW1uXCIsXG5cdFx0XHRcdFx0XCJzaXplXCI6IFwiYXV0b1wiLFxuXHRcdFx0XHRcdFwiaXRlbXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiRGVwYXJ0c1wiLFxuXHRcdFx0XHRcdFx0XHRcImlzU3VidGxlXCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcImNlbnRlclwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiMTA6MTAgQU1cIixcblx0XHRcdFx0XHRcdFx0XCJjb2xvclwiOiBcImF0dGVudGlvblwiLFxuXHRcdFx0XHRcdFx0XHRcIndlaWdodFwiOiBcImJvbGRlclwiLFxuXHRcdFx0XHRcdFx0XHRcImhvcml6b250YWxBbGlnbm1lbnRcIjogXCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcIkNvbHVtblwiLFxuXHRcdFx0XHRcdFwic2l6ZVwiOiAxLFxuXHRcdFx0XHRcdFwiaXRlbXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiQXJyaXZlc1wiLFxuXHRcdFx0XHRcdFx0XHRcImlzU3VidGxlXCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcInJpZ2h0XCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxuXHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCIxMjowMCBBTVwiLFxuXHRcdFx0XHRcdFx0XHRcImNvbG9yXCI6IFwiYXR0ZW50aW9uXCIsXG5cdFx0XHRcdFx0XHRcdFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcInJpZ2h0XCIsXG5cdFx0XHRcdFx0XHRcdFwid2VpZ2h0XCI6IFwiYm9sZGVyXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdFwidHlwZVwiOiBcIkNvbHVtblNldFwiLFxuXHRcdFx0XCJzZXBhcmF0aW9uXCI6IFwic3Ryb25nXCIsXG5cdFx0XHRcImNvbHVtbnNcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiQ29sdW1uXCIsXG5cdFx0XHRcdFx0XCJzaXplXCI6IDEsXG5cdFx0XHRcdFx0XCJpdGVtc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxuXHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCJBbXN0ZXJkYW1cIixcblx0XHRcdFx0XHRcdFx0XCJpc1N1YnRsZVwiOiB0cnVlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiQU1TXCIsXG5cdFx0XHRcdFx0XHRcdFwic2l6ZVwiOiBcImV4dHJhTGFyZ2VcIixcblx0XHRcdFx0XHRcdFx0XCJjb2xvclwiOiBcImFjY2VudFwiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0eXBlXCI6IFwiQ29sdW1uXCIsXG5cdFx0XHRcdFx0XCJzaXplXCI6IFwiYXV0b1wiLFxuXHRcdFx0XHRcdFwiaXRlbXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiIFwiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjpcIkltYWdlXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsXCI6IFwiaHR0cDovL2FkYXB0aXZlY2FyZHMuaW8vY29udGVudC9haXJwbGFuZS5wbmdcIixcblx0XHRcdFx0XHRcdFx0XCJzaXplXCI6IFwic21hbGxcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidHlwZVwiOiBcIkNvbHVtblwiLFxuXHRcdFx0XHRcdFwic2l6ZVwiOiAxLFxuXHRcdFx0XHRcdFwiaXRlbXNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcblx0XHRcdFx0XHRcdFx0XCJ0ZXh0XCI6IFwiU2FuIEZyYW5jaXNjb1wiLFxuXHRcdFx0XHRcdFx0XHRcImlzU3VidGxlXCI6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFwiaG9yaXpvbnRhbEFsaWdubWVudFwiOiBcInJpZ2h0XCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxuXHRcdFx0XHRcdFx0XHRcInRleHRcIjogXCJTRk9cIixcblx0XHRcdFx0XHRcdFx0XCJob3Jpem9udGFsQWxpZ25tZW50XCI6IFwicmlnaHRcIixcblx0XHRcdFx0XHRcdFx0XCJzaXplXCI6IFwiZXh0cmFMYXJnZVwiLFxuXHRcdFx0XHRcdFx0XHRcImNvbG9yXCI6IFwiYWNjZW50XCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9XG5cdF1cbn0pXG4iXX0=