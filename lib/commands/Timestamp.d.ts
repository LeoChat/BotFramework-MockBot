import { TurnContext } from 'botbuilder';
declare const name = "Timestamp grouping";
declare function help(): {
    'timestamp': string;
};
declare function processor(context: TurnContext, arg?: string): Promise<void>;
export { help, name, processor };
