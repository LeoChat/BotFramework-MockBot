import { TurnContext } from 'botbuilder';
declare const name = "File attachments";
declare function help(): {
    'file': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
