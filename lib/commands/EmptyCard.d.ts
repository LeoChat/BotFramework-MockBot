import { TurnContext } from 'botbuilder';
declare const name = "Empty card";
declare function help(): {
    'emptycard': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
