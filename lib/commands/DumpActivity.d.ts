import { TurnContext } from 'botbuilder';
declare const name = "Debug activity";
declare function help(): {
    'dump-activity': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
