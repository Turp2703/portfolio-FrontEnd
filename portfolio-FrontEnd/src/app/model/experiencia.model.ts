export class mExperiencia{
    id?: number;

    logo: string;
    name: string;
    place: string;
    periodStart: string;
    periodEnd: string;

    constructor(logo: string,
                name: string,
                place: string,
                periodStart: string,
                periodEnd: string){
        this.logo = logo;
        this.name = name;
        this.place = place;
        this.periodStart = periodStart;
        this.periodEnd = periodEnd;
    }
}