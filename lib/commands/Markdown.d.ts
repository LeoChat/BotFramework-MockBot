import { TurnContext } from "botbuilder";
declare const name = "Markdown";
declare function help(): {
    markdown: string;
};
declare function processor(context: TurnContext, arg?: string): Promise<void>;
export { help, name, processor };
