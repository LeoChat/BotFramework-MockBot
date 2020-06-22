"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = 'Animation card';
exports.name = name;

function help() {
  return {
    'animationcard': 'Show an animation card'
  };
}

async function processor(context) {
  const {
    PUBLIC_URL
  } = process.env;
  await context.sendActivity({
    type: 'message',
    attachments: [{
      contentType: 'application/vnd.microsoft.card.animation',
      content: {
        title: 'title',
        subtitle: 'animation',
        text: 'No buttons, No Image, Autoloop, Autostart, Sharable',
        media: [{
          profile: 'animation',
          url: `${PUBLIC_URL}assets/surface_anim.gif`
        }],
        autoloop: true,
        autostart: true
      }
    }]
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9BbmltYXRpb25DYXJkLnRzIl0sIm5hbWVzIjpbIm5hbWUiLCJoZWxwIiwicHJvY2Vzc29yIiwiY29udGV4dCIsIlBVQkxJQ19VUkwiLCJwcm9jZXNzIiwiZW52Iiwic2VuZEFjdGl2aXR5IiwidHlwZSIsImF0dGFjaG1lbnRzIiwiY29udGVudFR5cGUiLCJjb250ZW50IiwidGl0bGUiLCJzdWJ0aXRsZSIsInRleHQiLCJtZWRpYSIsInByb2ZpbGUiLCJ1cmwiLCJhdXRvbG9vcCIsImF1dG9zdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsZ0JBQWI7OztBQUVBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZCxTQUFPO0FBQ0wscUJBQWlCO0FBRFosR0FBUDtBQUdEOztBQUVELGVBQWVDLFNBQWYsQ0FBeUJDLE9BQXpCLEVBQStDO0FBQzdDLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFpQkMsT0FBTyxDQUFDQyxHQUEvQjtBQUVBLFFBQU1ILE9BQU8sQ0FBQ0ksWUFBUixDQUFxQjtBQUN6QkMsSUFBQUEsSUFBSSxFQUFFLFNBRG1CO0FBRXpCQyxJQUFBQSxXQUFXLEVBQUUsQ0FBQztBQUNaQyxNQUFBQSxXQUFXLEVBQUUsMENBREQ7QUFFWkMsTUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFFBQUFBLEtBQUssRUFBRSxPQURBO0FBRVBDLFFBQUFBLFFBQVEsRUFBRSxXQUZIO0FBR1BDLFFBQUFBLElBQUksRUFBRSxxREFIQztBQUlQQyxRQUFBQSxLQUFLLEVBQUUsQ0FBQztBQUNOQyxVQUFBQSxPQUFPLEVBQUUsV0FESDtBQUVOQyxVQUFBQSxHQUFHLEVBQUcsR0FBR2IsVUFBWTtBQUZmLFNBQUQsQ0FKQTtBQVFQYyxRQUFBQSxRQUFRLEVBQUUsSUFSSDtBQVNQQyxRQUFBQSxTQUFTLEVBQUU7QUFUSjtBQUZHLEtBQUQ7QUFGWSxHQUFyQixDQUFOO0FBaUJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHVybkNvbnRleHQgfSBmcm9tICdib3RidWlsZGVyJztcblxuY29uc3QgbmFtZSA9ICdBbmltYXRpb24gY2FyZCc7XG5cbmZ1bmN0aW9uIGhlbHAoKSB7XG4gIHJldHVybiB7XG4gICAgJ2FuaW1hdGlvbmNhcmQnOiAnU2hvdyBhbiBhbmltYXRpb24gY2FyZCdcbiAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc29yKGNvbnRleHQ6IFR1cm5Db250ZXh0KSB7XG4gIGNvbnN0IHsgUFVCTElDX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XG5cbiAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICBhdHRhY2htZW50czogW3tcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5jYXJkLmFuaW1hdGlvbicsXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHRpdGxlOiAndGl0bGUnLFxuICAgICAgICBzdWJ0aXRsZTogJ2FuaW1hdGlvbicsXG4gICAgICAgIHRleHQ6ICdObyBidXR0b25zLCBObyBJbWFnZSwgQXV0b2xvb3AsIEF1dG9zdGFydCwgU2hhcmFibGUnLFxuICAgICAgICBtZWRpYTogW3tcbiAgICAgICAgICBwcm9maWxlOiAnYW5pbWF0aW9uJyxcbiAgICAgICAgICB1cmw6IGAkeyBQVUJMSUNfVVJMIH1hc3NldHMvc3VyZmFjZV9hbmltLmdpZmAsXG4gICAgICAgIH1dLFxuICAgICAgICBhdXRvbG9vcDogdHJ1ZSxcbiAgICAgICAgYXV0b3N0YXJ0OiB0cnVlXG4gICAgICB9XG4gICAgfV1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IGhlbHAsIG5hbWUsIHByb2Nlc3NvciB9XG4iXX0=