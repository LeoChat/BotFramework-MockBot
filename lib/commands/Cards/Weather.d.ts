declare const _default: () => {
    "$schema": string;
    "version": string;
    "type": string;
    "body": ({
        "type": string;
        "columns": ({
            "type": string;
            "items": {
                "type": string;
                "height": string;
                "text": string;
            }[];
            "width": string;
            "horizontalAlignment"?: undefined;
            "separator"?: undefined;
        } | {
            "type": string;
            "horizontalAlignment": string;
            "separator": boolean;
            "items": {
                "type": string;
                "horizontalAlignment": string;
                "height": string;
                "weight": string;
                "text": string;
            }[];
            "width": string;
        })[];
        "items"?: undefined;
        "spacing"?: undefined;
        "horizontalAlignment"?: undefined;
        "size"?: undefined;
        "weight"?: undefined;
        "text"?: undefined;
    } | {
        "type": string;
        "items": {
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
                "horizontalAlignment"?: undefined;
                "spacing"?: undefined;
                "height"?: undefined;
                "verticalContentAlignment"?: undefined;
            } | {
                "type": string;
                "horizontalAlignment": string;
                "spacing": string;
                "height": string;
                "verticalContentAlignment": string;
                "items": {
                    "type": string;
                    "size": string;
                    "weight": string;
                    "text": string;
                }[];
                "width": string;
            } | {
                "type": string;
                "verticalContentAlignment": string;
                "items": {
                    "type": string;
                    "text": string;
                }[];
                "width": string;
                "horizontalAlignment"?: undefined;
                "spacing"?: undefined;
                "height"?: undefined;
            })[];
        }[];
        "columns"?: undefined;
        "spacing"?: undefined;
        "horizontalAlignment"?: undefined;
        "size"?: undefined;
        "weight"?: undefined;
        "text"?: undefined;
    } | {
        "type": string;
        "items": ({
            "type": string;
            "weight": string;
            "text": string;
            "size"?: undefined;
            "spacing"?: undefined;
        } | {
            "type": string;
            "size": string;
            "weight": string;
            "text": string;
            "spacing"?: undefined;
        } | {
            "type": string;
            "spacing": string;
            "size": string;
            "weight": string;
            "text": string;
        })[];
        "columns"?: undefined;
        "spacing"?: undefined;
        "horizontalAlignment"?: undefined;
        "size"?: undefined;
        "weight"?: undefined;
        "text"?: undefined;
    } | {
        "type": string;
        "columns": {
            "type": string;
            "items": {
                "type": string;
                "horizontalAlignment": string;
                "text": string;
            }[];
            "width": string;
        }[];
        "items"?: undefined;
        "spacing"?: undefined;
        "horizontalAlignment"?: undefined;
        "size"?: undefined;
        "weight"?: undefined;
        "text"?: undefined;
    } | {
        "type": string;
        "columns": {
            "type": string;
            "items": {
                "type": string;
                "horizontalAlignment": string;
                "url": string;
                "size": string;
            }[];
            "width": string;
        }[];
        "items"?: undefined;
        "spacing"?: undefined;
        "horizontalAlignment"?: undefined;
        "size"?: undefined;
        "weight"?: undefined;
        "text"?: undefined;
    } | {
        "type": string;
        "spacing": string;
        "columns": {
            "type": string;
            "items": {
                "type": string;
                "horizontalAlignment": string;
                "weight": string;
                "text": string;
            }[];
            "width": string;
        }[];
        "items"?: undefined;
        "horizontalAlignment"?: undefined;
        "size"?: undefined;
        "weight"?: undefined;
        "text"?: undefined;
    } | {
        "type": string;
        "horizontalAlignment": string;
        "spacing": string;
        "columns": ({
            "type": string;
            "items": {
                "type": string;
                "horizontalAlignment": string;
                "size": string;
                "text": string;
            }[];
            "width": string;
        } | {
            "type": string;
            "items": {
                "type": string;
                "text": string;
            }[];
            "width": string;
        })[];
        "items"?: undefined;
        "size"?: undefined;
        "weight"?: undefined;
        "text"?: undefined;
    } | {
        "type": string;
        "size": string;
        "weight": string;
        "text": string;
        "columns"?: undefined;
        "items"?: undefined;
        "spacing"?: undefined;
        "horizontalAlignment"?: undefined;
    })[];
};
export default _default;
