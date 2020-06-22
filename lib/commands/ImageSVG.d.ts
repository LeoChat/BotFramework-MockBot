import { TurnContext } from 'botbuilder';
declare const name = "SVG image attachment";
declare function help(): {
    'image-svg': string;
};
declare function processor(context: TurnContext): Promise<void>;
export { help, name, processor };
