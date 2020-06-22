"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Accessibility = _interopRequireWildcard(require("./commands/Accessibility"));

var AdaptiveCard = _interopRequireWildcard(require("./commands/AdaptiveCard"));

var AnimationCard = _interopRequireWildcard(require("./commands/AnimationCard"));

var Audio = _interopRequireWildcard(require("./commands/Audio"));

var ArabicCarousel = _interopRequireWildcard(require("./commands/ArabicCarousel"));

var ArabicFile = _interopRequireWildcard(require("./commands/ArabicFile"));

var ArabicMarkdown = _interopRequireWildcard(require("./commands/ArabicMarkdown"));

var AudioCard = _interopRequireWildcard(require("./commands/AudioCard"));

var CardActions = _interopRequireWildcard(require("./commands/CardActions"));

var Carousel = _interopRequireWildcard(require("./commands/Carousel"));

var ChannelData = _interopRequireWildcard(require("./commands/ChannelData"));

var DocumentDataURI = _interopRequireWildcard(require("./commands/DocumentDataURI"));

var DocumentPlain = _interopRequireWildcard(require("./commands/DocumentPlain"));

var DocumentWord = _interopRequireWildcard(require("./commands/DocumentWord"));

var DumpActivity = _interopRequireWildcard(require("./commands/DumpActivity"));

var Echo = _interopRequireWildcard(require("./commands/Echo"));

var EmptyCard = _interopRequireWildcard(require("./commands/EmptyCard"));

var File = _interopRequireWildcard(require("./commands/File"));

var HeroCard = _interopRequireWildcard(require("./commands/HeroCard"));

var HeroCardActions = _interopRequireWildcard(require("./commands/HeroCardActions"));

var Image = _interopRequireWildcard(require("./commands/Image"));

var ImageSVG = _interopRequireWildcard(require("./commands/ImageSVG"));

var InputHint = _interopRequireWildcard(require("./commands/InputHint"));

var InvalidCard = _interopRequireWildcard(require("./commands/InvalidCard"));

var Layout = _interopRequireWildcard(require("./commands/Layout"));

var Localization = _interopRequireWildcard(require("./commands/Localization"));

var Markdown = _interopRequireWildcard(require("./commands/Markdown"));

var MultimediaCard = _interopRequireWildcard(require("./commands/MultimediaCard"));

var OAuthCard = _interopRequireWildcard(require("./commands/OAuthCard2"));

var Proactive = _interopRequireWildcard(require("./commands/Proactive"));

var ReceiptCard = _interopRequireWildcard(require("./commands/ReceiptCard"));

var SampleBackchannel = _interopRequireWildcard(require("./commands/SampleBackchannel"));

var SampleGitHubRepository = _interopRequireWildcard(require("./commands/SampleGitHubRepository"));

var SamplePasswordInput = _interopRequireWildcard(require("./commands/SamplePasswordInput"));

var SampleReduxMiddleware = _interopRequireWildcard(require("./commands/SampleReduxMiddleware"));

var SignInCard = _interopRequireWildcard(require("./commands/SignInCard"));

var Slow = _interopRequireWildcard(require("./commands/Slow"));

var Speech = _interopRequireWildcard(require("./commands/Speech"));

var SuggestedActionsCard = _interopRequireWildcard(require("./commands/SuggestedActionsCard"));

var Text = _interopRequireWildcard(require("./commands/Text"));

var ThumbnailCard = _interopRequireWildcard(require("./commands/ThumbnailCard"));

var Timestamp = _interopRequireWildcard(require("./commands/Timestamp"));

var Typing = _interopRequireWildcard(require("./commands/Typing"));

var Unknown = _interopRequireWildcard(require("./commands/Unknown"));

var Upload = _interopRequireWildcard(require("./commands/Upload"));

var User = _interopRequireWildcard(require("./commands/User"));

var Video = _interopRequireWildcard(require("./commands/Video"));

var VideoCard = _interopRequireWildcard(require("./commands/VideoCard"));

