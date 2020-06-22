import { TurnContext } from 'botbuilder';
declare const name = "Receipt card";
declare function help(): {
    'receiptcard': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
