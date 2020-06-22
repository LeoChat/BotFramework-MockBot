import { TurnContext } from 'botbuilder';
declare const name = "User ID";
declare function help(): {
    'user': string;
    'user id': string;
    'user name': string;
};
declare function processor(context: TurnContext, arg?: string): Promise<void>;
export { help, name, processor };
