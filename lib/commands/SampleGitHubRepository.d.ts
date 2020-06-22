import { TurnContext } from 'botbuilder';
declare const name = "Demo for GitHub repository sample";
declare function help(): {
    'sample:github-repository': string;
};
declare function processor(context: TurnContext, name: string, value: string): Promise<void>;
export { help, name, processor };
