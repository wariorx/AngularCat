import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { FetchImagesService, ImageData } from '../../fetchimages.service';
import { AsyncSubject } from 'rxjs';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html',
    providers: [FetchImagesService]
})
export class FetchDataComponent {
    /*
    public forecasts: WeatherForecast[] = [];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe((result: any) => {
            this.forecasts = result.json() as WeatherForecast[];
        }, (error: any) => console.error(error));
    }
    */

    private response = new AsyncSubject<ImageData[]>();

    constructor(private imageService: FetchImagesService, @Inject('BASE_URL') baseUrl: string) {

        this.imageService.getJson(baseUrl, this.response);

        this.response.subscribe((result: ImageData[]) => {
            this.images = result
        }, (error: any) => console.error(error));


    }

    public images: ImageData[] = [{ id: 20, src: 'potato' }, { id: 21, src: 'potato' }, { id: 22, src: 'potato' }];

    public getImages() : AsyncSubject<ImageData[]>{
        return this.response;
    }
}

/*
interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
*/