declare const _default: (arg?: string) => {
    "$schema": string;
    "type": string;
    "lang": string;
    "version"?: undefined;
    "body"?: undefined;
} | {
    "$schema": string;
    "type": string;
    "version": string;
    "body": {
        "type": string;
        "text": string;
    }[];
    "lang"?: undefined;
};
export default _default;
