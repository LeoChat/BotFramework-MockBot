import { TurnContext } from 'botbuilder';
declare const name = "Suggested actions";
declare function help(): {
    'suggested-actions': string;
};
declare function processor(context: TurnContext, arg: string): Promise<void>;
export { help, name, processor };
