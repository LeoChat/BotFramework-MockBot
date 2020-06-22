declare const _default: () => {
    "$schema": string;
    "type": string;
    "speak": string;
    "body": ({
        "type": string;
        "columns": ({
            "type": string;
            "size": string;
            "items": {
                "type": string;
                "size": string;
                "url": string;
            }[];
        } | {
            "type": string;
            "size": string;
            "items": ({
                "type": string;
                "text": string;
                "horizontalAlignment": string;
                "isSubtle": boolean;
                "size"?: undefined;
                "color"?: undefined;
            } | {
                "type": string;
                "text": string;
                "horizontalAlignment": string;
                "size": string;
                "color": string;
                "isSubtle"?: undefined;
            })[];
        })[];
        "separation"?: undefined;
    } | {
        "type": string;
        "separation": string;
        "columns": ({
            "type": string;
            "size": string;
            "items": ({
                "type": string;
                "text": string;
                "isSubtle": boolean;
            } | {
                "type": string;
                "text": string;
                "isSubtle"?: undefined;
            })[];
        } | {
            "type": string;
            "size": string;
            "items": ({
                "type": string;
                "text": string;
                "horizontalAlignment": string;
                "isSubtle": boolean;
            } | {
                "type": string;
                "text": string;
                "horizontalAlignment": string;
                "isSubtle"?: undefined;
            })[];
        })[];
    } | {
        "type": string;
        "separation": string;
        "columns": ({
            "type": string;
            "size": number;
            "items": ({
                "type": string;
                "text": string;
                "isSubtle": boolean;
            } | {
                "type": string;
                "text": string;
                "isSubtle"?: undefined;
            })[];
        } | {
            "type": string;
            "size": string;
            "items": ({
                "type": string;
                "text": string;
                "isSubtle": boolean;
                "horizontalAlignment": string;
                "color"?: undefined;
                "weight"?: undefined;
            } | {
                "type": string;
                "text": string;
                "color": string;
                "weight": string;
                "horizontalAlignment": string;
                "isSubtle"?: undefined;
            })[];
        } | {
            "type": string;
            "size": number;
            "items": ({
                "type": string;
                "text": string;
                "isSubtle": boolean;
                "horizontalAlignment": string;
                "color"?: undefined;
                "weight"?: undefined;
            } | {
                "type": string;
                "text": string;
                "color": string;
                "horizontalAlignment": string;
                "weight": string;
                "isSubtle"?: undefined;
            })[];
        })[];
    } | {
        "type": string;
        "separation": string;
        "columns": ({
            "type": string;
            "size": number;
            "items": ({
                "type": string;
                "text": string;
                "isSubtle": boolean;
                "size"?: undefined;
                "color"?: undefined;
            } | {
                "type": string;
                "text": string;
                "size": string;
                "color": string;
                "isSubtle"?: undefined;
            })[];
        } | {
            "type": string;
            "size": string;
            "items": ({
                "type": string;
                "text": string;
                "url"?: undefined;
                "size"?: undefined;
            } | {
                "type": string;
                "url": string;
                "size": string;
                "text"?: undefined;
            })[];
        } | {
            "type": string;
            "size": number;
            "items": ({
                "type": string;
                "text": string;
                "isSubtle": boolean;
                "horizontalAlignment": string;
                "size"?: undefined;
                "color"?: undefined;
            } | {
                "type": string;
                "text": string;
                "horizontalAlignment": string;
                "size": string;
                "color": string;
                "isSubtle"?: undefined;
            })[];
        })[];
    })[];
};
export default _default;
