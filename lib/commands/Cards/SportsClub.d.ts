declare const _default: () => {
    "backgroundImage": string;
    "body": ({
        "items": {
            "columns": {
                "backgroundImage": string;
                "items": {
                    "columns": ({
                        "items": {
                            "height": string;
                            "horizontalAlignment": string;
                            "type": string;
                            "url": string;
                            "width": string;
                        }[];
                        "type": string;
                        "width": string;
                        "verticalContentAlignment"?: undefined;
                    } | {
                        "items": {
                            "color": string;
                            "separation": string;
                            "size": string;
                            "spacing": string;
                            "text": string;
                            "type": string;
                            "weight": string;
                        }[];
                        "type": string;
                        "verticalContentAlignment": string;
                        "width": string;
                    })[];
                    "type": string;
                }[];
                "type": string;
                "width": string;
            }[];
            "type": string;
        }[];
        "type": string;
        "separator"?: undefined;
    } | {
        "items": ({
            "color": string;
            "separation": string;
            "size": string;
            "spacing": string;
            "text": string;
            "type": string;
            "weight": string;
            "id"?: undefined;
            "wrap"?: undefined;
        } | {
            "color": string;
            "id": string;
            "separation": string;
            "spacing": string;
            "text": string;
            "type": string;
            "size"?: undefined;
            "weight"?: undefined;
            "wrap"?: undefined;
        } | {
            "color": string;
            "id": string;
            "separation": string;
            "spacing": string;
            "text": string;
            "type": string;
            "wrap": boolean;
            "size"?: undefined;
            "weight"?: undefined;
        })[];
        "type": string;
        "separator"?: undefined;
    } | {
        "items": {
            "height": string;
            "horizontalAlignment": string;
            "type": string;
            "url": string;
            "width": string;
        }[];
        "separator": boolean;
        "type": string;
    } | {
        "items": {
            "columns": ({
                "items": {
                    "color": string;
                    "horizontalAlignment": string;
                    "size": string;
                    "text": string;
                    "type": string;
                }[];
                "style": string;
                "type": string;
                "verticalContentAlignment": string;
                "width": string;
            } | {
                "items": ({
                    "text": string;
                    "type": string;
                    "color"?: undefined;
                } | {
                    "color": string;
                    "text": string;
                    "type": string;
                })[];
                "type": string;
                "verticalContentAlignment": string;
                "width": string;
                "style"?: undefined;
            })[];
            "separator": boolean;
            "type": string;
        }[];
        "separator": boolean;
        "type": string;
    } | {
        "items": {
            "color": string;
            "horizontalAlignment": string;
            "size": string;
            "text": string;
            "type": string;
        }[];
        "separator": boolean;
        "type": string;
    })[];
    "id": string;
    "speak": string;
    "type": string;
    "version": string;
};
export default _default;
