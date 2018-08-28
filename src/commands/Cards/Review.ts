export default () => ({
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "type": "AdaptiveCard",
  "version": "1.0",
  "body": [
    {
      "speak": "",
      "type": "ColumnSet",
      "columns": [
        {
          "type": "Column",
          "width": 2,
          "items": [
            {
              "type": "TextBlock",
              "text": "Airports"
            },
            {
              "type": "TextBlock",
              "text": "Sea-Tac",
              "weight": "bolder",
              "size": "extraLarge",
              "spacing": "none"
            },
            {
              "type": "TextBlock",
              "text": "3 ★★★☆☆ (856) · $$$$",
              "isSubtle": true,
              "spacing": "none"
            },
            {
              "type": "TextBlock",
              "text": "**Steve G. said** \"Another day, another airport.\"",
              "size": "small",
              "wrap": true
            }
          ]
        },
        {
          "type": "Column",
          "width": 1,
          "items": [
            {
              "type": "Image",
              "url": "https://upload.wikimedia.org/wikipedia/commons/2/23/Deltalax_%28cropped%29.jpg",
              "size": "auto"
            }
          ]
        }
      ]
    }
  ],
  "actions": [
    {
      "type": "Action.OpenUrl",
      "title": "More Info",
      "url": "https://www.portseattle.org/sea-tac"
    }
  ]
})
