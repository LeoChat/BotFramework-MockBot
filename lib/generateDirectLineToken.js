"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _createUserID = _interopRequireDefault(require("./createUserID"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const {
  DIRECT_LINE_URL = 'https://directline.botframework.com/'
} = process.env;

async function _default(userID) {
  const {
    DIRECT_LINE_SECRET
  } = process.env;
  userID || (userID = await (0, _createUserID.default)());
  console.log(`Generating Direct Line token using secret "${DIRECT_LINE_SECRET.substr(0, 3)}...${DIRECT_LINE_SECRET.substr(-3)}" and user ID "${userID}"`);
  let cres;
  cres = await fetch(`${DIRECT_LINE_URL}v3/directline/tokens/generate`, {
    body: JSON.stringify({
      User: {
        Id: userID
      }
    }),
    headers: {
      authorization: `Bearer ${DIRECT_LINE_SECRET}`,
      'Content-Type': 'application/json'
    },
    method: 'POST'
  });

  if (cres.status === 200) {
    const json = await cres.json();

    if ('error' in json) {
      throw new Error(`Direct Line service responded ${JSON.stringify(json.error)} while generating new token`);
    } else {
      const {
        conversationId: conversationID
      } = json,
            otherJSON = _objectWithoutProperties(json, ["conversationId"]);

      return _objectSpread({}, otherJSON, {
        conversationID,
        userID
      });
    }
  } else {
    throw new Error(`Direct Line service returned ${cres.status} while generating new token`);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZW5lcmF0ZURpcmVjdExpbmVUb2tlbi5qcyJdLCJuYW1lcyI6WyJESVJFQ1RfTElORV9VUkwiLCJwcm9jZXNzIiwiZW52IiwidXNlcklEIiwiRElSRUNUX0xJTkVfU0VDUkVUIiwiY29uc29sZSIsImxvZyIsInN1YnN0ciIsImNyZXMiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiVXNlciIsIklkIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiRXJyb3IiLCJlcnJvciIsImNvbnZlcnNhdGlvbklkIiwiY29udmVyc2F0aW9uSUQiLCJvdGhlckpTT04iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNO0FBQUVBLEVBQUFBLGVBQWUsR0FBRztBQUFwQixJQUErREMsT0FBTyxDQUFDQyxHQUE3RTs7QUFFZSx3QkFBZ0JDLE1BQWhCLEVBQXdCO0FBQ3JDLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUF5QkgsT0FBTyxDQUFDQyxHQUF2QztBQUVBQyxFQUFBQSxNQUFNLEtBQUtBLE1BQU0sR0FBRyxNQUFNLDRCQUFwQixDQUFOO0FBRUFFLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLDhDQUE4Q0Ysa0JBQWtCLENBQUNHLE1BQW5CLENBQTBCLENBQTFCLEVBQTZCLENBQTdCLENBQWlDLE1BQU1ILGtCQUFrQixDQUFDRyxNQUFuQixDQUEwQixDQUFDLENBQTNCLENBQStCLGtCQUFrQkosTUFBUSxHQUEzSjtBQUVBLE1BQUlLLElBQUo7QUFFQUEsRUFBQUEsSUFBSSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFHVCxlQUFpQiwrQkFBdEIsRUFBc0Q7QUFDdEVVLElBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRUMsTUFBQUEsSUFBSSxFQUFFO0FBQUVDLFFBQUFBLEVBQUUsRUFBRVg7QUFBTjtBQUFSLEtBQWYsQ0FEZ0U7QUFFdEVZLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxhQUFhLEVBQUcsVUFBVVosa0JBQW9CLEVBRHZDO0FBRVAsc0JBQWdCO0FBRlQsS0FGNkQ7QUFNdEVhLElBQUFBLE1BQU0sRUFBRTtBQU44RCxHQUF0RCxDQUFsQjs7QUFTQSxNQUFJVCxJQUFJLENBQUNVLE1BQUwsS0FBZ0IsR0FBcEIsRUFBeUI7QUFDdkIsVUFBTUMsSUFBSSxHQUFHLE1BQU1YLElBQUksQ0FBQ1csSUFBTCxFQUFuQjs7QUFFQSxRQUFJLFdBQVdBLElBQWYsRUFBcUI7QUFDbkIsWUFBTSxJQUFJQyxLQUFKLENBQVcsaUNBQWlDVCxJQUFJLENBQUNDLFNBQUwsQ0FBZU8sSUFBSSxDQUFDRSxLQUFwQixDQUE0Qiw2QkFBeEUsQ0FBTjtBQUNELEtBRkQsTUFFTztBQUNMLFlBQU07QUFBRUMsUUFBQUEsY0FBYyxFQUFFQztBQUFsQixVQUFtREosSUFBekQ7QUFBQSxZQUEyQ0ssU0FBM0MsNEJBQXlETCxJQUF6RDs7QUFFQSwrQkFBWUssU0FBWjtBQUF1QkQsUUFBQUEsY0FBdkI7QUFBdUNwQixRQUFBQTtBQUF2QztBQUNEO0FBQ0YsR0FWRCxNQVVPO0FBQ0wsVUFBTSxJQUFJaUIsS0FBSixDQUFXLGdDQUFnQ1osSUFBSSxDQUFDVSxNQUFRLDZCQUF4RCxDQUFOO0FBQ0Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVVc2VySUQgZnJvbSAnLi9jcmVhdGVVc2VySUQnO1xuXG5jb25zdCB7IERJUkVDVF9MSU5FX1VSTCA9ICdodHRwczovL2RpcmVjdGxpbmUuYm90ZnJhbWV3b3JrLmNvbS8nIH0gPSBwcm9jZXNzLmVudlxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAodXNlcklEKSB7XG4gIGNvbnN0IHsgRElSRUNUX0xJTkVfU0VDUkVUIH0gPSBwcm9jZXNzLmVudjtcblxuICB1c2VySUQgfHwgKHVzZXJJRCA9IGF3YWl0IGNyZWF0ZVVzZXJJRCgpKTtcblxuICBjb25zb2xlLmxvZyhgR2VuZXJhdGluZyBEaXJlY3QgTGluZSB0b2tlbiB1c2luZyBzZWNyZXQgXCIkeyBESVJFQ1RfTElORV9TRUNSRVQuc3Vic3RyKDAsIDMpIH0uLi4keyBESVJFQ1RfTElORV9TRUNSRVQuc3Vic3RyKC0zKSB9XCIgYW5kIHVzZXIgSUQgXCIkeyB1c2VySUQgfVwiYCk7XG5cbiAgbGV0IGNyZXM7XG5cbiAgY3JlcyA9IGF3YWl0IGZldGNoKGAkeyBESVJFQ1RfTElORV9VUkwgfXYzL2RpcmVjdGxpbmUvdG9rZW5zL2dlbmVyYXRlYCwge1xuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgVXNlcjogeyBJZDogdXNlcklEIH0gfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAkeyBESVJFQ1RfTElORV9TRUNSRVQgfWAsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJ1xuICB9KTtcblxuICBpZiAoY3Jlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBjcmVzLmpzb24oKTtcblxuICAgIGlmICgnZXJyb3InIGluIGpzb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRGlyZWN0IExpbmUgc2VydmljZSByZXNwb25kZWQgJHsgSlNPTi5zdHJpbmdpZnkoanNvbi5lcnJvcikgfSB3aGlsZSBnZW5lcmF0aW5nIG5ldyB0b2tlbmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IGNvbnZlcnNhdGlvbklkOiBjb252ZXJzYXRpb25JRCwgLi4ub3RoZXJKU09OIH0gPSBqc29uO1xuXG4gICAgICByZXR1cm4geyAuLi5vdGhlckpTT04sIGNvbnZlcnNhdGlvbklELCB1c2VySUQgfTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBEaXJlY3QgTGluZSBzZXJ2aWNlIHJldHVybmVkICR7IGNyZXMuc3RhdHVzIH0gd2hpbGUgZ2VuZXJhdGluZyBuZXcgdG9rZW5gKTtcbiAgfVxufVxuIl19