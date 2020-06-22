import { TurnContext } from 'botbuilder';
declare const name = "XML message";
declare function help(): {
    'xml': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
