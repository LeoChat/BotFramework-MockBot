"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = () => ({
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "type": "AdaptiveCard",
  "version": "1.0",
  "speak": "three of five stars, 856 reviews, Extremely Expensive. Steve G said, \"Another day, another airport\"",
  "body": [{
    "speak": "",
    "type": "ColumnSet",
    "columns": [{
      "type": "Column",
      "width": 2,
      "items": [{
        "type": "TextBlock",
        "text": "Airports"
      }, {
        "type": "TextBlock",
        "text": "Sea-Tac",
        "weight": "bolder",
        "size": "extraLarge",
        "spacing": "none"
      }, {
        "type": "TextBlock",
        "text": "3 ★★★☆☆ (856) · $$$$",
        "isSubtle": true,
        "spacing": "none"
      }, {
        "type": "TextBlock",
        "text": "**Steve G. said** \"Another day, another airport.\"",
        "size": "small",
        "wrap": true
      }]
    }, {
      "type": "Column",
      "width": 1,
      "items": [{
        "type": "Image",
        "url": "http://adaptivecards.io/content/airplane.png",
        "size": "auto"
      }]
    }]
  }],
  "actions": [{
    "type": "Action.OpenUrl",
    "title": "More Info",
    "url": "https://www.portseattle.org/sea-tac"
  }]
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9DYXJkcy9SZXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztlQUFlLE9BQU87QUFDcEIsYUFBVyxvREFEUztBQUVwQixVQUFRLGNBRlk7QUFHcEIsYUFBVyxLQUhTO0FBSXBCLFdBQVMsdUdBSlc7QUFLcEIsVUFBUSxDQUNOO0FBQ0UsYUFBUyxFQURYO0FBRUUsWUFBUSxXQUZWO0FBR0UsZUFBVyxDQUNUO0FBQ0UsY0FBUSxRQURWO0FBRUUsZUFBUyxDQUZYO0FBR0UsZUFBUyxDQUNQO0FBQ0UsZ0JBQVEsV0FEVjtBQUVFLGdCQUFRO0FBRlYsT0FETyxFQUtQO0FBQ0UsZ0JBQVEsV0FEVjtBQUVFLGdCQUFRLFNBRlY7QUFHRSxrQkFBVSxRQUhaO0FBSUUsZ0JBQVEsWUFKVjtBQUtFLG1CQUFXO0FBTGIsT0FMTyxFQVlQO0FBQ0UsZ0JBQVEsV0FEVjtBQUVFLGdCQUFRLHNCQUZWO0FBR0Usb0JBQVksSUFIZDtBQUlFLG1CQUFXO0FBSmIsT0FaTyxFQWtCUDtBQUNFLGdCQUFRLFdBRFY7QUFFRSxnQkFBUSxxREFGVjtBQUdFLGdCQUFRLE9BSFY7QUFJRSxnQkFBUTtBQUpWLE9BbEJPO0FBSFgsS0FEUyxFQThCVDtBQUNFLGNBQVEsUUFEVjtBQUVFLGVBQVMsQ0FGWDtBQUdFLGVBQVMsQ0FDUDtBQUNFLGdCQUFRLE9BRFY7QUFFRSxlQUFPLDhDQUZUO0FBR0UsZ0JBQVE7QUFIVixPQURPO0FBSFgsS0E5QlM7QUFIYixHQURNLENBTFk7QUFxRHBCLGFBQVcsQ0FDVDtBQUNFLFlBQVEsZ0JBRFY7QUFFRSxhQUFTLFdBRlg7QUFHRSxXQUFPO0FBSFQsR0FEUztBQXJEUyxDQUFQLEMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiAoe1xuICBcIiRzY2hlbWFcIjogXCJodHRwOi8vYWRhcHRpdmVjYXJkcy5pby9zY2hlbWFzL2FkYXB0aXZlLWNhcmQuanNvblwiLFxuICBcInR5cGVcIjogXCJBZGFwdGl2ZUNhcmRcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4wXCIsXG4gIFwic3BlYWtcIjogXCJ0aHJlZSBvZiBmaXZlIHN0YXJzLCA4NTYgcmV2aWV3cywgRXh0cmVtZWx5IEV4cGVuc2l2ZS4gU3RldmUgRyBzYWlkLCBcXFwiQW5vdGhlciBkYXksIGFub3RoZXIgYWlycG9ydFxcXCJcIixcbiAgXCJib2R5XCI6IFtcbiAgICB7XG4gICAgICBcInNwZWFrXCI6IFwiXCIsXG4gICAgICBcInR5cGVcIjogXCJDb2x1bW5TZXRcIixcbiAgICAgIFwiY29sdW1uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJDb2x1bW5cIixcbiAgICAgICAgICBcIndpZHRoXCI6IDIsXG4gICAgICAgICAgXCJpdGVtc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxuICAgICAgICAgICAgICBcInRleHRcIjogXCJBaXJwb3J0c1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJUZXh0QmxvY2tcIixcbiAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiU2VhLVRhY1wiLFxuICAgICAgICAgICAgICBcIndlaWdodFwiOiBcImJvbGRlclwiLFxuICAgICAgICAgICAgICBcInNpemVcIjogXCJleHRyYUxhcmdlXCIsXG4gICAgICAgICAgICAgIFwic3BhY2luZ1wiOiBcIm5vbmVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiVGV4dEJsb2NrXCIsXG4gICAgICAgICAgICAgIFwidGV4dFwiOiBcIjMg4piF4piF4piF4piG4piGICg4NTYpIMK3ICQkJCRcIixcbiAgICAgICAgICAgICAgXCJpc1N1YnRsZVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcInNwYWNpbmdcIjogXCJub25lXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcIlRleHRCbG9ja1wiLFxuICAgICAgICAgICAgICBcInRleHRcIjogXCIqKlN0ZXZlIEcuIHNhaWQqKiBcXFwiQW5vdGhlciBkYXksIGFub3RoZXIgYWlycG9ydC5cXFwiXCIsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgIFwid3JhcFwiOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiQ29sdW1uXCIsXG4gICAgICAgICAgXCJ3aWR0aFwiOiAxLFxuICAgICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJJbWFnZVwiLFxuICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHA6Ly9hZGFwdGl2ZWNhcmRzLmlvL2NvbnRlbnQvYWlycGxhbmUucG5nXCIsXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiBcImF1dG9cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgXCJhY3Rpb25zXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJBY3Rpb24uT3BlblVybFwiLFxuICAgICAgXCJ0aXRsZVwiOiBcIk1vcmUgSW5mb1wiLFxuICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5wb3J0c2VhdHRsZS5vcmcvc2VhLXRhY1wiXG4gICAgfVxuICBdXG59KVxuIl19