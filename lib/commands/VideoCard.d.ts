import { TurnContext } from 'botbuilder';
declare const name = "Video card";
declare function help(): {
    'videocard': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
