export class mProfile{
    id?: number;

    background : string;
    info_picture : string;
    info_name : string;
    info_situation : string;
    info_location : string;
    logo_uns : string;
    

    constructor(background: string,
                info_picture: string,
                info_name: string,
                info_situation: string,
                info_location: string,
                logo_uns: string){
        this.background = background;
        this.info_picture = info_picture;
        this.info_name = info_name;
        this.info_situation = info_situation;
        this.info_location = info_location;
        this.logo_uns = logo_uns;
    }
}