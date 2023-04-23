export class mEducacion{
    id?: number;

    picture: string;
    title: string;
    origin: string;

    constructor(picture: string,
                title: string,
                origin: string){
        this.picture = picture;
        this.title = title;
        this.origin = origin;
    }
}