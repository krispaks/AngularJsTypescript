export interface IHobby{
    name: string;
    detail: string;
}

export class Hobby implements IHobby {
    name: string;
    detail: string;
    constructor(name: string, detail: string){
        this.name = name;
        this.detail = detail;
    }
}