import { TurnContext } from 'botbuilder';
declare const name = "Word document attachment";
declare function help(): {
    'document-word': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
