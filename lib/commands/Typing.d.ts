import { TurnContext } from 'botbuilder';
declare const name = "Typing indicator";
declare function help(): {
    'typing 1': string;
    'typing': string;
};
declare function processor(context: TurnContext, arg?: string): Promise<void>;
export { help, name, processor };
