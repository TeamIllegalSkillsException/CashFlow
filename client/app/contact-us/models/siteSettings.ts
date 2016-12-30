export class SiteSettings {
    icon: string;
    key: string;
    title: string;
    keyValue: string;

    constructor(key: string, keyValue: string, title: string, icon: string) {
        this.key = key;
        this.keyValue = keyValue;
        this.title = title;
        this.icon = icon;
    }
};
