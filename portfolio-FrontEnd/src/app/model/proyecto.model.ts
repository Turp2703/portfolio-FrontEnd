export class mProyecto{
    id?: number;

    picture: string;
    name: string;
    description: string;

    constructor(picture: string,
                name: string,
                description: string){
        this.picture = picture;
        this.name = name;
        this.description = description;
    }
}