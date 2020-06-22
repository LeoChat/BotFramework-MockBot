import { Attachment, TurnContext } from 'botbuilder';
declare const name = "File upload";
declare function help(): {
    upload: string;
};
declare function processor(context: TurnContext, attachments?: Attachment[]): Promise<void>;
export { help, name, processor };
