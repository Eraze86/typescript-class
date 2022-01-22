import { IDataService } from "./IDataService";

export class MockMovieService implements IDataService{
    getData() {
        throw new Error("Method not implemented.");
        return 'Mockdata från MockService';
    }

}