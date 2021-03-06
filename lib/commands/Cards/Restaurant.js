"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = () => ({
  "$schema": "https://microsoft.github.io/AdaptiveCards/schemas/adaptive-card.json",
  "version": "1.0",
  "type": "AdaptiveCard",
  "body": [{
    "type": "Container",
    "items": [{
      "type": "Image",
      "url": "http://www.thefabliss.com/wp-content/uploads/2013/10/IMG_3938a1.jpg"
    }, {
      "type": "Container",
      "items": [{
        "type": "TextBlock",
        "size": "Medium",
        "weight": "Bolder",
        "text": "Serious Pie"
      }, {
        "type": "ColumnSet",
        "columns": [{
          "type": "Column",
          "items": [{
            "type": "TextBlock",
            "weight": "Bolder",
            "text": "★★★★☆"
          }],
          "width": "auto"
        }, {
          "type": "Column",
          "items": [{
            "type": "TextBlock",
            "weight": "Bolder",
            "text": "$$$"
          }],
          "width": "stretch"
        }]
      }]
    }]
  }, {
    "type": "TextBlock",
    "size": "Small",
    "weight": "Lighter",
    "text": "Italian"
  }, {
    "type": "TextBlock",
    "text": "316 Virginia St. Seattle"
  }, {
    "type": "TextBlock",
    "spacing": "None",
    "text": "WA 98101"
  }, {
    "type": "TextBlock",
    "text": "(206) 838-7388"
  }],
  "actions": [{
    "type": "Action.ShowCard",
    "title": "Call restaurant",
    "card": {
      "type": "AdaptiveCard",
      "style": "emphasis",
      "body": [{
        "type": "Input.Date",
        "id": "dueDate"
      }, {
        "type": "Input.Text",
        "id": "comment",
        "placeholder": "Add a comment",
        "isMultiline": true
      }],
      "actions": [{
        "type": "Action.OpenUrl",
        "title": "OK",
        "url": "http://adaptivecards.io"
      }],
      "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
    }
  }, {
    "type": "Action.OpenUrl",
    "title": "Get directions",
    "url": "http://abc.com"
  }]
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9DYXJkcy9SZXN0YXVyYW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7ZUFBZSxPQUFPO0FBQ2xCLGFBQVcsc0VBRE87QUFFbEIsYUFBVyxLQUZPO0FBR2xCLFVBQVEsY0FIVTtBQUlsQixVQUFRLENBQ0o7QUFDSSxZQUFRLFdBRFo7QUFFSSxhQUFTLENBQ0w7QUFDSSxjQUFRLE9BRFo7QUFFSSxhQUFPO0FBRlgsS0FESyxFQUtMO0FBQ0ksY0FBUSxXQURaO0FBRUksZUFBUyxDQUNMO0FBQ0ksZ0JBQVEsV0FEWjtBQUVJLGdCQUFRLFFBRlo7QUFHSSxrQkFBVSxRQUhkO0FBSUksZ0JBQVE7QUFKWixPQURLLEVBT0w7QUFDSSxnQkFBUSxXQURaO0FBRUksbUJBQVcsQ0FDUDtBQUNJLGtCQUFRLFFBRFo7QUFFSSxtQkFBUyxDQUNMO0FBQ0ksb0JBQVEsV0FEWjtBQUVJLHNCQUFVLFFBRmQ7QUFHSSxvQkFBUTtBQUhaLFdBREssQ0FGYjtBQVNJLG1CQUFTO0FBVGIsU0FETyxFQVlQO0FBQ0ksa0JBQVEsUUFEWjtBQUVJLG1CQUFTLENBQ0w7QUFDSSxvQkFBUSxXQURaO0FBRUksc0JBQVUsUUFGZDtBQUdJLG9CQUFRO0FBSFosV0FESyxDQUZiO0FBU0ksbUJBQVM7QUFUYixTQVpPO0FBRmYsT0FQSztBQUZiLEtBTEs7QUFGYixHQURJLEVBZ0RKO0FBQ0ksWUFBUSxXQURaO0FBRUksWUFBUSxPQUZaO0FBR0ksY0FBVSxTQUhkO0FBSUksWUFBUTtBQUpaLEdBaERJLEVBc0RKO0FBQ0ksWUFBUSxXQURaO0FBRUksWUFBUTtBQUZaLEdBdERJLEVBMERKO0FBQ0ksWUFBUSxXQURaO0FBRUksZUFBVyxNQUZmO0FBR0ksWUFBUTtBQUhaLEdBMURJLEVBK0RKO0FBQ0ksWUFBUSxXQURaO0FBRUksWUFBUTtBQUZaLEdBL0RJLENBSlU7QUF3RWxCLGFBQVcsQ0FDUDtBQUNJLFlBQVEsaUJBRFo7QUFFSSxhQUFTLGlCQUZiO0FBR0ksWUFBUTtBQUNKLGNBQVEsY0FESjtBQUVKLGVBQVMsVUFGTDtBQUdKLGNBQVEsQ0FDSjtBQUNJLGdCQUFRLFlBRFo7QUFFSSxjQUFNO0FBRlYsT0FESSxFQUtKO0FBQ0ksZ0JBQVEsWUFEWjtBQUVJLGNBQU0sU0FGVjtBQUdJLHVCQUFlLGVBSG5CO0FBSUksdUJBQWU7QUFKbkIsT0FMSSxDQUhKO0FBZUosaUJBQVcsQ0FDUDtBQUNJLGdCQUFRLGdCQURaO0FBRUksaUJBQVMsSUFGYjtBQUdJLGVBQU87QUFIWCxPQURPLENBZlA7QUFzQkosaUJBQVc7QUF0QlA7QUFIWixHQURPLEVBNkJQO0FBQ0ksWUFBUSxnQkFEWjtBQUVJLGFBQVMsZ0JBRmI7QUFHSSxXQUFPO0FBSFgsR0E3Qk87QUF4RU8sQ0FBUCxDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcbiAgICBcIiRzY2hlbWFcIjogXCJodHRwczovL21pY3Jvc29mdC5naXRodWIuaW8vQWRhcHRpdmVDYXJkcy9zY2hlbWFzL2FkYXB0aXZlLWNhcmQuanNvblwiLFxuICAgIFwidmVyc2lvblwiOiBcIjEuMFwiLFxuICAgIFwidHlwZVwiOiBcIkFkYXB0aXZlQ2FyZFwiLFxuICAgIFwiYm9keVwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIkNvbnRhaW5lclwiLFxuICAgICAgICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJJbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHA6Ly93d3cudGhlZmFibGlzcy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTMvMTAvSU1HXzM5MzhhMS5qcGdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJDb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplXCI6IFwiTWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJCb2xkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJTZXJpb3VzIFBpZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkNvbHVtblNldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sdW1uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJCb2xkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwi4piF4piF4piF4piF4piGXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiBcImF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJDb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2VpZ2h0XCI6IFwiQm9sZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIiQkJFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogXCJzdHJldGNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXG4gICAgICAgICAgICBcInNpemVcIjogXCJTbWFsbFwiLFxuICAgICAgICAgICAgXCJ3ZWlnaHRcIjogXCJMaWdodGVyXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCJJdGFsaWFuXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCIzMTYgVmlyZ2luaWEgU3QuIFNlYXR0bGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcbiAgICAgICAgICAgIFwic3BhY2luZ1wiOiBcIk5vbmVcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiBcIldBIDk4MTAxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXG4gICAgICAgICAgICBcInRleHRcIjogXCIoMjA2KSA4MzgtNzM4OFwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiYWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIkFjdGlvbi5TaG93Q2FyZFwiLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNhbGwgcmVzdGF1cmFudFwiLFxuICAgICAgICAgICAgXCJjYXJkXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJBZGFwdGl2ZUNhcmRcIixcbiAgICAgICAgICAgICAgICBcInN0eWxlXCI6IFwiZW1waGFzaXNcIixcbiAgICAgICAgICAgICAgICBcImJvZHlcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJJbnB1dC5EYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiZHVlRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIklucHV0LlRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCJjb21tZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwiQWRkIGEgY29tbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpc011bHRpbGluZVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiYWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIkFjdGlvbi5PcGVuVXJsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiT0tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL2FkYXB0aXZlY2FyZHMuaW9cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcIiRzY2hlbWFcIjogXCJodHRwOi8vYWRhcHRpdmVjYXJkcy5pby9zY2hlbWFzL2FkYXB0aXZlLWNhcmQuanNvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIkFjdGlvbi5PcGVuVXJsXCIsXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiR2V0IGRpcmVjdGlvbnNcIixcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL2FiYy5jb21cIlxuICAgICAgICB9XG4gICAgXVxufSlcbiJdfQ==