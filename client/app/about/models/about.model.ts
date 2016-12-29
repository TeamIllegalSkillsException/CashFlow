export class AboutData {
    content: string;
    avatar: string;
    name: string;
    jobTitle: string;
    socialMedia: [{}];

    constructor(titles: string, content: string, avatar: string, name: string, jobTitle: string, socialMedia: [{}]) {
        this.content = content;
        this.avatar = avatar;
        this.name = name;
        this.jobTitle = jobTitle;
        this.socialMedia = socialMedia;
    }
}