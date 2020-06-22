import { TurnContext } from 'botbuilder';
declare const name = "Speech";
declare function help(): {
    'speech': string;
    'tell me a story': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
