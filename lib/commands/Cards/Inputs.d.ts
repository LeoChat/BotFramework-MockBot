declare const _default: () => {
    "$schema": string;
    "type": string;
    "version": string;
    "speak": string;
    "body": ({
        "type": string;
        "size": string;
        "weight": string;
        "text": string;
        "horizontalAlignment": string;
        "placeholder"?: undefined;
        "style"?: undefined;
        "maxLength"?: undefined;
        "id"?: undefined;
        "speak"?: undefined;
        "isMultiline"?: undefined;
        "min"?: undefined;
        "max"?: undefined;
        "value"?: undefined;
        "choices"?: undefined;
        "isMultiSelect"?: undefined;
        "title"?: undefined;
        "valueOn"?: undefined;
        "valueOff"?: undefined;
    } | {
        "type": string;
        "placeholder": string;
        "style": string;
        "maxLength": number;
        "id": string;
        "speak": string;
        "size"?: undefined;
        "weight"?: undefined;
        "text"?: undefined;
        "horizontalAlignment"?: undefined;
        "isMultiline"?: undefined;
        "min"?: undefined;
        "max"?: undefined;
        "value"?: undefined;
        "choices"?: undefined;
        "isMultiSelect"?: undefined;
        "title"?: undefined;
        "valueOn"?: undefined;
        "valueOff"?: undefined;
    } | {
        "type": string;
        "placeholder": string;
        "style": string;
        "isMultiline": boolean;
        "maxLength": number;
        "id": string;
        "speak": string;
        "size"?: undefined;
        "weight"?: undefined;
        "text"?: undefined;
        "horizontalAlignment"?: undefined;
        "min"?: undefined;
        "max"?: undefined;
        "value"?: undefined;
        "choices"?: undefined;
        "isMultiSelect"?: undefined;
        "title"?: undefined;
        "valueOn"?: undefined;
        "valueOff"?: undefined;
    } | {
        "type": string;
        "placeholder": string;
        "min": number;
        "max": number;
        "value": number;
        "id": string;
        "speak": string;
        "size"?: undefined;
        "weight"?: undefined;
        "text"?: undefined;
        "horizontalAlignment"?: undefined;
        "style"?: undefined;
        "maxLength"?: undefined;
        "isMultiline"?: undefined;
        "choices"?: undefined;
        "isMultiSelect"?: undefined;
        "title"?: undefined;
        "valueOn"?: undefined;
        "valueOff"?: undefined;
    } | {
        "type": string;
        "placeholder": string;
        "id": string;
        "speak": string;
        "size"?: undefined;
        "weight"?: undefined;
        "text"?: undefined;
        "horizontalAlignment"?: undefined;
        "style"?: undefined;
        "maxLength"?: undefined;
        "isMultiline"?: undefined;
        "min"?: undefined;
        "max"?: undefined;
        "value"?: undefined;
        "choices"?: undefined;
        "isMultiSelect"?: undefined;
        "title"?: undefined;
        "valueOn"?: undefined;
        "valueOff"?: undefined;
    } | {
        "type": string;
        "text": string;
        "size"?: undefined;
        "weight"?: undefined;
        "horizontalAlignment"?: undefined;
        "placeholder"?: undefined;
        "style"?: undefined;
        "maxLength"?: undefined;
        "id"?: undefined;
        "speak"?: undefined;
        "isMultiline"?: undefined;
        "min"?: undefined;
        "max"?: undefined;
        "value"?: undefined;
        "choices"?: undefined;
        "isMultiSelect"?: undefined;
        "title"?: undefined;
        "valueOn"?: undefined;
        "valueOff"?: undefined;
    } | {
        "type": string;
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
        "id": string;
        "size"?: undefined;
        "weight"?: undefined;
        "text"?: undefined;
        "horizontalAlignment"?: undefined;
        "placeholder"?: undefined;
        "maxLength"?: undefined;
        "speak"?: undefined;
        "isMultiline"?: undefined;
        "min"?: undefined;
        "max"?: undefined;
        "value"?: undefined;
        "isMultiSelect"?: undefined;
        "title"?: undefined;
        "valueOn"?: undefined;
        "valueOff"?: undefined;
    } | {
        "type": string;
        "choices": ({
            "title": string;
            "value": string;
            "isSelected": boolean;
        } | {
            "title": string;
            "value": string;
            "isSelected"?: undefined;
        })[];
        "id": string;
        "size"?: undefined;
        "weight"?: undefined;
        "text"?: undefined;
        "horizontalAlignment"?: undefined;
        "placeholder"?: undefined;
        "style"?: undefined;
        "maxLength"?: undefined;
        "speak"?: undefined;
        "isMultiline"?: undefined;
        "min"?: undefined;
        "max"?: undefined;
        "value"?: undefined;
        "isMultiSelect"?: undefined;
        "title"?: undefined;
        "valueOn"?: undefined;
        "valueOff"?: undefined;
    } | {
        "type": string;
        "isMultiSelect": boolean;
        "choices": ({
            "title": string;
            "value": string;
            "isSelected": boolean;
        } | {
            "title": string;
            "value": string;
            "isSelected"?: undefined;
        })[];
        "id": string;
        "size"?: undefined;
        "weight"?: undefined;
        "text"?: undefined;
        "horizontalAlignment"?: undefined;
        "placeholder"?: undefined;
        "style"?: undefined;
        "maxLength"?: undefined;
        "speak"?: undefined;
        "isMultiline"?: undefined;
        "min"?: undefined;
        "max"?: undefined;
        "value"?: undefined;
        "title"?: undefined;
        "valueOn"?: undefined;
        "valueOff"?: undefined;
    } | {
        "type": string;
        "title": string;
        "valueOn": string;
        "valueOff": string;
        "id": string;
        "speak": string;
        "size"?: undefined;
        "weight"?: undefined;
        "text"?: undefined;
        "horizontalAlignment"?: undefined;
        "placeholder"?: undefined;
        "style"?: undefined;
        "maxLength"?: undefined;
        "isMultiline"?: undefined;
        "min"?: undefined;
        "max"?: undefined;
        "value"?: undefined;
        "choices"?: undefined;
        "isMultiSelect"?: undefined;
    })[];
    "actions": ({
        "type": string;
        "url": string;
        "title": string;
        "data"?: undefined;
        "method"?: undefined;
        "body"?: undefined;
        "card"?: undefined;
    } | {
        "type": string;
        "data": {
            "id": string;
        };
        "title": string;
        "url"?: undefined;
        "method"?: undefined;
        "body"?: undefined;
        "card"?: undefined;
    } | {
        "type": string;
        "method": string;
        "url": string;
        "body": string;
        "title": string;
        "data"?: undefined;
        "card"?: undefined;
    } | {
        "type": string;
        "card": {
            "type": string;
            "body": ({
                "type": string;
                "isSubtle": boolean;
                "text": string;
                "columns"?: undefined;
                "placeholder"?: undefined;
                "style"?: undefined;
                "maxLength"?: undefined;
                "id"?: undefined;
            } | {
                "type": string;
                "columns": ({
                    "type": string;
                    "size": string;
                    "items": ({
                        "type": string;
                        "size": string;
                        "url": string;
                        "horizontalAlignment": string;
                        "weight"?: undefined;
                        "text"?: undefined;
                    } | {
                        "type": string;
                        "weight": string;
                        "text": string;
                        "horizontalAlignment": string;
                        "size"?: undefined;
                        "url"?: undefined;
                    })[];
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
                        "size": string;
                        "text": string;
                        "horizontalAlignment": string;
                    })[];
                })[];
                "isSubtle"?: undefined;
                "text"?: undefined;
                "placeholder"?: undefined;
                "style"?: undefined;
                "maxLength"?: undefined;
                "id"?: undefined;
            } | {
                "type": string;
                "placeholder": string;
                "style": string;
                "maxLength": number;
                "id": string;
                "isSubtle"?: undefined;
                "text"?: undefined;
                "columns"?: undefined;
            })[];
            "actions": {
                "type": string;
                "title": string;
            }[];
            "speak": string;
        };
        "title": string;
        "url"?: undefined;
        "data"?: undefined;
        "method"?: undefined;
        "body"?: undefined;
    })[];
};
export default _default;
