import { TurnContext } from 'botbuilder';
declare const name = "Proactive message";
declare function help(): {
    proactive: string;
};
declare function processor(context: TurnContext, args?: string): Promise<void>;
export { help, name, processor };
