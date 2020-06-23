"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processor = processor;
exports.name = void 0;

var AnimationCard = _interopRequireWildcard(require("./AnimationCard"));

var Audio = _interopRequireWildcard(require("./Audio"));

var AudioCard = _interopRequireWildcard(require("./AudioCard"));

var Carousel = _interopRequireWildcard(require("./Carousel"));

var ChannelData = _interopRequireWildcard(require("./ChannelData"));

var DocumentDataURI = _interopRequireWildcard(require("./DocumentDataURI"));

var DocumentPlain = _interopRequireWildcard(require("./DocumentPlain"));

var DocumentWord = _interopRequireWildcard(require("./DocumentWord"));

var DumpActivity = _interopRequireWildcard(require("./DumpActivity"));

var Echo = _interopRequireWildcard(require("./Echo"));

var EmptyCard = _interopRequireWildcard(require("./EmptyCard"));

var File = _interopRequireWildcard(require("./File"));

var HeroCard = _interopRequireWildcard(require("./HeroCard"));

var Image = _interopRequireWildcard(require("./Image"));

var ImageSVG = _interopRequireWildcard(require("./ImageSVG"));

var InvalidCard = _interopRequireWildcard(require("./InvalidCard"));

var Layout = _interopRequireWildcard(require("./Layout"));

var Localization = _interopRequireWildcard(require("./Localization"));

var Markdown = _interopRequireWildcard(require("./Markdown"));

var MultimediaCard = _interopRequireWildcard(require("./MultimediaCard"));

var OAuthCard = _interopRequireWildcard(require("./OAuthCard2"));

var Proactive = _interopRequireWildcard(require("./Proactive"));

var ReceiptCard = _interopRequireWildcard(require("./ReceiptCard"));

var SampleBackchannel = _interopRequireWildcard(require("./SampleBackchannel"));

var SignInCard = _interopRequireWildcard(require("./SignInCard"));

var Slow = _interopRequireWildcard(require("./Slow"));

var Text = _interopRequireWildcard(require("./Text"));

var ThumbnailCard = _interopRequireWildcard(require("./ThumbnailCard"));

var Timestamp = _interopRequireWildcard(require("./Timestamp"));

var Typing = _interopRequireWildcard(require("./Typing"));

var Unknown = _interopRequireWildcard(require("./Unknown"));

var Upload = _interopRequireWildcard(require("./Upload"));

var User = _interopRequireWildcard(require("./User"));

var Video = _interopRequireWildcard(require("./Video"));

var VideoCard = _interopRequireWildcard(require("./VideoCard"));

