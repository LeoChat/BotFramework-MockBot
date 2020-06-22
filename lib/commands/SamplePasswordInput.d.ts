import { TurnContext } from 'botbuilder';
declare const name = "Demo for password input sample";
declare function help(): {
    'sample:password-input': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
