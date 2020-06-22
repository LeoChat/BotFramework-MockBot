import { TurnContext } from 'botbuilder';
declare const name = "Multiple media attachments";
declare function help(): {
    'content-multimedia': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
