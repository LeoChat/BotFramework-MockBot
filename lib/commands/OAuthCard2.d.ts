import { TurnContext } from 'botbuilder';
declare function help(): {
    'oauth': string;
    'oauth signout': string;
};
declare const name = "OAuth card";
declare function processor(context: TurnContext, arg?: string): Promise<void>;
export { help, name, processor };
