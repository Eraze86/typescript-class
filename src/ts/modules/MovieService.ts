import { IDataService } from "./IDataService";


export class MovieService implements IDataService{
    getData() {
        throw new Error("Method not implemented.");
        return "Data från MovieService"
    }

}