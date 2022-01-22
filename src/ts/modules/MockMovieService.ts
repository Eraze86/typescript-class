import { IDataService } from "./IDataService";

export class MockMovieService implements IDataService{
    title: string;
    age: number;
    poster: boolean;
     constructor(title: string, age:number, poster: boolean){
        this.title = title;
        this.age = age;
        this.poster = poster;
     }
    getData() {
       

        return 'Mockdata från MockService';
    }

}