import { TurnContext } from 'botbuilder';
declare const name = "Layout";
declare function help(): {
    'layout single': string;
    'layout single carousel': string;
    'layout double': string;
    'layout carousel': string;
    'layout': string;
};
declare function processor(context: TurnContext, ...args: string[]): Promise<void>;
export { help, name, processor };
