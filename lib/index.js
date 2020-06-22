"use strict";

require("@babel/polyfill");

var _config = _interopRequireDefault(require("./config"));

var _botbuilder = require("botbuilder");

var _botframeworkConnector = require("botframework-connector");

var _path = require("path");

var _autoResetEvent = _interopRequireDefault(require("auto-reset-event"));

var _delay = _interopRequireDefault(require("delay"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _prettyMs = _interopRequireDefault(require("pretty-ms"));

var _restify = _interopRequireDefault(require("restify"));

var _serveHandler = _interopRequireDefault(require("serve-handler"));

var OAuthCard = _interopRequireWildcard(require("./commands/OAuthCard2"));

var _commands = _interopRequireDefault(require("./commands"));

var _reduceMap = _interopRequireDefault(require("./reduceMap"));

var _generateDirectLineToken = _interopRequireDefault(require("./generateDirectLineToken"));

var _renewDirectLineToken = _interopRequireDefault(require("./renewDirectLineToken"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _config.default)();
const LOG_LENGTH = 20; // Create server

const server = _restify.default.createServer();

server.listen(process.env.PORT, () => {
  console.log(`${server.name} listening to ${server.url}`);
});
server.use(_restify.default.plugins.queryParser());

_botframeworkConnector.MicrosoftAppCredentials.trustServiceUrl('https://api.scratch.botframework.com');

_botframeworkConnector.MicrosoftAppCredentials.trustServiceUrl('https://state.scratch.botframework.com');

_botframeworkConnector.MicrosoftAppCredentials.trustServiceUrl('https://token.scratch.botframework.com');

_botframeworkConnector.MicrosoftAppCredentials.trustServiceUrl('https://api.ppe.botframework.com');

_botframeworkConnector.MicrosoftAppCredentials.trustServiceUrl('https://state.ppe.botframework.com');

_botframeworkConnector.MicrosoftAppCredentials.trustServiceUrl('https://token.ppe.botframework.com'); // Create adapter


const adapter = new _botbuilder.BotFrameworkAdapter({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD,
  oAuthEndpoint: process.env.OAUTH_ENDPOINT,
  openIdMetadata: process.env.OPENID_METADATA
}); // const storage = new MemoryStorage();
// const convoState = new ConversationState(storage);
// const userState = new UserState(storage);
// adapter.use(new BotStateSet(convoState, userState));

let numActivities = 0;
let echoTypingConversations = new Set();
const up = Date.now();
const logs = [];
server.get('/', async (_, res) => {
  const message = `MockBot v4 is up since ${(0, _prettyMs.default)(Date.now() - up)} ago, processed ${numActivities} activities.`;
  const separator = new Array(message.length).fill('-').join('');
  res.set('Content-Type', 'text/plain');
  res.send(JSON.stringify({
    human: [separator, message, separator],
    computer: {
      numActivities,
      up
    }
  }, null, 2));
});
server.get('/logs', async (req, res) => {
  res.set('Content-Type', 'text/plain');

  if (req.query.format === 'simple') {
    res.send(JSON.stringify({
      logs: logs.map(log => {
        const {
          activity: {
            name,
            text,
            type,
            value
          }
        } = log;

        switch (type) {
          case 'event':
            return _objectSpread({}, log, {
              activity: {
                type,
                name,
                value
              }
            });

          case 'message':
            return _objectSpread({}, log, {
              activity: {
                type,
                text
              }
            });

          default:
            return _objectSpread({}, log, {
              activity: {
                type
              }
            });
        }
      })
    }, null, 2));
  } else {
    res.send(JSON.stringify({
      logs
    }, null, 2));
  }
});
server.get('/health.txt', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('OK');
});

function trustedOrigin(origin) {
  return /^https?:\/\/localhost([\/:]|$)/.test(origin) || /^https?:\/\/192\.168\.(0|1)\.\d{1,3}([\/:]|$)/.test(origin) || origin === 'null' // This is for file://index.html
  // This is for Docker tests, dotless domain
  || /^https?:\/\/[\d\w]+([\/:]|$)/.test(origin) || /^https?:\/\/[\d\w]+\.ngrok\.io(\/|$)/.test(origin) || /^https?:\/\/webchat-playground\.azurewebsites\.net(\/|$)/.test(origin) || /^https?:\/\/([\d\w]+\.)+botframework\.com(\/|$)/.test(origin) || /^https:\/\/compulim\.github\.io(\/|$)/.test(origin) || /^https:\/\/corinagum\.github\.io(\/|$)/.test(origin) || /^https:\/\/microsoft\.github\.io(\/|$)/.test(origin) || /^https:\/\/bfxwebchatfullbundle\.azurewebsites\.net(\/|$)/.test(origin) || /^https:\/\/webchattest\.blob\.core\.windows\.net(\/|$)/.test(origin) // This is CodePen
  || /^https:\/\/cdpn\.io(\/|$)/.test(origin) || /^https:\/\/s\.codepen\.io(\/|$)/.test(origin);
}

server.post('/directline/token', async (req, res) => {
  const origin = req.header('origin');

  if (!trustedOrigin(origin)) {
    return res.send(403, 'not trusted origin');
  }

  const {
    token
  } = req.query;

  try {
    if (token) {
      res.send((await (0, _renewDirectLineToken.default)(token)), {
        'Access-Control-Allow-Origin': '*'
      });
    } else {
      res.send((await (0, _generateDirectLineToken.default)()), {
        'Access-Control-Allow-Origin': '*'
      });
    }
  } catch (err) {
    res.send(500, err.message, {
      'Access-Control-Allow-Origin': '*'
    });
  }

  const {
    DIRECT_LINE_SECRET
  } = process.env;

  if (token) {
    console.log(`Refreshing Direct Line token for ${origin}`);
  } else {
    console.log(`Requesting Direct Line token for ${origin} using secret "${DIRECT_LINE_SECRET.substr(0, 3)}...${DIRECT_LINE_SECRET.substr(-3)}"`);
  }
});
server.post('/bingspeech/token', async (req, res) => {
  const origin = req.header('origin');

  if (!trustedOrigin(origin)) {
    return res.send(403, 'not trusted origin');
  }

  console.log(`Requesting speech token for ${origin}`);
  const cres = await (0, _nodeFetch.default)('https://api.cognitive.microsoft.com/sts/v1.0/issueToken', {
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.BING_SPEECH_SUBSCRIPTION_KEY
    },
    method: 'POST'
  });

  if (cres.status === 200) {
    res.send({
      token: await cres.text()
    }, {
      'Access-Control-Allow-Origin': '*'
    });
  } else {
    res.send(500, {
      'Access-Control-Allow-Origin': '*'
    });
  }
});
server.post('/speechservices/token', async (req, res) => {
  const origin = req.header('origin');

  if (!trustedOrigin(origin)) {
    return res.send(403, 'not trusted origin');
  }

  console.log(`Requesting speech token for ${origin}`);
  const cres = await (0, _nodeFetch.default)(`https://${process.env.SPEECH_SERVICES_REGION}.api.cognitive.microsoft.com/sts/v1.0/issueToken`, {
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.SPEECH_SERVICES_SUBSCRIPTION_KEY
    },
    method: 'POST'
  });

  if (cres.status === 200) {
    const authorizationToken = await cres.text();
    res.send({
      authorizationToken,
      region: process.env.SPEECH_SERVICES_REGION,
      token: authorizationToken
    }, {
      'Access-Control-Allow-Origin': '*'
    });
  } else {
    res.send(500, {
      'Access-Control-Allow-Origin': '*'
    });
  }
});

