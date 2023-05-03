export class mProyecto{
    id?: number;

    picture: string;
    name: string;
    description: string;
    link: string;

    constructor(picture: string,
                name: string,
                description: string,
                link: string){
        this.picture = picture;
        this.name = name;
        this.description = description;
        this.link = link;
    }
}