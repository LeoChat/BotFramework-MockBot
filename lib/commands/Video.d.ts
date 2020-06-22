import { TurnContext } from 'botbuilder';
declare const name = "Video attachment";
declare function help(): {
    'video': string;
    'video vimeo': string;
    'video youtube': string;
};
declare function processor(context: TurnContext, _: string, provider: string): Promise<import("botframework-schema").ResourceResponse>;
export { help, name, processor };
