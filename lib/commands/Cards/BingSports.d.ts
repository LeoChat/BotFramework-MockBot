declare const _default: () => {
    "$schema": string;
    "type": string;
    "version": string;
    "speak": string;
    "body": ({
        "type": string;
        "text": string;
        "isSubtle": boolean;
        "selectAction"?: undefined;
        "items"?: undefined;
    } | {
        "type": string;
        "selectAction": {
            "type": string;
            "url": string;
            "title": string;
        };
        "items": {
            "type": string;
            "columns": ({
                "type": string;
                "size": string;
                "items": ({
                    "type": string;
                    "url": string;
                    "size": string;
                    "horizontalAlignment": string;
                    "selectAction": {
                        "type": string;
                        "url": string;
                        "title": string;
                    };
                    "text"?: undefined;
                    "weight"?: undefined;
                } | {
                    "type": string;
                    "text": string;
                    "horizontalAlignment": string;
                    "size": string;
                    "weight": string;
                    "url"?: undefined;
                    "selectAction"?: undefined;
                })[];
                "selectAction": {
                    "type": string;
                    "title": string;
                    "url": string;
                };
            } | {
                "type": string;
                "size": string;
                "items": ({
                    "type": string;
                    "text": string;
                    "horizontalAlignment": string;
                    "size"?: undefined;
                } | {
                    "type": string;
                    "text": string;
                    "size": string;
                    "horizontalAlignment": string;
                })[];
                "selectAction"?: undefined;
            } | {
                "type": string;
                "size": string;
                "items": ({
                    "type": string;
                    "url": string;
                    "size": string;
                    "horizontalAlignment": string;
                    "text"?: undefined;
                    "weight"?: undefined;
                } | {
                    "type": string;
                    "text": string;
                    "horizontalAlignment": string;
                    "size": string;
                    "weight": string;
                    "url"?: undefined;
                })[];
                "selectAction"?: undefined;
            })[];
        }[];
        "text"?: undefined;
        "isSubtle"?: undefined;
    })[];
};
export default _default;
