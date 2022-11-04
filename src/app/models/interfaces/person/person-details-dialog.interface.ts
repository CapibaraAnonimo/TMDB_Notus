import { PersonDetailsResponse } from "./person-details.interface";
import { KnownFor } from "./person.interface";

export interface DialogDataPerson {
    personInfo: PersonDetailsResponse;
    movies: KnownFor[];
}