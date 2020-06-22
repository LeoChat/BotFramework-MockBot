import { TurnContext } from 'botbuilder';
declare const name = "Unknown type of activity or attachments";
declare function help(): {
    'unknown activity': string;
    'unknown attachment': string;
};
declare function processor(context: TurnContext, arg?: string): Promise<void>;
export { help, name, processor };
