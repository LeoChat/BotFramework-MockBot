import { TurnContext } from 'botbuilder';
declare const name = "Demo for Redux middleware sample";
declare function help(): {
    'sample:redux-middleware': string;
};
declare function processor(context: TurnContext, color?: string): Promise<void>;
export { help, name, processor };
