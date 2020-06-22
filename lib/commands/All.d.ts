import { TurnContext } from "botbuilder";
declare const name = "All";
declare function processor(context: TurnContext, options: any): Promise<void>;
export { name, processor };
