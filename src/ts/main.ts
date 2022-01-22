import { IDataService } from "./modules/IDataService";
import { Movie } from "./modules/movie";
import { MovieService } from "./modules/MovieService";

window.onload = function(){
    let main = new Main()
    let service = new MovieService()
    main.start(service);
   
}

class Main{
    start(service: IDataService){
        let p = new Movie("Hajen", 13, true)
    console.log(p)
    console.log(service.getData())
    }
}  
    




  

