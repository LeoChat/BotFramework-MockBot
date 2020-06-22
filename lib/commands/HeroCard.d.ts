import { TurnContext } from 'botbuilder';
declare const name = "Hero card";
declare const mode = "line";
declare function help(): {
    herocard: string;
    'herocard long title': string;
    'herocard qna': string;
};
declare function processor(context: TurnContext, args: string): Promise<void>;
export { help, mode, name, processor };
