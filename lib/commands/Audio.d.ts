import { TurnContext } from 'botbuilder';
declare const name = "Audio attachment";
declare function help(): {
    'audio': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
