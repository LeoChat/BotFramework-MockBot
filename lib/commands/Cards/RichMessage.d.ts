declare const _default: () => {
    "$schema": string;
    "version": string;
    "type": string;
    "body": ({
        "type": string;
        "items": ({
            "type": string;
            "size": string;
            "weight": string;
            "text": string;
            "columns"?: undefined;
        } | {
            "type": string;
            "columns": ({
                "type": string;
                "items": {
                    "type": string;
                    "style": string;
                    "url": string;
                    "size": string;
                }[];
                "width": string;
            } | {
                "type": string;
                "items": ({
                    "type": string;
                    "weight": string;
                    "text": string;
                    "wrap": boolean;
                    "spacing"?: undefined;
                    "isSubtle"?: undefined;
                } | {
                    "type": string;
                    "spacing": string;
                    "text": string;
                    "isSubtle": boolean;
                    "wrap": boolean;
                    "weight"?: undefined;
                })[];
                "width": string;
            })[];
            "size"?: undefined;
            "weight"?: undefined;
            "text"?: undefined;
        })[];
    } | {
        "type": string;
        "items": ({
            "type": string;
            "text": string;
            "wrap": boolean;
            "facts"?: undefined;
        } | {
            "type": string;
            "facts": {
                "title": string;
                "value": string;
            }[];
            "text"?: undefined;
            "wrap"?: undefined;
        })[];
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
        "card": {
            "type": string;
            "style": string;
            "$schema": string;
            "body"?: undefined;
            "actions"?: undefined;
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
