import { TurnContext } from 'botbuilder';
declare const name = "Images on emulated slow network";
declare function help(): {
    'slow': string;
};
declare function processor(context: TurnContext, ...args: string[]): Promise<void>;
export { help, name, processor };