function objectValues(map) {
  return Object.keys(map).map(x => map[x]);
}

let lastGetVersionAt = 0;
let lastGetVersionResponse = null;
const VERSION_REQUEST_VALID_FOR = 60000;
server.get('/versions/botframework-webchat', async (req, res) => {
  const now = Date.now();

  if (now - lastGetVersionAt > VERSION_REQUEST_VALID_FOR) {
    let json;

    try {
      const res = await (0, _nodeFetch.default)('https://registry.npmjs.org/botframework-webchat/', {
        headers: {
          accept: 'application/json'
        }
      });
      json = await res.json();
    } catch (err) {
      if (err) {
        return alert('Failed to fetch version list from NPMJS. Please check network trace for details.');
      }
    }

    const {
      time,
      versions
    } = json;
    lastGetVersionResponse = {
      refresh: new Date(now).toISOString(),
      versions: objectValues(versions).sort((x, y) => {
        x = new Date(time[x.version]);
        y = new Date(time[y.version]);
        return x > y ? -1 : x < y ? 1 : 0;
      }).map(({
        version
      }) => ({
        time: time[version],
        version: version
      }))
    };
    lastGetVersionAt = now;
  }

  res.send(lastGetVersionResponse, trustedOrigin(req.header('origin')) ? {
    'Access-Control-Allow-Origin': '*'
  } : {});
});
const acquireSlowQueue = (0, _autoResetEvent.default)();
server.get('/public/*', async (req, res) => {
  if ('slow' in req.query) {
    res.noCache();
    const release = await acquireSlowQueue();
    await (0, _delay.default)(1000);
    release();
  }

  await (0, _serveHandler.default)(req, res, {
    path: (0, _path.join)(__dirname, './public')
  });
}); // Listen for incoming requests

server.post('/api/messages', (req, res) => {
  adapter.processActivity(req, res, async context => {
    const sendActivity = context.sendActivity.bind(context);
    logs.push({
      direction: 'incoming',
      now: new Date().toISOString(),
      activity: context.activity
    });

    context.sendActivity = (...args) => {
      let activity = args[0];

      if (typeof activity === 'string') {
        activity = {
          type: 'message',
          text: activity
        };
      }

      logs.push({
        direction: 'outgoing',
        now: new Date().toISOString(),
        activity
      });
      return sendActivity(...args);
    };

    logs.splice(0, Math.max(0, logs.length - LOG_LENGTH));
    numActivities++;

    if (context.activity.type === 'event') {
      if (context.activity.name === 'tokens/response') {
        // Special handling for OAuth token exchange
        // This event is sent thru the non-magic code flow
        await OAuthCard.processor(context);
      } else if (context.activity.name === 'webchat/join') {
        await context.sendActivity(`Got \`webchat/join\` event, your language is \`${(context.activity.value || {}).language}\``);
      } else if (context.activity.name === 'webchat/ping') {
        await context.sendActivity({
          type: 'event',
          name: 'webchat/pong',
          value: context.activity.value
        });
      }
    } else if (context.activity.type === 'messageReaction') {
      const {
        activity: {
          reactionsAdded = [],
          reactionsRemoved = []
        }
      } = context;
      const attachments = [...reactionsAdded, ...reactionsRemoved].map(reaction => ({
        content: `\`\`\`\n${JSON.stringify(reaction, null, 2)}\n\`\`\``,
        contentType: 'text/markdown'
      }));
      await context.sendActivity({
        text: 'You posted',
        type: 'message',
        attachments
      });
    } else if (context.activity.type === 'message') {
      const {
        activity: {
          attachments = [],
          text
        }
      } = context;
      const cleanedText = (text || '').trim().replace(/\.$/, '');

      const command = _commands.default.find(({
        pattern
      }) => pattern.test(cleanedText));

      if (command) {
        const {
          mode,
          pattern,
          processor
        } = command;
        const match = pattern.exec(cleanedText);

        if (mode === 'line') {
          await processor(context, cleanedText);
        } else {
          await processor(context, ...[].slice.call(match, 1));
        }
      } else if (/^echo-typing$/i.test(cleanedText)) {
        // We should "echoTyping" in a per-conversation basis
        const {
          id: conversationID
        } = context.activity.conversation;

        if (echoTypingConversations.has(conversationID)) {
          echoTypingConversations.delete(conversationID);
          await context.sendActivity('Will stop echoing `"typing"` event');
        } else {
          echoTypingConversations.add(conversationID);
          await context.sendActivity('Will echo `"typing"` event');
        }
      } else if (/^help$/i.test(cleanedText)) {
        const attachments = _commands.default.map(({
          help,
          name
        }) => {
          return {
            contentType: 'application/vnd.microsoft.card.thumbnail',
            content: {
              buttons: (0, _reduceMap.default)(help(), (result, title, value) => [...result, {
                title,
                type: 'imBack',
                value
              }], []).sort(({
                title: x
              }, {
                title: y
              }) => x > y ? 1 : x < y ? -1 : 0),
              title: name
            }
          };
        });

        await context.sendActivity({
          attachments: attachments.sort(({
            content: {
              title: x
            }
          }, {
            content: {
              title: y
            }
          }) => x > y ? 1 : x < y ? -1 : 0)
        });
      } else if (/^help simple$/i.test(cleanedText)) {
        await context.sendActivity(`### Commands\r\n\r\n${_commands.default.map(({
          pattern
        }) => `- \`${pattern.source}\``).sort().join('\r\n')}`);
      } else if (attachments.length) {
        const {
          processor
        } = _commands.default.find(({
          pattern
        }) => pattern.test('upload'));

        await processor(context, attachments);
      } else if (context.activity.value) {
        const {
          text,
          value
        } = context.activity;
        const attachments = [];
        text && attachments.push({
          content: text,
          contentType: 'text/plain'
        });
        value && attachments.push({
          content: `\`\`\`\n${JSON.stringify(value, null, 2)}\n\`\`\``,
          contentType: 'text/markdown'
        });
        await context.sendActivity({
          text: 'You posted',
          type: 'message',
          attachments
        });
      } else {
        await context.sendActivity({
          speak: `Unknown command: I don't know ${cleanedText}. You can say "help" to learn more.`,
          text: `Unknown command: \`${cleanedText}\`.\r\n\r\nType \`help\` to learn more.`,
          type: 'message'
        });
      }
    } else if (context.activity.type === 'typing' && echoTypingConversations.has(context.activity.conversation.id)) {
      await context.sendActivity({
        type: 'typing'
      });
    }
  });
});
let pregeneratedTokens = [];
const PREGENERATE_TOKEN_INTERVAL = 60000;

function setIntervalAndImmediate(fn, ms) {
  setImmediate(fn);
  return setInterval(fn, ms);
}

