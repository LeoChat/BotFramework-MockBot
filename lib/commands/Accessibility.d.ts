import { TurnContext } from 'botbuilder';
declare const name = "Accessibility";
declare function help(): {
    'accessibility': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
