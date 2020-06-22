import { TurnContext } from 'botbuilder';
declare const name = "Audio card";
declare function help(): {
    'audiocard': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
