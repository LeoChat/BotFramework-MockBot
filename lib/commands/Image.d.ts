import { TurnContext } from 'botbuilder';
declare const name = "Image attachment";
declare function help(): {
    'image': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
