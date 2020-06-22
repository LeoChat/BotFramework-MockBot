import { TurnContext } from 'botbuilder';
declare const name = "Hero card";
declare const mode = "line";
declare function help(): {
    'thumbnailcard': string;
    'thumbnailcard long title': string;
};
declare function processor(context: TurnContext, args: string): Promise<void>;
export { help, mode, name, processor };
