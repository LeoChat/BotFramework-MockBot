export default function <TInput, TOutput>(map: {
    [key: string]: TInput;
}, reducer: (result: TOutput, value: TInput, key: string) => TOutput, initial: TOutput): TOutput;
