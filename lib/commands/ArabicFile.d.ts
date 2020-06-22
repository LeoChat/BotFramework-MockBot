import { TurnContext } from 'botbuilder-core';
declare const name = "Arabic file attachments";
declare const help: () => {
    'arabic file': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
