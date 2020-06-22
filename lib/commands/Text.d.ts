import { TurnContext } from 'botbuilder';
declare const name = "Plain text message";
declare function help(): {
    'text': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
