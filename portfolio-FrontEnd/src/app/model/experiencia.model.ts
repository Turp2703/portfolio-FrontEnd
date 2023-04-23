export class mExperiencia{
    id?: number;

    logo: string;
    name: string;
    place: string;

    constructor(logo: string,
                name: string,
                place: string){
        this.logo = logo;
        this.name = name;
        this.place = place;
    }
}