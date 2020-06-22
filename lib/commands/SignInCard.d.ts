import { TurnContext } from 'botbuilder';
declare const name = "Sign-in card";
declare function help(): {
    'signin': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
