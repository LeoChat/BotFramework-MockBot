declare const _default: () => {
    $schema: string;
    type: string;
    version: string;
    speak: string;
    body: ({
        type: string;
        text: string;
        size: string;
        weight: string;
        "isSubtle"?: undefined;
        "spacing"?: undefined;
    } | {
        type: string;
        text: string;
        isSubtle: boolean;
        "size"?: undefined;
        "weight"?: undefined;
        "spacing"?: undefined;
    } | {
        type: string;
        text: string;
        isSubtle: boolean;
        spacing: string;
        "size"?: undefined;
        "weight"?: undefined;
    })[];
    actions: {
        data: string;
        type: string;
        title: string;
    }[];
};
export default _default;