setIntervalAndImmediate(async () => {
  const now = Date.now();
  const {
    conversationId: conversationID,
    expires_in: expiresIn,
    token
  } = await (0, _generateDirectLineToken.default)();
  const expiresAt = now + expiresIn * 1000;
  pregeneratedTokens.push({
    conversationID,
    expiresIn,
    expiresAt,
    token
  });
  pregeneratedTokens = pregeneratedTokens.filter(token => token.expiresAt > Date.now() - PREGENERATE_TOKEN_INTERVAL);
}, PREGENERATE_TOKEN_INTERVAL);
server.get('/directline/tokens', async (_, res) => {
  res.set('Content-Type', 'text/plain');
  res.set('Cache-Control', 'no-cache');
  res.send(JSON.stringify({
    tokens: pregeneratedTokens.map(token => {
      const message1 = `This token will expires at ${new Date(token.expiresAt).toISOString()}`;
      const message2 = Date.now() > token.expiresAt ? 'And is expired.' : `Or in about ${~~((token.expiresAt - Date.now()) / 1000)} seconds`;
      const separator = new Array(Math.max(message1.length, message2.length)).fill('-').join('');
      return _objectSpread({
        human: [separator, message1, message2, separator]
      }, token);
    })
  }, null, 2));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJMT0dfTEVOR1RIIiwic2VydmVyIiwicmVzdGlmeSIsImNyZWF0ZVNlcnZlciIsImxpc3RlbiIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJ1cmwiLCJ1c2UiLCJwbHVnaW5zIiwicXVlcnlQYXJzZXIiLCJNaWNyb3NvZnRBcHBDcmVkZW50aWFscyIsInRydXN0U2VydmljZVVybCIsImFkYXB0ZXIiLCJCb3RGcmFtZXdvcmtBZGFwdGVyIiwiYXBwSWQiLCJNSUNST1NPRlRfQVBQX0lEIiwiYXBwUGFzc3dvcmQiLCJNSUNST1NPRlRfQVBQX1BBU1NXT1JEIiwib0F1dGhFbmRwb2ludCIsIk9BVVRIX0VORFBPSU5UIiwib3BlbklkTWV0YWRhdGEiLCJPUEVOSURfTUVUQURBVEEiLCJudW1BY3Rpdml0aWVzIiwiZWNob1R5cGluZ0NvbnZlcnNhdGlvbnMiLCJTZXQiLCJ1cCIsIkRhdGUiLCJub3ciLCJsb2dzIiwiZ2V0IiwiXyIsInJlcyIsIm1lc3NhZ2UiLCJzZXBhcmF0b3IiLCJBcnJheSIsImxlbmd0aCIsImZpbGwiLCJqb2luIiwic2V0Iiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJodW1hbiIsImNvbXB1dGVyIiwicmVxIiwicXVlcnkiLCJmb3JtYXQiLCJtYXAiLCJhY3Rpdml0eSIsInRleHQiLCJ0eXBlIiwidmFsdWUiLCJ0cnVzdGVkT3JpZ2luIiwib3JpZ2luIiwidGVzdCIsInBvc3QiLCJoZWFkZXIiLCJ0b2tlbiIsImVyciIsIkRJUkVDVF9MSU5FX1NFQ1JFVCIsInN1YnN0ciIsImNyZXMiLCJoZWFkZXJzIiwiQklOR19TUEVFQ0hfU1VCU0NSSVBUSU9OX0tFWSIsIm1ldGhvZCIsInN0YXR1cyIsIlNQRUVDSF9TRVJWSUNFU19SRUdJT04iLCJTUEVFQ0hfU0VSVklDRVNfU1VCU0NSSVBUSU9OX0tFWSIsImF1dGhvcml6YXRpb25Ub2tlbiIsInJlZ2lvbiIsIm9iamVjdFZhbHVlcyIsIk9iamVjdCIsImtleXMiLCJ4IiwibGFzdEdldFZlcnNpb25BdCIsImxhc3RHZXRWZXJzaW9uUmVzcG9uc2UiLCJWRVJTSU9OX1JFUVVFU1RfVkFMSURfRk9SIiwianNvbiIsImFjY2VwdCIsImFsZXJ0IiwidGltZSIsInZlcnNpb25zIiwicmVmcmVzaCIsInRvSVNPU3RyaW5nIiwic29ydCIsInkiLCJ2ZXJzaW9uIiwiYWNxdWlyZVNsb3dRdWV1ZSIsIm5vQ2FjaGUiLCJyZWxlYXNlIiwicGF0aCIsIl9fZGlybmFtZSIsInByb2Nlc3NBY3Rpdml0eSIsImNvbnRleHQiLCJzZW5kQWN0aXZpdHkiLCJiaW5kIiwicHVzaCIsImRpcmVjdGlvbiIsImFyZ3MiLCJzcGxpY2UiLCJNYXRoIiwibWF4IiwiT0F1dGhDYXJkIiwicHJvY2Vzc29yIiwibGFuZ3VhZ2UiLCJyZWFjdGlvbnNBZGRlZCIsInJlYWN0aW9uc1JlbW92ZWQiLCJhdHRhY2htZW50cyIsInJlYWN0aW9uIiwiY29udGVudCIsImNvbnRlbnRUeXBlIiwiY2xlYW5lZFRleHQiLCJ0cmltIiwicmVwbGFjZSIsImNvbW1hbmQiLCJjb21tYW5kcyIsImZpbmQiLCJwYXR0ZXJuIiwibW9kZSIsIm1hdGNoIiwiZXhlYyIsInNsaWNlIiwiY2FsbCIsImlkIiwiY29udmVyc2F0aW9uSUQiLCJjb252ZXJzYXRpb24iLCJoYXMiLCJkZWxldGUiLCJhZGQiLCJoZWxwIiwiYnV0dG9ucyIsInJlc3VsdCIsInRpdGxlIiwic291cmNlIiwic3BlYWsiLCJwcmVnZW5lcmF0ZWRUb2tlbnMiLCJQUkVHRU5FUkFURV9UT0tFTl9JTlRFUlZBTCIsInNldEludGVydmFsQW5kSW1tZWRpYXRlIiwiZm4iLCJtcyIsInNldEltbWVkaWF0ZSIsInNldEludGVydmFsIiwiY29udmVyc2F0aW9uSWQiLCJleHBpcmVzX2luIiwiZXhwaXJlc0luIiwiZXhwaXJlc0F0IiwiZmlsdGVyIiwidG9rZW5zIiwibWVzc2FnZTEiLCJtZXNzYWdlMiJdLCJt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LEdBQUczSCxJQUFJLENBQUNDLEdBQUwsS0FBYThCLEtBQUssQ0FBQ3dGLFNBQW5CLEdBQStCLGlCQUEvQixHQUFvRCxlQUFlLENBQUMsRUFBRSxDQUFDeEYsS0FBSyxDQUFDd0YsU0FBTixHQUFrQnZILElBQUksQ0FBQ0MsR0FBTCxFQUFuQixJQUFpQyxJQUFuQyxDQUEwQyxVQUEvSDtBQUNBLFlBQU1NLFNBQVMsR0FBRyxJQUFJQyxLQUFKLENBQVVrRSxJQUFJLENBQUNDLEdBQUwsQ0FBUytDLFFBQVEsQ0FBQ2pILE1BQWxCLEVBQTBCa0gsUUFBUSxDQUFDbEgsTUFBbkMsQ0FBVixFQUFzREMsSUFBdEQsQ0FBMkQsR0FBM0QsRUFBZ0VDLElBQWhFLENBQXFFLEVBQXJFLENBQWxCO0FBRUE7QUFDRUssUUFBQUEsS0FBSyxFQUFFLENBQ0xULFNBREssRUFFTG1ILFFBRkssRUFHTEMsUUFISyxFQUlMcEgsU0FKSztBQURULFNBT0t3QixLQVBMO0FBU0QsS0FkTztBQURjLEdBQWYsRUFnQk4sSUFoQk0sRUFnQkEsQ0FoQkEsQ0FBVDtBQWlCRCxDQXJCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGJhYmVsL3BvbHlmaWxsJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG5jb25maWcoKTtcblxuaW1wb3J0IHsgQm90RnJhbWV3b3JrQWRhcHRlciwgQm90U3RhdGVTZXQsIENvbnZlcnNhdGlvblN0YXRlLCBNZW1vcnlTdG9yYWdlLCBVc2VyU3RhdGUgfSBmcm9tICdib3RidWlsZGVyJztcbmltcG9ydCB7IE1pY3Jvc29mdEFwcENyZWRlbnRpYWxzIH0gZnJvbSAnYm90ZnJhbWV3b3JrLWNvbm5lY3Rvcic7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgY3JlYXRlQXV0b1Jlc2V0RXZlbnQgZnJvbSAnYXV0by1yZXNldC1ldmVudCc7XG5pbXBvcnQgZGVsYXkgZnJvbSAnZGVsYXknO1xuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xuaW1wb3J0IHByZXR0eU1zIGZyb20gJ3ByZXR0eS1tcyc7XG5pbXBvcnQgcmVzdGlmeSBmcm9tICdyZXN0aWZ5JztcbmltcG9ydCBzZXJ2ZUhhbmRsZXIgZnJvbSAnc2VydmUtaGFuZGxlcic7XG5cbmltcG9ydCAqIGFzIE9BdXRoQ2FyZCBmcm9tICcuL2NvbW1hbmRzL09BdXRoQ2FyZDInO1xuaW1wb3J0IGNvbW1hbmRzIGZyb20gJy4vY29tbWFuZHMnO1xuaW1wb3J0IHJlZHVjZU1hcCBmcm9tICcuL3JlZHVjZU1hcCc7XG5cbmltcG9ydCBnZW5lcmF0ZURpcmVjdExpbmVUb2tlbiBmcm9tICcuL2dlbmVyYXRlRGlyZWN0TGluZVRva2VuJztcbmltcG9ydCByZW5ld0RpcmVjdExpbmVUb2tlbiBmcm9tICcuL3JlbmV3RGlyZWN0TGluZVRva2VuJztcblxuY29uc3QgTE9HX0xFTkdUSCA9IDIwO1xuXG4vLyBDcmVhdGUgc2VydmVyXG5jb25zdCBzZXJ2ZXIgPSByZXN0aWZ5LmNyZWF0ZVNlcnZlcigpO1xuXG5zZXJ2ZXIubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYCR7IHNlcnZlci5uYW1lIH0gbGlzdGVuaW5nIHRvICR7IHNlcnZlci51cmwgfWApO1xufSk7XG5cbnNlcnZlci51c2UocmVzdGlmeS5wbHVnaW5zLnF1ZXJ5UGFyc2VyKCkpO1xuXG5NaWNyb3NvZnRBcHBDcmVkZW50aWFscy50cnVzdFNlcnZpY2VVcmwoJ2h0dHBzOi8vYXBpLnNjcmF0Y2guYm90ZnJhbWV3b3JrLmNvbScpO1xuTWljcm9zb2Z0QXBwQ3JlZGVudGlhbHMudHJ1c3RTZXJ2aWNlVXJsKCdodHRwczovL3N0YXRlLnNjcmF0Y2guYm90ZnJhbWV3b3JrLmNvbScpO1xuTWljcm9zb2Z0QXBwQ3JlZGVudGlhbHMudHJ1c3RTZXJ2aWNlVXJsKCdodHRwczovL3Rva2VuLnNjcmF0Y2guYm90ZnJhbWV3b3JrLmNvbScpO1xuXG5NaWNyb3NvZnRBcHBDcmVkZW50aWFscy50cnVzdFNlcnZpY2VVcmwoJ2h0dHBzOi8vYXBpLnBwZS5ib3RmcmFtZXdvcmsuY29tJyk7XG5NaWNyb3NvZnRBcHBDcmVkZW50aWFscy50cnVzdFNlcnZpY2VVcmwoJ2h0dHBzOi8vc3RhdGUucHBlLmJvdGZyYW1ld29yay5jb20nKTtcbk1pY3Jvc29mdEFwcENyZWRlbnRpYWxzLnRydXN0U2VydmljZVVybCgnaHR0cHM6Ly90b2tlbi5wcGUuYm90ZnJhbWV3b3JrLmNvbScpO1xuXG4vLyBDcmVhdGUgYWRhcHRlclxuY29uc3QgYWRhcHRlciA9IG5ldyBCb3RGcmFtZXdvcmtBZGFwdGVyKHtcbiAgYXBwSWQ6IHByb2Nlc3MuZW52Lk1JQ1JPU09GVF9BUFBfSUQsXG4gIGFwcFBhc3N3b3JkOiBwcm9jZXNzLmVudi5NSUNST1NPRlRfQVBQX1BBU1NXT1JELFxuICBvQXV0aEVuZHBvaW50OiBwcm9jZXNzLmVudi5PQVVUSF9FTkRQT0lOVCxcbiAgb3BlbklkTWV0YWRhdGE6IHByb2Nlc3MuZW52Lk9QRU5JRF9NRVRBREFUQVxufSk7XG5cbi8vIGNvbnN0IHN0b3JhZ2UgPSBuZXcgTWVtb3J5U3RvcmFnZSgpO1xuLy8gY29uc3QgY29udm9TdGF0ZSA9IG5ldyBDb252ZXJzYXRpb25TdGF0ZShzdG9yYWdlKTtcbi8vIGNvbnN0IHVzZXJTdGF0ZSA9IG5ldyBVc2VyU3RhdGUoc3RvcmFnZSk7XG5cbi8vIGFkYXB0ZXIudXNlKG5ldyBCb3RTdGF0ZVNldChjb252b1N0YXRlLCB1c2VyU3RhdGUpKTtcblxubGV0IG51bUFjdGl2aXRpZXMgPSAwO1xubGV0IGVjaG9UeXBpbmdDb252ZXJzYXRpb25zID0gbmV3IFNldCgpO1xuY29uc3QgdXAgPSBEYXRlLm5vdygpO1xuY29uc3QgbG9ncyA9IFtdO1xuXG5zZXJ2ZXIuZ2V0KCcvJywgYXN5bmMgKF8sIHJlcykgPT4ge1xuICBjb25zdCBtZXNzYWdlID0gYE1vY2tCb3QgdjQgaXMgdXAgc2luY2UgJHsgcHJldHR5TXMoRGF0ZS5ub3coKSAtIHVwKSB9IGFnbywgcHJvY2Vzc2VkICR7IG51bUFjdGl2aXRpZXMgfSBhY3Rpdml0aWVzLmA7XG4gIGNvbnN0IHNlcGFyYXRvciA9IG5ldyBBcnJheShtZXNzYWdlLmxlbmd0aCkuZmlsbCgnLScpLmpvaW4oJycpO1xuXG4gIHJlcy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3BsYWluJyk7XG4gIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHtcbiAgICBodW1hbjogW1xuICAgICAgc2VwYXJhdG9yLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIHNlcGFyYXRvclxuICAgIF0sXG4gICAgY29tcHV0ZXI6IHtcbiAgICAgIG51bUFjdGl2aXRpZXMsXG4gICAgICB1cFxuICAgIH1cbiAgfSwgbnVsbCwgMikpO1xufSk7XG5cbnNlcnZlci5nZXQoJy9sb2dzJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3BsYWluJyk7XG5cbiAgaWYgKHJlcS5xdWVyeS5mb3JtYXQgPT09ICdzaW1wbGUnKSB7XG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbG9nczogbG9ncy5tYXAobG9nID0+IHtcbiAgICAgICAgY29uc3QgeyBhY3Rpdml0eTogeyBuYW1lLCB0ZXh0LCB0eXBlLCB2YWx1ZSB9IH0gPSBsb2c7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSAnZXZlbnQnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4ubG9nLFxuICAgICAgICAgICAgICBhY3Rpdml0eTogeyB0eXBlLCBuYW1lLCB2YWx1ZSB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgY2FzZSAnbWVzc2FnZSc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5sb2csXG4gICAgICAgICAgICAgIGFjdGl2aXR5OiB7IHR5cGUsIHRleHQgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5sb2csXG4gICAgICAgICAgICAgIGFjdGl2aXR5OiB7IHR5cGUgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LCBudWxsLCAyKSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbG9nc1xuICAgIH0sIG51bGwsIDIpKTtcbiAgfVxufSk7XG5cbnNlcnZlci5nZXQoJy9oZWFsdGgudHh0JywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3BsYWluJyk7XG4gIHJlcy5zZW5kKCdPSycpO1xufSk7XG5cbmZ1bmN0aW9uIHRydXN0ZWRPcmlnaW4ob3JpZ2luKSB7XG4gIHJldHVybiAoXG4gICAgL15odHRwcz86XFwvXFwvbG9jYWxob3N0KFtcXC86XXwkKS8udGVzdChvcmlnaW4pXG4gICAgfHwgL15odHRwcz86XFwvXFwvMTkyXFwuMTY4XFwuKDB8MSlcXC5cXGR7MSwzfShbXFwvOl18JCkvLnRlc3Qob3JpZ2luKVxuICAgIHx8IG9yaWdpbiA9PT0gJ251bGwnIC8vIFRoaXMgaXMgZm9yIGZpbGU6Ly9pbmRleC5odG1sXG5cbiAgICAvLyBUaGlzIGlzIGZvciBEb2NrZXIgdGVzdHMsIGRvdGxlc3MgZG9tYWluXG4gICAgfHwgL15odHRwcz86XFwvXFwvW1xcZFxcd10rKFtcXC86XXwkKS8udGVzdChvcmlnaW4pXG5cbiAgICB8fCAvXmh0dHBzPzpcXC9cXC9bXFxkXFx3XStcXC5uZ3Jva1xcLmlvKFxcL3wkKS8udGVzdChvcmlnaW4pXG4gICAgfHwgL15odHRwcz86XFwvXFwvd2ViY2hhdC1wbGF5Z3JvdW5kXFwuYXp1cmV3ZWJzaXRlc1xcLm5ldChcXC98JCkvLnRlc3Qob3JpZ2luKVxuICAgIHx8IC9eaHR0cHM/OlxcL1xcLyhbXFxkXFx3XStcXC4pK2JvdGZyYW1ld29ya1xcLmNvbShcXC98JCkvLnRlc3Qob3JpZ2luKVxuICAgIHx8IC9eaHR0cHM6XFwvXFwvY29tcHVsaW1cXC5naXRodWJcXC5pbyhcXC98JCkvLnRlc3Qob3JpZ2luKVxuICAgIHx8IC9eaHR0cHM6XFwvXFwvY29yaW5hZ3VtXFwuZ2l0aHViXFwuaW8oXFwvfCQpLy50ZXN0KG9yaWdpbilcbiAgICB8fCAvXmh0dHBzOlxcL1xcL21pY3Jvc29mdFxcLmdpdGh1YlxcLmlvKFxcL3wkKS8udGVzdChvcmlnaW4pXG4gICAgfHwgL15odHRwczpcXC9cXC9iZnh3ZWJjaGF0ZnVsbGJ1bmRsZVxcLmF6dXJld2Vic2l0ZXNcXC5uZXQoXFwvfCQpLy50ZXN0KG9yaWdpbilcbiAgICB8fCAvXmh0dHBzOlxcL1xcL3dlYmNoYXR0ZXN0XFwuYmxvYlxcLmNvcmVcXC53aW5kb3dzXFwubmV0KFxcL3wkKS8udGVzdChvcmlnaW4pXG5cbiAgICAvLyBUaGlzIGlzIENvZGVQZW5cbiAgICB8fCAvXmh0dHBzOlxcL1xcL2NkcG5cXC5pbyhcXC98JCkvLnRlc3Qob3JpZ2luKVxuICAgIHx8IC9eaHR0cHM6XFwvXFwvc1xcLmNvZGVwZW5cXC5pbyhcXC98JCkvLnRlc3Qob3JpZ2luKVxuICApO1xufVxuXG5zZXJ2ZXIucG9zdCgnL2RpcmVjdGxpbmUvdG9rZW4nLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qgb3JpZ2luID0gcmVxLmhlYWRlcignb3JpZ2luJyk7XG5cbiAgaWYgKCF0cnVzdGVkT3JpZ2luKG9yaWdpbikpIHtcbiAgICByZXR1cm4gcmVzLnNlbmQoNDAzLCAnbm90IHRydXN0ZWQgb3JpZ2luJyk7XG4gIH1cblxuICBjb25zdCB7IHRva2VuIH0gPSByZXEucXVlcnk7XG5cbiAgdHJ5IHtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHJlcy5zZW5kKGF3YWl0IHJlbmV3RGlyZWN0TGluZVRva2VuKHRva2VuKSwgeyAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc2VuZChhd2FpdCBnZW5lcmF0ZURpcmVjdExpbmVUb2tlbigpLCB7ICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc2VuZCg1MDAsIGVyci5tZXNzYWdlLCB7ICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicgfSk7XG4gIH1cblxuICBjb25zdCB7IERJUkVDVF9MSU5FX1NFQ1JFVCB9ID0gcHJvY2Vzcy5lbnY7XG5cbiAgaWYgKHRva2VuKSB7XG4gICAgY29uc29sZS5sb2coYFJlZnJlc2hpbmcgRGlyZWN0IExpbmUgdG9rZW4gZm9yICR7IG9yaWdpbiB9YCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coYFJlcXVlc3RpbmcgRGlyZWN0IExpbmUgdG9rZW4gZm9yICR7IG9yaWdpbiB9IHVzaW5nIHNlY3JldCBcIiR7IERJUkVDVF9MSU5FX1NFQ1JFVC5zdWJzdHIoMCwgMykgfS4uLiR7IERJUkVDVF9MSU5FX1NFQ1JFVC5zdWJzdHIoLTMpIH1cImApO1xuICB9XG59KTtcblxuc2VydmVyLnBvc3QoJy9iaW5nc3BlZWNoL3Rva2VuJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IG9yaWdpbiA9IHJlcS5oZWFkZXIoJ29yaWdpbicpO1xuXG4gIGlmICghdHJ1c3RlZE9yaWdpbihvcmlnaW4pKSB7XG4gICAgcmV0dXJuIHJlcy5zZW5kKDQwMywgJ25vdCB0cnVzdGVkIG9yaWdpbicpO1xuICB9XG5cbiAgY29uc29sZS5sb2coYFJlcXVlc3Rpbmcgc3BlZWNoIHRva2VuIGZvciAkeyBvcmlnaW4gfWApO1xuXG4gIGNvbnN0IGNyZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29nbml0aXZlLm1pY3Jvc29mdC5jb20vc3RzL3YxLjAvaXNzdWVUb2tlbicsIHtcbiAgICBoZWFkZXJzOiB7ICdPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5JzogcHJvY2Vzcy5lbnYuQklOR19TUEVFQ0hfU1VCU0NSSVBUSU9OX0tFWSB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pO1xuXG4gIGlmIChjcmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgcmVzLnNlbmQoe1xuICAgICAgdG9rZW46IGF3YWl0IGNyZXMudGV4dCgpXG4gICAgfSwge1xuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJlcy5zZW5kKDUwMCwge1xuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgIH0pO1xuICB9XG59KTtcblxuc2VydmVyLnBvc3QoJy9zcGVlY2hzZXJ2aWNlcy90b2tlbicsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBvcmlnaW4gPSByZXEuaGVhZGVyKCdvcmlnaW4nKTtcblxuICBpZiAoIXRydXN0ZWRPcmlnaW4ob3JpZ2luKSkge1xuICAgIHJldHVybiByZXMuc2VuZCg0MDMsICdub3QgdHJ1c3RlZCBvcmlnaW4nKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGBSZXF1ZXN0aW5nIHNwZWVjaCB0b2tlbiBmb3IgJHsgb3JpZ2luIH1gKTtcblxuICBjb25zdCBjcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vJHsgcHJvY2Vzcy5lbnYuU1BFRUNIX1NFUlZJQ0VTX1JFR0lPTiB9LmFwaS5jb2duaXRpdmUubWljcm9zb2Z0LmNvbS9zdHMvdjEuMC9pc3N1ZVRva2VuYCwge1xuICAgIGhlYWRlcnM6IHsgJ09jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXknOiBwcm9jZXNzLmVudi5TUEVFQ0hfU0VSVklDRVNfU1VCU0NSSVBUSU9OX0tFWSB9LFxuICAgIG1ldGhvZDogJ1BPU1QnXG4gIH0pO1xuXG4gIGlmIChjcmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgY29uc3QgYXV0aG9yaXphdGlvblRva2VuID0gYXdhaXQgY3Jlcy50ZXh0KCk7XG5cbiAgICByZXMuc2VuZCh7XG4gICAgICBhdXRob3JpemF0aW9uVG9rZW4sXG4gICAgICByZWdpb246IHByb2Nlc3MuZW52LlNQRUVDSF9TRVJWSUNFU19SRUdJT04sXG4gICAgICB0b2tlbjogYXV0aG9yaXphdGlvblRva2VuXG4gICAgfSwge1xuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJlcy5zZW5kKDUwMCwge1xuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xuICAgIH0pO1xuICB9XG59KTtcblxuZnVuY3Rpb24gb2JqZWN0VmFsdWVzKG1hcCkge1xuICByZXR1cm4gT2JqZWN0LmtleXMobWFwKS5tYXAoeCA9PiBtYXBbeF0pO1xufVxuXG5sZXQgbGFzdEdldFZlcnNpb25BdCA9IDA7XG5sZXQgbGFzdEdldFZlcnNpb25SZXNwb25zZSA9IG51bGw7XG5jb25zdCBWRVJTSU9OX1JFUVVFU1RfVkFMSURfRk9SID0gNjAwMDA7XG5cbnNlcnZlci5nZXQoJy92ZXJzaW9ucy9ib3RmcmFtZXdvcmstd2ViY2hhdCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuXG4gIGlmIChub3cgLSBsYXN0R2V0VmVyc2lvbkF0ID4gVkVSU0lPTl9SRVFVRVNUX1ZBTElEX0ZPUikge1xuICAgIGxldCBqc29uO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9ib3RmcmFtZXdvcmstd2ViY2hhdC8nLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBhbGVydCgnRmFpbGVkIHRvIGZldGNoIHZlcnNpb24gbGlzdCBmcm9tIE5QTUpTLiBQbGVhc2UgY2hlY2sgbmV0d29yayB0cmFjZSBmb3IgZGV0YWlscy4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHRpbWUsIHZlcnNpb25zIH0gPSBqc29uO1xuXG4gICAgbGFzdEdldFZlcnNpb25SZXNwb25zZSA9IHtcbiAgICAgIHJlZnJlc2g6IG5ldyBEYXRlKG5vdykudG9JU09TdHJpbmcoKSxcbiAgICAgIHZlcnNpb25zOiBvYmplY3RWYWx1ZXModmVyc2lvbnMpLnNvcnQoKHgsIHkpID0+IHtcbiAgICAgICAgeCA9IG5ldyBEYXRlKHRpbWVbeC52ZXJzaW9uXSk7XG4gICAgICAgIHkgPSBuZXcgRGF0ZSh0aW1lW3kudmVyc2lvbl0pO1xuXG4gICAgICAgIHJldHVybiB4ID4geSA/IC0xIDogeCA8IHkgPyAxIDogMDtcbiAgICAgIH0pLm1hcCgoeyB2ZXJzaW9uIH0pID0+ICh7XG4gICAgICAgIHRpbWU6IHRpbWVbdmVyc2lvbl0sXG4gICAgICAgIHZlcnNpb246IHZlcnNpb25cbiAgICAgIH0pKVxuICAgIH07XG5cbiAgICBsYXN0R2V0VmVyc2lvbkF0ID0gbm93O1xuICB9XG5cbiAgcmVzLnNlbmQoXG4gICAgbGFzdEdldFZlcnNpb25SZXNwb25zZSxcbiAgICB0cnVzdGVkT3JpZ2luKHJlcS5oZWFkZXIoJ29yaWdpbicpKSA/XG4gICAgICB7ICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicgfVxuICAgIDpcbiAgICAgIHt9XG4gICk7XG59KTtcblxuY29uc3QgYWNxdWlyZVNsb3dRdWV1ZSA9IGNyZWF0ZUF1dG9SZXNldEV2ZW50KCk7XG5cbnNlcnZlci5nZXQoJy9wdWJsaWMvKicsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAoJ3Nsb3cnIGluIHJlcS5xdWVyeSkge1xuICAgIHJlcy5ub0NhY2hlKCk7XG5cbiAgICBjb25zdCByZWxlYXNlID0gYXdhaXQgYWNxdWlyZVNsb3dRdWV1ZSgpO1xuXG4gICAgYXdhaXQgZGVsYXkoMTAwMCk7XG4gICAgcmVsZWFzZSgpO1xuICB9XG5cbiAgYXdhaXQgc2VydmVIYW5kbGVyKHJlcSwgcmVzLCB7XG4gICAgcGF0aDogam9pbihfX2Rpcm5hbWUsICcuL3B1YmxpYycpXG4gIH0pO1xufSk7XG5cbi8vIExpc3RlbiBmb3IgaW5jb21pbmcgcmVxdWVzdHNcbnNlcnZlci5wb3N0KCcvYXBpL21lc3NhZ2VzJywgKHJlcSwgcmVzKSA9PiB7XG4gIGFkYXB0ZXIucHJvY2Vzc0FjdGl2aXR5KHJlcSwgcmVzLCBhc3luYyBjb250ZXh0ID0+IHtcbiAgICBjb25zdCBzZW5kQWN0aXZpdHkgPSBjb250ZXh0LnNlbmRBY3Rpdml0eS5iaW5kKGNvbnRleHQpO1xuXG4gICAgbG9ncy5wdXNoKHtcbiAgICAgIGRpcmVjdGlvbjogJ2luY29taW5nJyxcbiAgICAgIG5vdzogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgYWN0aXZpdHk6IGNvbnRleHQuYWN0aXZpdHksXG4gICAgfSk7XG5cbiAgICBjb250ZXh0LnNlbmRBY3Rpdml0eSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICBsZXQgYWN0aXZpdHkgPSBhcmdzWzBdO1xuXG4gICAgICBpZiAodHlwZW9mIGFjdGl2aXR5ID09PSAnc3RyaW5nJykge1xuICAgICAgICBhY3Rpdml0eSA9IHtcbiAgICAgICAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgICAgICAgdGV4dDogYWN0aXZpdHlcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgbG9ncy5wdXNoKHtcbiAgICAgICAgZGlyZWN0aW9uOiAnb3V0Z29pbmcnLFxuICAgICAgICBub3c6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgYWN0aXZpdHlcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2VuZEFjdGl2aXR5KC4uLmFyZ3MpO1xuICAgIH07XG5cbiAgICBsb2dzLnNwbGljZSgwLCBNYXRoLm1heCgwLCBsb2dzLmxlbmd0aCAtIExPR19MRU5HVEgpKTtcblxuICAgIG51bUFjdGl2aXRpZXMrKztcblxuICAgIGlmIChjb250ZXh0LmFjdGl2aXR5LnR5cGUgPT09ICdldmVudCcpIHtcbiAgICAgIGlmIChjb250ZXh0LmFjdGl2aXR5Lm5hbWUgPT09ICd0b2tlbnMvcmVzcG9uc2UnKSB7XG4gICAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIE9BdXRoIHRva2VuIGV4Y2hhbmdlXG4gICAgICAgIC8vIFRoaXMgZXZlbnQgaXMgc2VudCB0aHJ1IHRoZSBub24tbWFnaWMgY29kZSBmbG93XG4gICAgICAgIGF3YWl0IE9BdXRoQ2FyZC5wcm9jZXNzb3IoY29udGV4dCk7XG4gICAgICB9IGVsc2UgaWYgKGNvbnRleHQuYWN0aXZpdHkubmFtZSA9PT0gJ3dlYmNoYXQvam9pbicpIHtcbiAgICAgICAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoYEdvdCBcXGB3ZWJjaGF0L2pvaW5cXGAgZXZlbnQsIHlvdXIgbGFuZ3VhZ2UgaXMgXFxgJHsgKGNvbnRleHQuYWN0aXZpdHkudmFsdWUgfHwge30pLmxhbmd1YWdlIH1cXGBgKTtcbiAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5hY3Rpdml0eS5uYW1lID09PSAnd2ViY2hhdC9waW5nJykge1xuICAgICAgICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7IHR5cGU6ICdldmVudCcsIG5hbWU6ICd3ZWJjaGF0L3BvbmcnLCB2YWx1ZTogY29udGV4dC5hY3Rpdml0eS52YWx1ZSB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbnRleHQuYWN0aXZpdHkudHlwZSA9PT0gJ21lc3NhZ2VSZWFjdGlvbicpIHtcbiAgICAgIGNvbnN0IHsgYWN0aXZpdHk6IHsgcmVhY3Rpb25zQWRkZWQgPSBbXSwgcmVhY3Rpb25zUmVtb3ZlZCA9IFtdIH19ID0gY29udGV4dDtcbiAgICAgIGNvbnN0IGF0dGFjaG1lbnRzID0gWy4uLnJlYWN0aW9uc0FkZGVkLCAuLi5yZWFjdGlvbnNSZW1vdmVkXS5tYXAocmVhY3Rpb24gPT4gKHtcbiAgICAgICAgY29udGVudDogYFxcYFxcYFxcYFxcbiR7IEpTT04uc3RyaW5naWZ5KHJlYWN0aW9uLCBudWxsLCAyKSB9XFxuXFxgXFxgXFxgYCxcbiAgICAgICAgY29udGVudFR5cGU6ICd0ZXh0L21hcmtkb3duJ1xuICAgICAgfSkpO1xuXG4gICAgICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSh7XG4gICAgICAgIHRleHQ6ICdZb3UgcG9zdGVkJyxcbiAgICAgICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgICAgICBhdHRhY2htZW50c1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0LmFjdGl2aXR5LnR5cGUgPT09ICdtZXNzYWdlJykge1xuICAgICAgY29uc3QgeyBhY3Rpdml0eTogeyBhdHRhY2htZW50cyA9IFtdLCB0ZXh0IH0gfSA9IGNvbnRleHQ7XG4gICAgICBjb25zdCBjbGVhbmVkVGV4dCA9ICh0ZXh0IHx8ICcnKS50cmltKCkucmVwbGFjZSgvXFwuJC8sICcnKTtcbiAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kcy5maW5kKCh7IHBhdHRlcm4gfSkgPT4gcGF0dGVybi50ZXN0KGNsZWFuZWRUZXh0KSk7XG5cbiAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgIGNvbnN0IHsgbW9kZSwgcGF0dGVybiwgcHJvY2Vzc29yIH0gPSBjb21tYW5kO1xuICAgICAgICBjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhjbGVhbmVkVGV4dCk7XG5cbiAgICAgICAgaWYgKG1vZGUgPT09ICdsaW5lJykge1xuICAgICAgICAgIGF3YWl0IHByb2Nlc3Nvcihjb250ZXh0LCBjbGVhbmVkVGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXdhaXQgcHJvY2Vzc29yKGNvbnRleHQsIC4uLltdLnNsaWNlLmNhbGwobWF0Y2gsIDEpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgvXmVjaG8tdHlwaW5nJC9pLnRlc3QoY2xlYW5lZFRleHQpKSB7XG4gICAgICAgIC8vIFdlIHNob3VsZCBcImVjaG9UeXBpbmdcIiBpbiBhIHBlci1jb252ZXJzYXRpb24gYmFzaXNcbiAgICAgICAgY29uc3QgeyBpZDogY29udmVyc2F0aW9uSUQgfSA9IGNvbnRleHQuYWN0aXZpdHkuY29udmVyc2F0aW9uO1xuXG4gICAgICAgIGlmIChlY2hvVHlwaW5nQ29udmVyc2F0aW9ucy5oYXMoY29udmVyc2F0aW9uSUQpKSB7XG4gICAgICAgICAgZWNob1R5cGluZ0NvbnZlcnNhdGlvbnMuZGVsZXRlKGNvbnZlcnNhdGlvbklEKTtcbiAgICAgICAgICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSgnV2lsbCBzdG9wIGVjaG9pbmcgYFwidHlwaW5nXCJgIGV2ZW50Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWNob1R5cGluZ0NvbnZlcnNhdGlvbnMuYWRkKGNvbnZlcnNhdGlvbklEKTtcbiAgICAgICAgICBhd2FpdCBjb250ZXh0LnNlbmRBY3Rpdml0eSgnV2lsbCBlY2hvIGBcInR5cGluZ1wiYCBldmVudCcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKC9eaGVscCQvaS50ZXN0KGNsZWFuZWRUZXh0KSkge1xuICAgICAgICBjb25zdCBhdHRhY2htZW50cyA9IGNvbW1hbmRzLm1hcCgoeyBoZWxwLCBuYW1lIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi92bmQubWljcm9zb2Z0LmNhcmQudGh1bWJuYWlsJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgYnV0dG9uczogcmVkdWNlTWFwKFxuICAgICAgICAgICAgICAgIGhlbHAoKSxcbiAgICAgICAgICAgICAgICAocmVzdWx0OiBbXSwgdGl0bGU6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gW1xuICAgICAgICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ltQmFjaycsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICApLnNvcnQoKHsgdGl0bGU6IHggfSwgeyB0aXRsZTogeSB9KSA9PiB4ID4geSA/IDEgOiB4IDwgeSA/IC0xIDogMCksXG4gICAgICAgICAgICAgIHRpdGxlOiBuYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgICAgICAgIGF0dGFjaG1lbnRzOiBhdHRhY2htZW50cy5zb3J0KCh7IGNvbnRlbnQ6IHsgdGl0bGU6IHggfSB9LCB7IGNvbnRlbnQ6IHsgdGl0bGU6IHkgfSB9KSA9PiB4ID4geSA/IDEgOiB4IDwgeSA/IC0xIDogMClcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKC9eaGVscCBzaW1wbGUkL2kudGVzdChjbGVhbmVkVGV4dCkpIHtcbiAgICAgICAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoYCMjIyBDb21tYW5kc1xcclxcblxcclxcbiR7IGNvbW1hbmRzLm1hcCgoeyBwYXR0ZXJuIH0pID0+IGAtIFxcYCR7IHBhdHRlcm4uc291cmNlIH1cXGBgKS5zb3J0KCkuam9pbignXFxyXFxuJykgfWApO1xuICAgICAgfSBlbHNlIGlmIChhdHRhY2htZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgeyBwcm9jZXNzb3IgfSA9IGNvbW1hbmRzLmZpbmQoKHsgcGF0dGVybiB9KSA9PiBwYXR0ZXJuLnRlc3QoJ3VwbG9hZCcpKTtcblxuICAgICAgICBhd2FpdCBwcm9jZXNzb3IoY29udGV4dCwgYXR0YWNobWVudHMpO1xuICAgICAgfSBlbHNlIGlmIChjb250ZXh0LmFjdGl2aXR5LnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCwgdmFsdWUgfSA9IGNvbnRleHQuYWN0aXZpdHk7XG4gICAgICAgIGNvbnN0IGF0dGFjaG1lbnRzID0gW107XG5cbiAgICAgICAgdGV4dCAmJiBhdHRhY2htZW50cy5wdXNoKHtcbiAgICAgICAgICBjb250ZW50OiB0ZXh0LFxuICAgICAgICAgIGNvbnRlbnRUeXBlOiAndGV4dC9wbGFpbidcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsdWUgJiYgYXR0YWNobWVudHMucHVzaCh7XG4gICAgICAgICAgY29udGVudDogYFxcYFxcYFxcYFxcbiR7IEpTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCAyKSB9XFxuXFxgXFxgXFxgYCxcbiAgICAgICAgICBjb250ZW50VHlwZTogJ3RleHQvbWFya2Rvd24nXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHtcbiAgICAgICAgICB0ZXh0OiAnWW91IHBvc3RlZCcsXG4gICAgICAgICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgICAgICAgIGF0dGFjaG1lbnRzXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgY29udGV4dC5zZW5kQWN0aXZpdHkoe1xuICAgICAgICAgIHNwZWFrOiBgVW5rbm93biBjb21tYW5kOiBJIGRvbid0IGtub3cgJHsgY2xlYW5lZFRleHQgfS4gWW91IGNhbiBzYXkgXCJoZWxwXCIgdG8gbGVhcm4gbW9yZS5gLFxuICAgICAgICAgIHRleHQ6IGBVbmtub3duIGNvbW1hbmQ6IFxcYCR7IGNsZWFuZWRUZXh0IH1cXGAuXFxyXFxuXFxyXFxuVHlwZSBcXGBoZWxwXFxgIHRvIGxlYXJuIG1vcmUuYCxcbiAgICAgICAgICB0eXBlOiAnbWVzc2FnZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb250ZXh0LmFjdGl2aXR5LnR5cGUgPT09ICd0eXBpbmcnICYmIGVjaG9UeXBpbmdDb252ZXJzYXRpb25zLmhhcyhjb250ZXh0LmFjdGl2aXR5LmNvbnZlcnNhdGlvbi5pZCkpIHtcbiAgICAgIGF3YWl0IGNvbnRleHQuc2VuZEFjdGl2aXR5KHsgdHlwZTogJ3R5cGluZycgfSk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5sZXQgcHJlZ2VuZXJhdGVkVG9rZW5zID0gW107XG5jb25zdCBQUkVHRU5FUkFURV9UT0tFTl9JTlRFUlZBTCA9IDYwMDAwO1xuXG5mdW5jdGlvbiBzZXRJbnRlcnZhbEFuZEltbWVkaWF0ZShmbiwgbXMpIHtcbiAgc2V0SW1tZWRpYXRlKGZuKTtcblxuICByZXR1cm4gc2V0SW50ZXJ2YWwoZm4sIG1zKTtcbn1cblxuc2V0SW50ZXJ2YWxBbmRJbW1lZGlhdGUoYXN5bmMgKCkgPT4ge1xuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICBjb25zdCB7IGNvbnZlcnNhdGlvbklkOiBjb252ZXJzYXRpb25JRCwgZXhwaXJlc19pbjogZXhwaXJlc0luLCB0b2tlbiB9ID0gYXdhaXQgZ2VuZXJhdGVEaXJlY3RMaW5lVG9rZW4oKTtcbiAgY29uc3QgZXhwaXJlc0F0ID0gbm93ICsgZXhwaXJlc0luICogMTAwMDtcblxuICBwcmVnZW5lcmF0ZWRUb2tlbnMucHVzaCh7XG4gICAgY29udmVyc2F0aW9uSUQsXG4gICAgZXhwaXJlc0luLFxuICAgIGV4cGlyZXNBdCxcbiAgICB0b2tlblxuICB9KTtcblxuICBwcmVnZW5lcmF0ZWRUb2tlbnMgPSBwcmVnZW5lcmF0ZWRUb2tlbnMuZmlsdGVyKHRva2VuID0+IHRva2VuLmV4cGlyZXNBdCA+IERhdGUubm93KCkgLSBQUkVHRU5FUkFURV9UT0tFTl9JTlRFUlZBTCk7XG59LCBQUkVHRU5FUkFURV9UT0tFTl9JTlRFUlZBTCk7XG5cbnNlcnZlci5nZXQoJy9kaXJlY3RsaW5lL3Rva2VucycsIGFzeW5jIChfLCByZXMpID0+IHtcbiAgcmVzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvcGxhaW4nKTtcbiAgcmVzLnNldCgnQ2FjaGUtQ29udHJvbCcsICduby1jYWNoZScpO1xuXG4gIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHtcbiAgICB0b2tlbnM6IHByZWdlbmVyYXRlZFRva2Vucy5tYXAodG9rZW4gPT4ge1xuICAgICAgY29uc3QgbWVzc2FnZTEgPSBgVGhpcyB0b2tlbiB3aWxsIGV4cGlyZXMgYXQgJHsgbmV3IERhdGUodG9rZW4uZXhwaXJlc0F0KS50b0lTT1N0cmluZygpIH1gO1xuICAgICAgY29uc3QgbWVzc2FnZTIgPSBEYXRlLm5vdygpID4gdG9rZW4uZXhwaXJlc0F0ID8gJ0FuZCBpcyBleHBpcmVkLicgOiBgT3IgaW4gYWJvdXQgJHsgfn4oKHRva2VuLmV4cGlyZXNBdCAtIERhdGUubm93KCkpIC8gMTAwMCkgfSBzZWNvbmRzYDtcbiAgICAgIGNvbnN0IHNlcGFyYXRvciA9IG5ldyBBcnJheShNYXRoLm1heChtZXNzYWdlMS5sZW5ndGgsIG1lc3NhZ2UyLmxlbmd0aCkpLmZpbGwoJy0nKS5qb2luKCcnKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHVtYW46IFtcbiAgICAgICAgICBzZXBhcmF0b3IsXG4gICAgICAgICAgbWVzc2FnZTEsXG4gICAgICAgICAgbWVzc2FnZTIsXG4gICAgICAgICAgc2VwYXJhdG9yXG4gICAgICAgIF0sXG4gICAgICAgIC4uLnRva2VuXG4gICAgICB9O1xuICAgIH0pXG4gIH0sIG51bGwsIDIpKTtcbn0pO1xuIl19