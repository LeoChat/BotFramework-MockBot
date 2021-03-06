"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.help = help;
exports.processor = processor;
exports.name = void 0;
const name = "Markdown";
exports.name = name;

function help() {
  return {
    "markdown arabic": "Show a Markdown-formatted message with Arabic text"
  };
}

async function processor(context, arg = "") {
  const {
    PUBLIC_URL
  } = process.env;
  await context.sendActivity({
    type: "message",
    textFormat: "markdown",
    text: `## التنسيق الأساسي \r\n\r\nيمكنك كتابة فقرات بالشكل التالي. الفقرة هي \r\n markdown المكون الرئيسي للغة \r\n\r\n *باستطاعتك استخدام *الخطوط المائلة  \nو**الخطوط العريضة**. يمكن استخدام هذه الخطوط *بشكل **متداخل** ايضا*\r\n\r\n## القوائم\r\n\r\n### القوائم المرتبة\r\n\r\n1.	واحد\r\n2.	إثنان\r\n3. ثلاثة\r\n\r\n### تعليق\r\n\r\n> هذا مثال بسيط لتعليق \r\n> يتم وضع فرجة بشكل تلقائي قبل اي استخدام لتعليق\r\n\r\n## (URLs) عناوين مواقع`
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9BcmFiaWNNYXJrZG93bi50cyJdLCJuYW1lcyI6WyJuYW1lIiwiaGVscCIsInByb2Nlc3NvciIsImNvbnRleHQiLCJhcmciLCJQVUJMSUNfVVJMIiwicHJvY2VzcyIsImVudiIsInNlbmRBY3Rpdml0eSIsInR5cGUiLCJ0ZXh0Rm9ybWF0IiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsVUFBYjs7O0FBRUEsU0FBU0MsSUFBVCxHQUFnQjtBQUNkLFNBQU87QUFDTCx1QkFBbUI7QUFEZCxHQUFQO0FBR0Q7O0FBRUQsZUFBZUMsU0FBZixDQUF5QkMsT0FBekIsRUFBK0NDLEdBQVcsR0FBRyxFQUE3RCxFQUFpRTtBQUMvRCxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBaUJDLE9BQU8sQ0FBQ0MsR0FBL0I7QUFFQSxRQUFNSixPQUFPLENBQUNLLFlBQVIsQ0FBcUI7QUFDekJDLElBQUFBLElBQUksRUFBRSxTQURtQjtBQUV6QkMsSUFBQUEsVUFBVSxFQUFFLFVBRmE7QUFHekJDLElBQUFBLElBQUksRUFBRztBQUhrQixHQUFyQixDQUFOO0FBS0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUdXJuQ29udGV4dCB9IGZyb20gXCJib3RidWlsZGVyXCI7XG5cbmNvbnN0IG5hbWUgPSBcIk1hcmtkb3duXCI7XG5cbmZ1bmN0aW9uIGhlbHAoKSB7XG4gIHJldHVybiB7XG4gICAgXCJtYXJrZG93biBhcmFiaWNcIjogXCJTaG93IGEgTWFya2Rvd24tZm9ybWF0dGVkIG1lc3NhZ2Ugd2l0aCBBcmFiaWMgdGV4dFwiXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3Nvcihjb250ZXh0OiBUdXJuQ29udGV4dCwgYXJnOiBzdHJpbmcgPSBcIlwiKSB7XG4gIGNvbnN0IHsgUFVCTElDX1VSTCB9ID0gcHJvY2Vzcy5lbnY7XG5cbiAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgIHR5cGU6IFwibWVzc2FnZVwiLFxuICAgIHRleHRGb3JtYXQ6IFwibWFya2Rvd25cIixcbiAgICB0ZXh0OiBgIyMg2KfZhNiq2YbYs9mK2YIg2KfZhNij2LPYp9iz2YogXFxyXFxuXFxyXFxu2YrZhdmD2YbZgyDZg9iq2KfYqNipINmB2YLYsdin2Kog2KjYp9mE2LTZg9mEINin2YTYqtin2YTZii4g2KfZhNmB2YLYsdipINmH2YogXFxyXFxuIG1hcmtkb3duINin2YTZhdmD2YjZhiDYp9mE2LHYptmK2LPZiiDZhNmE2LrYqSBcXHJcXG5cXHJcXG4gKtio2KfYs9iq2LfYp9i52KrZgyDYp9iz2KrYrtiv2KfZhSAq2KfZhNiu2LfZiNi3INin2YTZhdin2KbZhNipICBcXG7ZiCoq2KfZhNiu2LfZiNi3INin2YTYudix2YrYttipKiouINmK2YXZg9mGINin2LPYqtiu2K/Yp9mFINmH2LDZhyDYp9mE2K7Yt9mI2LcgKtio2LTZg9mEICoq2YXYqtiv2KfYrtmEKiog2KfZiti22KcqXFxyXFxuXFxyXFxuIyMg2KfZhNmC2YjYp9im2YVcXHJcXG5cXHJcXG4jIyMg2KfZhNmC2YjYp9im2YUg2KfZhNmF2LHYqtio2KlcXHJcXG5cXHJcXG4xLlx02YjYp9it2K9cXHJcXG4yLlx02KXYq9mG2KfZhlxcclxcbjMuINir2YTYp9ir2KlcXHJcXG5cXHJcXG4jIyMg2KrYudmE2YrZglxcclxcblxcclxcbj4g2YfYsNinINmF2KvYp9mEINio2LPZiti3INmE2KrYudmE2YrZgiBcXHJcXG4+INmK2KrZhSDZiNi22Lkg2YHYsdis2Kkg2KjYtNmD2YQg2KrZhNmC2KfYptmKINmC2KjZhCDYp9mKINin2LPYqtiu2K/Yp9mFINmE2KrYudmE2YrZglxcclxcblxcclxcbiMjIChVUkxzKSDYudmG2KfZiNmK2YYg2YXZiNin2YLYuWBcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGhlbHAsIG5hbWUsIHByb2Nlc3NvciB9O1xuIl19