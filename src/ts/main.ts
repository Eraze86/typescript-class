import { IDataService } from "./modules/IDataService";
import { MockMovieService } from "./modules/MockMovieService";
import { Movie } from "./modules/movie";
import { MovieService } from "./modules/MovieService";

window.onload = function(){
    let main = new Main()
    let service = new MockMovieService("mamma mia", 7, true)
    let service2 = new MovieService("the rock", 16, false)
    main.start(service, service2);
   
}

class Main{
    start(service: IDataService, service2:IDataService){
        let p = new Movie("Hajen", 13, true)
    console.log(p)
    console.log(service.getData())
    console.log(service2.getData())
    }
}  
    




  

