import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'fetchpersons',
    templateUrl: './fetchpersons.component.html'
})

export class FetchPersonsComponent {

    persons: PersonsInfo[] = [];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/SampleData/Persons').subscribe((result: any) => {
            this.persons = result.json() as PersonsInfo[];
        }, (error: any) => console.error(error));
    }

    
}

interface PersonsInfo{

    id: number;
    fName: string;
    lName: string;
}