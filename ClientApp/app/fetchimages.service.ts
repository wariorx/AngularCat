import { Injectable } from '@angular/core';
import { Observable, AsyncSubject} from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';

@Injectable()
export class FetchImagesService {

    json: ImageData[] = [{ id: 0, src: 'potato' }, { id: 1, src: 'potato' }, { id: 2, src: 'potato' }];

    constructor(private http: Http) { }

    /*
    private supportGetJson(http: Http,  baseUrl: string): Observable<ImageData[]> {
        http.get(baseUrl + 'api/SampleData/ImageData').subscribe(result => {
            this.json = result.json() as ImageData[];
        }, error => console.error(error));

        return of(this.json);
    } 
    */
    public getJson(baseUrl: string, response: AsyncSubject<ImageData[]>): any {

        //return http.get(baseUrl + 'api/SampleData/ImageData');
        this.http.get(baseUrl + 'api/SampleData/ImageData').subscribe((result: any) => {
            this.json = result.json() as ImageData[];
            response.next(this.json);
            response.complete();
            console.log("HIHIH");
            return of(this.json);
        }, (error: any) => console.error("NOTHING HERE") );
        

    } 

} 

export interface ImageData {

    id: number;
    src: string;

}