var Xml = _interopRequireWildcard(require("./Xml"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import * as AdaptiveCard from "./AdaptiveCard";
// import * as InputHint from "./InputHint";
// import * as CardActions from "./CardActions";
// import * as SamplePasswordInput from "./SamplePasswordInput";
// import * as SampleReduxMiddleware from "./SampleReduxMiddleware";
// import * as Speech from "./Speech";
// import * as SuggestedActionsCard from "./SuggestedActionsCard";
// import * as SampleGitHubRepository from "./SampleGitHubRepository";
const name = "All";
exports.name = name;

async function processor(context, options) {
  await AnimationCard.processor(context);
  await Audio.processor(context);
  await AudioCard.processor(context);
  await Carousel.processor(context);
  await ChannelData.processor(context);
  await DocumentDataURI.processor(context);
  await DocumentPlain.processor(context);
  await DocumentWord.processor(context);
  await DumpActivity.processor(context);
  await Echo.processor(context, "This should be echoed back");
  await EmptyCard.processor(context);
  await File.processor(context);
  await HeroCard.processor(context, "herocard");
  await HeroCard.processor(context, "herocard long title");
  await Image.processor(context);
  await ImageSVG.processor(context);
  await InvalidCard.processor(context);
  await Layout.processor(context);
  await Layout.processor(context, "single");
  await Layout.processor(context, "single carousel");
  await Layout.processor(context, "double");
  await Layout.processor(context, "carousel");
  await Localization.processor(context);
  await Markdown.processor(context);
  await MultimediaCard.processor(context);
  await OAuthCard.processor(context);
  await Proactive.processor(context, 'proactive');
  await ReceiptCard.processor(context);
  await SampleBackchannel.processor(context);
  await SignInCard.processor(context);
  await Slow.processor(context);
  await ThumbnailCard.processor(context, "thumbnailcard");
  await ThumbnailCard.processor(context, "thumbnailcard long title");
  await Timestamp.processor(context);
  await Text.processor(context);
  await Typing.processor(context);
  await Unknown.processor(context);
  await Upload.processor(context);
  await User.processor(context);
  await Video.processor(context, "", "");
  await VideoCard.processor(context);
  await Xml.processor(context);
  await context.sendActivity({
    type: "message",
    text: "Commands finished"
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9BbGwudHMiXSwibmFtZXMiOlsibmFtZSIsInByb2Nlc3NvciIsImNvbnRleHQiLCJvcHRpb25zIiwiQW5pbWF0aW9uQ2FyZCIsIkF1ZGlvIiwiQXVkaW9DYXJkIiwiQ2Fyb3VzZWwiLCJDaGFubmVsRGF0YSIsIkRvY3VtZW50RGF0YVVSSSIsIkRvY3VtZW50UGxhaW4iLCJEb2N1bWVudFdvcmQiLCJEdW1wQWN0aXZpdHkiLCJFY2hvIiwiRW1wdHlDYXJkIiwiRmlsZSIsIkhlcm9DYXJkIiwiSW1hZ2UiLCJJbWFnZVNWRyIsIkludmFsaWRDYXJkIiwiTGF5b3V0IiwiTG9jYWxpemF0aW9uIiwiTWFya2Rvd24iLCJNdWx0aW1lZGlhQ2FyZCIsIk9BdXRoQ2FyZCIsIlByb2FjdGl2ZSIsIlJlY2VpcHRDYXJkIiwiU2FtcGxlQmFja2NoYW5uZWwiLCJTaWduSW5DYXJkIiwiU2xvdyIsIlRodW1ibmFpbENhcmQiLCJUaW1lc3RhbXAiLCJUZXh0IiwiVHlwaW5nIiwiVW5rbm93biIsIlVwbG9hZCIsIlVzZXIiLCJWaWRlbyIsIlZpZGVvQ2FyZCIsIlhtbCIsInNlbmRBY3Rpdml0eSIsInR5cGUiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQVVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUEzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXNDQSxNQUFNQSxJQUFJLEdBQUcsS0FBYjs7O0FBRUEsZUFBZUMsU0FBZixDQUF5QkMsT0FBekIsRUFBK0NDLE9B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QUFNZ0MsT0FBTyxDQUFDakMsU0FBUixDQUFrQkMsT0FBbEIsQ0FBTjtBQUNBLFFBQU1pQyxNQUFNLENBQUNsQyxTQUFQLENBQWlCQyxPQUFqQixDQUFOO0FBQ0EsUUFBTWtDLElBQUksQ0FBQ25DLFNBQUwsQ0FBZUMsT0FBZixDQUFOO0FBQ0EsUUFBTW1DLEtBQUssQ0FBQ3BDLFNBQU4sQ0FBZ0JDLE9BQWhCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLENBQU47QUFDQSxRQUFNb0MsU0FBUyxDQUFDckMsU0FBVixDQUFvQkMsT0FBcEIsQ0FBTjtBQUNBLFFBQU1xQyxHQUFHLENBQUN0QyxTQUFKLENBQWNDLE9BQWQsQ0FBTjtBQUVBLFFBQU1BLE9BQU8sQ0FBQ3NDLFlBQVIsQ0FBcUI7QUFDekJDLElBQUFBLElBQUksRUFBRSxTQURtQjtBQUV6QkMsSUFBQUEsSUFBSSxFQUFFO0FBRm1CLEdBQXJCLENBQU47QUFJRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR1cm5Db250ZXh0IH0gZnJvbSBcImJvdGJ1aWxkZXJcIjtcblxuLy8gaW1wb3J0ICogYXMgQWRhcHRpdmVDYXJkIGZyb20gXCIuL0FkYXB0aXZlQ2FyZFwiO1xuLy8gaW1wb3J0ICogYXMgSW5wdXRIaW50IGZyb20gXCIuL0lucHV0SGludFwiO1xuLy8gaW1wb3J0ICogYXMgQ2FyZEFjdGlvbnMgZnJvbSBcIi4vQ2FyZEFjdGlvbnNcIjtcbi8vIGltcG9ydCAqIGFzIFNhbXBsZVBhc3N3b3JkSW5wdXQgZnJvbSBcIi4vU2FtcGxlUGFzc3dvcmRJbnB1dFwiO1xuLy8gaW1wb3J0ICogYXMgU2FtcGxlUmVkdXhNaWRkbGV3YXJlIGZyb20gXCIuL1NhbXBsZVJlZHV4TWlkZGxld2FyZVwiO1xuLy8gaW1wb3J0ICogYXMgU3BlZWNoIGZyb20gXCIuL1NwZWVjaFwiO1xuLy8gaW1wb3J0ICogYXMgU3VnZ2VzdGVkQWN0aW9uc0NhcmQgZnJvbSBcIi4vU3VnZ2VzdGVkQWN0aW9uc0NhcmRcIjtcbi8vIGltcG9ydCAqIGFzIFNhbXBsZUdpdEh1YlJlcG9zaXRvcnkgZnJvbSBcIi4vU2FtcGxlR2l0SHViUmVwb3NpdG9yeVwiO1xuaW1wb3J0ICogYXMgQW5pbWF0aW9uQ2FyZCBmcm9tIFwiLi9BbmltYXRpb25DYXJkXCI7XG5pbXBvcnQgKiBhcyBBdWRpbyBmcm9tIFwiLi9BdWRpb1wiO1xuaW1wb3J0ICogYXMgQXVkaW9DYXJkIGZyb20gXCIuL0F1ZGlvQ2FyZFwiO1xuaW1wb3J0ICogYXMgQ2Fyb3VzZWwgZnJvbSBcIi4vQ2Fyb3VzZWxcIjtcbmltcG9ydCAqIGFzIENoYW5uZWxEYXRhIGZyb20gXCIuL0NoYW5uZWxEYXRhXCI7XG5pbXBvcnQgKiBhcyBEb2N1bWVudERhdGFVUkkgZnJvbSBcIi4vRG9jdW1lbnREYXRhVVJJXCI7XG5pbXBvcnQgKiBhcyBEb2N1bWVudFBsYWluIGZyb20gXCIuL0RvY3VtZW50UGxhaW5cIjtcbmltcG9ydCAqIGFzIERvY3VtZW50V29yZCBmcm9tIFwiLi9Eb2N1bWVudFdvcmRcIjtcbmltcG9ydCAqIGFzIER1bXBBY3Rpdml0eSBmcm9tIFwiLi9EdW1wQWN0aXZpdHlcIjtcbmltcG9ydCAqIGFzIEVjaG8gZnJvbSBcIi4vRWNob1wiO1xuaW1wb3J0ICogYXMgRW1wdHlDYXJkIGZyb20gXCIuL0VtcHR5Q2FyZFwiO1xuaW1wb3J0ICogYXMgRmlsZSBmcm9tIFwiLi9GaWxlXCI7XG5pbXBvcnQgKiBhcyBIZXJvQ2FyZCBmcm9tIFwiLi9IZXJvQ2FyZFwiO1xuaW1wb3J0ICogYXMgSW1hZ2UgZnJvbSBcIi4vSW1hZ2VcIjtcbmltcG9ydCAqIGFzIEltYWdlU1ZHIGZyb20gXCIuL0ltYWdlU1ZHXCI7XG5pbXBvcnQgKiBhcyBJbnZhbGlkQ2FyZCBmcm9tIFwiLi9JbnZhbGlkQ2FyZFwiO1xuaW1wb3J0ICogYXMgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xuaW1wb3J0ICogYXMgTG9jYWxpemF0aW9uIGZyb20gXCIuL0xvY2FsaXphdGlvblwiO1xuaW1wb3J0ICogYXMgTWFya2Rvd24gZnJvbSBcIi4vTWFya2Rvd25cIjtcbmltcG9ydCAqIGFzIE11bHRpbWVkaWFDYXJkIGZyb20gXCIuL011bHRpbWVkaWFDYXJkXCI7XG5pbXBvcnQgKiBhcyBPQXV0aENhcmQgZnJvbSBcIi4vT0F1dGhDYXJkMlwiO1xuaW1wb3J0ICogYXMgUHJvYWN0aXZlIGZyb20gXCIuL1Byb2FjdGl2ZVwiO1xuaW1wb3J0ICogYXMgUmVjZWlwdENhcmQgZnJvbSBcIi4vUmVjZWlwdENhcmRcIjtcbmltcG9ydCAqIGFzIFNhbXBsZUJhY2tjaGFubmVsIGZyb20gXCIuL1NhbXBsZUJhY2tjaGFubmVsXCI7XG5pbXBvcnQgKiBhcyBTaWduSW5DYXJkIGZyb20gXCIuL1NpZ25JbkNhcmRcIjtcbmltcG9ydCAqIGFzIFNsb3cgZnJvbSBcIi4vU2xvd1wiO1xuaW1wb3J0ICogYXMgVGV4dCBmcm9tIFwiLi9UZXh0XCI7XG5pbXBvcnQgKiBhcyBUaHVtYm5haWxDYXJkIGZyb20gXCIuL1RodW1ibmFpbENhcmRcIjtcbmltcG9ydCAqIGFzIFRpbWVzdGFtcCBmcm9tIFwiLi9UaW1lc3RhbXBcIjtcbmltcG9ydCAqIGFzIFR5cGluZyBmcm9tIFwiLi9UeXBpbmdcIjtcbmltcG9ydCAqIGFzIFVua25vd24gZnJvbSBcIi4vVW5rbm93blwiO1xuaW1wb3J0ICogYXMgVXBsb2FkIGZyb20gXCIuL1VwbG9hZFwiO1xuaW1wb3J0ICogYXMgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5pbXBvcnQgKiBhcyBWaWRlbyBmcm9tIFwiLi9WaWRlb1wiO1xuaW1wb3J0ICogYXMgVmlkZW9DYXJkIGZyb20gXCIuL1ZpZGVvQ2FyZFwiO1xuaW1wb3J0ICogYXMgWG1sIGZyb20gXCIuL1htbFwiO1xuXG5jb25zdCBuYW1lID0gXCJBbGxcIjtcblxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc29yKGNvbnRleHQ6IFR1cm5Db250ZXh0LCBvcHRpb25zOiBhbnkpIHtcbiAgYXdhaXQgQW5pbWF0aW9uQ2FyZC5wcm9jZXNzb3IoY29udGV4dCk7XG4gIGF3YWl0IEF1ZGlvLnByb2Nlc3Nvcihjb250ZXh0KTtcbiAgYXdhaXQgQXVkaW9DYXJkLnByb2Nlc3Nvcihjb250ZXh0KTtcbiAgYXdhaXQgQ2Fyb3VzZWwucHJvY2Vzc29yKGNvbnRleHQpO1xuICBhd2FpdCBDaGFubmVsRGF0YS5wcm9jZXNzb3IoY29udGV4dCk7XG4gIGF3YWl0IERvY3VtZW50RGF0YVVSSS5wcm9jZXNzb3IoY29udGV4dCk7XG4gIGF3YWl0IERvY3VtZW50UGxhaW4ucHJvY2Vzc29yKGNvbnRleHQpO1xuICBhd2FpdCBEb2N1bWVudFdvcmQucHJvY2Vzc29yKGNvbnRleHQpO1xuICBhd2FpdCBEdW1wQWN0aXZpdHkucHJvY2Vzc29yKGNvbnRleHQpO1xuICBhd2FpdCBFY2hvLnByb2Nlc3Nvcihjb250ZXh0LCBcIlRoaXMgc2hvdWxkIGJlIGVjaG9lZCBiYWNrXCIpO1xuICBhd2FpdCBFbXB0eUNhcmQucHJvY2Vzc29yKGNvbnRleHQpO1xuICBhd2FpdCBGaWxlLnByb2Nlc3Nvcihjb250ZXh0KTtcbiAgYXdhaXQgSGVyb0NhcmQucHJvY2Vzc29yKGNvbnRleHQsIFwiaGVyb2NhcmRcIik7XG4gIGF3YWl0IEhlcm9DYXJkLnByb2Nlc3Nvcihjb250ZXh0LCBcImhlcm9jYXJkIGxvbmcgdGl0bGVcIik7XG4gIGF3YWl0IEltYWdlLnByb2Nlc3Nvcihjb250ZXh0KTtcbiAgYXdhaXQgSW1hZ2VTVkcucHJvY2Vzc29yKGNvbnRleHQpO1xuICBhd2FpdCBJbnZhbGlkQ2FyZC5wcm9jZXNzb3IoY29udGV4dCk7XG4gIGF3YWl0IExheW91dC5wcm9jZXNzb3IoY29udGV4dCk7XG4gIGF3YWl0IExheW91dC5wcm9jZXNzb3IoY29udGV4dCwgXCJzaW5nbGVcIik7XG4gIGF3YWl0IExheW91dC5wcm9jZXNzb3IoY29udGV4dCwgXCJzaW5nbGUgY2Fyb3VzZWxcIik7XG4gIGF3YWl0IExheW91dC5wcm9jZXNzb3IoY29udGV4dCwgXCJkb3VibGVcIik7XG4gIGF3YWl0IExheW91dC5wcm9jZXNzb3IoY29udGV4dCwgXCJjYXJvdXNlbFwiKTtcbiAgYXdhaXQgTG9jYWxpemF0aW9uLnByb2Nlc3Nvcihjb250ZXh0KTtcbiAgYXdhaXQgTWFya2Rvd24ucHJvY2Vzc29yKGNvbnRleHQpO1xuICBhd2FpdCBNdWx0aW1lZGlhQ2FyZC5wcm9jZXNzb3IoY29udGV4dCk7XG4gIGF3YWl0IE9BdXRoQ2FyZC5wcm9jZXNzb3IoY29udGV4dCk7XG4gIGF3YWl0IFByb2FjdGl2ZS5wcm9jZXNzb3IoY29udGV4dCwgJ3Byb2FjdGl2ZScpO1xuICBhd2FpdCBSZWNlaXB0Q2FyZC5wcm9jZXNzb3IoY29udGV4dCk7XG4gIGF3YWl0IFNhbXBsZUJhY2tjaGFubmVsLnByb2Nlc3Nvcihjb250ZXh0KTtcbiAgYXdhaXQgU2lnbkluQ2FyZC5wcm9jZXNzb3IoY29udGV4dCk7XG4gIGF3YWl0IFNsb3cucHJvY2Vzc29yKGNvbnRleHQpO1xuICBhd2FpdCBUaHVtYm5haWxDYXJkLnByb2Nlc3Nvcihjb250ZXh0LCBcInRodW1ibmFpbGNhcmRcIik7XG4gIGF3YWl0IFRodW1ibmFpbENhcmQucHJvY2Vzc29yKGNvbnRleHQsIFwidGh1bWJuYWlsY2FyZCBsb25nIHRpdGxlXCIpO1xuICBhd2FpdCBUaW1lc3RhbXAucHJvY2Vzc29yKGNvbnRleHQpO1xuICBhd2FpdCBUZXh0LnByb2Nlc3Nvcihjb250ZXh0KTtcbiAgYXdhaXQgVHlwaW5nLnByb2Nlc3Nvcihjb250ZXh0KTtcbiAgYXdhaXQgVW5rbm93bi5wcm9jZXNzb3IoY29udGV4dCk7XG4gIGF3YWl0IFVwbG9hZC5wcm9jZXNzb3IoY29udGV4dCk7XG4gIGF3YWl0IFVzZXIucHJvY2Vzc29yKGNvbnRleHQpO1xuICBhd2FpdCBWaWRlby5wcm9jZXNzb3IoY29udGV4dCwgXCJcIiwgXCJcIik7XG4gIGF3YWl0IFZpZGVvQ2FyZC5wcm9jZXNzb3IoY29udGV4dCk7XG4gIGF3YWl0IFhtbC5wcm9jZXNzb3IoY29udGV4dCk7XG5cbiAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgIHR5cGU6IFwibWVzc2FnZVwiLFxuICAgIHRleHQ6IFwiQ29tbWFuZHMgZmluaXNoZWRcIlxuICB9KTtcbn1cblxuZXhwb3J0IHsgbmFtZSwgcHJvY2Vzc29yIH07XG4iXX0=