import { TurnContext } from 'botbuilder';
declare const name = "Input hint";
declare function help(): {
    'input-hint accepting': string;
    'input-hint expecting': string;
    'input-hint ignoring': string;
};
declare function processor(context: TurnContext, ...inputHints: string[]): Promise<void>;
export { help, name, processor };
