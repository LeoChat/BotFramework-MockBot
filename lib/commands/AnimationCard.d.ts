import { TurnContext } from 'botbuilder';
declare const name = "Animation card";
declare function help(): {
    'animationcard': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
