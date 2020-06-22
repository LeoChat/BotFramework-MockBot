declare const _default: () => {
    "$schema": string;
    "type": string;
    "version": string;
    "speak": string;
    "body": {
        "speak": string;
        "type": string;
        "columns": ({
            "type": string;
            "width": number;
            "items": ({
                "type": string;
                "text": string;
                "weight"?: undefined;
                "size"?: undefined;
                "spacing"?: undefined;
                "isSubtle"?: undefined;
                "wrap"?: undefined;
            } | {
                "type": string;
                "text": string;
                "weight": string;
                "size": string;
                "spacing": string;
                "isSubtle"?: undefined;
                "wrap"?: undefined;
            } | {
                "type": string;
                "text": string;
                "isSubtle": boolean;
                "spacing": string;
                "weight"?: undefined;
                "size"?: undefined;
                "wrap"?: undefined;
            } | {
                "type": string;
                "text": string;
                "size": string;
                "wrap": boolean;
                "weight"?: undefined;
                "spacing"?: undefined;
                "isSubtle"?: undefined;
            })[];
        } | {
            "type": string;
            "width": number;
            "items": {
                "type": string;
                "url": string;
                "size": string;
            }[];
        })[];
    }[];
    "actions": {
        "type": string;
        "title": string;
        "url": string;
    }[];
};
export default _default;
