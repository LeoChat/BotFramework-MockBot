declare const _default: () => {
    "$schema": string;
    "type": string;
    "version": string;
    "speak": string;
    "body": ({
        "type": string;
        "text": string;
        "size": string;
        "weight": string;
        "id"?: undefined;
        "style"?: undefined;
        "choices"?: undefined;
    } | {
        "type": string;
        "text": string;
        "size"?: undefined;
        "weight"?: undefined;
        "id"?: undefined;
        "style"?: undefined;
        "choices"?: undefined;
    } | {
        "type": string;
        "id": string;
        "style": string;
        "choices": ({
            "title": string;
            "value": string;
            "isSelected": boolean;
        } | {
            "title": string;
            "value": string;
            "isSelected"?: undefined;
        })[];
        "text"?: undefined;
        "size"?: undefined;
        "weight"?: undefined;
    })[];
    "actions": {
        "type": string;
        "method": string;
        "url": string;
        "title": string;
    }[];
};
export default _default;
