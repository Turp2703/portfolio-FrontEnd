export class mEducacion{
    id?: number;

    picture: string;
    title: string;
    origin: string;
    year: string;

    constructor(picture: string,
                title: string,
                origin: string,
                year: string){
        this.picture = picture;
        this.title = title;
        this.origin = origin;
        this.year = year;
    }
}