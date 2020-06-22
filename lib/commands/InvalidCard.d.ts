import { TurnContext } from 'botbuilder';
declare const name = "Invalid adaptive card";
declare function help(): {
    'invalidCard': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
