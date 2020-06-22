import { TurnContext } from 'botbuilder';
declare const name = "Document Data URI";
declare function help(): {
    'document-data-uri': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
