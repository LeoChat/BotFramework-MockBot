import { TurnContext } from 'botbuilder';
declare const name = "Carousel layout";
declare function help(): {
    'carousel': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