var Xml = _interopRequireWildcard(require("./commands/Xml"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = [_objectSpread({
  pattern: "accessibility"
}, Accessibility), _objectSpread({
  pattern: /^card(\s+[\d\w:]+)(\s+[\d\w:]+)?(\s+[\d\w:]+)?(\s+[\d\w:]+)?(\s+[\d\w:]+)?/i
}, AdaptiveCard), _objectSpread({
  pattern: /^(what).*?weather/i
}, AdaptiveCard), _objectSpread({
  pattern: /^arabic greeting|^arabicgreeting|رحب بالقارئ/i
}, AdaptiveCard), // { pattern: /all/i, ...All },
_objectSpread({
  pattern: "animationcard"
}, AnimationCard), _objectSpread({
  pattern: "audio"
}, Audio), _objectSpread({
  pattern: /^arabic carousel|يشترى/i
}, ArabicCarousel), _objectSpread({
  pattern: /^arabic file$|تحميل/i
}, ArabicFile), _objectSpread({
  pattern: /arabic markdown$|نص/i
}, ArabicMarkdown), _objectSpread({
  pattern: "audiocard"
}, AudioCard), _objectSpread({
  pattern: "card-actions"
}, CardActions), _objectSpread({
  pattern: "carousel"
}, Carousel), _objectSpread({
  pattern: "channel-data"
}, ChannelData), _objectSpread({
  pattern: "document-data-uri"
}, DocumentDataURI), _objectSpread({
  pattern: "document-plain"
}, DocumentPlain), _objectSpread({
  pattern: "document-word"
}, DocumentWord), _objectSpread({
  pattern: "dump-activity"
}, DumpActivity), _objectSpread({
  pattern: /^echo\s/i
}, Echo), _objectSpread({
  pattern: "emptycard"
}, EmptyCard), _objectSpread({
  pattern: "file"
}, File), _objectSpread({
  pattern: "herocard"
}, HeroCard), _objectSpread({
  pattern: /^herocard(\s+([\d\w]+))*$/i
}, HeroCard), _objectSpread({
  pattern: /^herocarda/i
}, HeroCardActions), _objectSpread({
  pattern: /^hint(\s+[\d\w]+)?(\s+[\d\w]+)?/i
}, InputHint), _objectSpread({
  pattern: "image"
}, Image), _objectSpread({
  pattern: "image-svg"
}, ImageSVG), _objectSpread({
  pattern: /^input[\-\s]hint(\s+[\d\w]+)?(\s+[\d\w]+)?/i
}, InputHint), _objectSpread({
  pattern: "invalidcard"
}, InvalidCard), _objectSpread({
  pattern: /^layout(\s+[\d\w]+)?(\s+[\d\w]+)?/i
}, Layout), _objectSpread({
  pattern: "localization"
}, Localization), _objectSpread({
  pattern: /^markdown(\s+([\d\w]+))?(\s+([\d\w]+))?$/i
}, Markdown), _objectSpread({
  pattern: "content-multimedia"
}, MultimediaCard), _objectSpread({
  pattern: /^(oauth(\s+[\d\w]+)?|\d{6})$/i
}, OAuthCard), _objectSpread({
  pattern: "sample:password-input"
}, SamplePasswordInput), _objectSpread({
  pattern: /^proactive(\s+([\d\w]+))*?\.?$/iu
}, Proactive), _objectSpread({
  pattern: "receiptcard"
}, ReceiptCard), _objectSpread({
  pattern: "sample:backchannel"
}, SampleBackchannel), _objectSpread({
  pattern: "sample:github-repository"
}, SampleGitHubRepository), _objectSpread({
  pattern: /^sample:redux-middleware(\s+[\d\w\-]+)*$/i
}, SampleReduxMiddleware), _objectSpread({
  pattern: "signin"
}, SignInCard), _objectSpread({
  pattern: /^slow(\s+[\d\w]+)?/i
}, Slow), _objectSpread({
  pattern: "speech"
}, Speech), _objectSpread({
  pattern: /^suggested\-actions(\s+[\d\w]+)?/i
}, SuggestedActionsCard), _objectSpread({
  pattern: /Tell.*?story/iu
}, Speech), _objectSpread({
  pattern: "text"
}, Text), _objectSpread({
  pattern: /^thumbnailcard(\s+([\d\w]+))?(\s+([\d\w]+))?$/i
}, ThumbnailCard), _objectSpread({
  pattern: /^timestamp(\s+[\d\w]+)?/i
}, Timestamp), _objectSpread({
  pattern: /^typing(\s+[\d\w]+)?/i
}, Typing), _objectSpread({
  pattern: /^unknown(\s+[\d\w]+)?/i
}, Unknown), _objectSpread({
  pattern: "upload"
}, Upload), _objectSpread({
  pattern: /^user(\s+[\d\w]+)?/i
}, User), _objectSpread({
  pattern: /^video(\s+([\d\w]+))?$/i
}, Video), _objectSpread({
  pattern: "videocard"
}, VideoCard), _objectSpread({
  pattern: "xml"
}, Xml)].map(command => _objectSpread({}, command, {
  pattern: typeof command.pattern === "string" ? new RegExp(`^${command.pattern}$`, "i") : command.pattern
}));

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21tYW5kcy5qcyJdLCJuYW1lcyI6WyJwYXR0ZXJuIiwiQWNjZXNzaWJpbGl0eSIsIkFkYXB0aXZlQ2FyZCIsIkFuaW1hdGlvbkNhcmQiLCJBdWRpbyIsIkFyYWJpY0Nhcm91c2VsIiwiQXJhYmljRmlsZSIsIkFyYWJpY01hcmtkb3duIiwiQXVkaW9DYXJkIiwiQ2FyZEFjdGlvbnMiLCJDYXJvdXNlbCIsIkNoYW5uZWxEYXRhIiwiRG9jdW1lbnREYXRhVVJJIiwiRG9jdW1lbnRQbGFpbiIsIkRvY3VtZW50V29yZCIsIkR1bXBBY3Rpdml0eSIsIkVjaG8iLCJFbXB0eUNhcmQiLCJGaWxlIiwiSGVyb0NhcmQiLCJIZXJvQ2FyZEFjdGlvbnMiLCJJbnB1dEhpbnQiLCJJbWFnZSIsIkltYWdlU1ZHIiwiSW52YWxpZENhcmQiLCJMYXlvdXQiLCJMb2NhbGl6YXRpb24iLCJNYXJrZG93biIsIk11bHRpbWVkaWFDYXJkIiwiT0F1dGhDYXJkIiwiU2FtcGxlUGFzc3dvcmRJbnB1dCIsIlByb2FjdGl2ZSIsIlJlY2VpcHRDYXJkIiwiU2FtcGxlQmFja2NoYW5uZWwiLCJTYW1wbGVHaXRIdWJSZXBvc2l0b3J5IiwiU2FtcGxlUmVkdXhNaWRkbGV3YXJlIiwiU2lnbkluQ2FyZCIsIlNsb3ciLCJTcGVlY2giLCJTdWdnZXN0ZWRBY3Rpb25zQ2FyZCIsIlRleHQiLCJUaHVtYm5haWxDYXJkIiwiVGltZXN0YW1wIiwiVHlwaW5nIiwiVW5rbm93biIsIlVwbG9hZCIsIlVzZXIiLCJWaWRlbyIsIlZpZGVvQ2FyZCIsIlhtbCIsIm1hcCIsImNvbW1hbmQiLCJSZWdFeHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7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QUNuRCxPQUFRLEdBQS9CLEVBQW1DLEdBQW5DLENBREosR0FFSW1ELE9BQU8sQ0FBQ25EO0FBTEgsRUF2RUUsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFjY2Vzc2liaWxpdHkgZnJvbSBcIi4vY29tbWFuZHMvQWNjZXNzaWJpbGl0eVwiO1xuaW1wb3J0ICogYXMgQWRhcHRpdmVDYXJkIGZyb20gXCIuL2NvbW1hbmRzL0FkYXB0aXZlQ2FyZFwiO1xuaW1wb3J0ICogYXMgQW5pbWF0aW9uQ2FyZCBmcm9tIFwiLi9jb21tYW5kcy9BbmltYXRpb25DYXJkXCI7XG4vLyBpbXBvcnQgKiBhcyBBbGwgZnJvbSBcIi4vY29tbWFuZHMvQWxsXCI7XG5pbXBvcnQgKiBhcyBBdWRpbyBmcm9tIFwiLi9jb21tYW5kcy9BdWRpb1wiO1xuaW1wb3J0ICogYXMgQXJhYmljQ2Fyb3VzZWwgZnJvbSBcIi4vY29tbWFuZHMvQXJhYmljQ2Fyb3VzZWxcIjtcbmltcG9ydCAqIGFzIEFyYWJpY0ZpbGUgZnJvbSBcIi4vY29tbWFuZHMvQXJhYmljRmlsZVwiO1xuaW1wb3J0ICogYXMgQXJhYmljTWFya2Rvd24gZnJvbSAnLi9jb21tYW5kcy9BcmFiaWNNYXJrZG93bic7XG5pbXBvcnQgKiBhcyBBdWRpb0NhcmQgZnJvbSBcIi4vY29tbWFuZHMvQXVkaW9DYXJkXCI7XG5pbXBvcnQgKiBhcyBDYXJkQWN0aW9ucyBmcm9tIFwiLi9jb21tYW5kcy9DYXJkQWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgQ2Fyb3VzZWwgZnJvbSBcIi4vY29tbWFuZHMvQ2Fyb3VzZWxcIjtcbmltcG9ydCAqIGFzIENoYW5uZWxEYXRhIGZyb20gXCIuL2NvbW1hbmRzL0NoYW5uZWxEYXRhXCI7XG5pbXBvcnQgKiBhcyBEb2N1bWVudERhdGFVUkkgZnJvbSBcIi4vY29tbWFuZHMvRG9jdW1lbnREYXRhVVJJXCI7XG5pbXBvcnQgKiBhcyBEb2N1bWVudFBsYWluIGZyb20gXCIuL2NvbW1hbmRzL0RvY3VtZW50UGxhaW5cIjtcbmltcG9ydCAqIGFzIERvY3VtZW50V29yZCBmcm9tIFwiLi9jb21tYW5kcy9Eb2N1bWVudFdvcmRcIjtcbmltcG9ydCAqIGFzIER1bXBBY3Rpdml0eSBmcm9tIFwiLi9jb21tYW5kcy9EdW1wQWN0aXZpdHlcIjtcbmltcG9ydCAqIGFzIEVjaG8gZnJvbSBcIi4vY29tbWFuZHMvRWNob1wiO1xuaW1wb3J0ICogYXMgRW1wdHlDYXJkIGZyb20gXCIuL2NvbW1hbmRzL0VtcHR5Q2FyZFwiO1xuaW1wb3J0ICogYXMgRmlsZSBmcm9tIFwiLi9jb21tYW5kcy9GaWxlXCI7XG5pbXBvcnQgKiBhcyBIZXJvQ2FyZCBmcm9tIFwiLi9jb21tYW5kcy9IZXJvQ2FyZFwiO1xuaW1wb3J0ICogYXMgSGVyb0NhcmRBY3Rpb25zIGZyb20gXCIuL2NvbW1hbmRzL0hlcm9DYXJkQWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgSW1hZ2UgZnJvbSBcIi4vY29tbWFuZHMvSW1hZ2VcIjtcbmltcG9ydCAqIGFzIEltYWdlU1ZHIGZyb20gXCIuL2NvbW1hbmRzL0ltYWdlU1ZHXCI7XG5pbXBvcnQgKiBhcyBJbnB1dEhpbnQgZnJvbSBcIi4vY29tbWFuZHMvSW5wdXRIaW50XCI7XG5pbXBvcnQgKiBhcyBJbnZhbGlkQ2FyZCBmcm9tIFwiLi9jb21tYW5kcy9JbnZhbGlkQ2FyZFwiO1xuaW1wb3J0ICogYXMgTGF5b3V0IGZyb20gXCIuL2NvbW1hbmRzL0xheW91dFwiO1xuaW1wb3J0ICogYXMgTG9jYWxpemF0aW9uIGZyb20gXCIuL2NvbW1hbmRzL0xvY2FsaXphdGlvblwiO1xuaW1wb3J0ICogYXMgTWFya2Rvd24gZnJvbSBcIi4vY29tbWFuZHMvTWFya2Rvd25cIjtcbmltcG9ydCAqIGFzIE11bHRpbWVkaWFDYXJkIGZyb20gXCIuL2NvbW1hbmRzL011bHRpbWVkaWFDYXJkXCI7XG5pbXBvcnQgKiBhcyBPQXV0aENhcmQgZnJvbSBcIi4vY29tbWFuZHMvT0F1dGhDYXJkMlwiO1xuaW1wb3J0ICogYXMgUHJvYWN0aXZlIGZyb20gXCIuL2NvbW1hbmRzL1Byb2FjdGl2ZVwiO1xuaW1wb3J0ICogYXMgUmVjZWlwdENhcmQgZnJvbSBcIi4vY29tbWFuZHMvUmVjZWlwdENhcmRcIjtcbmltcG9ydCAqIGFzIFNhbXBsZUJhY2tjaGFubmVsIGZyb20gXCIuL2NvbW1hbmRzL1NhbXBsZUJhY2tjaGFubmVsXCI7XG5pbXBvcnQgKiBhcyBTYW1wbGVHaXRIdWJSZXBvc2l0b3J5IGZyb20gXCIuL2NvbW1hbmRzL1NhbXBsZUdpdEh1YlJlcG9zaXRvcnlcIjtcbmltcG9ydCAqIGFzIFNhbXBsZVBhc3N3b3JkSW5wdXQgZnJvbSBcIi4vY29tbWFuZHMvU2FtcGxlUGFzc3dvcmRJbnB1dFwiO1xuaW1wb3J0ICogYXMgU2FtcGxlUmVkdXhNaWRkbGV3YXJlIGZyb20gXCIuL2NvbW1hbmRzL1NhbXBsZVJlZHV4TWlkZGxld2FyZVwiO1xuaW1wb3J0ICogYXMgU2lnbkluQ2FyZCBmcm9tIFwiLi9jb21tYW5kcy9TaWduSW5DYXJkXCI7XG5pbXBvcnQgKiBhcyBTbG93IGZyb20gXCIuL2NvbW1hbmRzL1Nsb3dcIjtcbmltcG9ydCAqIGFzIFNwZWVjaCBmcm9tIFwiLi9jb21tYW5kcy9TcGVlY2hcIjtcbmltcG9ydCAqIGFzIFN1Z2dlc3RlZEFjdGlvbnNDYXJkIGZyb20gXCIuL2NvbW1hbmRzL1N1Z2dlc3RlZEFjdGlvbnNDYXJkXCI7XG5pbXBvcnQgKiBhcyBUZXh0IGZyb20gXCIuL2NvbW1hbmRzL1RleHRcIjtcbmltcG9ydCAqIGFzIFRodW1ibmFpbENhcmQgZnJvbSBcIi4vY29tbWFuZHMvVGh1bWJuYWlsQ2FyZFwiO1xuaW1wb3J0ICogYXMgVGltZXN0YW1wIGZyb20gXCIuL2NvbW1hbmRzL1RpbWVzdGFtcFwiO1xuaW1wb3J0ICogYXMgVHlwaW5nIGZyb20gXCIuL2NvbW1hbmRzL1R5cGluZ1wiO1xuaW1wb3J0ICogYXMgVW5rbm93biBmcm9tIFwiLi9jb21tYW5kcy9Vbmtub3duXCI7XG5pbXBvcnQgKiBhcyBVcGxvYWQgZnJvbSBcIi4vY29tbWFuZHMvVXBsb2FkXCI7XG5pbXBvcnQgKiBhcyBVc2VyIGZyb20gXCIuL2NvbW1hbmRzL1VzZXJcIjtcbmltcG9ydCAqIGFzIFZpZGVvIGZyb20gXCIuL2NvbW1hbmRzL1ZpZGVvXCI7XG5pbXBvcnQgKiBhcyBWaWRlb0NhcmQgZnJvbSBcIi4vY29tbWFuZHMvVmlkZW9DYXJkXCI7XG5pbXBvcnQgKiBhcyBYbWwgZnJvbSBcIi4vY29tbWFuZHMvWG1sXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgeyBwYXR0ZXJuOiBcImFjY2Vzc2liaWxpdHlcIiwgLi4uQWNjZXNzaWJpbGl0eSB9LFxuICB7XG4gICAgcGF0dGVybjogL15jYXJkKFxccytbXFxkXFx3Ol0rKShcXHMrW1xcZFxcdzpdKyk/KFxccytbXFxkXFx3Ol0rKT8oXFxzK1tcXGRcXHc6XSspPyhcXHMrW1xcZFxcdzpdKyk/L2ksXG4gICAgLi4uQWRhcHRpdmVDYXJkXG4gIH0sXG4gIHtcbiAgICBwYXR0ZXJuOiAvXih3aGF0KS4qP3dlYXRoZXIvaSxcbiAgICAuLi5BZGFwdGl2ZUNhcmRcbiAgfSxcbiAge1xuICAgIHBhdHRlcm46IC9eYXJhYmljIGdyZWV0aW5nfF5hcmFiaWNncmVldGluZ3zYsdit2Kgg2KjYp9mE2YLYp9ix2KYvaSxcbiAgICAuLi5BZGFwdGl2ZUNhcmRcbiAgfSxcbiAgLy8geyBwYXR0ZXJuOiAvYWxsL2ksIC4uLkFsbCB9LFxuICB7IHBhdHRlcm46IFwiYW5pbWF0aW9uY2FyZFwiLCAuLi5BbmltYXRpb25DYXJkIH0sXG4gIHsgcGF0dGVybjogXCJhdWRpb1wiLCAuLi5BdWRpbyB9LFxuICB7IHBhdHRlcm46IC9eYXJhYmljIGNhcm91c2VsfNmK2LTYqtix2YkvaSwgLi4uQXJhYmljQ2Fyb3VzZWwgfSxcbiAgeyBwYXR0ZXJuOiAvXmFyYWJpYyBmaWxlJHzYqtit2YXZitmEL2ksIC4uLkFyYWJpY0ZpbGUgfSxcbiAgeyBwYXR0ZXJuOiAvYXJhYmljIG1hcmtkb3duJHzZhti1L2ksIC4uLkFyYWJpY01hcmtkb3dufSxcbiAgeyBwYXR0ZXJuOiBcImF1ZGlvY2FyZFwiLCAuLi5BdWRpb0NhcmQgfSxcbiAgeyBwYXR0ZXJuOiBcImNhcmQtYWN0aW9uc1wiLCAuLi5DYXJkQWN0aW9ucyB9LFxuICB7IHBhdHRlcm46IFwiY2Fyb3VzZWxcIiwgLi4uQ2Fyb3VzZWwgfSxcbiAgeyBwYXR0ZXJuOiBcImNoYW5uZWwtZGF0YVwiLCAuLi5DaGFubmVsRGF0YSB9LFxuICB7IHBhdHRlcm46IFwiZG9jdW1lbnQtZGF0YS11cmlcIiwgLi4uRG9jdW1lbnREYXRhVVJJIH0sXG4gIHsgcGF0dGVybjogXCJkb2N1bWVudC1wbGFpblwiLCAuLi5Eb2N1bWVudFBsYWluIH0sXG4gIHsgcGF0dGVybjogXCJkb2N1bWVudC13b3JkXCIsIC4uLkRvY3VtZW50V29yZCB9LFxuICB7IHBhdHRlcm46IFwiZHVtcC1hY3Rpdml0eVwiLCAuLi5EdW1wQWN0aXZpdHkgfSxcbiAgeyBwYXR0ZXJuOiAvXmVjaG9cXHMvaSwgLi4uRWNobyB9LFxuICB7IHBhdHRlcm46IFwiZW1wdHljYXJkXCIsIC4uLkVtcHR5Q2FyZCB9LFxuICB7IHBhdHRlcm46IFwiZmlsZVwiLCAuLi5GaWxlIH0sXG4gIHsgcGF0dGVybjogXCJoZXJvY2FyZFwiLCAuLi5IZXJvQ2FyZCB9LFxuICB7IHBhdHRlcm46IC9eaGVyb2NhcmQoXFxzKyhbXFxkXFx3XSspKSokL2ksIC4uLkhlcm9DYXJkIH0sXG4gIHsgcGF0dGVybjogL15oZXJvY2FyZGEvaSwgLi4uSGVyb0NhcmRBY3Rpb25zIH0sXG4gIHsgcGF0dGVybjogL15oaW50KFxccytbXFxkXFx3XSspPyhcXHMrW1xcZFxcd10rKT8vaSwgLi4uSW5wdXRIaW50IH0sXG4gIHsgcGF0dGVybjogXCJpbWFnZVwiLCAuLi5JbWFnZSB9LFxuICB7IHBhdHRlcm46IFwiaW1hZ2Utc3ZnXCIsIC4uLkltYWdlU1ZHIH0sXG4gIHsgcGF0dGVybjogL15pbnB1dFtcXC1cXHNdaGludChcXHMrW1xcZFxcd10rKT8oXFxzK1tcXGRcXHddKyk/L2ksIC4uLklucHV0SGludCB9LFxuICB7IHBhdHRlcm46IFwiaW52YWxpZGNhcmRcIiwgLi4uSW52YWxpZENhcmQgfSxcbiAgeyBwYXR0ZXJuOiAvXmxheW91dChcXHMrW1xcZFxcd10rKT8oXFxzK1tcXGRcXHddKyk/L2ksIC4uLkxheW91dCB9LFxuICB7IHBhdHRlcm46IFwibG9jYWxpemF0aW9uXCIsIC4uLkxvY2FsaXphdGlvbiB9LFxuICB7IHBhdHRlcm46IC9ebWFya2Rvd24oXFxzKyhbXFxkXFx3XSspKT8oXFxzKyhbXFxkXFx3XSspKT8kL2ksIC4uLk1hcmtkb3duIH0sXG4gIHsgcGF0dGVybjogXCJjb250ZW50LW11bHRpbWVkaWFcIiwgLi4uTXVsdGltZWRpYUNhcmQgfSxcbiAgeyBwYXR0ZXJuOiAvXihvYXV0aChcXHMrW1xcZFxcd10rKT98XFxkezZ9KSQvaSwgLi4uT0F1dGhDYXJkIH0sXG4gIHsgcGF0dGVybjogXCJzYW1wbGU6cGFzc3dvcmQtaW5wdXRcIiwgLi4uU2FtcGxlUGFzc3dvcmRJbnB1dCB9LFxuICB7IHBhdHRlcm46IC9ecHJvYWN0aXZlKFxccysoW1xcZFxcd10rKSkqP1xcLj8kL2l1LCAuLi5Qcm9hY3RpdmUgfSxcbiAgeyBwYXR0ZXJuOiBcInJlY2VpcHRjYXJkXCIsIC4uLlJlY2VpcHRDYXJkIH0sXG4gIHsgcGF0dGVybjogXCJzYW1wbGU6YmFja2NoYW5uZWxcIiwgLi4uU2FtcGxlQmFja2NoYW5uZWwgfSxcbiAgeyBwYXR0ZXJuOiBcInNhbXBsZTpnaXRodWItcmVwb3NpdG9yeVwiLCAuLi5TYW1wbGVHaXRIdWJSZXBvc2l0b3J5IH0sXG4gIHtcbiAgICBwYXR0ZXJuOiAvXnNhbXBsZTpyZWR1eC1taWRkbGV3YXJlKFxccytbXFxkXFx3XFwtXSspKiQvaSxcbiAgICAuLi5TYW1wbGVSZWR1eE1pZGRsZXdhcmVcbiAgfSxcbiAgeyBwYXR0ZXJuOiBcInNpZ25pblwiLCAuLi5TaWduSW5DYXJkIH0sXG4gIHsgcGF0dGVybjogL15zbG93KFxccytbXFxkXFx3XSspPy9pLCAuLi5TbG93IH0sXG4gIHsgcGF0dGVybjogXCJzcGVlY2hcIiwgLi4uU3BlZWNoIH0sXG4gIHsgcGF0dGVybjogL15zdWdnZXN0ZWRcXC1hY3Rpb25zKFxccytbXFxkXFx3XSspPy9pLCAuLi5TdWdnZXN0ZWRBY3Rpb25zQ2FyZCB9LFxuICB7IHBhdHRlcm46IC9UZWxsLio/c3RvcnkvaXUsIC4uLlNwZWVjaCB9LFxuICB7IHBhdHRlcm46IFwidGV4dFwiLCAuLi5UZXh0IH0sXG4gIHtcbiAgICBwYXR0ZXJuOiAvXnRodW1ibmFpbGNhcmQoXFxzKyhbXFxkXFx3XSspKT8oXFxzKyhbXFxkXFx3XSspKT8kL2ksXG4gICAgLi4uVGh1bWJuYWlsQ2FyZFxuICB9LFxuICB7IHBhdHRlcm46IC9edGltZXN0YW1wKFxccytbXFxkXFx3XSspPy9pLCAuLi5UaW1lc3RhbXAgfSxcbiAgeyBwYXR0ZXJuOiAvXnR5cGluZyhcXHMrW1xcZFxcd10rKT8vaSwgLi4uVHlwaW5nIH0sXG4gIHsgcGF0dGVybjogL151bmtub3duKFxccytbXFxkXFx3XSspPy9pLCAuLi5Vbmtub3duIH0sXG4gIHsgcGF0dGVybjogXCJ1cGxvYWRcIiwgLi4uVXBsb2FkIH0sXG4gIHsgcGF0dGVybjogL151c2VyKFxccytbXFxkXFx3XSspPy9pLCAuLi5Vc2VyIH0sXG4gIHsgcGF0dGVybjogL152aWRlbyhcXHMrKFtcXGRcXHddKykpPyQvaSwgLi4uVmlkZW8gfSxcbiAgeyBwYXR0ZXJuOiBcInZpZGVvY2FyZFwiLCAuLi5WaWRlb0NhcmQgfSxcbiAgeyBwYXR0ZXJuOiBcInhtbFwiLCAuLi5YbWwgfVxuXS5tYXAoY29tbWFuZCA9PiAoe1xuICAuLi5jb21tYW5kLFxuICBwYXR0ZXJuOlxuICAgIHR5cGVvZiBjb21tYW5kLnBhdHRlcm4gPT09IFwic3RyaW5nXCJcbiAgICAgID8gbmV3IFJlZ0V4cChgXiR7Y29tbWFuZC5wYXR0ZXJufSRgLCBcImlcIilcbiAgICAgIDogY29tbWFuZC5wYXR0ZXJuXG59KSk7XG4iXX0=