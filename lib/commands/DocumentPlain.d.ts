import { TurnContext } from 'botbuilder';
declare const name = "Plain document attachment";
declare function help(): {
    'document-plain': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
