import { TurnContext } from 'botbuilder';
declare const mode = "line";
declare const name = "Echo";
declare function help(): {
    'echo Hello, World!': string;
    'echo "Hello\nWorld!"': string;
};
declare function processor(context: TurnContext, line: string): Promise<void>;
export { help, mode, name, processor };
