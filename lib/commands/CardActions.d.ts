import { TurnContext } from 'botbuilder';
declare const name = "Suggested actions";
declare function help(): {
    'card-actions': string;
};
declare function processor(context: TurnContext, arg: string): Promise<void>;
export { help, name, processor };
