export class SiteSettings {
    icon: string;
    key: string;
    keyValue: string;

    constructor(key: string, keyValue: string, icon: string) {
        this.key = key;
        this.keyValue = keyValue;
        this.icon = icon;
    }
};
