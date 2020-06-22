import { TurnContext } from 'botbuilder';
declare const name = "Hero card actions";
declare const mode = "line";
declare function help(): {
    herocardactions: string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, mode, name, processor };
