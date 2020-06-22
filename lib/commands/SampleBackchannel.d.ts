import { TurnContext } from 'botbuilder';
declare const name = "Demo for backchannel sample";
declare function help(): {
    'sample:backchannel': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
