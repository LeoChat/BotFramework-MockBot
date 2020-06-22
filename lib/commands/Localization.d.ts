import { TurnContext } from 'botbuilder';
declare const name = "Localization";
declare function help(): {
    'localization': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
