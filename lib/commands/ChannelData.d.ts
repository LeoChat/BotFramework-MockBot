import { TurnContext } from 'botbuilder';
declare const name = "Channel data";
declare function help(): {
    'channel-data': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
