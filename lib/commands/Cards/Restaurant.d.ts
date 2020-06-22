declare const _default: () => {
    "$schema": string;
    "version": string;
    "type": string;
    "body": ({
        "type": string;
        "items": ({
            "type": string;
            "url": string;
            "items"?: undefined;
        } | {
            "type": string;
            "items": ({
                "type": string;
                "size": string;
                "weight": string;
                "text": string;
                "columns"?: undefined;
            } | {
                "type": string;
                "columns": {
                    "type": string;
                    "items": {
                        "type": string;
                        "weight": string;
                        "text": string;
                    }[];
                    "width": string;
                }[];
                "size"?: undefined;
                "weight"?: undefined;
                "text"?: undefined;
            })[];
            "url"?: undefined;
        })[];
        "size"?: undefined;
        "weight"?: undefined;
        "text"?: undefined;
        "spacing"?: undefined;
    } | {
        "type": string;
        "size": string;
        "weight": string;
        "text": string;
        "items"?: undefined;
        "spacing"?: undefined;
    } | {
        "type": string;
        "text": string;
        "items"?: undefined;
        "size"?: undefined;
        "weight"?: undefined;
        "spacing"?: undefined;
    } | {
        "type": string;
        "spacing": string;
        "text": string;
        "items"?: undefined;
        "size"?: undefined;
        "weight"?: undefined;
    })[];
    "actions": ({
        "type": string;
        "title": string;
        "card": {
            "type": string;
            "style": string;
            "body": ({
                "type": string;
                "id": string;
                "placeholder"?: undefined;
                "isMultiline"?: undefined;
            } | {
                "type": string;
                "id": string;
                "placeholder": string;
                "isMultiline": boolean;
            })[];
            "actions": {
                "type": string;
                "title": string;
                "url": string;
            }[];
            "$schema": string;
        };
        "url"?: undefined;
    } | {
        "type": string;
        "title": string;
        "url": string;
        "card"?: undefined;
    })[];
};
export default _default;
