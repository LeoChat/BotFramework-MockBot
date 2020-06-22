declare const _default: () => {
    "$schema": string;
    "version": string;
    "type": string;
    "body": ({
        "type": string;
        "items": {
            "type": string;
            "size": string;
            "text": string;
            "wrap": boolean;
        }[];
        "size"?: undefined;
        "weight"?: undefined;
        "text"?: undefined;
    } | {
        "type": string;
        "size": string;
        "weight": string;
        "text": string;
        "items"?: undefined;
    } | {
        "type": string;
        "items": ({
            "type": string;
            "size": string;
            "weight": string;
            "text": string;
            "id"?: undefined;
            "value"?: undefined;
            "placeholder"?: undefined;
            "choices"?: undefined;
        } | {
            "id": string;
            "type": string;
            "value": string;
            "placeholder": string;
            "choices": {
                "title": string;
                "value": string;
            }[];
            "size"?: undefined;
            "weight"?: undefined;
            "text"?: undefined;
        })[];
        "size"?: undefined;
        "weight"?: undefined;
        "text"?: undefined;
    })[];
    "actions": {
        "type": string;
        "title": string;
    }[];
};
export default _default;
