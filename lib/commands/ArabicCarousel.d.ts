import { TurnContext } from 'botbuilder';
declare const name = "Arabic carousel";
declare const help: () => {
    'arabic carousel': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
