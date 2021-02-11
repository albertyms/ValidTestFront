export interface Persons {
    name: string;
    lastName: string;
    processing: string;
}

export interface ResponsePersons {
    ok: boolean; 
    persons: Persons[]   
}

