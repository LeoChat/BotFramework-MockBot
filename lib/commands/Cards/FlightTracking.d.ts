declare const _default: () => {
    "$schema": string;
    "version": string;
    "type": string;
    "body": ({
        "type": string;
        "items": {
            "type": string;
            "items": ({
                "type": string;
                "columns": ({
                    "type": string;
                    "items": {
                        "type": string;
                        "size": string;
                        "text": string;
                    }[];
                    "width": string;
                } | {
                    "type": string;
                    "items": {
                        "type": string;
                        "url": string;
                        "size": string;
                    }[];
                    "width": string;
                })[];
                "weight"?: undefined;
                "text"?: undefined;
                "size"?: undefined;
            } | {
                "type": string;
                "weight": string;
                "text": string;
                "columns"?: undefined;
                "size"?: undefined;
            } | {
                "type": string;
                "size": string;
                "weight": string;
                "text": string;
                "columns"?: undefined;
            })[];
        }[];
        "spacing"?: undefined;
    } | {
        "type": string;
        "spacing": string;
        "items": ({
            "type": string;
            "weight": string;
            "color": string;
            "text": string;
            "spacing"?: undefined;
        } | {
            "type": string;
            "spacing": string;
            "text": string;
            "weight"?: undefined;
            "color"?: undefined;
        })[];
    } | {
        "type": string;
        "spacing": string;
        "items": ({
            "type": string;
            "columns": ({
                "type": string;
                "items": {
                    "type": string;
                    "weight": string;
                    "text": string;
                }[];
                "width": string;
                "spacing"?: undefined;
            } | {
                "type": string;
                "spacing": string;
                "items": {
                    "type": string;
                    "text": string;
                }[];
                "width": string;
            })[];
            "spacing"?: undefined;
        } | {
            "type": string;
            "columns": ({
                "type": string;
                "items": {
                    "type": string;
                    "size": string;
                    "weight": string;
                    "text": string;
                }[];
                "width": string;
            } | {
                "type": string;
                "items": {
                    "type": string;
                    "weight": string;
                    "text": string;
                }[];
                "width": string;
            })[];
            "spacing"?: undefined;
        } | {
            "type": string;
            "spacing": string;
            "columns": ({
                "type": string;
                "items": {
                    "type": string;
                    "size": string;
                    "weight": string;
                    "color": string;
                    "text": string;
                }[];
                "width": string;
            } | {
                "type": string;
                "items": {
                    "type": string;
                    "size": string;
                    "weight": string;
                    "text": string;
                }[];
                "width": string;
            })[];
        })[];
    })[];
};
export default _default;
