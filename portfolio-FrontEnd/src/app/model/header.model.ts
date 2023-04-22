export class mHeader{
    id?: number;

    logo_arg_programa : string;
    title : string;

    constructor(logo_arg_programa: string,
                title: string){
        this.logo_arg_programa = logo_arg_programa;
        this.title = title;
    }
}